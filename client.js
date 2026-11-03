window.__ModuleLoader__.load({
  id: '@local/model-price-radar',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'model-price-radar';
    const API_URL = 'https://openrouter.ai/api/v1/models';
    const SOURCE_URL = 'https://openrouter.ai/models';
    const OPENROUTER_SIGNUP = 'https://openrouter.ai/sign-up';
    const PAGE_SIZE = 20;
    const INITIAL_VISIBLE = 20;
    const PROVIDER_APIS = {
      deepseek: { name: 'DeepSeek', url: 'https://platform.deepseek.com/' },
      openai: { name: 'OpenAI', url: 'https://platform.openai.com/' },
      anthropic: { name: 'Anthropic', url: 'https://console.anthropic.com/' },
      google: { name: 'Google AI Studio', url: 'https://aistudio.google.com/' },
      qwen: { name: 'Alibaba Cloud', url: 'https://bailian.console.aliyun.com/' },
      'x-ai': { name: 'xAI', url: 'https://console.x.ai/' },
      mistralai: { name: 'Mistral', url: 'https://console.mistral.ai/' },
      moonshotai: { name: 'Moonshot', url: 'https://platform.moonshot.cn/' },
      'z-ai': { name: 'Zhipu', url: 'https://open.bigmodel.cn/' },
      minimax: { name: 'MiniMax', url: 'https://platform.minimaxi.com/' },
      cohere: { name: 'Cohere', url: 'https://dashboard.cohere.com/' },
      nvidia: { name: 'NVIDIA', url: 'https://build.nvidia.com/' },
      amazon: { name: 'Amazon Bedrock', url: 'https://console.aws.amazon.com/bedrock/' },
      'bytedance-seed': { name: 'Volcengine Ark', url: 'https://console.volcengine.com/ark/' },
      tencent: { name: 'Tencent Hunyuan', url: 'https://console.cloud.tencent.com/hunyuan/' },
      stepfun: { name: 'StepFun', url: 'https://platform.stepfun.com/' },
      meta: { name: 'Llama API', url: 'https://llama.developer.meta.com/' },
      'meta-llama': { name: 'Llama API', url: 'https://llama.developer.meta.com/' },
      perplexity: { name: 'Perplexity', url: 'https://www.perplexity.ai/settings/api' },
      groq: { name: 'Groq', url: 'https://console.groq.com/' },
      cerebras: { name: 'Cerebras', url: 'https://cloud.cerebras.ai/' },
      sambanova: { name: 'SambaNova', url: 'https://cloud.sambanova.ai/' },
      ai21: { name: 'AI21', url: 'https://studio.ai21.com/' },
      upstage: { name: 'Upstage', url: 'https://console.upstage.ai/' },
      openrouter: { name: 'OpenRouter', url: 'https://openrouter.ai/' },
    };
    const MANUFACTURERS = {
      deepseek: { zh: '深度求索（DeepSeek）', en: 'DeepSeek' },
      openai: { zh: 'OpenAI', en: 'OpenAI' },
      anthropic: { zh: 'Anthropic', en: 'Anthropic' },
      google: { zh: 'Google DeepMind', en: 'Google DeepMind' },
      qwen: { zh: '阿里云（Alibaba Cloud）', en: 'Alibaba Cloud' },
      'x-ai': { zh: 'xAI', en: 'xAI' },
      mistralai: { zh: 'Mistral AI', en: 'Mistral AI' },
      moonshotai: { zh: '月之暗面（Moonshot AI）', en: 'Moonshot AI' },
      'z-ai': { zh: '智谱 AI（Zhipu）', en: 'Zhipu AI' },
      minimax: { zh: 'MiniMax（稀宇科技）', en: 'MiniMax' },
      cohere: { zh: 'Cohere', en: 'Cohere' },
      nvidia: { zh: 'NVIDIA', en: 'NVIDIA' },
      amazon: { zh: 'Amazon', en: 'Amazon' },
      'bytedance-seed': { zh: '字节跳动（ByteDance）', en: 'ByteDance' },
      tencent: { zh: '腾讯（Tencent）', en: 'Tencent' },
      stepfun: { zh: '阶跃星辰（StepFun）', en: 'StepFun' },
      meta: { zh: 'Meta', en: 'Meta' },
      'meta-llama': { zh: 'Meta', en: 'Meta' },
      perplexity: { zh: 'Perplexity', en: 'Perplexity' },
      groq: { zh: 'Groq', en: 'Groq' },
      cerebras: { zh: 'Cerebras', en: 'Cerebras' },
      sambanova: { zh: 'SambaNova', en: 'SambaNova' },
      ai21: { zh: 'AI21 Labs', en: 'AI21 Labs' },
      upstage: { zh: 'Upstage', en: 'Upstage' },
      microsoft: { zh: '微软（Microsoft）', en: 'Microsoft' },
      inclusionai: { zh: '蚂蚁集团（Ant Group）', en: 'Ant Group' },
      xiaomi: { zh: '小米（Xiaomi）', en: 'Xiaomi' },
      thinkingmachines: { zh: 'Thinking Machines', en: 'Thinking Machines' },
      liquid: { zh: 'Liquid AI', en: 'Liquid AI' },
      sakana: { zh: 'Sakana AI', en: 'Sakana AI' },
      poolside: { zh: 'Poolside', en: 'Poolside' },
      inception: { zh: 'Inception', en: 'Inception' },
      'aion-labs': { zh: 'Aion Labs', en: 'Aion Labs' },
      'particle-ai': { zh: 'Particle AI', en: 'Particle AI' },
      scaledown: { zh: 'ScaleDown', en: 'ScaleDown' },
      'nex-agi': { zh: 'Nex AGI', en: 'Nex AGI' },
      sao10k: { zh: 'Sao10K', en: 'Sao10K' },
      openrouter: { zh: 'OpenRouter', en: 'OpenRouter' },
    };
    const STRENGTH_KEY = {
      coding: 'strCoding',
      reasoning: 'strReasoning',
      agents: 'strAgents',
      vision: 'strVision',
      longContext: 'strLongContext',
      multilingual: 'strMultilingual',
      creative: 'strCreative',
      fast: 'strFast',
      value: 'strValue',
      math: 'strMath',
      image: 'strImage',
      audio: 'strAudio',
      general: 'strGeneral',
    };
    const REFRESH_MS = 120000;
    const PRICE_FIELDS = ['prompt', 'completion', 'input_cache_read', 'input_cache_write'];
    const UTC_DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const BAND_KEY = {
      peak: 'bandPeak',
      offpeak: 'bandOffpeak',
      standard: 'bandStandard',
      free: 'bandFree',
    };
    const DEFAULT_PARAMS = {
      inputTokens: 8000,
      outputTokens: 1500,
      requestsPerDay: 1000,
      cacheRate: 0.3,
      includeBatch: false,
      excludeFree: true,
      minContext: 0,
      requireTools: false,
      requireVision: false,
    };

    const LOCALES = {
      zh: {
        eyebrow: 'MODEL PRICE RADAR',
        title: '模型价格雷达',
        subtitle: '按当前时段实时比价，为你的用量匹配最省钱的模型',
        refresh: '刷新',
        refreshing: '更新中',
        connecting: '连接中',
        live: '实时数据',
        offline: '连接异常',
        updatedAt: '更新于',
        autoRefresh: '每 2 分钟自动刷新',
        stale: '数据可能已过期',
        sourceLink: '查看数据源',
        sourceNote: '价格来自 OpenRouter 公开模型目录，单位为 USD / 100 万 tokens；实际账单以模型供应商为准。',
        openRouter: 'OpenRouter',
        bestMatch: '当前最优匹配',
        bestMatchHint: '按当前时段价格和你的用量估算，已应用筛选条件',
        dailyEstimate: '估算日成本',
        perDay: '/ 天',
        currentBand: '当前时段',
        nextChange: '下次调价',
        noNextChange: '暂无计划调价',
        input: '输入',
        output: '输出',
        cacheRead: '缓存命中',
        cacheWrite: '缓存写入',
        context: '上下文',
        timeTiered: '分时',
        batch: '批量',
        free: '免费',
        compareCheaper: '比次优方案便宜',
        freeBest: '当前有免费模型可选',
        noBest: '暂无符合条件的模型',
        localTime: '本地时间',
        timedModels: '分时定价模型',
        now: '现在',
        estimateTool: '用量估算',
        estimateTitle: '用量估算器',
        estimateSubtitle: '不清楚 tokens？先用预设，或按每次请求填写',
        estimatePreview: '按当前设置的最优方案',
        presetLabel: '快速预设',
        presetQa: '轻量问答',
        presetSupport: '客服机器人',
        presetCoding: '代码助手',
        presetBatch: '文档批处理',
        inputHint: '每次请求发给模型的内容，约等于提示词、上下文和工具结果的总和。',
        outputHint: '模型每次回复的内容，通常比输入少。',
        requestsHint: '每天预计调用模型的次数。',
        cacheHint: '重复前缀被缓存的比例；不确定可以保持 30%。',
        done: '完成',
        close: '关闭',
        viewDetails: '查看价格与分时',
        apiConsole: 'API 登录 / 注册',
        scrollToLoad: '继续下滑自动加载',
        loadMore: '加载更多',
        allLoaded: '已显示全部',
        modelDetails: '模型详情',
        details: '详情',
        filters: '筛选',
        estimateBasis: '按你的用量估算',
        maxOutput: '最大输出',
        manufacturer: '所属厂家',
        strengths: '擅长方向',
        strCoding: '代码生成',
        strReasoning: '深度推理',
        strAgents: 'Agent 与工具调用',
        strVision: '图像理解',
        strLongContext: '长上下文',
        strMultilingual: '多语言',
        strCreative: '创意写作',
        strFast: '快速响应',
        strValue: '高性价比',
        strMath: '数学能力',
        strImage: '图像生成',
        strAudio: '音频处理',
        strGeneral: '通用对话',
        capTools: '工具调用',
        capVision: '图片输入',
        capReasoning: '推理',
        workloadTitle: '你的用量',
        workloadHint: '按每次请求估算；修改后所有价格与排行自动重算',
        inputTokens: '每次输入',
        outputTokens: '每次输出',
        requestsPerDay: '每日请求',
        cacheHitRate: '缓存命中率',
        tokensUnit: 'tokens',
        requestsUnit: '次',
        includeBatch: '包含批量 / 异步模型',
        excludeFree: '排除免费 / 限速模型',
        minContext: '最低上下文',
        anyContext: '不限',
        requireTools: '支持工具调用',
        requireVision: '支持图片输入',
        reset: '重置',
        rankingTitle: '省钱排行',
        rankingHint: '按估算日成本排序，点击模型查看分时价格',
        searchPlaceholder: '搜索模型或厂商…',
        sortBy: '排序',
        sortDaily: '日成本',
        sortInput: '输入价',
        sortOutput: '输出价',
        sortContext: '上下文',
        rank: '排名',
        model: '模型',
        inputPrice: '输入 $/M',
        outputPrice: '输出 $/M',
        estimatedCost: '日成本',
        noMatch: '没有符合筛选条件的模型',
        noMatchHint: '放宽上下文或能力筛选后再试',
        modelsTracked: '已接入模型',
        timeTieredCount: '分时定价',
        lowestNow: '当前最低日成本',
        selected: '已选中',
        bestBadge: '最优',
        timeTitle: '分时价格',
        timeHint: '本地时区的 24 小时价格带',
        timezone: '时区',
        todaySchedule: '今日时段',
        activeNow: '当前',
        flatPricing: '该模型全天统一价',
        timePricingNote: '分时规则来自数据源的 UTC 星期与时段覆盖；中国法定节假日可能影响供应商的实际计价，请以账单为准。',
        basePrice: '基础价',
        currentPrice: '当前价',
        saving: '当前折扣',
        priceUnit: '$/M',
        perMillionShort: '每 100 万 tokens',
        openModel: '在 OpenRouter 查看',
        noTimeModels: '暂无分时定价模型',
        loading: '正在获取实时价格…',
        loadError: '暂时无法获取价格数据',
        retry: '重试',
        dayShort: '天',
        hourShort: '小时',
        minuteShort: '分',
        lessThanMinute: '小于 1 分钟',
        bandPeak: '峰时',
        bandOffpeak: '谷时',
        bandStandard: '标准价',
        bandFree: '免费',
        peakLegend: '峰时',
        offpeakLegend: '谷时',
        standardLegend: '标准',
        resetFilters: '重置筛选',
        results: '个结果',
        unavailable: '—',
        chartAria: '24 小时价格走势',
        marketTimed: '个模型按时段浮动',
        freeNote: '免费模型通常有速率或并发限制',
        batchNote: '批量价格通常需要异步提交，完成时间更长',
        nextWindow: '下一时段',
      },
      en: {
        eyebrow: 'MODEL PRICE RADAR',
        title: 'Model Price Radar',
        subtitle: 'Live price comparison with time-of-day tariffs, matched to your workload',
        refresh: 'Refresh',
        refreshing: 'Updating',
        connecting: 'Connecting',
        live: 'Live data',
        offline: 'Connection issue',
        updatedAt: 'Updated',
        autoRefresh: 'Auto-refreshes every 2 min',
        stale: 'Data may be stale',
        sourceLink: 'View source',
        sourceNote: 'Prices come from OpenRouter’s public model catalogue in USD per 1M tokens; provider invoices prevail.',
        openRouter: 'OpenRouter',
        bestMatch: 'Best match now',
        bestMatchHint: 'Estimated from current time-of-day prices and your workload, after filters',
        dailyEstimate: 'Est. daily cost',
        perDay: '/ day',
        currentBand: 'Current window',
        nextChange: 'Next price change',
        noNextChange: 'No scheduled change',
        input: 'Input',
        output: 'Output',
        cacheRead: 'Cache read',
        cacheWrite: 'Cache write',
        context: 'Context',
        timeTiered: 'Time-tiered',
        batch: 'Batch',
        free: 'Free',
        compareCheaper: 'cheaper than the runner-up',
        freeBest: 'A free model is currently available',
        noBest: 'No model matches the filters',
        localTime: 'Local time',
        timedModels: 'Time-tiered models',
        now: 'Now',
        estimateTool: 'Usage estimator',
        estimateTitle: 'Usage estimator',
        estimateSubtitle: 'Not sure about tokens? Start with a preset, or enter values per request',
        estimatePreview: 'Best option with these settings',
        presetLabel: 'Quick presets',
        presetQa: 'Light Q&A',
        presetSupport: 'Support bot',
        presetCoding: 'Coding assistant',
        presetBatch: 'Document batch',
        inputHint: 'What each request sends to the model: prompt, context, and tool results combined.',
        outputHint: 'What the model writes back; usually smaller than the input.',
        requestsHint: 'How many model calls you expect per day.',
        cacheHint: 'Share of repeated prefixes served from cache; keep 30% if unsure.',
        done: 'Done',
        close: 'Close',
        viewDetails: 'Prices & time bands',
        apiConsole: 'API sign up / in',
        scrollToLoad: 'Scroll to load more',
        loadMore: 'Load more',
        allLoaded: 'All shown',
        modelDetails: 'Model details',
        details: 'Details',
        filters: 'Filters',
        estimateBasis: 'Estimated with your usage',
        maxOutput: 'Max output',
        manufacturer: 'Manufacturer',
        strengths: 'Strengths',
        strCoding: 'Coding',
        strReasoning: 'Deep reasoning',
        strAgents: 'Agents & tools',
        strVision: 'Vision',
        strLongContext: 'Long context',
        strMultilingual: 'Multilingual',
        strCreative: 'Creative writing',
        strFast: 'Fast responses',
        strValue: 'Cost-efficient',
        strMath: 'Math',
        strImage: 'Image generation',
        strAudio: 'Audio',
        strGeneral: 'General chat',
        capTools: 'Tool calling',
        capVision: 'Image input',
        capReasoning: 'Reasoning',
        workloadTitle: 'Your workload',
        workloadHint: 'Estimated per request; every price and ranking recalculates as you type',
        inputTokens: 'Input tokens',
        outputTokens: 'Output tokens',
        requestsPerDay: 'Requests / day',
        cacheHitRate: 'Cache hit rate',
        tokensUnit: 'tokens',
        requestsUnit: 'req',
        includeBatch: 'Include batch / async models',
        excludeFree: 'Exclude free / rate-limited models',
        minContext: 'Minimum context',
        anyContext: 'Any',
        requireTools: 'Tool calling',
        requireVision: 'Image input',
        reset: 'Reset',
        rankingTitle: 'Cost ranking',
        rankingHint: 'Sorted by estimated daily cost; click a model for its tariff curve',
        searchPlaceholder: 'Search model or provider…',
        sortBy: 'Sort',
        sortDaily: 'Daily cost',
        sortInput: 'Input price',
        sortOutput: 'Output price',
        sortContext: 'Context',
        rank: 'Rank',
        model: 'Model',
        inputPrice: 'Input $/M',
        outputPrice: 'Output $/M',
        estimatedCost: 'Daily cost',
        noMatch: 'No model matches these filters',
        noMatchHint: 'Relax the context or capability filters and try again',
        modelsTracked: 'Models tracked',
        timeTieredCount: 'Time-tiered',
        lowestNow: 'Lowest daily cost now',
        selected: 'Selected',
        bestBadge: 'Best',
        timeTitle: 'Time-of-day prices',
        timeHint: 'A 24-hour price band in your local timezone',
        timezone: 'Timezone',
        todaySchedule: 'Today',
        activeNow: 'Now',
        flatPricing: 'This model has one flat price all day',
        timePricingNote: 'Tariff rules come from UTC weekday and time-window overrides in the source data; Chinese public holidays can affect provider billing, so invoices prevail.',
        basePrice: 'Base price',
        currentPrice: 'Current price',
        saving: 'Current discount',
        priceUnit: '$/M',
        perMillionShort: 'per 1M tokens',
        openModel: 'View on OpenRouter',
        noTimeModels: 'No time-tiered models',
        loading: 'Fetching live prices…',
        loadError: 'Prices are temporarily unavailable',
        retry: 'Retry',
        dayShort: 'd',
        hourShort: 'h',
        minuteShort: 'm',
        lessThanMinute: 'less than 1 min',
        bandPeak: 'Peak',
        bandOffpeak: 'Off-peak',
        bandStandard: 'Standard',
        bandFree: 'Free',
        peakLegend: 'Peak',
        offpeakLegend: 'Off-peak',
        standardLegend: 'Standard',
        resetFilters: 'Reset filters',
        results: 'results',
        unavailable: '—',
        chartAria: '24-hour price curve',
        marketTimed: 'models float by time window',
        freeNote: 'Free models usually have rate or concurrency limits',
        batchNote: 'Batch prices normally require asynchronous submission and take longer',
        nextWindow: 'Next window',
      },
    };

    function pad2(n) {
      return String(n).padStart(2, '0');
    }

    function toNumber(value) {
      if (value === null || value === undefined || value === '') return null;
      const n = Number(value);
      return Number.isFinite(n) ? n : null;
    }

    function toPrice(value) {
      const n = toNumber(value);
      return n !== null && n >= 0 ? n : null;
    }

    // OpenRouter expresses UTC window bounds as HHMM integers (100 = 01:00,
    // 1600 = 16:00). Convert to minutes for matching and display.
    function hhmmToMinutes(value) {
      const n = Math.max(0, Math.round(Number(value) || 0));
      return Math.floor(n / 100) * 60 + (n % 100);
    }

    function localMidnight(date) {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    }

    function formatMinutes(minutes) {
      const safe = Math.max(0, Math.min(1440, Math.round(minutes)));
      if (safe === 1440) return '24:00';
      return pad2(Math.floor(safe / 60)) + ':' + pad2(safe % 60);
    }

    function formatTime(date) {
      return pad2(date.getHours()) + ':' + pad2(date.getMinutes());
    }

    function formatClock(date) {
      return formatTime(date) + ':' + pad2(date.getSeconds());
    }

    const dateFormatterCache = new Map();
    function formatDate(date, lang) {
      let fmt = dateFormatterCache.get(lang);
      if (!fmt) {
        fmt = new Intl.DateTimeFormat(lang, { month: 'long', day: 'numeric', weekday: 'long' });
        dateFormatterCache.set(lang, fmt);
      }
      return fmt.format(date);
    }

    function formatContext(value) {
      if (!value) return '—';
      if (value >= 1000000) {
        const m = value / 1000000;
        return (Number.isInteger(m) ? String(m) : m.toFixed(2).replace(/0+$/, '').replace(/\.$/, '')) + 'M';
      }
      if (value >= 1000) return Math.round(value / 1000) + 'K';
      return String(value);
    }

    function formatUnitPrice(perMillion) {
      if (!Number.isFinite(perMillion) || perMillion <= 0) return '$0';
      let digits;
      if (perMillion >= 100) digits = 0;
      else if (perMillion >= 0.01) digits = perMillion >= 0.1 ? 2 : 3;
      else digits = 4;
      const text = perMillion.toLocaleString('en-US', {
        minimumFractionDigits: Math.min(2, digits),
        maximumFractionDigits: digits,
      });
      return '$' + text;
    }

    function formatCost(value) {
      if (!Number.isFinite(value) || value <= 0) return '$0.00';
      if (value < 0.0001) return '<$0.0001';
      const digits = value < 0.01 ? 4 : value < 1 ? 3 : 2;
      return '$' + value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: digits,
      });
    }

    function formatInt(value, lang) {
      const n = Math.max(0, Math.round(Number(value) || 0));
      return n.toLocaleString(lang === 'zh-CN' ? 'zh-CN' : 'en-US');
    }

    function formatDuration(ms, t) {
      const total = Math.max(0, Math.ceil(ms / 60000));
      if (total < 1) return t('lessThanMinute');
      const days = Math.floor(total / 1440);
      const hours = Math.floor((total % 1440) / 60);
      const minutes = total % 60;
      const parts = [];
      if (days) parts.push(days + t('dayShort'));
      if (hours) parts.push(hours + t('hourShort'));
      if (minutes && (!days || !hours)) parts.push(minutes + t('minuteShort'));
      return parts.join(' ') || t('lessThanMinute');
    }

    function splitModelName(rawName, id) {
      const full = String(rawName || id || '');
      const idx = full.indexOf(': ');
      if (idx > 0) {
        return { provider: full.slice(0, idx).trim(), name: full.slice(idx + 2).trim() };
      }
      const slug = String(id || '').split('/')[0].replace(/^~/, '');
      const pretty = slug
        .split(/[-_]/)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
      return { provider: pretty || 'AI', name: full };
    }

    function initials(provider) {
      const cleaned = String(provider || '').replace(/[^A-Za-z0-9]/g, '');
      return (cleaned.slice(0, 2) || 'AI').toUpperCase();
    }

    function normalizeOverride(raw) {
      if (!raw || typeof raw !== 'object') return null;
      const out = {};
      let hasPrice = false;
      for (const field of PRICE_FIELDS) {
        if (raw[field] !== undefined && raw[field] !== null) {
          const value = toPrice(raw[field]);
          if (value !== null) {
            out[field] = value;
            hasPrice = true;
          }
        }
      }
      if (raw.min_prompt_tokens !== undefined && raw.min_prompt_tokens !== null) {
        const threshold = toNumber(raw.min_prompt_tokens);
        if (threshold !== null && threshold >= 0) out.minPromptTokens = threshold;
      }
      if (Array.isArray(raw.utc_days) && raw.utc_days.length) {
        const days = raw.utc_days
          .map((day) => String(day).toLowerCase())
          .filter((day) => UTC_DAYS.includes(day));
        if (days.length) {
          out.utcDays = days;
          out.isTime = true;
        }
      }
      if (raw.utc_start !== undefined && raw.utc_start !== null) {
        out.utcStart = hhmmToMinutes(raw.utc_start);
        out.isTime = true;
      }
      if (raw.utc_end !== undefined && raw.utc_end !== null) {
        out.utcEnd = hhmmToMinutes(raw.utc_end);
        out.isTime = true;
      }
      if (out.isTime || out.minPromptTokens !== undefined || hasPrice) return out;
      return null;
    }

    function parseModel(raw) {
      if (!raw || !raw.id) return null;
      const pricing = raw.pricing && typeof raw.pricing === 'object' ? raw.pricing : {};
      const base = {};
      for (const field of PRICE_FIELDS) base[field] = toPrice(pricing[field]);
      const overrides = Array.isArray(pricing.overrides)
        ? pricing.overrides.map(normalizeOverride).filter(Boolean)
        : [];
      const { provider, name } = splitModelName(raw.name, raw.id);
      const contextLength = toNumber(raw.context_length) || 0;
      const maxOutput = toNumber(raw.top_provider && raw.top_provider.max_completion_tokens);
      const supported = Array.isArray(raw.supported_parameters) ? raw.supported_parameters : [];
      const inputModalities = raw.architecture && Array.isArray(raw.architecture.input_modalities)
        ? raw.architecture.input_modalities
        : [];
      const outputModalities = raw.architecture && Array.isArray(raw.architecture.output_modalities)
        ? raw.architecture.output_modalities
        : [];
      const profileText = [raw.description, raw.name, raw.id, raw.canonical_slug]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      const isBatch = /:batch$/i.test(raw.id) || /\(batch\)/i.test(String(raw.name || ''));
      const isFree = base.prompt === 0 && base.completion === 0;
      const rankable =
        base.prompt !== null &&
        base.completion !== null &&
        base.prompt >= 0 &&
        base.completion >= 0 &&
        (isFree || base.prompt + base.completion > 0);
      const baseTotal = (base.prompt || 0) + (base.completion || 0);
      const timeTotals = overrides
        .filter((item) => item.isTime)
        .map((item) => {
          const input = item.prompt === undefined ? base.prompt || 0 : item.prompt;
          const output = item.completion === undefined ? base.completion || 0 : item.completion;
          return input + output;
        });
      const timeMinTotal = timeTotals.length ? Math.min(baseTotal, ...timeTotals) : baseTotal;
      const timeMaxTotal = timeTotals.length ? Math.max(baseTotal, ...timeTotals) : baseTotal;
      return {
        id: raw.id,
        name,
        provider,
        providerId: String(raw.id).split('/')[0].replace(/^~/, ''),
        contextLength,
        maxOutput: maxOutput && maxOutput > 0 ? maxOutput : 0,
        base,
        overrides,
        hasTimePricing: overrides.some((item) => item.isTime),
        hasTierPricing: overrides.some((item) => item.minPromptTokens !== undefined && !item.isTime),
        timeMinTotal,
        timeMaxTotal,
        tools: supported.includes('tools'),
        vision: inputModalities.includes('image'),
        outputModalities,
        profileText,
        reasoning: supported.includes('reasoning') || raw.reasoning === true,
        quality: raw.benchmarks && raw.benchmarks.artificial_analysis
          ? toNumber(raw.benchmarks.artificial_analysis.intelligence_index)
          : null,
        isBatch,
        isFree,
        rankable,
        searchKey: [raw.id, name, provider, raw.canonical_slug].filter(Boolean).join(' ').toLowerCase(),
      };
    }

    function nextVisibleCount(current, total) {
      return Math.min(Math.max(0, current) + PAGE_SIZE, Math.max(0, total));
    }

    function manufacturerOf(model, lang) {
      const entry = MANUFACTURERS[model.providerId];
      if (!entry) return model.provider;
      return entry[String(lang || '').toLowerCase().startsWith('zh') ? 'zh' : 'en'] || entry.en;
    }

    function inferStrengths(model) {
      const text = model.profileText || (model.name + ' ' + model.id).toLowerCase();
      const out = [];
      const add = (key) => {
        if (!out.includes(key)) out.push(key);
      };
      const outputs = model.outputModalities || [];
      if (outputs.includes('image')) add('image');
      if (outputs.includes('audio') || outputs.includes('speech')) add('audio');
      if (model.vision) add('vision');
      if (/\b(code|coding|coder|software|swe|programming|developer|repo|codex)\b/.test(text) || /coder|code/.test(model.id)) {
        add('coding');
      }
      if (model.reasoning || /\b(reasoning|reason|math|logic|thinking|chain.of.thought)\b/.test(text)) {
        add('reasoning');
      }
      if (model.tools && /\b(agent|agentic|tool|function calling|computer use|browser)\b/.test(text)) {
        add('agents');
      }
      if (model.contextLength >= 200000) add('longContext');
      if (/\b(multilingual|translation)\b/.test(text)) add('multilingual');
      if (/\b(creative|storytelling|story|roleplay|role-play|writing|fiction|novel|character)\b/.test(text)) {
        add('creative');
      }
      if (/\b(fast|flash|turbo|instant|low.latency|lightning)\b/.test(text)) add('fast');
      if (
        model.isFree ||
        ((model.base.prompt || 0) * 1000000 <= 0.1 && (model.base.completion || 0) * 1000000 <= 0.6)
      ) {
        add('value');
      }
      if (/\b(math|mathematical|olympiad)\b/.test(text)) add('math');
      if (!out.length) add('general');
      return out.slice(0, 5);
    }

    function providerApi(model) {
      return PROVIDER_APIS[model.providerId] || { name: 'OpenRouter', url: OPENROUTER_SIGNUP };
    }

    function matchesTime(override, date) {

      if (!override || !override.isTime) return false;
      const day = UTC_DAYS[date.getUTCDay()];
      if (override.utcDays && !override.utcDays.includes(day)) return false;
      if (override.utcStart === undefined && override.utcEnd === undefined) return true;
      const minutes = date.getUTCHours() * 60 + date.getUTCMinutes();
      const start = override.utcStart === undefined ? 0 : override.utcStart;
      const end = override.utcEnd === undefined || override.utcEnd === 0 ? 1440 : override.utcEnd;
      if (start === end) return true;
      if (start < end) return minutes >= start && minutes < end;
      return minutes >= start || minutes < end;
    }

    function mergeOverride(price, override) {
      const next = Object.assign({}, price);
      for (const field of PRICE_FIELDS) {
        if (override[field] !== undefined) next[field] = override[field];
      }
      return next;
    }

    function priceAt(model, date, promptTokens) {
      let raw = Object.assign({}, model.base);
      for (const override of model.overrides) {
        if (override.isTime && matchesTime(override, date)) {
          raw = mergeOverride(raw, override);
          break;
        }
      }
      let tier = null;
      for (const override of model.overrides) {
        if (override.isTime || override.minPromptTokens === undefined) continue;
        if (override.minPromptTokens <= promptTokens && (!tier || override.minPromptTokens > tier.minPromptTokens)) {
          tier = override;
        }
      }
      if (tier) raw = mergeOverride(raw, tier);
      const input = raw.prompt === null || raw.prompt === undefined ? 0 : raw.prompt;
      return {
        input,
        output: raw.completion === null || raw.completion === undefined ? 0 : raw.completion,
        cacheRead: raw.input_cache_read === null || raw.input_cache_read === undefined
          ? input
          : raw.input_cache_read,
        cacheWrite: raw.input_cache_write === null || raw.input_cache_write === undefined
          ? null
          : raw.input_cache_write,
      };
    }

    function priceSignature(model, date, promptTokens) {
      const p = priceAt(model, date, promptTokens);
      return [p.input, p.output, p.cacheRead, p.cacheWrite].join('|');
    }

    function bandAt(model, date, promptTokens) {
      if (model.isFree) return 'free';
      if (!model.hasTimePricing) return 'standard';
      const current = priceAt(model, date, promptTokens);
      const currentTotal = current.input + current.output;
      const spread = model.timeMaxTotal - model.timeMinTotal;
      if (spread <= 0) return 'standard';
      const epsilon = Math.max(1e-15, spread * 0.001);
      if (currentTotal >= model.timeMaxTotal - epsilon) return 'peak';
      if (currentTotal <= model.timeMinTotal + epsilon) return 'offpeak';
      return 'standard';
    }

    function estimateCost(price, params) {
      const requests = Math.max(0, params.requestsPerDay || 0);
      const inputTokens = Math.max(0, params.inputTokens || 0) * requests;
      const outputTokens = Math.max(0, params.outputTokens || 0) * requests;
      const cacheRate = Math.max(0, Math.min(1, params.cacheRate || 0));
      const cached = inputTokens * cacheRate;
      return (inputTokens - cached) * price.input + cached * price.cacheRead + outputTokens * price.output;
    }

    function nextChange(model, now, promptTokens) {
      if (!model.hasTimePricing) return null;
      const nowMs = now.getTime();
      const candidates = [];
      const utcBase = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0));
      for (let offset = -1; offset <= 8; offset += 1) {
        const day = new Date(utcBase.getTime() + offset * 86400000);
        for (const override of model.overrides) {
          if (!override.isTime) continue;
          if (override.utcDays && override.utcStart === undefined) candidates.push(day.getTime());
          if (override.utcStart !== undefined) {
            candidates.push(day.getTime() + override.utcStart * 60000);
          }
          if (override.utcEnd !== undefined) {
            candidates.push(day.getTime() + (override.utcEnd === 0 ? 1440 : override.utcEnd) * 60000);
          }
        }
      }
      const seen = new Set();
      const sorted = candidates
        .filter((value) => value > nowMs)
        .sort((a, b) => a - b);
      for (const value of sorted) {
        if (seen.has(value)) continue;
        seen.add(value);
        const before = priceSignature(model, new Date(value - 60000), promptTokens);
        const after = priceSignature(model, new Date(value + 60000), promptTokens);
        if (before !== after) return new Date(value);
      }
      return null;
    }

    function evaluateModel(model, anchor, params) {
      const price = priceAt(model, anchor, params.inputTokens);
      return Object.assign({}, model, {
        price,
        band: bandAt(model, anchor, params.inputTokens),
        cost: estimateCost(price, params),
        next: nextChange(model, anchor, params.inputTokens),
      });
    }

    function compareModels(a, b, sortBy) {
      let delta = 0;
      if (sortBy === 'input') delta = a.price.input - b.price.input;
      else if (sortBy === 'output') delta = a.price.output - b.price.output;
      else if (sortBy === 'context') delta = b.contextLength - a.contextLength;
      else delta = a.cost - b.cost;
      return delta || a.cost - b.cost || a.name.localeCompare(b.name);
    }

    function buildSegments(model, anchor, promptTokens) {
      const start = localMidnight(anchor);
      const segments = [];
      for (let i = 0; i < 96; i += 1) {
        const at = new Date(start.getTime() + i * 15 * 60000);
        const price = priceAt(model, at, promptTokens);
        const band = bandAt(model, at, promptTokens);
        const signature = [price.input, price.output, price.cacheRead, band].join('|');
        const last = segments[segments.length - 1];
        if (last && last.signature === signature) {
          last.endMin += 15;
        } else {
          segments.push({
            signature,
            startMin: i * 15,
            endMin: (i + 1) * 15,
            price,
            band,
          });
        }
      }
      return segments;
    }

    function buildBars(model, anchor, promptTokens) {
      const start = localMidnight(anchor);
      const bars = [];
      for (let hour = 0; hour < 24; hour += 1) {
        const at = new Date(start.getTime() + (hour * 60 + 30) * 60000);
        bars.push({
          hour,
          price: priceAt(model, at, promptTokens),
          band: bandAt(model, at, promptTokens),
          current: hour === anchor.getHours(),
        });
      }
      return bars;
    }

    function discountPercent(model, price) {
      const baseTotal = (model.base.prompt || 0) + (model.base.completion || 0);
      const currentTotal = price.input + price.output;
      if (baseTotal <= 0 || currentTotal >= baseTotal) return 0;
      return Math.round((1 - currentTotal / baseTotal) * 100);
    }

    function useLocaleSnapshot(ctx) {
      const [snapshot, setSnapshot] = React.useState(() => ctx.locale.getLocale());
      React.useEffect(() => {
        return ctx.locale.subscribe(() => setSnapshot(ctx.locale.getLocale()));
      }, [ctx]);
      return snapshot;
    }

    function useNow() {
      const [now, setNow] = React.useState(() => new Date());
      React.useEffect(() => {
        const id = window.setInterval(() => setNow(new Date()), 1000);
        return () => window.clearInterval(id);
      }, []);
      return now;
    }

    function BandBadge(props) {
      return h(
        'span',
        { className: 'mpr-badge mpr-band-' + props.band },
        props.t(BAND_KEY[props.band] || 'bandStandard'),
      );
    }

    function ProviderMark(props) {
      const style = props.size ? { width: props.size, height: props.size } : undefined;
      return h(
        'span',
        { className: 'mpr-provider-mark', style, 'aria-hidden': true },
        initials(props.provider),
      );
    }

    function Toggle(props) {
      const id = React.useId();
      return h(
        'label',
        { className: 'mpr-switch', htmlFor: id },
        h('input', {
          id,
          type: 'checkbox',
          role: 'switch',
          checked: props.checked,
          'aria-checked': props.checked,
          onChange: (event) => props.onChange(event.target.checked),
        }),
        h('span', { className: 'mpr-switch-track', 'aria-hidden': true },
          h('span', { className: 'mpr-switch-thumb' }),
        ),
        h('span', { className: 'mpr-switch-label' }, props.label),
      );
    }

    function NumberField(props) {
      const id = React.useId();
      return h(
        'label',
        { className: 'mpr-field', htmlFor: id },
        h('span', { className: 'mpr-field-label' }, props.label),
        h(
          'span',
          { className: 'mpr-input-shell' },
          h('input', {
            id,
            className: 'mpr-input',
            type: 'number',
            inputMode: 'numeric',
            min: props.min,
            max: props.max,
            step: props.step || 1,
            value: props.value,
            onChange: (event) => {
              const next = Number(event.target.value);
              const safe = Number.isFinite(next) ? next : 0;
              props.onChange(Math.max(props.min, Math.min(props.max, safe)));
            },
          }),
          h('span', { className: 'mpr-input-suffix' }, props.suffix),
        ),
      );
    }

    function SelectField(props) {
      const id = React.useId();
      return h(
        'label',
        { className: 'mpr-field', htmlFor: id },
        h('span', { className: 'mpr-field-label' }, props.label),
        h(
          'span',
          { className: 'mpr-select-shell' },
          h(
            'select',
            {
              id,
              className: 'mpr-select',
              value: props.value,
              onChange: (event) => props.onChange(Number(event.target.value)),
            },
            props.options.map((option) => h('option', { key: option.value, value: option.value }, option.label)),
          ),
        ),
      );
    }

    function FilterChip(props) {
      return h(
        'button',
        {
          type: 'button',
          className: 'mpr-filter-chip' + (props.active ? ' is-active' : ''),
          'aria-pressed': props.active,
          onClick: props.onClick,
        },
        props.label,
      );
    }

    function PriceRadarPanel(props) {
      const { t } = props;
      const locale = useLocaleSnapshot(props.ctx);
      const now = useNow();
      const lang = locale.active && locale.active.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en-US';
      const [models, setModels] = React.useState(null);
      const [phase, setPhase] = React.useState('loading');
      const [error, setError] = React.useState('');
      const [updatedAt, setUpdatedAt] = React.useState(null);
      const [tick, setTick] = React.useState(0);
      const [params, setParams] = React.useState(DEFAULT_PARAMS);
      const [query, setQuery] = React.useState('');
      const [sortBy, setSortBy] = React.useState('daily');
      const [visibleCount, setVisibleCount] = React.useState(INITIAL_VISIBLE);
      const [detailId, setDetailId] = React.useState(null);
      const [showEstimate, setShowEstimate] = React.useState(false);

      React.useEffect(() => {
        const id = window.setInterval(() => setTick((value) => value + 1), REFRESH_MS);
        return () => window.clearInterval(id);
      }, []);

      React.useEffect(() => {
        let live = true;
        const controller = new AbortController();
        const timer = window.setTimeout(() => controller.abort(), 25000);
        setError('');
        setPhase((previous) => (previous === 'ready' ? 'refreshing' : 'loading'));
        fetch(API_URL, {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
          cache: 'no-cache',
        })
          .then((response) => {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.json();
          })
          .then((payload) => {
            if (!live) return;
            const list = payload && Array.isArray(payload.data) ? payload.data : [];
            const parsed = list.map(parseModel).filter(Boolean);
            if (!parsed.length) throw new Error('Empty model catalogue');
            setModels(parsed);
            setUpdatedAt(new Date());
            setPhase('ready');
          })
          .catch((reason) => {
            if (!live) return;
            setError(String((reason && reason.message) || reason || 'Unknown error'));
            setPhase((previous) => (previous === 'refreshing' ? 'ready' : 'error'));
          })
          .finally(() => window.clearTimeout(timer));
        return () => {
          live = false;
          window.clearTimeout(timer);
          controller.abort();
        };
      }, [tick]);

      React.useEffect(() => {
        if (!detailId && !showEstimate) return undefined;
        const onKey = (event) => {
          if (event.key === 'Escape') {
            setDetailId(null);
            setShowEstimate(false);
          }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
      }, [detailId, showEstimate]);

      const minuteKey = Math.floor(now.getTime() / 60000);
      const anchor = React.useMemo(() => new Date(minuteKey * 60000), [minuteKey]);

      const result = React.useMemo(() => {
        if (!models) {
          return {
            all: [],
            rankable: [],
            timeModels: [],
            eligible: [],
            sorted: [],
            best: null,
            second: null,
            savingsPct: 0,
            byId: new Map(),
          };
        }
        const all = models.map((model) => evaluateModel(model, anchor, params));
        const rankable = all.filter((model) => model.rankable);
        const timeModels = rankable
          .filter((model) => model.hasTimePricing)
          .sort((a, b) => a.provider.localeCompare(b.provider) || a.name.localeCompare(b.name));
        const needle = query.trim().toLowerCase();
        const eligible = rankable.filter((model) => {
          if (params.excludeFree && model.isFree) return false;
          if (!params.includeBatch && model.isBatch) return false;
          if (params.requireTools && !model.tools) return false;
          if (params.requireVision && !model.vision) return false;
          if (params.minContext && (!model.contextLength || model.contextLength < params.minContext)) return false;
          if (model.contextLength && params.inputTokens > model.contextLength) return false;
          if (needle && !model.searchKey.includes(needle)) return false;
          return true;
        });
        const byCost = eligible.slice().sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
        const sorted = eligible.slice().sort((a, b) => compareModels(a, b, sortBy));
        const best = byCost[0] || null;
        const second = byCost[1] || null;
        const savingsPct =
          best && second && second.cost > 0 && best.cost < second.cost
            ? Math.round((1 - best.cost / second.cost) * 100)
            : 0;
        return {
          all,
          rankable,
          timeModels,
          eligible,
          sorted,
          best,
          second,
          savingsPct,
          byId: new Map(all.map((model) => [model.id, model])),
        };
      }, [models, anchor, params, query, sortBy]);

      const detailModel = detailId ? result.byId.get(detailId) || null : null;
      const detailSchedule = React.useMemo(() => {
        if (!detailModel) return null;
        return {
          segments: buildSegments(detailModel, anchor, params.inputTokens),
          bars: buildBars(detailModel, anchor, params.inputTokens),
        };
      }, [detailModel && detailModel.id, models, minuteKey, params.inputTokens]);

      const visibleRows = result.sorted.slice(0, visibleCount);
      const statusKey =
        phase === 'loading'
          ? 'connecting'
          : error && !models
            ? 'offline'
            : phase === 'refreshing'
              ? 'refreshing'
              : error
                ? 'offline'
                : 'live';
      const statusClass = statusKey === 'live' ? 'is-live' : statusKey === 'offline' ? 'is-error' : 'is-busy';
      const stale = updatedAt && now.getTime() - updatedAt.getTime() > 5 * 60000;
      const dateLabel = formatDate(now, lang);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local';
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const estimateSummary =
        formatInt(params.inputTokens, lang) + ' ' + t('input').toLowerCase() +
        ' / ' + formatInt(params.outputTokens, lang) + ' ' + t('output').toLowerCase() +
        ' / ' + formatInt(params.requestsPerDay, lang) + ' ' + t('requestsUnit') +
        ' / ' + Math.round(params.cacheRate * 100) + '% ' + t('cacheHitRate').toLowerCase();

      function setParam(key, value) {
        setVisibleCount(INITIAL_VISIBLE);
        setParams((previous) => Object.assign({}, previous, { [key]: value }));
      }

      function loadMore() {
        setVisibleCount((count) => nextVisibleCount(count, result.sorted.length));
      }

      function handleTableScroll(event) {
        if (visibleCount >= result.sorted.length) return;
        const element = event.currentTarget;
        if (element.scrollHeight - element.scrollTop - element.clientHeight < 180) {
          loadMore();
        }
      }

      function refresh() {
        setTick((value) => value + 1);
      }

      function resetWorkload() {
        setParams((previous) => Object.assign({}, previous, {
          inputTokens: DEFAULT_PARAMS.inputTokens,
          outputTokens: DEFAULT_PARAMS.outputTokens,
          requestsPerDay: DEFAULT_PARAMS.requestsPerDay,
          cacheRate: DEFAULT_PARAMS.cacheRate,
        }));
      }

      function resetFilters() {
        setParams((previous) => Object.assign({}, previous, {
          includeBatch: false,
          excludeFree: true,
          minContext: 0,
          requireTools: false,
          requireVision: false,
        }));
        setQuery('');
        setVisibleCount(INITIAL_VISIBLE);
      }

      function resetAll() {
        setParams(DEFAULT_PARAMS);
        setQuery('');
        setVisibleCount(INITIAL_VISIBLE);
        setSortBy('daily');
      }

      function openDetail(id) {
        setShowEstimate(false);
        setDetailId(id);
      }

      function openEstimate() {
        setDetailId(null);
        setShowEstimate(true);
      }

      function closeOverlays() {
        setDetailId(null);
        setShowEstimate(false);
      }

      function renderHeader() {
        return h(
          'header',
          { className: 'mpr-header' },
          h(
            'div',
            { className: 'mpr-heading' },
            h('div', { className: 'mpr-eyebrow' }, t('eyebrow')),
            h('h1', { className: 'mpr-title' }, t('title')),
            h('p', { className: 'mpr-subtitle' }, t('subtitle')),
          ),
          h(
            'div',
            { className: 'mpr-header-side' },
            h(
              'div',
              { className: 'mpr-status ' + statusClass, 'aria-live': 'polite' },
              h('span', { className: 'mpr-status-dot', 'aria-hidden': true }),
              h('span', null, t(statusKey)),
            ),
            h(
              'div',
              { className: 'mpr-updated' },
              h('span', null, t('updatedAt') + ' ' + (updatedAt ? formatClock(updatedAt) : '—')),
              h('span', { className: 'mpr-updated-sep' }, '·'),
              h('span', null, t('autoRefresh')),
              stale ? h('span', { className: 'mpr-stale' }, t('stale')) : null,
            ),
            h(
              'div',
              { className: 'mpr-header-actions' },
              h(
                'button',
                { type: 'button', className: 'mpr-button mpr-button-ghost', onClick: openEstimate },
                h('span', { className: 'mpr-button-icon', 'aria-hidden': true }, '∑'),
                t('estimateTool'),
              ),
              h(
                'button',
                {
                  type: 'button',
                  className: 'mpr-button mpr-button-primary',
                  onClick: refresh,
                  disabled: phase === 'loading' || phase === 'refreshing',
                },
                phase === 'loading' || phase === 'refreshing' ? t('refreshing') : t('refresh'),
              ),
            ),
          ),
        );
      }

      function renderBest() {
        if (!result.best) {
          return h(
            'div',
            { className: 'mpr-best-card mpr-best-empty' },
            h('div', { className: 'mpr-kicker' }, t('bestMatch')),
            h('strong', null, t('noBest')),
            h('p', null, t('noMatchHint')),
            h('button', { type: 'button', className: 'mpr-button', onClick: resetAll }, t('resetFilters')),
          );
        }
        const best = result.best;
        return h(
          'div',
          { className: 'mpr-best-card' },
          h(
            'div',
            { className: 'mpr-kicker' },
            h('span', { className: 'mpr-pulse', 'aria-hidden': true }),
            t('bestMatch'),
          ),
          h(
            'div',
            { className: 'mpr-best-head' },
            h(ProviderMark, { provider: best.provider, size: 44 }),
            h(
              'div',
              { className: 'mpr-best-title' },
              h('h2', { title: best.name }, best.name),
              h(
                'div',
                { className: 'mpr-best-sub' },
                h('span', null, best.provider),
                h('span', { className: 'mpr-dot-sep' }, '·'),
                h('span', null, formatContext(best.contextLength) + ' ' + t('context').toLowerCase()),
              ),
            ),
            h(
              'div',
              { className: 'mpr-best-cost' },
              h('strong', null, formatCost(best.cost)),
              h('span', null, t('perDay')),
              h('small', null, t('dailyEstimate')),
            ),
          ),
          h(
            'div',
            { className: 'mpr-best-meta' },
            h(
              'div',
              null,
              h('span', null, t('input')),
              h('b', null, formatUnitPrice(best.price.input * 1000000) + ' /M'),
            ),
            h(
              'div',
              null,
              h('span', null, t('output')),
              h('b', null, formatUnitPrice(best.price.output * 1000000) + ' /M'),
            ),
            h(
              'div',
              null,
              h('span', null, t('currentBand')),
              h('b', null, h(BandBadge, { band: best.band, t })),
            ),
          ),
          h(
            'div',
            { className: 'mpr-best-foot' },
            h(
              'div',
              { className: 'mpr-best-note' },
              result.savingsPct > 0 && best.cost > 0
                ? h('span', { className: 'mpr-saving' }, t('compareCheaper') + ' ' + result.savingsPct + '%')
                : best.cost === 0
                  ? h('span', { className: 'mpr-saving' }, t('freeBest'))
                  : null,
              h('span', { className: 'mpr-muted' }, t('bestMatchHint')),
            ),
            h(
              'button',
              { type: 'button', className: 'mpr-button mpr-button-ghost', onClick: () => openDetail(best.id) },
              t('viewDetails') + ' →',
            ),
          ),
        );
      }

      function renderClock() {
        return h(
          'div',
          { className: 'mpr-clock-card' },
          h(
            'div',
            { className: 'mpr-clock-top' },
            h(
              'div',
              null,
              h('div', { className: 'mpr-mini-label' }, t('localTime')),
              h('div', { className: 'mpr-clock' }, formatClock(now)),
              h('div', { className: 'mpr-date' }, dateLabel + ' · ' + timezone),
            ),
            h('div', { className: 'mpr-now-pill' }, t('now')),
          ),
          h(
            'div',
            { className: 'mpr-clock-section' },
            h(
              'div',
              { className: 'mpr-clock-section-head' },
              h('span', null, t('timedModels')),
              h('span', { className: 'mpr-muted' }, result.timeModels.length + ' ' + t('marketTimed')),
            ),
            result.timeModels.length
              ? h(
                  'div',
                  { className: 'mpr-clock-list' },
                  result.timeModels.slice(0, 5).map((model) =>
                    h(
                      'button',
                      {
                        type: 'button',
                        key: model.id,
                        className: 'mpr-clock-row',
                        title: t('viewDetails'),
                        onClick: () => openDetail(model.id),
                      },
                      h('span', { className: 'mpr-tiny-dot mpr-fill-' + model.band, 'aria-hidden': true }),
                      h(
                        'span',
                        { className: 'mpr-clock-model' },
                        h('strong', null, model.name),
                        h('small', null, model.next ? formatTime(model.next) : t('noNextChange')),
                      ),
                      h('span', { className: 'mpr-clock-band' }, t(BAND_KEY[model.band])),
                    ),
                  ),
                )
              : h('div', { className: 'mpr-muted' }, t('noTimeModels')),
          ),
        );
      }

      function renderRanking() {
        return h(
          'section',
          { className: 'mpr-card mpr-ranking' },
          h(
            'div',
            { className: 'mpr-section-head' },
            h(
              'div',
              { className: 'mpr-section-title-wrap' },
              h('h2', { className: 'mpr-section-title' }, t('rankingTitle')),
              h('p', { className: 'mpr-section-hint' }, t('rankingHint')),
              h(
                'div',
                { className: 'mpr-basis' },
                h('span', null, t('estimateBasis') + ': ' + estimateSummary),
                h('button', { type: 'button', className: 'mpr-basis-tool', onClick: openEstimate },
                  t('estimateTool') + ' →'),
              ),
            ),
            h(
              'div',
              { className: 'mpr-stat-row' },
              h('span', { className: 'mpr-stat' }, h('b', null, result.rankable.length), ' ', t('modelsTracked')),
              h('span', { className: 'mpr-stat' }, h('b', null, result.timeModels.length), ' ', t('timeTieredCount')),
              h(
                'span',
                { className: 'mpr-stat' },
                t('lowestNow') + ' ',
                h('b', null, result.best ? formatCost(result.best.cost) : '—'),
              ),
            ),
          ),
          h(
            'div',
            { className: 'mpr-toolbar' },
            h(
              'label',
              { className: 'mpr-search' },
              h('span', { className: 'mpr-search-icon', 'aria-hidden': true }, '⌕'),
              h('input', {
                type: 'search',
                value: query,
                placeholder: t('searchPlaceholder'),
                'aria-label': t('searchPlaceholder'),
                onChange: (event) => {
                  setQuery(event.target.value);
                  setVisibleCount(INITIAL_VISIBLE);
                },
              }),
            ),
            h(
              'label',
              { className: 'mpr-sort' },
              h('span', null, t('sortBy')),
              h(
                'select',
                {
                  value: sortBy,
                  onChange: (event) => {
                    setSortBy(event.target.value);
                    setVisibleCount(INITIAL_VISIBLE);
                  },
                },
                h('option', { value: 'daily' }, t('sortDaily')),
                h('option', { value: 'input' }, t('sortInput')),
                h('option', { value: 'output' }, t('sortOutput')),
                h('option', { value: 'context' }, t('sortContext')),
              ),
            ),
            h('span', { className: 'mpr-result-count' }, result.sorted.length + ' ' + t('results')),
          ),
          h(
            'div',
            { className: 'mpr-filter-row' },
            h('span', { className: 'mpr-filter-label' }, t('filters')),
            h(FilterChip, {
              label: t('excludeFree'),
              active: params.excludeFree,
              onClick: () => setParam('excludeFree', !params.excludeFree),
            }),
            h(FilterChip, {
              label: t('includeBatch'),
              active: params.includeBatch,
              onClick: () => setParam('includeBatch', !params.includeBatch),
            }),
            h(FilterChip, {
              label: t('requireTools'),
              active: params.requireTools,
              onClick: () => setParam('requireTools', !params.requireTools),
            }),
            h(FilterChip, {
              label: t('requireVision'),
              active: params.requireVision,
              onClick: () => setParam('requireVision', !params.requireVision),
            }),
            h(
              'label',
              { className: 'mpr-filter-context' },
              h('span', null, t('minContext')),
              h(
                'select',
                {
                  value: params.minContext,
                  onChange: (event) => setParam('minContext', Number(event.target.value)),
                },
                h('option', { value: 0 }, t('anyContext')),
                h('option', { value: 32768 }, '32K'),
                h('option', { value: 131072 }, '128K'),
                h('option', { value: 1048576 }, '1M'),
              ),
            ),
            h('button', { type: 'button', className: 'mpr-text-button mpr-filter-reset', onClick: resetFilters },
              t('resetFilters')),
          ),
          result.sorted.length
            ? h(
                'div',
                { className: 'mpr-table-wrap', onScroll: handleTableScroll },
                h(
                  'table',
                  { className: 'mpr-table' },
                  h(
                    'thead',
                    null,
                    h(
                      'tr',
                      null,
                      h('th', { scope: 'col', className: 'mpr-col-rank' }, t('rank')),
                      h('th', { scope: 'col' }, t('model')),
                      h('th', { scope: 'col', className: 'mpr-col-price' }, t('inputPrice')),
                      h('th', { scope: 'col', className: 'mpr-col-price' }, t('outputPrice')),
                      h('th', { scope: 'col', className: 'mpr-col-price mpr-col-cost' }, t('estimatedCost')),
                      h('th', { scope: 'col', className: 'mpr-col-context' }, t('context')),
                      h('th', { scope: 'col', className: 'mpr-col-detail' }, t('details')),
                    ),
                  ),
                  h(
                    'tbody',
                    null,
                    visibleRows.map((model, index) =>
                      h(
                        'tr',
                        {
                          key: model.id,
                          tabIndex: 0,
                          className:
                            'mpr-row' +
                            (result.best && model.id === result.best.id ? ' is-best' : '') +
                            (detailModel && model.id === detailModel.id ? ' is-selected' : ''),
                          'aria-haspopup': 'dialog',
                          'aria-selected': Boolean(detailModel && model.id === detailModel.id),
                          title: t('viewDetails'),
                          onClick: () => openDetail(model.id),
                          onKeyDown: (event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              openDetail(model.id);
                            }
                          },
                        },
                        h(
                          'td',
                          { className: 'mpr-col-rank' },
                          result.best && model.id === result.best.id
                            ? h('span', { className: 'mpr-best-badge' }, t('bestBadge'))
                            : h('span', { className: 'mpr-rank-number' }, String(index + 1)),
                        ),
                        h(
                          'td',
                          null,
                          h(
                            'div',
                            { className: 'mpr-model-cell' },
                            h(ProviderMark, { provider: model.provider, size: 28 }),
                            h(
                              'div',
                              { className: 'mpr-model-text' },
                              h('div', { className: 'mpr-model-name', title: model.name }, model.name),
                              h(
                                'div',
                                { className: 'mpr-model-sub' },
                                h('span', null, model.provider),
                                h('span', { className: 'mpr-dot-sep' }, '·'),
                                h('span', null, formatContext(model.contextLength) + ' ' + t('context').toLowerCase()),
                                model.isBatch ? h('span', { className: 'mpr-tag' }, t('batch')) : null,
                                model.isFree ? h('span', { className: 'mpr-tag mpr-tag-free' }, t('free')) : null,
                                model.hasTimePricing
                                  ? h('span', { className: 'mpr-tag mpr-tag-time' }, t('timeTiered'))
                                  : null,
                                model.hasTimePricing ? h(BandBadge, { band: model.band, t }) : null,
                              ),
                            ),
                          ),
                        ),
                        h(
                          'td',
                          { className: 'mpr-col-price' },
                          h('span', { className: 'mpr-price' }, formatUnitPrice(model.price.input * 1000000)),
                        ),
                        h(
                          'td',
                          { className: 'mpr-col-price' },
                          h('span', { className: 'mpr-price' }, formatUnitPrice(model.price.output * 1000000)),
                        ),
                        h(
                          'td',
                          { className: 'mpr-col-price mpr-col-cost' },
                          h('span', { className: 'mpr-cost' }, formatCost(model.cost)),
                        ),
                        h('td', { className: 'mpr-col-context' }, formatContext(model.contextLength)),
                        h('td', { className: 'mpr-col-detail' }, h('span', { className: 'mpr-row-arrow' }, '›')),
                      ),
                    ),
                  ),
                ),
              )
            : h(
                'div',
                { className: 'mpr-empty' },
                h('strong', null, t('noMatch')),
                h('span', null, t('noMatchHint')),
                h('button', { type: 'button', className: 'mpr-button', onClick: resetAll }, t('resetFilters')),
              ),
          result.sorted.length > INITIAL_VISIBLE
            ? h(
                'div',
                { className: 'mpr-table-foot' },
                visibleCount < result.sorted.length
                  ? h(
                      React.Fragment,
                      null,
                      h('span', { className: 'mpr-load-hint' }, t('scrollToLoad')),
                      h(
                        'button',
                        { type: 'button', className: 'mpr-text-button', onClick: loadMore },
                        t('loadMore') + ' · ' + visibleCount + ' / ' + result.sorted.length,
                      ),
                    )
                  : h('span', { className: 'mpr-muted' }, t('allLoaded') + ' · ' + result.sorted.length),
              )
            : null,
        );
      }

      function renderChart(model, schedule, maxBar) {
        return h(
          'div',
          { className: 'mpr-chart-panel' },
          h('div', { className: 'mpr-chart-title' }, t('timeTitle')),
          h(
            'div',
            { className: 'mpr-legend' },
            h('span', { className: 'mpr-legend-item' }, h('i', { className: 'mpr-fill-peak' }), t('peakLegend')),
            h('span', { className: 'mpr-legend-item' }, h('i', { className: 'mpr-fill-offpeak' }), t('offpeakLegend')),
            h('span', { className: 'mpr-legend-item' }, h('i', { className: 'mpr-fill-standard' }), t('standardLegend')),
          ),
          h(
            'div',
            { className: 'mpr-bars', role: 'img', 'aria-label': t('chartAria') },
            schedule.bars.map((bar) =>
              h(
                'div',
                {
                  key: bar.hour,
                  className: 'mpr-bar-col' + (bar.current ? ' is-now' : ''),
                  title:
                    formatMinutes(bar.hour * 60) + '–' + formatMinutes((bar.hour + 1) * 60) +
                    ' · ' + formatUnitPrice(bar.price.input * 1000000) + ' / ' +
                    formatUnitPrice(bar.price.output * 1000000),
                },
                h('div', {
                  className: 'mpr-bar mpr-fill-' + bar.band,
                  style: {
                    height: (bar.price.output <= 0 ? 5 : Math.max(8, (bar.price.output / maxBar) * 100)) + '%',
                  },
                }),
              ),
            ),
          ),
          h(
            'div',
            { className: 'mpr-axis' },
            ['00:00', '06:00', '12:00', '18:00', '24:00'].map((label) =>
              h('span', { key: label }, label),
            ),
          ),
          model.hasTimePricing
            ? h(
                'div',
                { className: 'mpr-chart-caption' },
                h('span', null, t('timezone') + ': ' + timezone),
                model.next
                  ? h(
                      'span',
                      null,
                      t('nextChange') + ': ' + formatTime(model.next) + ' · ' +
                        formatDuration(model.next.getTime() - now.getTime(), t),
                    )
                  : h('span', null, t('noNextChange')),
              )
            : h('div', { className: 'mpr-chart-caption' }, t('flatPricing')),
        );
      }

      function renderSegments(schedule) {
        return h(
          'div',
          { className: 'mpr-segments' },
          h('div', { className: 'mpr-segments-title' }, t('todaySchedule')),
          schedule.segments.map((segment) =>
            h(
              'div',
              {
                key: segment.startMin,
                className:
                  'mpr-segment' +
                  (currentMinutes >= segment.startMin && currentMinutes < segment.endMin ? ' is-active' : ''),
              },
              h('span', { className: 'mpr-segment-dot mpr-fill-' + segment.band, 'aria-hidden': true }),
              h(
                'span',
                { className: 'mpr-segment-time' },
                formatMinutes(segment.startMin) + '–' + formatMinutes(segment.endMin),
              ),
              h(
                'span',
                { className: 'mpr-segment-band' },
                t(BAND_KEY[segment.band] || 'bandStandard'),
              ),
              h(
                'span',
                { className: 'mpr-segment-price' },
                formatUnitPrice(segment.price.input * 1000000) + ' / ' +
                  formatUnitPrice(segment.price.output * 1000000),
              ),
              currentMinutes >= segment.startMin && currentMinutes < segment.endMin
                ? h('span', { className: 'mpr-segment-now' }, t('activeNow'))
                : null,
            ),
          ),
        );
      }

      function renderDetailModal() {
        if (!detailModel || !detailSchedule) return null;
        const model = detailModel;
        const discount = discountPercent(model, model.price);
        const baseInput = model.base.prompt || 0;
        const baseOutput = model.base.completion || 0;
        const maxBar = Math.max(0.000000001, ...detailSchedule.bars.map((bar) => bar.price.output));
        const modelUrl = 'https://openrouter.ai/' + model.id.split('/').map(encodeURIComponent).join('/');
        return h(
          'div',
          {
            className: 'mpr-modal-backdrop',
            onMouseDown: (event) => {
              if (event.target === event.currentTarget) closeOverlays();
            },
          },
          h(
            'div',
            {
              className: 'mpr-modal mpr-detail-modal',
              role: 'dialog',
              'aria-modal': 'true',
              'aria-labelledby': 'mpr-detail-title',
              onMouseDown: (event) => event.stopPropagation(),
            },
            h(
              'div',
              { className: 'mpr-modal-head' },
              h(
                'div',
                { className: 'mpr-modal-title-wrap' },
                h(ProviderMark, { provider: model.provider, size: 44 }),
                h(
                  'div',
                  { className: 'mpr-modal-title-text' },
                  h('div', { className: 'mpr-modal-kicker' }, t('modelDetails')),
                  h('h2', { id: 'mpr-detail-title' }, model.name),
                  h(
                    'p',
                    null,
                    model.provider + ' · ' + formatContext(model.contextLength) + ' ' +
                      t('context').toLowerCase() + ' · ' + t('todaySchedule') + ' ' + dateLabel,
                  ),
                ),
              ),
              h(
                'div',
                { className: 'mpr-modal-head-right' },
                h(
                  'div',
                  { className: 'mpr-detail-cost' },
                  h('strong', null, formatCost(model.cost)),
                  h('span', null, t('perDay')),
                  h('small', null, t('dailyEstimate')),
                ),
                h(
                  'button',
                  {
                    type: 'button',
                    className: 'mpr-modal-close',
                    onClick: closeOverlays,
                    'aria-label': t('close'),
                    autoFocus: true,
                  },
                  '×',
                ),
              ),
            ),
            h(
              'div',
              { className: 'mpr-modal-body' },
              h(
                'div',
                { className: 'mpr-detail-tags' },
                h(BandBadge, { band: model.band, t }),
                model.hasTimePricing ? h('span', { className: 'mpr-tag mpr-tag-time' }, t('timeTiered')) : null,
                model.isBatch ? h('span', { className: 'mpr-tag' }, t('batch')) : null,
                model.isFree ? h('span', { className: 'mpr-tag mpr-tag-free' }, t('free')) : null,
                model.tools ? h('span', { className: 'mpr-tag' }, t('capTools')) : null,
                model.vision ? h('span', { className: 'mpr-tag' }, t('capVision')) : null,
                model.reasoning ? h('span', { className: 'mpr-tag' }, t('capReasoning')) : null,
              ),
              h(
                'div',
                { className: 'mpr-detail-about' },
                h(
                  'div',
                  { className: 'mpr-about-row' },
                  h('span', { className: 'mpr-about-label' }, t('manufacturer')),
                  h('b', null, manufacturerOf(model, lang)),
                ),
                h(
                  'div',
                  { className: 'mpr-about-row' },
                  h('span', { className: 'mpr-about-label' }, t('strengths')),
                  h(
                    'div',
                    { className: 'mpr-strength-tags' },
                    inferStrengths(model).map((key) =>
                      h('span', { className: 'mpr-strength', key }, t(STRENGTH_KEY[key] || 'strGeneral')),
                    ),
                  ),
                ),
              ),
              h(
                'div',
                { className: 'mpr-detail-actions mpr-detail-actions-top' },
                h(
                  'a',
                  {
                    className: 'mpr-button mpr-button-primary mpr-api-link',
                    href: providerApi(model).url,
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                  t('apiConsole') + ' · ' + providerApi(model).name,
                  h('span', { className: 'mpr-external-arrow', 'aria-hidden': true }, ' ↗'),
                ),
                h(
                  'a',
                  { className: 'mpr-text-button mpr-external', href: modelUrl, target: '_blank', rel: 'noreferrer' },
                  t('openModel') + ' ↗',
                ),
              ),
              h(
                'div',
                { className: 'mpr-detail-stats' },
                h(
                  'div',
                  null,
                  h('span', null, t('currentPrice')),
                  h('b', null, formatUnitPrice(model.price.input * 1000000) + ' / ' + formatUnitPrice(model.price.output * 1000000)),
                  h('small', null, t('perMillionShort')),
                ),
                h(
                  'div',
                  null,
                  h('span', null, t('basePrice')),
                  h('b', null, formatUnitPrice(baseInput * 1000000) + ' / ' + formatUnitPrice(baseOutput * 1000000)),
                  h('small', null, t('saving') + ': ' + (discount > 0 ? '−' + discount + '%' : '—')),
                ),
                h(
                  'div',
                  null,
                  h('span', null, t('cacheRead')),
                  h('b', null, formatUnitPrice(model.price.cacheRead * 1000000)),
                  h('small', null, t('perMillionShort')),
                ),
                h(
                  'div',
                  null,
                  h('span', null, t('cacheWrite')),
                  h(
                    'b',
                    null,
                    model.price.cacheWrite === null ? '—' : formatUnitPrice(model.price.cacheWrite * 1000000),
                  ),
                  h('small', null, t('perMillionShort')),
                ),
                h(
                  'div',
                  null,
                  h('span', null, t('context')),
                  h('b', null, formatContext(model.contextLength)),
                  h('small', null, t('tokensUnit')),
                ),
                h(
                  'div',
                  null,
                  h('span', null, t('maxOutput')),
                  h('b', null, model.maxOutput ? formatContext(model.maxOutput) : '—'),
                  h('small', null, t('tokensUnit')),
                ),
              ),
              h(
                'div',
                { className: 'mpr-detail-grid' },
                h('div', { className: 'mpr-detail-chart' }, renderChart(model, detailSchedule, maxBar)),
                h('div', { className: 'mpr-detail-segments' }, renderSegments(detailSchedule)),
              ),
              h(
                'div',
                { className: 'mpr-notes' },
                h('span', null, model.hasTimePricing ? t('timePricingNote') : t('flatPricing')),
                model.isFree ? h('span', { className: 'mpr-note-warn' }, t('freeNote')) : null,
                model.isBatch ? h('span', { className: 'mpr-note-warn' }, t('batchNote')) : null,
              ),
              h(
                'div',
                { className: 'mpr-detail-foot' },
                h('span', { className: 'mpr-muted' }, t('estimateBasis') + ': ' + estimateSummary),
              ),
            ),
          ),
        );
      }

      function renderEstimateModal() {
        if (!showEstimate) return null;
        const presets = [
          { key: 'qa', label: t('presetQa'), values: { inputTokens: 2000, outputTokens: 500, requestsPerDay: 200, cacheRate: 0.2 } },
          { key: 'support', label: t('presetSupport'), values: { inputTokens: 8000, outputTokens: 800, requestsPerDay: 2000, cacheRate: 0.5 } },
          { key: 'coding', label: t('presetCoding'), values: { inputTokens: 30000, outputTokens: 4000, requestsPerDay: 300, cacheRate: 0.4 } },
          { key: 'batch', label: t('presetBatch'), values: { inputTokens: 60000, outputTokens: 2000, requestsPerDay: 100, cacheRate: 0.1 } },
        ];
        return h(
          'div',
          {
            className: 'mpr-modal-backdrop',
            onMouseDown: (event) => {
              if (event.target === event.currentTarget) closeOverlays();
            },
          },
          h(
            'div',
            {
              className: 'mpr-modal mpr-estimate-modal',
              role: 'dialog',
              'aria-modal': 'true',
              'aria-labelledby': 'mpr-estimate-title',
              onMouseDown: (event) => event.stopPropagation(),
            },
            h(
              'div',
              { className: 'mpr-modal-head' },
              h(
                'div',
                { className: 'mpr-modal-title-text' },
                h('div', { className: 'mpr-modal-kicker' }, t('estimateTool')),
                h('h2', { id: 'mpr-estimate-title' }, t('estimateTitle')),
                h('p', null, t('estimateSubtitle')),
              ),
              h(
                'button',
                {
                  type: 'button',
                  className: 'mpr-modal-close',
                  onClick: closeOverlays,
                  'aria-label': t('close'),
                  autoFocus: true,
                },
                '×',
              ),
            ),
            h(
              'div',
              { className: 'mpr-modal-body' },
              h(
                'div',
                { className: 'mpr-preset-block' },
                h('div', { className: 'mpr-preset-label' }, t('presetLabel')),
                h(
                  'div',
                  { className: 'mpr-preset-row' },
                  presets.map((preset) =>
                    h(
                      'button',
                      {
                        type: 'button',
                        key: preset.key,
                        className: 'mpr-chip mpr-preset-chip',
                        onClick: () => setParams((previous) => Object.assign({}, previous, preset.values)),
                      },
                      preset.label,
                    ),
                  ),
                ),
              ),
              h(
                'div',
                { className: 'mpr-estimate-grid' },
                h(NumberField, {
                  label: t('inputTokens'),
                  value: params.inputTokens,
                  min: 0,
                  max: 2000000,
                  step: 500,
                  suffix: t('tokensUnit'),
                  onChange: (value) => setParam('inputTokens', value),
                }),
                h(NumberField, {
                  label: t('outputTokens'),
                  value: params.outputTokens,
                  min: 0,
                  max: 1000000,
                  step: 100,
                  suffix: t('tokensUnit'),
                  onChange: (value) => setParam('outputTokens', value),
                }),
                h(NumberField, {
                  label: t('requestsPerDay'),
                  value: params.requestsPerDay,
                  min: 1,
                  max: 10000000,
                  step: 1,
                  suffix: t('requestsUnit'),
                  onChange: (value) => setParam('requestsPerDay', value),
                }),
                h(
                  'label',
                  { className: 'mpr-field mpr-slider-field' },
                  h('span', { className: 'mpr-field-label' }, t('cacheHitRate')),
                  h(
                    'span',
                    { className: 'mpr-slider-shell' },
                    h('input', {
                      type: 'range',
                      min: 0,
                      max: 100,
                      step: 5,
                      value: Math.round(params.cacheRate * 100),
                      onChange: (event) => setParam('cacheRate', Number(event.target.value) / 100),
                    }),
                    h('span', { className: 'mpr-slider-value' }, Math.round(params.cacheRate * 100) + '%'),
                  ),
                ),
              ),
              h(
                'div',
                { className: 'mpr-help-grid' },
                h('div', null, h('strong', null, t('inputTokens')), h('span', null, t('inputHint'))),
                h('div', null, h('strong', null, t('outputTokens')), h('span', null, t('outputHint'))),
                h('div', null, h('strong', null, t('requestsPerDay')), h('span', null, t('requestsHint'))),
                h('div', null, h('strong', null, t('cacheHitRate')), h('span', null, t('cacheHint'))),
              ),
              h(
                'div',
                { className: 'mpr-estimate-preview' },
                h('span', { className: 'mpr-mini-label' }, t('estimatePreview')),
                result.best
                  ? h(
                      'div',
                      { className: 'mpr-estimate-preview-row' },
                      h('strong', null, result.best.name),
                      h('b', null, formatCost(result.best.cost) + t('perDay')),
                    )
                  : h('span', { className: 'mpr-muted' }, t('noBest')),
                h('small', null, estimateSummary),
              ),
            ),
            h(
              'div',
              { className: 'mpr-modal-foot' },
              h('button', { type: 'button', className: 'mpr-text-button', onClick: resetWorkload }, t('reset')),
              h('button', { type: 'button', className: 'mpr-button mpr-button-primary', onClick: closeOverlays }, t('done')),
            ),
          ),
        );
      }

      function renderSkeleton() {
        return h(
          'div',
          { className: 'mpr-skeleton-wrap', 'aria-busy': 'true' },
          h('div', { className: 'mpr-skeleton mpr-skeleton-hero' }),
          h('div', { className: 'mpr-skeleton mpr-skeleton-row' }),
          h('div', { className: 'mpr-skeleton mpr-skeleton-row' }),
          h('div', { className: 'mpr-skeleton mpr-skeleton-body' }),
          h('div', { className: 'mpr-skeleton-loading' }, t('loading')),
        );
      }

      function renderFailure() {
        return h(
          'section',
          { className: 'mpr-card mpr-failure' },
          h('div', { className: 'mpr-failure-mark' }, '!'),
          h('h2', null, t('loadError')),
          h('p', null, error || t('noMatchHint')),
          h('button', { type: 'button', className: 'mpr-button mpr-button-primary', onClick: refresh },
            t('retry')),
        );
      }

      return h(
        React.Fragment,
        null,
        h('style', { key: 'mpr-styles' }, CSS),
        h(
          'div',
          { className: 'mpr-page' },
          renderHeader(),
          error && models
            ? h(
                'div',
                { className: 'mpr-alert', role: 'alert' },
                h('span', null, t('loadError') + ': ' + error),
                h('button', { type: 'button', className: 'mpr-text-button', onClick: refresh }, t('retry')),
              )
            : null,
          !models && phase === 'loading'
            ? renderSkeleton()
            : !models
              ? renderFailure()
              : h(
                  'div',
                  { className: 'mpr-body' },
                  h('section', { className: 'mpr-hero' }, renderBest(), renderClock()),
                  renderRanking(),
                ),
          h(
            'footer',
            { className: 'mpr-footer' },
            h('span', null, t('sourceNote')),
            h(
              'a',
              { href: SOURCE_URL, target: '_blank', rel: 'noreferrer' },
              t('sourceLink') + ' · ' + t('openRouter') + ' ↗',
            ),
          ),
        ),
        renderEstimateModal(),
        renderDetailModal(),
      );
    }


    function SidebarIcon(props) {
      const size = props && props.size ? props.size : 20;
      return h(
        'svg',
        {
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          'aria-hidden': true,
          style: { display: 'block' },
        },
        h('circle', { cx: 10.5, cy: 10.5, r: 7, stroke: 'currentColor', strokeWidth: 1.5, opacity: 0.55 }),
        h('circle', { cx: 10.5, cy: 10.5, r: 3.6, stroke: 'currentColor', strokeWidth: 1.5, opacity: 0.8 }),
        h('path', { d: 'M10.5 10.5 10.5 3.5A7 7 0 0 1 16.4 6.7Z', fill: 'currentColor', opacity: 0.18 }),
        h('path', { d: 'M10.5 10.5 16.5 6.7', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }),
        h('circle', { cx: 10.5, cy: 10.5, r: 1.2, fill: 'currentColor' }),
        h('path', { d: 'M14 14.5 20.5 14.5a1.7 1.7 0 0 1 1.7 1.7v2.1a1.7 1.7 0 0 1-1.7 1.7H14l-2.2-2.75Z', fill: 'currentColor', opacity: 0.9 }),
        h('path', { d: 'M17.4 15.6v4.1M18.9 16.6h-2.1a1 1 0 0 0 0 2h1.2a1 1 0 0 1 0 2h-2.1', stroke: 'var(--dsw-alias-bg-base)', strokeWidth: 1, strokeLinecap: 'round' }),
      );
    }

    function apply(ctx) {
      ctx.effect(() => ctx.locale.register(NS, { zh: LOCALES.zh, en: LOCALES.en }));
      const t = ctx.locale.bind(NS);
      const Panel = () => h(PriceRadarPanel, { ctx, t });
      ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: 'model-price-radar' }, Panel));
      ctx.slots.inject('sidebar.panellist', () =>
        ctx.slots.register(
          { name: 'sidebar.panellist', id: 'model-price-radar', order: 20, label: () => t('title') },
          SidebarIcon,
        ),
      );
    }

    const CSS = `
.mpr-page {
  --mpr-radius: 14px;
  --mpr-gap: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 26px 30px 30px;
  color: var(--dsw-alias-label-primary);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  font-size: 13px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
}
.mpr-page *, .mpr-page *::before, .mpr-page *::after { box-sizing: border-box; }
.mpr-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; padding-bottom: 20px; }
.mpr-eyebrow { color: var(--dsw-alias-brand-primary); font-size: 10px; font-weight: 750; letter-spacing: .16em; text-transform: uppercase; }
.mpr-title { margin: 5px 0 4px; font-size: 26px; line-height: 1.2; letter-spacing: -.02em; font-weight: 700; }
.mpr-subtitle { margin: 0; color: var(--dsw-alias-label-secondary); font-size: 13px; }
.mpr-header-side { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; min-width: 250px; }
.mpr-status { display: inline-flex; align-items: center; gap: 7px; padding: 5px 10px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 999px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-bg-layer-1); font-size: 11px; font-weight: 600; }
.mpr-status.is-live { color: var(--dsw-alias-state-success-primary); border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 30%, var(--dsw-alias-border-l1)); }
.mpr-status.is-error { color: var(--dsw-alias-state-error-primary); border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 30%, var(--dsw-alias-border-l1)); }
.mpr-status-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.mpr-status.is-live .mpr-status-dot { animation: mpr-pulse 2s ease-out infinite; }
.mpr-updated { color: var(--dsw-alias-label-secondary); font-size: 11px; display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 5px; }
.mpr-updated-sep { opacity: .55; }
.mpr-stale { color: var(--dsw-alias-state-warn-primary); }
.mpr-button { border: 1px solid var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-primary); border-radius: 8px; padding: 6px 12px; font: inherit; font-size: 12px; font-weight: 600; cursor: pointer; transition: background .15s, border-color .15s, transform .15s; }
.mpr-button:hover:not(:disabled) { background: var(--dsw-alias-bg-layer-2); border-color: var(--dsw-alias-label-secondary); }
.mpr-button:active:not(:disabled) { transform: translateY(1px); }
.mpr-button:disabled { opacity: .55; cursor: default; }
.mpr-button-primary { color: var(--dsw-alias-brand-primary); background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, var(--dsw-alias-bg-layer-1)); border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, var(--dsw-alias-border-l1)); }
.mpr-button-primary:hover:not(:disabled) { background: color-mix(in srgb, var(--dsw-alias-brand-primary) 22%, var(--dsw-alias-bg-layer-1)); border-color: var(--dsw-alias-brand-primary); }
.mpr-text-button { appearance: none; border: 0; background: transparent; color: var(--dsw-alias-brand-primary); padding: 2px 0; font: inherit; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: none; }
.mpr-text-button:hover { text-decoration: underline; text-underline-offset: 3px; }
.mpr-body { display: flex; flex-direction: column; gap: var(--mpr-gap); }
.mpr-hero { display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(300px, 1fr); gap: var(--mpr-gap); }
.mpr-best-card { position: relative; overflow: hidden; border: 1px solid var(--dsw-alias-border-l1); border-radius: var(--mpr-radius); padding: 18px 20px; background: var(--dsw-alias-bg-layer-1); min-height: 210px; }
.mpr-best-card::after { content: ""; position: absolute; width: 260px; height: 260px; right: -100px; top: -120px; border-radius: 50%; background: radial-gradient(circle, color-mix(in srgb, var(--dsw-alias-brand-primary) 16%, transparent), transparent 68%); pointer-events: none; }
.mpr-kicker { display: flex; align-items: center; gap: 8px; color: var(--dsw-alias-label-secondary); font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
.mpr-pulse { width: 7px; height: 7px; border-radius: 50%; background: var(--dsw-alias-state-success-primary); box-shadow: 0 0 0 4px color-mix(in srgb, var(--dsw-alias-state-success-primary) 14%, transparent); animation: mpr-pulse 2s ease-out infinite; }
.mpr-best-head { display: flex; align-items: center; gap: 12px; margin-top: 14px; position: relative; z-index: 1; }
.mpr-provider-mark { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 8px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-brand-primary); font-size: 10px; font-weight: 800; letter-spacing: .02em; }
.mpr-best-title { flex: 1 1 auto; min-width: 0; }
.mpr-best-title h2 { margin: 0; font-size: 19px; line-height: 1.25; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-best-sub { margin-top: 2px; color: var(--dsw-alias-label-secondary); font-size: 11px; display: flex; align-items: center; gap: 5px; }
.mpr-best-cost { flex: 0 0 auto; text-align: right; }
.mpr-best-cost strong { display: block; font-size: 27px; line-height: 1.1; letter-spacing: -.03em; }
.mpr-best-cost span { color: var(--dsw-alias-label-secondary); font-size: 11px; }
.mpr-best-cost small { display: block; color: var(--dsw-alias-label-secondary); font-size: 10px; margin-top: 2px; }
.mpr-best-meta { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-top: 16px; position: relative; z-index: 1; }
.mpr-best-meta > div { padding: 9px 11px; border-radius: 9px; background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l1); min-width: 0; }
.mpr-best-meta span { display: block; color: var(--dsw-alias-label-secondary); font-size: 10px; margin-bottom: 2px; }
.mpr-best-meta b { display: block; font-size: 13px; font-weight: 650; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-best-foot { display: flex; align-items: flex-end; justify-content: space-between; gap: 14px; margin-top: 14px; position: relative; z-index: 1; }
.mpr-best-note { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.mpr-saving { color: var(--dsw-alias-state-success-primary); font-weight: 700; font-size: 12px; }
.mpr-muted { color: var(--dsw-alias-label-secondary); font-size: 11px; }
.mpr-best-empty { display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 8px; }
.mpr-best-empty strong { font-size: 18px; }
.mpr-best-empty p { margin: 0; color: var(--dsw-alias-label-secondary); }
.mpr-clock-card { border: 1px solid var(--dsw-alias-border-l1); border-radius: var(--mpr-radius); background: var(--dsw-alias-bg-layer-1); padding: 16px 18px; display: flex; flex-direction: column; min-height: 210px; }
.mpr-clock-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 13px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.mpr-mini-label { color: var(--dsw-alias-label-secondary); font-size: 10px; font-weight: 650; letter-spacing: .05em; text-transform: uppercase; }
.mpr-clock { margin-top: 2px; font-size: 30px; line-height: 1.12; font-weight: 700; letter-spacing: -.02em; }
.mpr-date { color: var(--dsw-alias-label-secondary); font-size: 11px; margin-top: 2px; }
.mpr-now-pill { padding: 3px 9px; border-radius: 999px; color: var(--dsw-alias-state-success-primary); background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 11%, transparent); font-size: 10px; font-weight: 700; }
.mpr-clock-section { padding-top: 11px; flex: 1; min-height: 0; }
.mpr-clock-section-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; color: var(--dsw-alias-label-secondary); font-size: 11px; font-weight: 650; margin-bottom: 6px; }
.mpr-clock-list { display: flex; flex-direction: column; gap: 2px; }
.mpr-clock-row { display: flex; align-items: center; gap: 7px; width: 100%; min-width: 0; text-align: left; border: 0; background: transparent; color: var(--dsw-alias-label-primary); padding: 5px 4px; border-radius: 6px; font: inherit; cursor: pointer; }
.mpr-clock-row:hover, .mpr-clock-row.is-selected { background: var(--dsw-alias-bg-layer-2); }
.mpr-clock-model { flex: 1 1 auto; min-width: 0; display: flex; align-items: baseline; gap: 7px; }
.mpr-clock-model strong { font-size: 11px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-clock-model small { color: var(--dsw-alias-label-secondary); font-size: 10px; flex: 0 0 auto; }
.mpr-clock-band { flex: 0 0 auto; color: var(--dsw-alias-label-secondary); font-size: 10px; font-weight: 650; }
.mpr-tiny-dot { flex: 0 0 auto; width: 6px; height: 6px; border-radius: 50%; background: var(--dsw-alias-state-idle-primary); }
.mpr-fill-peak { background: var(--dsw-alias-state-warn-primary); }
.mpr-fill-offpeak { background: var(--dsw-alias-state-success-primary); }
.mpr-fill-standard { background: var(--dsw-alias-state-idle-primary); }
.mpr-fill-free { background: var(--dsw-alias-brand-primary); }
.mpr-card { border: 1px solid var(--dsw-alias-border-l1); border-radius: var(--mpr-radius); background: var(--dsw-alias-bg-layer-1); padding: 16px 20px; }
.mpr-section-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 13px; }
.mpr-section-title { margin: 0; font-size: 15px; line-height: 1.35; font-weight: 700; }
.mpr-section-hint { margin: 2px 0 0; color: var(--dsw-alias-label-secondary); font-size: 11px; }
.mpr-workload-grid { display: grid; grid-template-columns: repeat(4, minmax(130px, 1fr)) minmax(180px, 1.25fr); gap: 11px; }
.mpr-field { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
.mpr-field-label { color: var(--dsw-alias-label-secondary); font-size: 11px; font-weight: 600; }
.mpr-input-shell, .mpr-select-shell { display: flex; align-items: center; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); border-radius: 8px; overflow: hidden; transition: border-color .15s; }
.mpr-input-shell:focus-within, .mpr-select-shell:focus-within { border-color: var(--dsw-alias-brand-primary); }
.mpr-input, .mpr-select { min-width: 0; width: 100%; border: 0; outline: 0; background: transparent; color: var(--dsw-alias-label-primary); font: inherit; font-size: 12px; padding: 7px 9px; }
.mpr-input { font-variant-numeric: tabular-nums; }
.mpr-input-suffix { flex: 0 0 auto; padding-right: 9px; color: var(--dsw-alias-label-secondary); font-size: 10px; }
.mpr-select { appearance: auto; cursor: pointer; }
.mpr-slider-shell { display: flex; align-items: center; gap: 9px; height: 34px; padding: 0 2px; }
.mpr-slider-shell input { width: 100%; accent-color: var(--dsw-alias-brand-primary); }
.mpr-slider-value { flex: 0 0 42px; text-align: right; font-size: 12px; font-weight: 650; }
.mpr-switch-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px 16px; margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--dsw-alias-border-l1); }
.mpr-switch { display: inline-flex; align-items: center; gap: 8px; min-width: 0; cursor: pointer; color: var(--dsw-alias-label-secondary); font-size: 11px; }
.mpr-switch input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
.mpr-switch-track { flex: 0 0 auto; width: 28px; height: 16px; padding: 2px; border-radius: 999px; background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l2); transition: background .15s, border-color .15s; }
.mpr-switch-thumb { display: block; width: 10px; height: 10px; border-radius: 50%; background: var(--dsw-alias-label-secondary); transition: transform .15s, background .15s; }
.mpr-switch input:checked + .mpr-switch-track { background: var(--dsw-alias-brand-primary); border-color: var(--dsw-alias-brand-primary); }
.mpr-switch input:checked + .mpr-switch-track .mpr-switch-thumb { transform: translateX(12px); background: var(--dsw-alias-bg-base); }
.mpr-switch input:focus-visible + .mpr-switch-track { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 2px; }
.mpr-switch-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-stat-row { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
.mpr-stat { padding: 3px 8px; border-radius: 999px; background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-secondary); font-size: 10px; white-space: nowrap; }
.mpr-stat b { color: var(--dsw-alias-label-primary); font-weight: 700; }
.mpr-toolbar { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; padding: 10px 0 12px; }
.mpr-search { flex: 1 1 240px; display: flex; align-items: center; gap: 6px; min-width: 160px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); border-radius: 8px; padding: 0 9px; }
.mpr-search:focus-within { border-color: var(--dsw-alias-brand-primary); }
.mpr-search-icon { color: var(--dsw-alias-label-secondary); font-size: 16px; line-height: 1; }
.mpr-search input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--dsw-alias-label-primary); font: inherit; font-size: 12px; padding: 7px 0; }
.mpr-sort { display: inline-flex; align-items: center; gap: 6px; color: var(--dsw-alias-label-secondary); font-size: 11px; }
.mpr-sort select { border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); border-radius: 7px; padding: 6px 8px; font: inherit; font-size: 11px; }
.mpr-result-count { color: var(--dsw-alias-label-secondary); font-size: 11px; white-space: nowrap; }
.mpr-table-wrap { width: 100%; max-height: 620px; overflow: auto; border: 1px solid var(--dsw-alias-border-l1); border-radius: 10px; }
.mpr-table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: 12px; min-width: 660px; }
.mpr-table th { position: sticky; top: 0; z-index: 2; background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-secondary); font-size: 10px; font-weight: 650; text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--dsw-alias-border-l1); white-space: nowrap; }
.mpr-table td { padding: 9px 10px; border-bottom: 1px solid var(--dsw-alias-border-l1); vertical-align: middle; }
.mpr-table tbody tr:last-child td { border-bottom: 0; }
.mpr-row { cursor: pointer; outline: none; transition: background .12s; }
.mpr-row:hover, .mpr-row:focus-visible { background: var(--dsw-alias-bg-layer-2); }
.mpr-row.is-selected { background: color-mix(in srgb, var(--dsw-alias-brand-primary) 7%, transparent); }
.mpr-row.is-best td:first-child { box-shadow: inset 2px 0 0 var(--dsw-alias-brand-primary); }
.mpr-col-rank { width: 72px; }
.mpr-col-price { text-align: right !important; white-space: nowrap; }
.mpr-col-cost { font-weight: 700; }
.mpr-col-context { text-align: right !important; color: var(--dsw-alias-label-secondary); white-space: nowrap; }
.mpr-rank-number { color: var(--dsw-alias-label-secondary); font-size: 11px; }
.mpr-best-badge { display: inline-block; padding: 2px 6px; border-radius: 999px; background: color-mix(in srgb, var(--dsw-alias-brand-primary) 13%, transparent); color: var(--dsw-alias-brand-primary); font-size: 9px; font-weight: 700; }
.mpr-model-cell { display: flex; align-items: center; gap: 8px; min-width: 0; }
.mpr-model-text { min-width: 0; }
.mpr-model-name { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 300px; }
.mpr-model-sub { display: flex; align-items: center; flex-wrap: wrap; gap: 4px; color: var(--dsw-alias-label-secondary); font-size: 10px; margin-top: 1px; }
.mpr-dot-sep { opacity: .5; }
.mpr-tag { display: inline-block; padding: 0 5px; border-radius: 4px; background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-secondary); font-size: 9px; line-height: 15px; }
.mpr-tag-free { color: var(--dsw-alias-brand-primary); }
.mpr-tag-time { color: var(--dsw-alias-state-warn-primary); }
.mpr-price { font-variant-numeric: tabular-nums; }
.mpr-cost { font-variant-numeric: tabular-nums; color: var(--dsw-alias-label-primary); }
.mpr-table-foot { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; padding-top: 11px; }
.mpr-load-hint { color: var(--dsw-alias-label-secondary); font-size: 10px; }
.mpr-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; padding: 34px 16px; text-align: center; color: var(--dsw-alias-label-secondary); }
.mpr-empty strong { color: var(--dsw-alias-label-primary); font-size: 14px; }
.mpr-empty .mpr-button { margin-top: 8px; }
.mpr-time-head { align-items: flex-start; }
.mpr-time-chips { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 6px; max-width: 58%; }
.mpr-chip { display: inline-flex; align-items: center; gap: 6px; max-width: 230px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-secondary); border-radius: 999px; padding: 4px 9px; font: inherit; font-size: 10px; cursor: pointer; overflow: hidden; }
.mpr-chip > span:nth-child(2) { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-chip small { flex: 0 0 auto; opacity: .75; }
.mpr-chip:hover { border-color: var(--dsw-alias-label-secondary); }
.mpr-chip.is-active { color: var(--dsw-alias-label-primary); border-color: var(--dsw-alias-brand-primary); box-shadow: 0 0 0 1px var(--dsw-alias-brand-primary) inset; }
.mpr-selected-head { display: flex; align-items: center; gap: 11px; padding: 12px 14px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); border-radius: 10px; margin-bottom: 14px; }
.mpr-selected-title { flex: 1 1 auto; min-width: 0; }
.mpr-selected-title h3 { margin: 0; font-size: 14px; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-selected-title p { margin: 2px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-selected-numbers { display: flex; gap: 18px; flex: 0 0 auto; }
.mpr-selected-numbers > div { min-width: 74px; }
.mpr-selected-numbers span { display: block; color: var(--dsw-alias-label-secondary); font-size: 9px; }
.mpr-selected-numbers b { display: block; font-size: 11px; font-weight: 650; white-space: nowrap; }
.mpr-positive { color: var(--dsw-alias-state-success-primary); }
.mpr-external { flex: 0 0 auto; white-space: nowrap; }
.mpr-time-body { display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(250px, 1fr); gap: 18px; }
.mpr-chart-panel { min-width: 0; border: 1px solid var(--dsw-alias-border-l1); border-radius: 10px; padding: 12px 14px 10px; background: var(--dsw-alias-bg-base); }
.mpr-chart-title { font-size: 11px; font-weight: 700; margin: 0 0 9px; }
.mpr-legend { display: flex; flex-wrap: wrap; gap: 12px; color: var(--dsw-alias-label-secondary); font-size: 10px; margin-bottom: 12px; }
.mpr-legend-item { display: inline-flex; align-items: center; gap: 5px; }
.mpr-legend-item i { width: 7px; height: 7px; border-radius: 2px; }
.mpr-bars { display: grid; grid-template-columns: repeat(24, minmax(0, 1fr)); align-items: end; gap: 3px; height: 150px; }
.mpr-bar-col { display: flex; align-items: flex-end; justify-content: stretch; height: 100%; min-width: 0; position: relative; border-radius: 3px; }
.mpr-bar-col:hover { background: var(--dsw-alias-bg-layer-2); }
.mpr-bar-col.is-now { background: color-mix(in srgb, var(--dsw-alias-brand-primary) 9%, transparent); box-shadow: 0 0 0 1px var(--dsw-alias-brand-primary) inset; }
.mpr-bar { width: 100%; border-radius: 3px 3px 1px 1px; min-height: 4px; opacity: .88; transition: opacity .15s, height .25s ease; }
.mpr-bar-col:hover .mpr-bar { opacity: 1; }
.mpr-axis { display: flex; justify-content: space-between; gap: 4px; color: var(--dsw-alias-label-secondary); font-size: 9px; margin-top: 6px; padding: 0 1px; }
.mpr-chart-caption { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 5px 12px; color: var(--dsw-alias-label-secondary); font-size: 10px; margin-top: 9px; padding-top: 8px; border-top: 1px solid var(--dsw-alias-border-l1); }
.mpr-segments { min-width: 0; border: 1px solid var(--dsw-alias-border-l1); border-radius: 10px; padding: 9px 12px; background: var(--dsw-alias-bg-base); max-height: 260px; overflow: auto; }
.mpr-segments-title { color: var(--dsw-alias-label-secondary); font-size: 10px; font-weight: 650; margin: 0 0 4px; }
.mpr-segment { display: flex; align-items: center; gap: 7px; padding: 6px 5px; border-radius: 6px; border-bottom: 1px solid var(--dsw-alias-border-l1); font-size: 10px; }
.mpr-segment:last-child { border-bottom: 0; }
.mpr-segment.is-active { background: color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, transparent); }
.mpr-segment-dot { flex: 0 0 auto; width: 6px; height: 6px; border-radius: 50%; }
.mpr-segment-time { flex: 0 0 88px; color: var(--dsw-alias-label-primary); font-weight: 600; }
.mpr-segment-band { flex: 0 0 48px; color: var(--dsw-alias-label-secondary); }
.mpr-segment-price { flex: 1 1 auto; text-align: right; color: var(--dsw-alias-label-secondary); white-space: nowrap; }
.mpr-segment-now { flex: 0 0 auto; color: var(--dsw-alias-brand-primary); font-size: 9px; font-weight: 700; }
.mpr-notes { display: flex; flex-direction: column; gap: 3px; color: var(--dsw-alias-label-secondary); font-size: 10px; margin-top: 11px; }
.mpr-note-warn { color: var(--dsw-alias-state-warn-primary); }
.mpr-badge { display: inline-block; padding: 2px 7px; border-radius: 999px; font-size: 10px; line-height: 15px; font-weight: 650; white-space: nowrap; }
.mpr-badge.mpr-band-peak { color: var(--dsw-alias-state-warn-primary); background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 12%, transparent); }
.mpr-badge.mpr-band-offpeak { color: var(--dsw-alias-state-success-primary); background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 12%, transparent); }
.mpr-badge.mpr-band-standard { color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-bg-layer-2); }
.mpr-badge.mpr-band-free { color: var(--dsw-alias-brand-primary); background: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent); }
.mpr-alert { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 9px 13px; margin-bottom: var(--mpr-gap); border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary) 35%, var(--dsw-alias-border-l1)); border-radius: 9px; background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 8%, transparent); color: var(--dsw-alias-state-error-primary); font-size: 11px; }
.mpr-failure { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; min-height: 330px; text-align: center; }
.mpr-failure-mark { display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; border: 1px solid color-mix(in srgb, var(--dsw-alias-state-warn-primary) 40%, var(--dsw-alias-border-l1)); color: var(--dsw-alias-state-warn-primary); font-size: 20px; font-weight: 700; }
.mpr-failure h2 { margin: 5px 0 0; font-size: 17px; }
.mpr-failure p { margin: 0; color: var(--dsw-alias-label-secondary); font-size: 11px; }
.mpr-failure .mpr-button { margin-top: 8px; }
.mpr-skeleton-wrap { position: relative; display: flex; flex-direction: column; gap: 14px; }
.mpr-skeleton { border: 1px solid var(--dsw-alias-border-l1); border-radius: var(--mpr-radius); background: linear-gradient(90deg, var(--dsw-alias-bg-layer-1), var(--dsw-alias-bg-layer-2), var(--dsw-alias-bg-layer-1)); background-size: 200% 100%; animation: mpr-shimmer 1.6s linear infinite; }
.mpr-skeleton-hero { height: 210px; }
.mpr-skeleton-row { height: 94px; }
.mpr-skeleton-body { height: 300px; }
.mpr-skeleton-loading { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: var(--dsw-alias-label-secondary); font-size: 12px; pointer-events: none; }
.mpr-footer { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; flex-wrap: wrap; color: var(--dsw-alias-label-secondary); font-size: 10px; padding-top: 18px; line-height: 1.55; }
.mpr-footer a { color: var(--dsw-alias-brand-primary); text-decoration: none; white-space: nowrap; }
.mpr-footer a:hover { text-decoration: underline; text-underline-offset: 3px; }
.mpr-header-actions { display: flex; align-items: center; gap: 7px; margin-top: 2px; }
.mpr-button-ghost { background: transparent; border-color: var(--dsw-alias-border-l1); color: var(--dsw-alias-label-primary); display: inline-flex; align-items: center; gap: 5px; }
.mpr-button-ghost:hover:not(:disabled) { background: var(--dsw-alias-bg-layer-2); }
.mpr-button-icon { color: var(--dsw-alias-brand-primary); font-size: 13px; line-height: 1; }
.mpr-section-title-wrap { min-width: 0; }
.mpr-basis { display: flex; align-items: center; flex-wrap: wrap; gap: 4px 9px; margin-top: 5px; color: var(--dsw-alias-label-secondary); font-size: 10px; }
.mpr-basis-tool { appearance: none; border: 0; background: transparent; color: var(--dsw-alias-brand-primary); padding: 0; font: inherit; font-size: 10px; font-weight: 650; cursor: pointer; }
.mpr-basis-tool:hover { text-decoration: underline; text-underline-offset: 2px; }
.mpr-filter-row { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; padding: 0 0 12px; }
.mpr-filter-label { color: var(--dsw-alias-label-secondary); font-size: 10px; font-weight: 650; margin-right: 2px; }
.mpr-filter-chip { border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-secondary); border-radius: 999px; padding: 3px 8px; font: inherit; font-size: 10px; cursor: pointer; white-space: nowrap; }
.mpr-filter-chip:hover { border-color: var(--dsw-alias-label-secondary); color: var(--dsw-alias-label-primary); }
.mpr-filter-chip.is-active { color: var(--dsw-alias-brand-primary); border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent); }
.mpr-filter-context { display: inline-flex; align-items: center; gap: 5px; margin-left: 4px; color: var(--dsw-alias-label-secondary); font-size: 10px; }
.mpr-filter-context select { border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); border-radius: 6px; padding: 3px 5px; font: inherit; font-size: 10px; }
.mpr-filter-reset { margin-left: auto; font-size: 10px; }
.mpr-col-detail { width: 56px; text-align: center !important; }
.mpr-row-arrow { color: var(--dsw-alias-label-secondary); font-size: 18px; line-height: 1; opacity: .55; }
.mpr-row:hover .mpr-row-arrow { color: var(--dsw-alias-brand-primary); opacity: 1; }
.mpr-modal-backdrop { position: fixed; inset: 0; z-index: 1200; display: flex; align-items: center; justify-content: center; padding: 24px; background: color-mix(in srgb, var(--dsw-alias-bg-base) 64%, transparent); backdrop-filter: blur(4px); animation: mpr-fade .15s ease-out; }
.mpr-modal, .mpr-modal * { box-sizing: border-box; }
.mpr-modal { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; font-size: 13px; line-height: 1.5; font-variant-numeric: tabular-nums; display: flex; flex-direction: column; width: min(980px, 100%); max-height: min(88vh, 920px); border: 1px solid var(--dsw-alias-border-l2); border-radius: 16px; background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-primary); box-shadow: 0 24px 80px color-mix(in srgb, var(--dsw-alias-label-primary) 20%, transparent); overflow: hidden; animation: mpr-modal-in .18s ease-out; }
.mpr-estimate-modal { width: min(720px, 100%); max-height: min(88vh, 820px); }
.mpr-modal-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 18px 20px 14px; border-bottom: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); }
.mpr-modal-title-wrap { display: flex; align-items: flex-start; gap: 11px; min-width: 0; }
.mpr-modal-title-text { min-width: 0; }
.mpr-modal-kicker { color: var(--dsw-alias-brand-primary); font-size: 9px; font-weight: 750; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 2px; }
.mpr-modal-title-text h2 { margin: 0; font-size: 19px; line-height: 1.25; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-modal-title-text p { margin: 3px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10px; }
.mpr-modal-head-right { display: flex; align-items: flex-start; gap: 12px; flex: 0 0 auto; }
.mpr-detail-cost { text-align: right; }
.mpr-detail-cost strong { display: block; font-size: 24px; line-height: 1.1; letter-spacing: -.03em; }
.mpr-detail-cost span { color: var(--dsw-alias-label-secondary); font-size: 10px; }
.mpr-detail-cost small { display: block; color: var(--dsw-alias-label-secondary); font-size: 9px; margin-top: 2px; }
.mpr-modal-close { flex: 0 0 auto; width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-secondary); font: inherit; font-size: 19px; line-height: 1; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.mpr-modal-close:hover { color: var(--dsw-alias-label-primary); border-color: var(--dsw-alias-label-secondary); }
.mpr-modal-body { padding: 15px 20px 18px; overflow: auto; min-height: 0; }
.mpr-detail-tags { display: flex; align-items: center; flex-wrap: wrap; gap: 5px; margin-bottom: 11px; }
.mpr-detail-about { display: flex; flex-direction: column; gap: 6px; padding: 10px 12px; margin-bottom: 12px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 9px; background: var(--dsw-alias-bg-base); }
.mpr-about-row { display: flex; align-items: flex-start; gap: 12px; min-width: 0; }
.mpr-about-label { flex: 0 0 58px; color: var(--dsw-alias-label-secondary); font-size: 10px; padding-top: 1px; }
.mpr-about-row b { font-size: 12px; font-weight: 650; }
.mpr-strength-tags { display: flex; flex-wrap: wrap; gap: 5px; min-width: 0; }
.mpr-strength { display: inline-block; padding: 2px 7px; border-radius: 999px; background: color-mix(in srgb, var(--dsw-alias-brand-primary) 9%, transparent); color: var(--dsw-alias-brand-primary); font-size: 10px; line-height: 16px; }
.mpr-detail-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-bottom: 14px; }
.mpr-detail-stats > div { padding: 9px 11px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 9px; background: var(--dsw-alias-bg-layer-2); min-width: 0; }
.mpr-detail-stats span { display: block; color: var(--dsw-alias-label-secondary); font-size: 9px; margin-bottom: 2px; }
.mpr-detail-stats b { display: block; font-size: 12px; font-weight: 650; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-detail-stats small { display: block; color: var(--dsw-alias-label-secondary); font-size: 8px; margin-top: 1px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-detail-grid { display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(240px, 1fr); gap: 14px; }
.mpr-detail-chart, .mpr-detail-segments { min-width: 0; }
.mpr-detail-foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--dsw-alias-border-l1); }
.mpr-detail-actions { display: flex; align-items: center; justify-content: flex-start; flex-wrap: wrap; gap: 9px; }
.mpr-detail-actions-top { margin: -2px 0 12px; }
.mpr-api-link { white-space: nowrap; }
.mpr-preset-block { margin-bottom: 14px; }
.mpr-preset-label { color: var(--dsw-alias-label-secondary); font-size: 10px; font-weight: 650; margin-bottom: 5px; }
.mpr-preset-row { display: flex; flex-wrap: wrap; gap: 6px; }
.mpr-preset-chip { max-width: none; padding: 4px 10px; font-size: 10px; }
.mpr-estimate-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 11px; }
.mpr-estimate-grid .mpr-slider-field { grid-column: span 2; }
.mpr-help-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 16px; margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--dsw-alias-border-l1); }
.mpr-help-grid strong { display: block; font-size: 10px; font-weight: 650; margin-bottom: 2px; }
.mpr-help-grid span { display: block; color: var(--dsw-alias-label-secondary); font-size: 9px; line-height: 1.5; }
.mpr-estimate-preview { margin-top: 14px; padding: 11px 13px; border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 26%, var(--dsw-alias-border-l1)); border-radius: 10px; background: color-mix(in srgb, var(--dsw-alias-brand-primary) 7%, transparent); }
.mpr-estimate-preview-row { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-top: 3px; }
.mpr-estimate-preview-row strong { font-size: 13px; font-weight: 650; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mpr-estimate-preview-row b { flex: 0 0 auto; font-size: 15px; font-weight: 700; color: var(--dsw-alias-brand-primary); }
.mpr-estimate-preview small { display: block; margin-top: 3px; color: var(--dsw-alias-label-secondary); font-size: 9px; }
.mpr-modal-foot { display: flex; align-items: center; justify-content: flex-end; gap: 14px; padding: 12px 20px; border-top: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); }
@keyframes mpr-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes mpr-modal-in { from { opacity: 0; transform: translateY(8px) scale(.99); } to { opacity: 1; transform: none; } }

@keyframes mpr-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .4; } }
@keyframes mpr-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
@media (max-width: 1000px) {
  .mpr-page { padding: 22px 20px 26px; }
  .mpr-hero { grid-template-columns: 1fr; }
  .mpr-time-body { grid-template-columns: 1fr; }
  .mpr-workload-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mpr-switch-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mpr-time-chips { max-width: 100%; justify-content: flex-start; }
  .mpr-time-head { flex-direction: column; }
  .mpr-detail-grid { grid-template-columns: 1fr; }
  .mpr-detail-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mpr-modal-backdrop { padding: 14px; }
}
@media (max-width: 680px) {
  .mpr-page { padding: 18px 14px 22px; }
  .mpr-header { flex-direction: column; gap: 14px; }
  .mpr-header-side { align-items: flex-start; min-width: 0; width: 100%; }
  .mpr-updated { justify-content: flex-start; }
  .mpr-title { font-size: 23px; }
  .mpr-section-head { flex-direction: column; gap: 8px; }
  .mpr-best-meta { grid-template-columns: 1fr; }
  .mpr-best-foot { flex-direction: column; align-items: flex-start; }
  .mpr-workload-grid, .mpr-switch-grid { grid-template-columns: 1fr; }
  .mpr-selected-head { flex-wrap: wrap; }
  .mpr-selected-numbers { width: 100%; justify-content: space-between; }
  .mpr-selected-numbers > div { min-width: 0; }
  .mpr-bars { height: 120px; }
  .mpr-segment-time { flex-basis: 74px; }
  .mpr-segment-band { flex-basis: 42px; }
  .mpr-footer { flex-direction: column; gap: 6px; }
  .mpr-modal-backdrop { padding: 0; align-items: flex-end; }
  .mpr-modal { width: 100%; max-height: 92vh; border-radius: 16px 16px 0 0; }
  .mpr-modal-head { padding: 14px 14px 11px; }
  .mpr-modal-body { padding: 12px 14px 16px; }
  .mpr-modal-foot { padding: 10px 14px; }
  .mpr-estimate-grid, .mpr-help-grid, .mpr-detail-stats { grid-template-columns: 1fr; }
  .mpr-estimate-grid .mpr-slider-field { grid-column: auto; }
  .mpr-filter-context { margin-left: 0; }
  .mpr-filter-reset { margin-left: 0; }
  .mpr-header-actions { flex-wrap: wrap; }
  .mpr-detail-foot { flex-direction: column; align-items: flex-start; }
}
@media (prefers-reduced-motion: reduce) {
  .mpr-pulse, .mpr-status.is-live .mpr-status-dot, .mpr-skeleton { animation: none; }
  .mpr-bar, .mpr-switch-thumb, .mpr-switch-track { transition: none; }
  .mpr-modal-backdrop, .mpr-modal { animation: none; }
}
`;

    return {
      inject: ['slots', 'locale'],
      apply,
      __test: {
        parseModel,
        priceAt,
        bandAt,
        nextChange,
        buildSegments,
        buildBars,
        estimateCost,
        matchesTime,
        normalizeOverride,
        hhmmToMinutes,
        formatUnitPrice,
        providerApi,
        manufacturerOf,
        inferStrengths,
        nextVisibleCount,
        PriceRadarPanel,
        LOCALES,
      },
    };
  },
});
