import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const clientSource = readFileSync(join(here, '..', 'client.js'), 'utf8');
const fixture = JSON.parse(readFileSync(join(here, 'fixtures.json'), 'utf8'));

globalThis.window = { __ModuleLoader__: { load(definition) { globalThis.__mprDefinition = definition; } } };
await import('../client.js');

const ReactStub = {
  Fragment: Symbol('Fragment'),
  createElement() {},
  useState() {},
  useEffect() {},
  useMemo() {},
  useId() { return 'id'; },
};
const definition = globalThis.__mprDefinition;
assert.ok(definition, 'client module should register with the module loader');
assert.equal(definition.id, '@local/model-price-radar');
const api = definition.factory((name) => {
  if (name === 'react') return ReactStub;
  throw new Error('unexpected require: ' + name);
}).__test;
assert.ok(api, 'test helpers should be exposed');

const byId = new Map(fixture.data.map((raw) => [raw.id, api.parseModel(raw)]));
const deepseek = byId.get('deepseek/deepseek-v4.1-flash-1017');
const tencent = byId.get('tencent/hy4-preview');
const terra = byId.get('openai/gpt-6.1-terra');
const batch = byId.get('openai/gpt-6.1-terra:batch');
const router = byId.get('openrouter/auto');

assert.equal(api.hhmmToMinutes(100), 60);
assert.equal(api.hhmmToMinutes(1600), 960);
assert.equal(deepseek.hasTimePricing, true);
assert.equal(deepseek.contextLength, 1048576);
assert.equal(tencent.hasTimePricing, true);
assert.equal(terra.hasTimePricing, false);
assert.equal(terra.hasTierPricing, true);
assert.equal(batch.isBatch, true);
assert.equal(router.rankable, false, 'negative-price routers must not enter cost rankings');

const fridayPeak = new Date('2026-10-30T07:12:00Z');
const fridayEvening = new Date('2026-10-30T10:30:00Z');
const saturday = new Date('2026-10-31T07:12:00Z');
const peakPrice = api.priceAt(deepseek, fridayPeak, 8000);
assert.equal(peakPrice.input, 0.0000003);
assert.equal(peakPrice.output, 0.0000012);
assert.equal(api.bandAt(deepseek, fridayPeak, 8000), 'peak');
const offpeakPrice = api.priceAt(deepseek, saturday, 8000);
assert.equal(offpeakPrice.input, 0.00000015);
assert.equal(offpeakPrice.output, 0.0000006);
assert.equal(api.bandAt(deepseek, saturday, 8000), 'offpeak');

const nextFromPeak = api.nextChange(deepseek, fridayPeak, 8000);
assert.ok(nextFromPeak);
assert.equal(nextFromPeak.toISOString(), '2026-10-30T10:00:00.000Z');
const nextFromEvening = api.nextChange(deepseek, fridayEvening, 8000);
assert.ok(nextFromEvening);
assert.equal(nextFromEvening.toISOString(), '2026-11-02T01:00:00.000Z');

const segments = api.buildSegments(deepseek, fridayPeak, 8000);
assert.equal(segments.length, 5);
assert.deepEqual(segments.map((segment) => [segment.startMin, segment.endMin]), [
  [0, 540],
  [540, 720],
  [720, 840],
  [840, 1080],
  [1080, 1440],
]);
assert.equal(segments[1].band, 'peak');
const bars = api.buildBars(deepseek, fridayPeak, 8000);
assert.equal(bars.length, 24);
assert.equal(bars[15].current, true);
assert.equal(bars[15].band, 'peak');

const lowTier = api.priceAt(terra, fridayPeak, 8000);
const highTier = api.priceAt(terra, fridayPeak, 300000);
assert.equal(lowTier.input, 0.000001);
assert.equal(highTier.input, 0.000002);

const params = { inputTokens: 8000, outputTokens: 1500, requestsPerDay: 1000, cacheRate: 0.3 };
const cost = api.estimateCost(peakPrice, params);
assert.ok(Math.abs(cost - 3.4944) < 1e-9, 'expected 8M input / 1.5M output cost, got ' + cost);

const tencentPeak = api.priceAt(tencent, new Date('2026-10-30T15:00:00Z'), 4000);
const tencentDiscount = api.priceAt(tencent, new Date('2026-10-30T17:00:00Z'), 4000);
assert.equal(tencentPeak.input, 0.000000834);
assert.equal(tencentDiscount.input, 0.0000007506);
assert.equal(api.bandAt(tencent, new Date('2026-10-30T17:00:00Z'), 4000), 'offpeak');
assert.equal(api.nextChange(tencent, new Date('2026-10-30T15:00:00Z'), 4000).toISOString(), '2026-10-30T16:00:00.000Z');

assert.equal(api.formatUnitPrice(0.3), '$0.30');
assert.equal(api.formatUnitPrice(0.0457), '$0.046');
assert.equal(api.formatUnitPrice(0.006), '$0.006');
assert.equal(api.formatUnitPrice(1234), '$1,234');
assert.equal(api.providerApi(deepseek).url, 'https://platform.deepseek.com/');
assert.equal(api.providerApi({ providerId: 'unknown-provider' }).url, 'https://openrouter.ai/sign-up');
assert.equal(api.nextVisibleCount(20, 357), 40);
assert.equal(api.nextVisibleCount(340, 357), 357);
assert.equal(api.nextVisibleCount(0, 7), 7);
assert.equal(api.manufacturerOf(deepseek, 'zh-CN'), '深度求索（DeepSeek）');
assert.ok(api.inferStrengths(deepseek).includes('longContext'));

const zhKeys = Object.keys(api.LOCALES.zh).sort();
const enKeys = Object.keys(api.LOCALES.en).sort();
assert.deepEqual(zhKeys, enKeys, 'zh and en dictionaries must have identical keys');

const usedKeys = new Set();
for (const match of clientSource.matchAll(/\bt\('([^']+)'\)/g)) usedKeys.add(match[1]);
for (const match of clientSource.matchAll(/'(band(?:Peak|Offpeak|Standard|Free))'/g)) usedKeys.add(match[1]);
for (const key of ['connecting', 'live', 'offline', 'refreshing']) usedKeys.add(key);
const missing = [...usedKeys].filter((key) => !Object.prototype.hasOwnProperty.call(api.LOCALES.zh, key));
assert.deepEqual(missing, [], 'every rendered locale key must exist: ' + missing.join(', '));
console.log('pricing tests passed:', {
  models: fixture.data.length,
  segments: segments.length,
  peakDailyCost: cost.toFixed(4),
  nextFromPeak: nextFromPeak.toISOString(),
});
