import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const fixture = JSON.parse(readFileSync(join(here, 'fixtures.json'), 'utf8'));
const NOW = new Date('2026-10-30T07:17:00Z');

globalThis.window = { __ModuleLoader__: { load(definition) { globalThis.__mprDefinition = definition; } } };
await import('../client.js');

let hookIndex = 0;
let idCounter = 0;
const seed = new Map();
const ReactStub = {
  Fragment: Symbol('Fragment'),
  createElement(type, props, ...children) {
    return { type, props: props || {}, children };
  },
  useState(initial) {
    const index = hookIndex++;
    const value = seed.has(index)
      ? seed.get(index)
      : typeof initial === 'function'
        ? initial()
        : initial;
    return [value, () => {}];
  },
  useEffect() {},
  useMemo(factory) { return factory(); },
  useId() { return 'mpr-test-' + (idCounter++); },
};

const definition = globalThis.__mprDefinition;
const api = definition.factory((name) => {
  if (name === 'react') return ReactStub;
  throw new Error('unexpected require: ' + name);
}).__test;
const parsed = fixture.data.map((raw) => api.parseModel(raw)).filter(Boolean);

seed.set(0, { active: 'zh', locales: [], revision: 1 });
seed.set(1, NOW);
seed.set(2, parsed);
seed.set(3, 'ready');
seed.set(5, NOW);
seed.set(11, 'deepseek/deepseek-v4.1-flash-1017');
hookIndex = 0;

const t = (key) => key;
const ctx = {
  locale: {
    getLocale: () => ({ active: 'zh', locales: [], revision: 1 }),
    subscribe: () => () => {},
  },
};

const tree = api.PriceRadarPanel({ ctx, t });
assert.equal(tree.type, ReactStub.Fragment);
const page = tree.children.find((child) => child && child.props && child.props.className === 'mpr-page');
assert.ok(page, 'panel must render a .mpr-page container');
const style = tree.children.find((child) => child && child.type === 'style');
assert.ok(style && style.children[0].includes('.mpr-page'), 'panel-local style tag must be present');


function collectText(node, out = []) {
  if (!node || typeof node !== 'object') {
    if (typeof node === 'string') out.push(node);
    return out;
  }
  for (const child of node.children || []) {
    if (Array.isArray(child)) {
      for (const item of child) collectText(item, out);
    } else {
      collectText(child, out);
    }
  }
  return out;
}


function findByClass(node, className) {
  if (!node || typeof node !== 'object') return null;
  if (node.props && typeof node.props.className === 'string' &&
    node.props.className.split(/\s+/).includes(className)) return node;
  for (const child of node.children || []) {
    if (Array.isArray(child)) {
      for (const item of child) {
        const found = findByClass(item, className);
        if (found) return found;
      }
    } else {
      const found = findByClass(child, className);
      if (found) return found;
    }
  }
  return null;
}

function countByClass(node, className) {
  if (!node || typeof node !== 'object') return 0;
  let count = node.props && typeof node.props.className === 'string' &&
    node.props.className.split(/\s+/).includes(className) ? 1 : 0;
  for (const child of node.children || []) {
    if (Array.isArray(child)) {
      for (const item of child) count += countByClass(item, className);
    } else {
      count += countByClass(child, className);
    }
  }
  return count;
}
assert.equal(countByClass(tree, 'mpr-bar-col'), 24, 'chart must render 24 hourly bars');
assert.ok(countByClass(page, 'mpr-row') >= 1, 'ranking must render rows');
assert.equal(countByClass(page, 'mpr-page'), 1);
assert.equal(countByClass(tree, 'mpr-segment'), 5, 'DeepSeek should show five local-time segments');
assert.equal(countByClass(tree, 'mpr-detail-modal'), 1, 'clicking a model opens the detail dialog');
const apiLink = findByClass(tree, 'mpr-api-link');
assert.ok(apiLink, 'detail modal must expose a provider API entry');
assert.equal(apiLink.props.href, 'https://platform.deepseek.com/');
assert.equal(apiLink.props.target, '_blank');
const tableWrap = findByClass(page, 'mpr-table-wrap');
assert.ok(tableWrap, 'ranking must have a scroll container');
assert.equal(typeof tableWrap.props.onScroll, 'function', 'ranking scroll must auto-load more rows');
assert.equal(countByClass(tree, 'mpr-estimate-modal'), 0, 'estimate dialog is closed by default');
const detailText = collectText(tree);
assert.ok(detailText.includes('深度求索（DeepSeek）'), 'detail dialog should show the manufacturer');
for (const key of ['currentPrice', 'basePrice', 'cacheRead', 'timeTitle', 'todaySchedule', 'manufacturer', 'strengths', 'strLongContext']) {
  assert.ok(detailText.includes(key), 'detail dialog should show ' + key);
}
console.log('render smoke test passed:', {
  rows: countByClass(page, 'mpr-row'),
  bars: countByClass(tree, 'mpr-bar-col'),
  segments: countByClass(tree, 'mpr-segment'),
  detailModal: countByClass(tree, 'mpr-detail-modal'),
});

seed.delete(11);
seed.set(12, true);
hookIndex = 0;
const estimateTree = api.PriceRadarPanel({ ctx, t });
assert.equal(countByClass(estimateTree, 'mpr-estimate-modal'), 1, 'estimate dialog must render');
assert.equal(countByClass(estimateTree, 'mpr-detail-modal'), 0, 'detail dialog stays closed');
console.log('estimate modal smoke test passed');

const rawBase = fixture.data.find((item) => item.id === 'deepseek/deepseek-v4.1-flash-1017');
const manyModels = Array.from({ length: 60 }, (_, index) => api.parseModel({
  ...rawBase,
  id: 'deepseek/test-model-' + index,
  name: 'DeepSeek: Test Model ' + index,
}));
seed.set(2, manyModels);
seed.delete(11);
seed.set(12, false);
hookIndex = 0;
const manyTree = api.PriceRadarPanel({ ctx, t });
const manyPage = manyTree.children.find((child) => child && child.props && child.props.className === 'mpr-page');
assert.equal(countByClass(manyPage, 'mpr-row'), 20, 'ranking should initially render one page');
assert.ok(findByClass(manyPage, 'mpr-table-foot'), 'ranking should expose the auto-load footer');
console.log('pagination render test passed');
