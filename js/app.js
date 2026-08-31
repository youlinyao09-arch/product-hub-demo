/* 产品枢纽平台 — 双门户菜单与交互 */

const NAV_ARROW = '<svg class="nav-arrow" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const MENU_IPD = [
  {
    key: "market",
    name: "市场管理",
    children: [
      { name: "市场洞察", path: "#/market/insight" },
    ],
  },
  {
    key: "req",
    name: "需求管理",
    children: [
      { name: "需求总览", path: "#/req/overview" },
      { name: "需求清单", path: "#/req/list" },
      { name: "需求分析", path: "#/req/analysis" },
      { name: "需求分配", path: "#/req/assign" },
      { name: "需求仲裁", path: "#/req/arbitrate" },
      { name: "需求变更", path: "#/req/change" },
      { name: "需求开发", path: "#/req/dev" },
    ],
  },
  {
    key: "product",
    name: "产品管理",
    children: [
      { name: "产品图谱", path: "#/product/spectrum" },
      { name: "商业计划书总览", path: "#/product/bp-overview" },
      { name: "商业计划书任务发布", path: "#/product/bp-publish" },
      { name: "商业计划书任务处理", path: "#/product/bp-handle" },
    ],
  },
  {
    key: "config",
    name: "配置管理",
    children: [
      {
        name: "型谱配置",
        children: [
          { name: "型谱目录配置", path: "#/config/spectrum-catalog" },
          { name: "产品标签管理", path: "#/config/product-tags" },
        ],
      },
      {
        name: "产品IPD配置",
        children: [
          { name: "产品IPD团队", path: "#/config/ipd-team" },
          { name: "模板管理", path: "#/config/templates" },
          { name: "商业计划书评分规则", path: "#/config/bp-score" },
          { name: "需求设置规则", path: "#/config/req-rules" },
        ],
      },
      {
        name: "基础配置",
        children: [
          { name: "角色管理", path: "#/config/roles" },
          { name: "账号审阅记录", path: "#/config/account-review" },
          { name: "组织管理", path: "#/config/org" },
          { name: "账号管理", path: "#/config/accounts" },
          { name: "菜单管理", path: "#/config/menus" },
          { name: "缓存管理", path: "#/config/cache" },
          { name: "操作权限管理", path: "#/config/permissions" },
        ],
      },
      {
        name: "流程管理",
        children: [
          { name: "环节配置", path: "#/config/process-nodes" },
          { name: "流程建模", path: "#/config/process-model" },
          { name: "流程实例管理", path: "#/config/process-inst" },
          { name: "异常单管理", path: "#/config/exceptions" },
          { name: "测试数据清理", path: "#/config/testdata" },
        ],
      },
    ],
  },
  {
    key: "me",
    name: "个人中心",
    children: [
      { name: "待办工作台", path: "#/me/todo" },
      { name: "公告消息", path: "#/me/notices" },
    ],
  },
];

const MENU_OPS = [
  {
    key: "cockpit",
    name: "领导驾驶舱",
    path: "#/ops/cockpit",
  },
  {
    key: "ops",
    name: "运营管理",
    children: [
      {
        name: "产品目标",
        children: [
          { name: "目标管理", path: "#/ops/goal/target" },
          { name: "短板监控", path: "#/ops/goal/gap-monitor" },
          { name: "短板治理", path: "#/ops/goal/gap-fix" },
        ],
      },
      {
        name: "画像管理",
        children: [
          { name: "省份画像", path: "#/ops/portrait/province" },
          { name: "产品画像", path: "#/ops/portrait/product" },
          { name: "专业公司画像", path: "#/ops/portrait/company" },
        ],
      },
      {
        name: "运营看板",
        children: [
          { name: "产品运营看板", path: "#/ops/board/ops" },
          { name: "重点产品视图", path: "#/ops/board/focus" },
          { name: "协同调度看板", path: "#/ops/board/collab" },
          { name: "原子能力看板", path: "#/ops/board/atom" },
          { name: "两级协同看板", path: "#/ops/board/twolevel" },
        ],
      },
      {
        name: "两级运营",
        children: [
          { name: "两级运营评分", path: "#/ops/twolevel/score" },
          { name: "专项填报管理", path: "#/ops/twolevel/report" },
          { name: "四会跟踪管理", path: "#/ops/twolevel/meeting" },
          { name: "发展通报管理", path: "#/ops/twolevel/bulletin" },
          { name: "调度任务管理", path: "#/ops/twolevel/dispatch" },
        ],
      },
      {
        name: "营销推广",
        children: [
          { name: "营销活动监测", path: "#/ops/promo/monitor" },
          { name: "精准营销分析", path: "#/ops/promo/precise" },
          { name: "产品打包分析", path: "#/ops/promo/pack" },
          { name: "渠道效果分析", path: "#/ops/promo/channel" },
          { name: "营销渠道清单", path: "#/ops/promo/list" },
        ],
      },
      {
        name: "产品发布",
        children: [{ name: "产品发布管理", path: "#/ops/release" }],
      },
      {
        name: "原子能力管理",
        children: [
          { name: "调用量分析", path: "#/ops/atom/usage" },
          { name: "能力清单", path: "#/ops/atom/list" },
        ],
      },
      {
        name: "运营资源库",
        children: [
          { name: "优秀案例库", path: "#/ops/res/cases" },
          { name: "物料热榜", path: "#/ops/res/hot" },
          { name: "知识库", path: "#/ops/res/knowledge" },
          { name: "物料库", path: "#/ops/res/material" },
        ],
      },
    ],
  },
  {
    key: "quality",
    name: "质量管理",
    children: [
      { name: "质量看板", path: "#/ops/quality/board" },
      { name: "品质平台", path: "#/ops/quality/platform" },
    ],
  },
  {
    key: "config",
    name: "配置管理",
    children: [
      {
        name: "运营指标配置",
        children: [
          { name: "通用指标库", path: "#/ops/cfg/metric-common" },
          { name: "监控指标库", path: "#/ops/cfg/metric-monitor" },
        ],
      },
      {
        name: "运营规则配置",
        children: [
          { name: "短板灭灯规则", path: "#/ops/cfg/rule-gap" },
          { name: "协同调度规则", path: "#/ops/cfg/rule-collab" },
        ],
      },
      {
        name: "运营模板配置",
        children: [
          { name: "目标模板", path: "#/ops/cfg/tpl-goal" },
          { name: "提示词管理", path: "#/ops/cfg/tpl-prompt" },
        ],
      },
      {
        name: "基础配置",
        children: [
          { name: "角色管理", path: "#/ops/cfg/roles" },
          { name: "账号审阅记录", path: "#/ops/cfg/account-review" },
          { name: "组织管理", path: "#/ops/cfg/org" },
          { name: "账号管理", path: "#/ops/cfg/accounts" },
          { name: "菜单管理", path: "#/ops/cfg/menus" },
          { name: "缓存管理", path: "#/ops/cfg/cache" },
          { name: "操作权限管理", path: "#/ops/cfg/permissions" },
        ],
      },
      {
        name: "流程配置",
        children: [
          { name: "环节配置", path: "#/ops/cfg/process-nodes" },
          { name: "流程建模", path: "#/ops/cfg/process-model" },
          { name: "流程实例管理", path: "#/ops/cfg/process-inst" },
          { name: "异常单管理", path: "#/ops/cfg/exceptions" },
          { name: "测试数据清理", path: "#/ops/cfg/testdata" },
        ],
      },
    ],
  },
  {
    key: "me",
    name: "个人中心",
    children: [{ name: "公告消息", path: "#/ops/notices" }],
  },
  {
    key: "other",
    name: "其他",
    children: [
      {
        name: "产品质量",
        children: [
          { name: "需求数据采集", path: "#/ops/other/quality/collect" },
          { name: "产品优化列表", path: "#/ops/other/quality/optimize" },
          { name: "需求描述模板管理", path: "#/ops/other/quality/tpl" },
          { name: "需求描述建议", path: "#/ops/other/quality/suggest" },
          { name: "需求处理效率跟踪", path: "#/ops/other/quality/efficiency" },
        ],
      },
      {
        name: "产品创新",
        children: [
          { name: "场景花标签库管理", path: "#/ops/other/innov/scene-tags" },
          { name: "产品场景库管理", path: "#/ops/other/innov/scenes" },
          { name: "客户分群库管理", path: "#/ops/other/innov/segments" },
          { name: "产品场景化标注", path: "#/ops/other/innov/label" },
          { name: "产品孵化清单", path: "#/ops/other/innov/incubate" },
        ],
      },
      {
        name: "竞品信息",
        children: [
          { name: "竞对信息管理", path: "#/ops/other/compete/info" },
          { name: "竞品数据管理", path: "#/ops/other/compete/data" },
          { name: "竞品报告上传管理", path: "#/ops/other/compete/upload" },
          { name: "竞对情报中心", path: "#/ops/other/compete/intel" },
          { name: "竞对分析模型管理", path: "#/ops/other/compete/model" },
          { name: "竞对数据分析结果", path: "#/ops/other/compete/result" },
        ],
      },
      {
        name: "资源分析",
        children: [
          { name: "产品上架异常分析", path: "#/ops/other/res/shelf" },
          { name: "物料供给监控", path: "#/ops/other/res/supply" },
          { name: "能力调用监控", path: "#/ops/other/res/usage" },
          { name: "渠道异常监控", path: "#/ops/other/res/channel" },
        ],
      },
      {
        name: "评估管理",
        children: [
          { name: "复盘任务管理", path: "#/ops/other/eval/task" },
          { name: "评价项管理", path: "#/ops/other/eval/items" },
          { name: "复盘任务结果", path: "#/ops/other/eval/result" },
          { name: "我的复盘", path: "#/ops/other/eval/mine" },
        ],
      },
      { name: "待办稽核", path: "#/ops/other/audit" },
      { name: "知识素材看板", path: "#/ops/other/knowledge" },
    ],
  },
];

let currentPortal = "ipd";
let MENU = MENU_IPD;
const PAGE_META = {};

function l1HasMenu(l1) {
  return !!(l1 && l1.children && l1.children.length);
}

function rebuildPageMeta() {
  Object.keys(PAGE_META).forEach((k) => delete PAGE_META[k]);
  MENU.forEach((l1) => {
    if (l1.path && !l1HasMenu(l1)) {
      PAGE_META[l1.path] = { l1: l1.name, title: l1.name };
      return;
    }
    (l1.children || []).forEach((l2) => {
      if (l2.children) {
        l2.children.forEach((l3) => {
          PAGE_META[l3.path] = { l1: l1.name, l2: l2.name, l3: l3.name, title: l3.name };
        });
      } else {
        PAGE_META[l2.path] = { l1: l1.name, l2: l2.name, title: l2.name };
      }
    });
  });
}
rebuildPageMeta();

const REPORTS_SEED = [
  {
    title: "精品产品市场洞察报告0723-0001",
    tags: ["市场洞察", "测试"],
    time: "2026-08-23 15:10:46",
    owner: "超级管理员",
    month: "2026-08",
    products: ["芯片封装", "KY11", "K07"],
    task: "Q3市场洞察专项",
  },
  {
    title: "AAA 市场洞察",
    tags: ["行业洞察"],
    time: "2026-08-22 09:32:11",
    owner: "超级管理员",
    month: "2026-08",
    products: ["无"],
    task: "-",
  },
  {
    title: "样站产品市场洞察报告0723-0002",
    tags: ["市场洞察"],
    time: "2026-08-21 18:04:20",
    owner: "超级管理员",
    month: "2026-08",
    products: ["样站终端", "K07"],
    task: "样站专项",
  },
  {
    title: "一统产品运营平台建设汇报-测试2",
    tags: ["其他"],
    time: "2026-08-18 11:26:03",
    owner: "超级管理员",
    month: "2026-08",
    products: ["产品枢纽平台"],
    task: "-",
  },
  {
    title: "云计算市场发展趋势分析08",
    tags: ["行业洞察", "客户洞察"],
    time: "2026-08-12 16:48:55",
    owner: "超级管理员",
    month: "2026-08",
    products: ["云网融合"],
    task: "云业务洞察",
  },
  {
    title: "一级产品运营平台建设汇报",
    tags: ["其他", "测试"],
    time: "2026-07-28 10:15:00",
    owner: "超级管理员",
    month: "2026-07",
    products: ["产品枢纽平台"],
    task: "-",
  },
  {
    title: "咪咕产品市场洞察报告0702-DD2",
    tags: ["客户洞察", "竞争分析"],
    time: "2026-07-02 14:22:38",
    owner: "超级管理员",
    month: "2026-07",
    products: ["咪咕视频", "咪咕音乐"],
    task: "文娱竞品跟踪",
  },
  {
    title: "5G 终端竞争分析周报 0728",
    tags: ["竞争分析"],
    time: "2026-07-28 09:01:12",
    owner: "超级管理员",
    month: "2026-07",
    products: ["5G 终端"],
    task: "竞品巡展",
  },
  {
    title: "行业数字化转型洞察 2026 H1",
    tags: ["行业洞察"],
    time: "2026-06-30 17:40:09",
    owner: "超级管理员",
    month: "2026-06",
    products: ["政企快线"],
    task: "H1 复盘",
  },
  {
    title: "家庭宽带客户调研纪要-华东",
    tags: ["客户洞察"],
    time: "2026-06-18 13:19:44",
    owner: "超级管理员",
    month: "2026-06",
    products: ["千兆宽带"],
    task: "客户调研",
  },
];

const REPORTS = Array.from({ length: 29 }, (_, i) => {
  const s = REPORTS_SEED[i % REPORTS_SEED.length];
  const extra = {
    id: i + 1,
    unread: i < 2,
    label: i % 4 === 0 ? "123" : "",
    company: "咪咕公司",
  };
  if (i < REPORTS_SEED.length) return { ...s, ...extra };
  return {
    ...s,
    ...extra,
    title: `${s.title}-${String(i + 1).padStart(2, "0")}`,
    time: `2026-07-${String((i % 27) + 1).padStart(2, "0")} 10:00:00`,
  };
});

const HISTORY_ROWS = REPORTS.slice(0, 6).map((r) => ({
  title: r.title,
  time: r.time,
  owner: r.owner,
}));

const REQ_ROWS = [
  ["XQ-202608-0018", "家庭宽带体验优化", "待分析", "政企事业部", "2026-08-20"],
  ["XQ-202608-0012", "5G 套餐权益升级", "分析中", "市场部", "2026-08-18"],
  ["XQ-202608-0009", "云电脑中小企业版", "已分配", "云能事业部", "2026-08-15"],
  ["XQ-202608-0004", "物联网资费标准化", "仲裁中", "物联网事业部", "2026-08-10"],
  ["XQ-202607-0031", "国际漫游流量包", "开发中", "国际业务部", "2026-07-28"],
];

const ICONS = {
  eye: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 7s2-3.5 5.5-3.5S12.5 7 12.5 7s-2 3.5-5.5 3.5S1.5 7 1.5 7z" stroke="currentColor"/><circle cx="7" cy="7" r="1.5" stroke="currentColor"/></svg>',
  send: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 2L6.5 7.5M12 2L8 12l-1.5-4.5L2 6 12 2z" stroke="currentColor" stroke-linejoin="round"/></svg>',
  down: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v8M3.5 7.5L7 11l3.5-3.5M2.5 12.5h9" stroke="currentColor" stroke-linecap="round"/></svg>',
  clock: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor"/><path d="M6 3.5V6l2 1.2" stroke="currentColor" stroke-linecap="round"/></svg>',
  user: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="4" r="2" stroke="currentColor"/><path d="M2.5 10c.6-1.6 1.8-2.4 3.5-2.4S8.9 8.4 9.5 10" stroke="currentColor" stroke-linecap="round"/></svg>',
  cal: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="2.5" width="9" height="8" rx="1" stroke="currentColor"/><path d="M1.5 5h9M4 1.5v2M8 1.5v2" stroke="currentColor" stroke-linecap="round"/></svg>',
  link: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5 7.5l2.5-2.5M4 6.2l-1.2 1.2a2 2 0 002.8 2.8L7 8.8M8 5.8l1.2-1.2a2 2 0 00-2.8-2.8L5 3.2" stroke="currentColor" stroke-linecap="round"/></svg>',
  tag: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.8 6.8l3.4 3.4a1 1 0 001.4 0L11 5.8V1.8H7.2L1.8 7.2a1 1 0 000 1.4v-1.8z" stroke="currentColor" stroke-linejoin="round"/><circle cx="8.2" cy="3.8" r="0.8" fill="currentColor"/></svg>',
  building: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 10.5V3.5L6 1.5l3.5 2v7M2.5 10.5h7M4.5 10.5V8h3v2.5M5 4.5h.01M7 4.5h.01M5 6.5h.01M7 6.5h.01" stroke="currentColor" stroke-linecap="round"/></svg>',
  box: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 3.5L6 1.8l4 1.7v5L6 10.2 2 8.5v-5zM2 3.5L6 5.2l4-1.7M6 5.2V10.2" stroke="currentColor" stroke-linejoin="round"/></svg>',
};

/* ---------- Mega Menu ---------- */
const OPEN_DELAY = 200;
const CLOSE_DELAY = 150;
let openTimer = null;
let closeTimer = null;
let activeKey = null;

function clearTimers() {
  clearTimeout(openTimer);
  clearTimeout(closeTimer);
  openTimer = null;
  closeTimer = null;
}

function firstLeafPath(l1) {
  if (l1.path) return l1.path;
  for (const l2 of l1.children || []) {
    if (l2.path) return l2.path;
    if (l2.children && l2.children[0] && l2.children[0].path) return l2.children[0].path;
  }
  return "";
}

function renderMega(key) {
  const l1 = MENU.find((m) => m.key === key);
  if (!l1 || !l1HasMenu(l1)) return;
  document.getElementById("megaL1Title").textContent = l1.name;
  document.getElementById("megaL1Btn").dataset.path = firstLeafPath(l1);
  const body = document.getElementById("megaBody");
  const hasL3 = l1.children.some((l2) => l2.children && l2.children.length);
  body.className = "mega-cols";
  if (!hasL3) {
    body.innerHTML = l1.children
      .map((l2) => `<button class="mega-link" data-path="${l2.path || ""}">${l2.name}</button>`)
      .join("");
    return;
  }
  body.innerHTML = l1.children
    .map((l2) => {
      const title = l2.path
        ? `<button class="mega-group-title" data-path="${l2.path}">${l2.name}</button>`
        : `<div class="mega-group-title">${l2.name}</div>`;
      const kids = (l2.children || [])
        .map((c) => `<button class="mega-link-sub" data-path="${c.path}">${c.name}</button>`)
        .join("");
      return `<div class="mega-group">${title}${kids}</div>`;
    })
    .join("");
}

function setMegaVisible(open) {
  document.getElementById("mega").classList.toggle("is-open", open);
  document.getElementById("megaMask").classList.toggle("is-open", open);
}

function openMega(key) {
  const l1 = MENU.find((m) => m.key === key);
  if (!l1HasMenu(l1)) return;
  activeKey = key;
  renderMega(key);
  setMegaVisible(true);
  document.querySelectorAll(".nav-item").forEach((el) => {
    el.classList.toggle("is-open", el.dataset.key === key);
  });
}

function closeMega() {
  activeKey = null;
  setMegaVisible(false);
  document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("is-open"));
}

function scheduleOpen(key) {
  clearTimeout(closeTimer);
  closeTimer = null;
  if (activeKey === key) return;
  if (activeKey) {
    clearTimeout(openTimer);
    openMega(key);
    return;
  }
  clearTimeout(openTimer);
  openTimer = setTimeout(() => openMega(key), OPEN_DELAY);
}

function scheduleClose() {
  clearTimeout(openTimer);
  openTimer = null;
  clearTimeout(closeTimer);
  closeTimer = setTimeout(() => closeMega(), CLOSE_DELAY);
}

function bindNavHover() {
  const nav = document.getElementById("nav");
  nav.querySelectorAll(".nav-item").forEach((item) => {
    const l1 = MENU.find((m) => m.key === item.dataset.key);
    if (!l1HasMenu(l1)) {
      item.addEventListener("mouseenter", () => {
        clearTimers();
        closeMega();
      });
      item.addEventListener("click", () => {
        if (l1 && l1.path) goPath(l1.path);
      });
      return;
    }
    item.addEventListener("mouseenter", () => scheduleOpen(item.dataset.key));
    item.addEventListener("mouseleave", scheduleClose);
  });
}

function renderNav() {
  const nav = document.getElementById("nav");
  nav.innerHTML = MENU.map((l1) => {
    const arrow = l1HasMenu(l1) ? NAV_ARROW : "";
    const pathAttr = l1.path ? ` data-path="${l1.path}"` : "";
    return `<button class="nav-item" data-key="${l1.key}"${pathAttr}>${l1.name}${arrow}</button>`;
  }).join("");
  bindNavHover();
}

function homePath() {
  if (currentPortal === "ops") return firstLeafPath(MENU[0]) || "#/ops/cockpit";
  return "#/me/todo";
}

function portalTitle(id) {
  return id === "ops" ? "产品枢纽平台 · 产品运营门户" : "产品枢纽平台 · IPD管理门户";
}

function switchPortal(id) {
  if (id !== "ops" && id !== "ipd") return;
  if (id === currentPortal) return;
  currentPortal = id;
  MENU = id === "ops" ? MENU_OPS : MENU_IPD;
  rebuildPageMeta();
  renderNav();
  closeMega();
  const home = homePath();
  const logo = document.getElementById("logoHome");
  if (logo) logo.setAttribute("href", home);
  document.title = portalTitle(id);
  const portal = document.getElementById("portalSwitch");
  portal.querySelectorAll("[data-portal]").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.portal === id);
  });
  const label = portal.querySelector(".portal-label");
  const active = portal.querySelector("[data-portal].is-active");
  if (label && active) label.textContent = active.textContent.trim();
  openTabs.splice(0, openTabs.length);
  openTabs.push({ path: home, title: tabTitle(home) });
  if (currentPath() === home) navigate();
  else location.hash = home.slice(1);
}

function bindMega() {
  const mega = document.getElementById("mega");
  mega.addEventListener("mouseenter", () => {
    clearTimeout(closeTimer);
    closeTimer = null;
  });
  mega.addEventListener("mouseleave", scheduleClose);
  document.getElementById("megaMask").addEventListener("mouseenter", scheduleClose);
  document.getElementById("megaMask").addEventListener("click", () => {
    clearTimers();
    closeMega();
  });
  document.getElementById("megaClose").addEventListener("click", () => {
    clearTimers();
    closeMega();
  });
  mega.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-path]");
    if (!btn) return;
    const path = btn.dataset.path;
    if (path) {
      goPath(path);
      clearTimers();
      closeMega();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      clearTimers();
      closeMega();
    }
  });
}

/* ---------- Routing ---------- */
const STANDALONE_HASH = {
  overview: "#/req/overview",
  list: "#/req/list",
  entry: "#/req/list/create",
  listDetail: "#/req/list/detail",
  assign: "#/req/assign",
  assignNew: "#/req/assign/new",
  arb: "#/req/arbitrate",
  change: "#/req/change",
  dev: "#/req/dev",
  devDetail: "#/req/dev/detail",
  chgApply: "#/req/change",
  chgDetail: "#/req/change",
  chgAppr: "#/req/change",
};
const STANDALONE_FILES = {
  "#/req/overview": "../01-需求总览/index.html",
  "#/req/list": "../02-需求清单/index.html",
  "#/req/list/create": "../03-需求录入/index.html",
  "#/req/list/detail": "../13-需求清单详情/index.html",
  "#/req/assign": "../04-需求分配决策/index.html",
  "#/req/assign/new": "../05-新增分配需求/index.html",
  "#/req/arbitrate": "../06-需求仲裁/index.html",
  "#/req/change": "../07-需求变更/index.html",
  "#/req/dev": "../11-需求开发/index.html",
  "#/req/dev/detail": "../12-需求开发详情/index.html",
};

function isStandalone() {
  return !!document.body.dataset.standalone;
}

function goPath(path) {
  if (!path) return;
  if (!path.startsWith("#")) path = "#" + path;
  if (!isStandalone()) {
    location.hash = path.slice(1);
    return;
  }
  const file = STANDALONE_FILES[path];
  const here = STANDALONE_FILES[STANDALONE_HASH[document.body.dataset.standalone]];
  if (file && file === here) return;
  if (file) {
    location.href = file;
    return;
  }
  location.href = "../../index.html" + path;
}

function currentPath() {
  if (isStandalone()) {
    return STANDALONE_HASH[document.body.dataset.standalone] || location.hash || homePath();
  }
  return location.hash || homePath();
}

function l1KeyFromPath(path) {
  const found = MENU.find((l1) => {
    if (l1.path && (l1.path === path || path.startsWith(l1.path + "/"))) return true;
    return (l1.children || []).some((l2) => {
      if (l2.path && (l2.path === path || path.startsWith(l2.path + "/"))) return true;
      return (l2.children || []).some((l3) => l3.path === path);
    });
  });
  return found ? found.key : MENU[0].key;
}

function navigate() {
  const path = currentPath();
  if (!isStandalone() && !location.hash) {
    history.replaceState(null, "", homePath());
  }
  const key = l1KeyFromPath(path);
  document.querySelectorAll(".nav-item").forEach((el) => {
    el.classList.toggle("is-current", el.dataset.key === key);
  });
  ensureTab(path);
  renderTabs();
  const pages = {
    "#/market/insight": "pageInsight",
    "#/market/insight/detail": "pageInsightDetail",
    "#/me/todo": "pageTodo",
    "#/req/overview": "pageReqOverview",
    "#/req/list": "pageReqList",
    "#/req/list/create": "pageReqEntry",
    "#/req/list/detail": "pageReqListDetail",
    "#/req/analysis": "pageAnalysis",
    "#/req/analysis/detail": "pageAnDetail",
    "#/req/assign": "pageReqAssign",
    "#/req/assign/new": "pageReqAssignForm",
    "#/req/arbitrate": "pageReqArb",
    "#/req/change": "pageReqChange",
    "#/req/dev": "pageReqDev",
    "#/req/dev/detail": "pageReqDevDetail",
    "#/product/spectrum": "pageSpectrum",
    "#/product/spectrum/detail": "pageProductDetail",
    "#/product/spectrum/bp": "pageProductBpArchive",
    "#/product/bp-overview": "pageBpOverview",
    "#/product/bp-overview/detail": "pageBpOvDetail",
    "#/product/bp-publish": "pageBpList",
    "#/product/bp-publish/detail": "pageBpTask",
    "#/product/bp-handle": "pageBpHandle",
    "#/product/bp-handle/detail": "pageBpPlan",
    "#/product/bp-handle/edit": "pageBpEdit",
    "#/ops/cockpit": "pageCockpit",
  };
  const shown = pages[path];
  Object.values(pages).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("hidden", id !== shown);
  });
  const inner = document.getElementById("pageInner");
  if (inner) {
    inner.classList.toggle("hidden", !!shown);
    if (!shown) renderInner(path);
  }
  if (path === "#/market/insight/detail") renderInsightDetail();
  if (path === "#/product/spectrum") renderSpectrumPage();
  if (path === "#/product/spectrum/detail") renderProductDetail();
  if (path === "#/product/spectrum/bp") {
    renderProductBpArchive();
    requestAnimationFrame(() => layoutStepScrolls());
  }
  if (path === "#/product/bp-overview") {
    renderBoTable();
    renderBoCharts();
  }
  document.body.classList.toggle("is-cockpit", path === "#/ops/cockpit");
  window.scrollTo(0, 0);
  const main = document.querySelector(".main");
  if (main) main.scrollTop = 0;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      layoutStepScrolls();
      if (path === "#/req/overview") refreshOvChanLines();
    });
  });
}

/* ---------- 打开页签 ---------- */
const openTabs = [
  { path: "#/me/todo", title: "待办工作台" },
];

function tabTitle(path) {
  if (path === "#/market/insight") return "市场洞察";
  if (path === "#/product/spectrum/detail") return "产品图谱";
  if (path === "#/product/spectrum/bp") return "商业计划书任务处理";
  return (PAGE_META[path] && PAGE_META[path].title) || "页面";
}

function tabKey(path) {
  if (path.startsWith("#/market/insight")) return "#/market/insight";
  if (path.startsWith("#/req/analysis")) return "#/req/analysis";
  if (path.startsWith("#/req/list")) return "#/req/list";
  if (path.startsWith("#/req/assign")) return "#/req/assign";
  if (path.startsWith("#/req/dev")) return "#/req/dev";
  if (path === "#/product/spectrum/bp") return "#/product/spectrum/bp";
  if (path.startsWith("#/product/spectrum")) return "#/product/spectrum";
  if (path.startsWith("#/product/bp-overview")) return "#/product/bp-overview";
  if (path.startsWith("#/product/bp-publish")) return "#/product/bp-publish";
  if (path.startsWith("#/product/bp-handle")) return "#/product/bp-handle";
  return path;
}

function ensureTab(path) {
  const key = tabKey(path);
  if (!openTabs.some((t) => t.path === key)) {
    openTabs.push({ path: key, title: tabTitle(key) });
  }
}

function renderTabs() {
  const path = tabKey(currentPath());
  document.getElementById("tagsList").innerHTML = openTabs
    .map(
      (t) => `<button class="tag-item ${t.path === path ? "is-on" : ""}" data-tab="${t.path}">
        <span>${t.title}</span>
        <span class="tag-close" data-close="${t.path}" title="关闭">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2L2 8" stroke="currentColor" stroke-linecap="round"/></svg>
        </span>
      </button>`
    )
    .join("");
}

function closeTab(path) {
  if (openTabs.length <= 1) return;
  const i = openTabs.findIndex((t) => t.path === path);
  if (i < 0) return;
  const wasCurrent = tabKey(currentPath()) === path;
  openTabs.splice(i, 1);
  if (wasCurrent) {
    const next = openTabs[Math.min(i, openTabs.length - 1)];
    goPath(next.path);
  } else {
    renderTabs();
  }
}

function closeOtherTabs() {
  const path = tabKey(currentPath());
  const keep = openTabs.find((t) => t.path === path);
  openTabs.splice(0, openTabs.length);
  if (keep) openTabs.push(keep);
  renderTabs();
}

function closeAllTabs() {
  const home = homePath();
  openTabs.splice(0, openTabs.length);
  openTabs.push({ path: home, title: tabTitle(home) });
  if (currentPath() === home) renderTabs();
  else goPath(home);
}

function toggleFullscreen() {
  const root = document.documentElement;
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    const req = root.requestFullscreen || root.webkitRequestFullscreen;
    if (req) req.call(root);
  } else {
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    if (exit) exit.call(document);
  }
}

function bindTabs() {
  document.getElementById("tagsList").addEventListener("click", (e) => {
    const close = e.target.closest("[data-close]");
    if (close) {
      e.stopPropagation();
      closeTab(close.dataset.close);
      return;
    }
    const tab = e.target.closest("[data-tab]");
    if (tab && tab.dataset.tab !== currentPath()) {
      goPath(tab.dataset.tab);
    }
  });
  const more = document.getElementById("tagsMore");
  document.getElementById("tagsMoreBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    more.classList.toggle("is-on");
  });
  more.querySelector(".tags-more-menu").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-close-act]");
    if (!btn) return;
    e.stopPropagation();
    more.classList.remove("is-on");
    if (btn.dataset.closeAct === "others") closeOtherTabs();
    if (btn.dataset.closeAct === "all") closeAllTabs();
    if (btn.dataset.closeAct === "fullscreen") toggleFullscreen();
  });
}

function renderInner(path) {
  const meta = PAGE_META[path] || { l1: "产品枢纽平台", title: "页面" };
  document.getElementById("innerCrumb").textContent = meta.l3
    ? `${meta.l1} / ${meta.l2} / ${meta.l3}`
    : meta.l2 && meta.l2 !== meta.l1
      ? `${meta.l1} / ${meta.l2}`
      : meta.l1;
  document.getElementById("innerTitle").textContent = meta.title;
  const box = document.getElementById("innerBody");
  if (path === "#/req/list") {
    box.innerHTML = renderReqTable(path);
  } else if (path === "#/me/notices" || path === "#/ops/notices") {
    box.innerHTML = renderNotices();
  } else if (path.startsWith("#/product/spectrum")) {
    box.innerHTML = renderSpectrum();
  } else {
    box.innerHTML = `
      <div class="empty">
        <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
          <rect x="4" y="8" width="56" height="36" rx="4" stroke="#EBEBF0"/>
          <path d="M4 18h56" stroke="#EBEBF0"/>
          <rect x="12" y="26" width="18" height="6" rx="2" fill="#F2F3F5"/>
          <rect x="34" y="26" width="18" height="6" rx="2" fill="#F2F3F5"/>
        </svg>
        <p>${meta.title} · 功能页面占位，菜单跳转已接通</p>
      </div>`;
  }
}

function renderReqTable(path) {
  void path;
  return tableHtml();
}

function stTag(text, cls) {
  const map = {
    待分析: "t-warn",
    分析中: "t-ing",
    已分析: "t-ok",
    已分配: "t-ok",
    待纳入商业计划书: "t-warn",
    纳入商业计划书: "t-warn",
    已纳入商业计划书: "t-ok",
    待开发: "t-ing",
    已完成开发: "t-ok",
    待决策: "t-warn",
    待分配: "t-warn",
    已驳回: "t-alert",
    待审批: "t-warn",
    已批准: "t-ok",
    开发中: "t-ing",
    处理中: "t-ing",
    待IPMT项目经理审核: "t-ing",
    待处理: "t-alert",
    仲裁中: "t-warn",
    待阅: "t-warn",
    已完成: "t-ok",
    已阅: "t-mute",
    草稿: "t-mute",
  };
  const c = cls || map[text] || "t-ing";
  return `<span class="st-tag ${c}"><i></i>${text}</span>`;
}

function tableHtml() {
  return `<table class="table">
    <thead><tr><th>需求编号</th><th>需求名称</th><th>状态</th><th>提出部门</th><th>提交时间</th><th>操作</th></tr></thead>
    <tbody>
      ${REQ_ROWS.map(
        (r) => `<tr>
          <td class="link">${r[0]}</td><td>${r[1]}</td><td>${stTag(r[2])}</td><td>${r[3]}</td><td>${r[4]}</td>
          <td><a class="link" href="javascript:;">查看</a></td>
        </tr>`
      ).join("")}
    </tbody>
  </table>`;
}

function renderNotices() {
  return `
    <div class="notice-item"><h4>8 月 IPD 流程变更通知</h4><p>商业计划书评分规则将于本周五生效，请各产品团队及时查看模板管理。</p><time>2026-08-22 10:00</time></div>
    <div class="notice-item"><h4>市场洞察报告上报截止提醒</h4><p>本月市场洞察报告请于 8 月 28 日前完成上传与分发。</p><time>2026-08-20 09:30</time></div>
    <div class="notice-item"><h4>系统缓存清理窗口</h4><p>配置管理-缓存管理将于本周日 02:00 进行例行清理。</p><time>2026-08-18 16:12</time></div>`;
}

/** 统一 24 画板描边图标，避免窄形 SVG 在方框里被压扁 */
const SP_SVG = (paths) =>
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">${paths}</svg>`;
const SP_ICO = SP_SVG(
  '<rect x="4" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" stroke-width="1.7"/>'
);
const SP_L2_ICOS = {
  mobile: SP_SVG(
    '<rect x="6" y="14" width="3.2" height="6" rx="0.8" fill="currentColor"/><rect x="10.4" y="10" width="3.2" height="10" rx="0.8" fill="currentColor"/><rect x="14.8" y="5.5" width="3.2" height="14.5" rx="0.8" fill="currentColor"/>'
  ),
  wifi: SP_SVG(
    '<path d="M4.2 10.2a11 11 0 0 1 15.6 0M7 13.2a7.2 7.2 0 0 1 10 0M9.8 16.2a3.4 3.4 0 0 1 4.4 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="19.2" r="1.35" fill="currentColor"/>'
  ),
  iot: SP_SVG(
    '<circle cx="12" cy="12" r="2.4" fill="currentColor"/><path d="M12 3.8v2.8M12 17.4v2.8M3.8 12h2.8M17.4 12h2.8M6.2 6.2l2 2M15.8 15.8l2 2M17.8 6.2l-2 2M8.2 15.8l-2 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'
  ),
  sat: SP_SVG(
    '<circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.7"/><path d="M12 3.5v2.6M12 17.9v2.6M3.5 12h2.6M17.9 12h2.6M6 6l1.9 1.9M16.1 16.1L18 18M18 6l-1.9 1.9M7.9 16.1L6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'
  ),
  cloud: SP_SVG(
    '<path d="M7.2 17.8h9.6a4 4 0 0 0 .35-8A5.7 5.7 0 0 0 6.6 11.4 3.8 3.8 0 0 0 7.2 17.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'
  ),
  cloudApp: SP_SVG(
    '<path d="M7 16.8h8.8a3.5 3.5 0 0 0 .3-7 5 5 0 0 0-9.2 1.6A3.3 3.3 0 0 0 7 16.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><rect x="9.2" y="11.2" width="2.2" height="2.2" rx="0.5" fill="currentColor"/><rect x="12.6" y="11.2" width="2.2" height="2.2" rx="0.5" fill="currentColor"/><rect x="9.2" y="14.4" width="2.2" height="2.2" rx="0.5" fill="currentColor"/><rect x="12.6" y="14.4" width="2.2" height="2.2" rx="0.5" fill="currentColor"/>'
  ),
  server: SP_SVG(
    '<rect x="4" y="4" width="16" height="5.2" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="9.9" width="16" height="5.2" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="15.8" width="16" height="4.2" rx="1.4" stroke="currentColor" stroke-width="1.7"/><circle cx="7.2" cy="6.6" r="0.9" fill="currentColor"/><circle cx="7.2" cy="12.5" r="0.9" fill="currentColor"/>'
  ),
  algo: SP_SVG(
    '<rect x="4.5" y="4.5" width="15" height="15" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="M9 9.2h6M9 12h6M9 14.8h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="16.2" cy="14.8" r="1.1" fill="currentColor"/>'
  ),
  robot: SP_SVG(
    '<rect x="6" y="8" width="12" height="11" rx="2.4" stroke="currentColor" stroke-width="1.7"/><path d="M12 4.2v3.2M8.2 12.2h.1M15.7 12.2h.1M9.2 15.6h5.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="8.4" cy="12.2" r="1.1" fill="currentColor"/><circle cx="15.6" cy="12.2" r="1.1" fill="currentColor"/>'
  ),
  culture: SP_SVG(
    '<path d="M8 6.5v11M8 6.5c3.2-1.4 5.8-1.4 9-.2v7.2c-3.2-1.2-5.8-1.2-9 .2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="17.8" r="1.5" fill="currentColor"/>'
  ),
  shop: SP_SVG(
    '<path d="M6.2 8.2h11.6l-.8 9.2a1.8 1.8 0 0 1-1.8 1.6H8.8a1.8 1.8 0 0 1-1.8-1.6L6.2 8.2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 8.2V6.8a3 3 0 0 1 6 0v1.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'
  ),
  industry: SP_SVG(
    '<path d="M4.5 19.5h15M6 19.5V9.2l5 2.4V9.2l5 2.6V5.5h2.4v14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.8 8.2h2M15.8 11h2M15.8 13.8h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'
  ),
  default: SP_ICO,
};
function spL2Ico(name) {
  const n = String(name || "");
  if (n === "移动通信") return SP_L2_ICOS.mobile;
  if (n === "宽带网络") return SP_L2_ICOS.wifi;
  if (n === "蜂窝物联") return SP_L2_ICOS.iot;
  if (n === "卫星互联") return SP_L2_ICOS.sat;
  if (n === "数据中心") return SP_L2_ICOS.server;
  if (n === "移动云") return SP_L2_ICOS.cloud;
  if (n === "移动云应用") return SP_L2_ICOS.cloudApp;
  if (n === "数据算法") return SP_L2_ICOS.algo;
  if (n === "具身智能") return SP_L2_ICOS.robot;
  if (n === "数智文化") return SP_L2_ICOS.culture;
  if (n === "数智电商") return SP_L2_ICOS.shop;
  if (n === "行业数智服务") return SP_L2_ICOS.industry;
  if (/物联|蜂窝/.test(n)) return SP_L2_ICOS.iot;
  if (/卫星|北斗|天通/.test(n)) return SP_L2_ICOS.sat;
  if (/云应用/.test(n)) return SP_L2_ICOS.cloudApp;
  if (/云|IDC|AIDC/.test(n)) return SP_L2_ICOS.cloud;
  if (/宽带|网络|固话/.test(n)) return SP_L2_ICOS.wifi;
  if (/算法|数据|九天|梧桐/.test(n)) return SP_L2_ICOS.algo;
  if (/移动|语音|短信|流量/.test(n)) return SP_L2_ICOS.mobile;
  return SP_L2_ICOS.default;
}

/** 产品卡片图标：按标题语义匹配 */
const SP_CARD_ICOS = {
  msg: SP_SVG('<path d="M5 6.5h14a1.8 1.8 0 0 1 1.8 1.8v6.2a1.8 1.8 0 0 1-1.8 1.8H11l-3.6 2.8V16.3H5A1.8 1.8 0 0 1 3.2 14.5V8.3A1.8 1.8 0 0 1 5 6.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7.5 10.2h9M7.5 13h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
  phone: SP_SVG('<rect x="7.5" y="3.5" width="9" height="17" rx="2.2" stroke="currentColor" stroke-width="1.7"/><path d="M10.5 6.2h3M11.2 17.8h1.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
  call: SP_SVG('<path d="M8.2 5.8c.6-1 1.8-1.3 2.7-.7l1.4.9c.7.5.9 1.4.5 2.1l-.6 1.1a1.4 1.4 0 0 0 .3 1.7l2.2 2.2c.5.5 1.2.6 1.7.3l1.1-.6c.7-.4 1.6-.2 2.1.5l.9 1.4c.6.9.3 2.1-.7 2.7-1.8 1.1-4.8.6-7.7-2.3S7.1 7.6 8.2 5.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'),
  flow: SP_SVG('<path d="M5 16.5c2.2-4 4.4-6 7-6s4.8 2 7 6M7.2 8.2c1.4-1.6 3-2.4 4.8-2.4s3.4.8 4.8 2.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="18.2" r="1.3" fill="currentColor"/>'),
  shield: SP_SVG('<path d="M12 3.8 19 6.6v5.2c0 4.4-2.9 7.4-7 8.8-4.1-1.4-7-4.4-7-8.8V6.6L12 3.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.4 12.1 11.2 14l3.6-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>'),
  sim: SP_SVG('<path d="M8 4.5h5.2L16.5 7.8V19a1.6 1.6 0 0 1-1.6 1.6H8A1.6 1.6 0 0 1 6.4 19V6.1A1.6 1.6 0 0 1 8 4.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><rect x="9" y="10.2" width="6" height="5.5" rx="0.8" stroke="currentColor" stroke-width="1.5"/>'),
  video: SP_SVG('<rect x="3.8" y="6.5" width="12.2" height="11" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M16 10.2 20.2 7.6v8.8L16 13.8" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'),
  play: SP_SVG('<circle cx="12" cy="12" r="8.2" stroke="currentColor" stroke-width="1.7"/><path d="M10.2 8.8v6.4L16 12 10.2 8.8Z" fill="currentColor"/>'),
  home: SP_SVG('<path d="M4.5 11.2 12 4.8l7.5 6.4V19a1.4 1.4 0 0 1-1.4 1.4H5.9A1.4 1.4 0 0 1 4.5 19v-7.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.5 20.2V13h5v7.2" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'),
  wifi: SP_SVG('<path d="M4.2 10.2a11 11 0 0 1 15.6 0M7 13.2a7.2 7.2 0 0 1 10 0M9.8 16.2a3.4 3.4 0 0 1 4.4 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="19.2" r="1.35" fill="currentColor"/>'),
  line: SP_SVG('<path d="M5 17.5h14M7 17.5V9.5l4 2V9.2l4 2.2V6.5h2v11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>'),
  cloud: SP_SVG('<path d="M7.2 17.8h9.6a4 4 0 0 0 .35-8A5.7 5.7 0 0 0 6.6 11.4 3.8 3.8 0 0 0 7.2 17.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'),
  pc: SP_SVG('<rect x="3.5" y="5" width="17" height="11.5" rx="1.8" stroke="currentColor" stroke-width="1.7"/><path d="M8.5 19.5h7M12 16.5v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'),
  wallet: SP_SVG('<rect x="3.8" y="6.5" width="16.4" height="11.5" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M3.8 10.2h16.4M15.2 13.8h2.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'),
  print: SP_SVG('<path d="M7.5 9V5.8h9V9M6 9h12a1.8 1.8 0 0 1 1.8 1.8v4.4H16.5v3.5h-9v-3.5H4.2v-4.4A1.8 1.8 0 0 1 6 9Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8.2 15.2h7.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
  net: SP_SVG('<circle cx="12" cy="12" r="8.2" stroke="currentColor" stroke-width="1.7"/><path d="M4 12h16M12 4c2.4 2.6 3.6 5.2 3.6 8s-1.2 5.4-3.6 8c-2.4-2.6-3.6-5.2-3.6-8s1.2-5.4 3.6-8Z" stroke="currentColor" stroke-width="1.5"/>'),
  lock: SP_SVG('<rect x="6.2" y="10.2" width="11.6" height="9" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8.8 10.2V8a3.2 3.2 0 0 1 6.4 0v2.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="14.8" r="1.2" fill="currentColor"/>'),
  robot: SP_SVG('<rect x="6" y="8" width="12" height="11" rx="2.4" stroke="currentColor" stroke-width="1.7"/><path d="M12 4.2v3.2M8.2 12.2h.1M15.7 12.2h.1M9.2 15.6h5.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="8.4" cy="12.2" r="1.1" fill="currentColor"/><circle cx="15.6" cy="12.2" r="1.1" fill="currentColor"/>'),
  music: SP_SVG('<path d="M8 6.5v11M8 6.5c3.2-1.4 5.8-1.4 9-.2v7.2c-3.2-1.2-5.8-1.2-9 .2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="17.8" r="1.5" fill="currentColor"/>'),
  game: SP_SVG('<rect x="3.8" y="8" width="16.4" height="9.5" rx="3.2" stroke="currentColor" stroke-width="1.7"/><path d="M8 11.2v3.6M6.2 13h3.6M15.2 12.2h.1M17.2 14h.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'),
  book: SP_SVG('<path d="M5 5.5h5.2a3 3 0 0 1 1.8.6 3 3 0 0 1 1.8-.6H19v13.2h-5.2a3 3 0 0 0-1.8.6 3 3 0 0 0-1.8-.6H5V5.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 6.2v12.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
  cart: SP_SVG('<path d="M5 6.2h1.8l1.4 9.2h9.6l1.6-6.8H8.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="18.5" r="1.3" fill="currentColor"/><circle cx="16.2" cy="18.5" r="1.3" fill="currentColor"/>'),
  chip: SP_SVG('<rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M10 4.5v2.5M14 4.5v2.5M10 17v2.5M14 17v2.5M4.5 10h2.5M4.5 14h2.5M17 10h2.5M17 14h2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
  eye: SP_SVG('<path d="M2.8 12s3.4-5.5 9.2-5.5S21.2 12 21.2 12s-3.4 5.5-9.2 5.5S2.8 12 2.8 12Z" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="2.4" stroke="currentColor" stroke-width="1.7"/>'),
  sat: SP_SVG('<circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.7"/><path d="M12 3.5v2.6M12 17.9v2.6M3.5 12h2.6M17.9 12h2.6M6 6l1.9 1.9M16.1 16.1L18 18M18 6l-1.9 1.9M7.9 16.1L6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
  server: SP_SVG('<rect x="4" y="4.5" width="16" height="5" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="10" width="16" height="5" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="15.5" width="16" height="4.2" rx="1.4" stroke="currentColor" stroke-width="1.7"/><circle cx="7.2" cy="7" r="0.85" fill="currentColor"/><circle cx="7.2" cy="12.5" r="0.85" fill="currentColor"/>'),
  app: SP_SVG('<rect x="4.5" y="4.5" width="6.2" height="6.2" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="13.3" y="4.5" width="6.2" height="6.2" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="4.5" y="13.3" width="6.2" height="6.2" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="13.3" y="13.3" width="6.2" height="6.2" rx="1.4" stroke="currentColor" stroke-width="1.7"/>'),
  car: SP_SVG('<path d="M5 15.5h14l-.8-4.2a2 2 0 0 0-2-1.6H7.8a2 2 0 0 0-2 1.6L5 15.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7.2 9.7 8.4 6.8h7.2l1.2 2.9M6.5 18.2h.1M17.5 18.2h.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'),
  city: SP_SVG('<path d="M4.5 19.5h15M6 19.5V8.5h4.2v11M12.5 19.5V5.5H18v14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.6 11h1M7.6 13.5h1M14.2 8.2h1.4M14.2 11h1.4M14.2 13.8h1.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
  users: SP_SVG('<circle cx="9" cy="9" r="2.6" stroke="currentColor" stroke-width="1.7"/><path d="M4.2 18.2c.4-2.8 2.2-4.2 4.8-4.2s4.4 1.4 4.8 4.2M16.2 10.2a2.2 2.2 0 1 0 0-4.4M19.8 18.2c-.3-2.2-1.5-3.4-3.4-3.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'),
  pet: SP_SVG('<circle cx="8.2" cy="9.2" r="2" stroke="currentColor" stroke-width="1.6"/><circle cx="15.8" cy="9.2" r="2" stroke="currentColor" stroke-width="1.6"/><circle cx="6.2" cy="13.8" r="1.7" stroke="currentColor" stroke-width="1.6"/><circle cx="17.8" cy="13.8" r="1.7" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="14.2" r="3.2" stroke="currentColor" stroke-width="1.7"/>'),
  health: SP_SVG('<path d="M12 20s-6.8-4.2-6.8-9.2A3.8 3.8 0 0 1 12 8.2a3.8 3.8 0 0 1 6.8 2.6C18.8 15.8 12 20 12 20Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'),
  school: SP_SVG('<path d="M3.8 10.2 12 5.8l8.2 4.4-8.2 4.4L3.8 10.2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7.2 12.2v4.2c0 .8 2.1 2.4 4.8 2.4s4.8-1.6 4.8-2.4v-4.2M20.2 10.5v6.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>'),
  default: SP_ICO,
};
function spProductIco(name) {
  const n = String(name || "");
  if (/短信|彩信|新消息|消息/.test(n)) return SP_CARD_ICOS.msg;
  if (/语音|通话|来电|对讲|会议|智话|密话/.test(n)) return SP_CARD_ICOS.call;
  if (/流量|GFXIN/.test(n)) return SP_CARD_ICOS.flow;
  if (/安全|卫士|认证|抗D|星辰/.test(n)) return SP_CARD_ICOS.shield;
  if (/SIM|双终端|和多号/.test(n)) return SP_CARD_ICOS.sim;
  if (/高清|视频|彩铃|直播|看家|千里眼|媒体/.test(n)) return SP_CARD_ICOS.video;
  if (/咪咕视频|咪咕直播|咪咕动漫/.test(n)) return SP_CARD_ICOS.play;
  if (/爱家|全屋|社区|乡村|家/.test(n) && !/云电脑|云盘/.test(n)) return SP_CARD_ICOS.home;
  if (/WIFI|WiFi|组网|宽带|FTTR|FTTO/.test(n)) return SP_CARD_ICOS.wifi;
  if (/专线|固话|联网专线|数据专线/.test(n)) return SP_CARD_ICOS.line;
  if (/云盘|云电脑|云手机|移动云$|邮箱/.test(n)) return SP_CARD_ICOS.cloud;
  if (/云电脑|办公/.test(n)) return SP_CARD_ICOS.pc;
  if (/人民币|数字身份|保险|金融|和包|信用|爱购|权益/.test(n)) return SP_CARD_ICOS.wallet;
  if (/彩印|打印/.test(n)) return SP_CARD_ICOS.print;
  if (/物联|OneNET|坤灵|卡/.test(n)) return SP_CARD_ICOS.net;
  if (/量子|锁/.test(n)) return SP_CARD_ICOS.lock;
  if (/机器人|具身|灵犀|智能体/.test(n)) return SP_CARD_ICOS.robot;
  if (/音乐|彩铃/.test(n)) return SP_CARD_ICOS.music;
  if (/游戏|飞飞/.test(n)) return SP_CARD_ICOS.game;
  if (/阅读|学堂|教育|OneEDU/.test(n)) return SP_CARD_ICOS.book;
  if (/爱购|电商|商城/.test(n)) return SP_CARD_ICOS.cart;
  if (/九天|模型|AIOS|算法|大数据|万象|OnePoint|数据要素/.test(n)) return SP_CARD_ICOS.chip;
  if (/元宇宙|XR/.test(n)) return SP_CARD_ICOS.eye;
  if (/卫星|北斗|天通/.test(n)) return SP_CARD_ICOS.sat;
  if (/IDC|AIDC|主机|带宽|托管/.test(n)) return SP_CARD_ICOS.server;
  if (/能力开放|APP|12580|手机报/.test(n)) return SP_CARD_ICOS.app;
  if (/爱车|智行|Traffic|车/.test(n)) return SP_CARD_ICOS.car;
  if (/城市|OneCity|党建|专网|天工|凌云|SKY|Power/.test(n)) return SP_CARD_ICOS.city;
  if (/V网|集团|家庭V/.test(n)) return SP_CARD_ICOS.users;
  if (/爱宠/.test(n)) return SP_CARD_ICOS.pet;
  if (/康养|健康/.test(n)) return SP_CARD_ICOS.health;
  if (/伴学|学堂/.test(n)) return SP_CARD_ICOS.school;
  if (/电话|手机/.test(n)) return SP_CARD_ICOS.phone;
  return SP_CARD_ICOS.default;
}

function spItem(name, org, tags, kidsOrChildren) {
  let kids = 0;
  let children = [];
  if (Array.isArray(kidsOrChildren)) {
    children = kidsOrChildren.map((c) => (typeof c === "string" ? { code: "", name: c } : c));
    kids = children.length;
  } else {
    kids = kidsOrChildren || 0;
  }
  return { name, org: org || "", tags: tags || [], kids, children };
}
function spChild(code, name) {
  return { code, name };
}

const SPECTRUM = [
  {
    name: "通信服务",
    l2: [
      {
        name: "移动通信",
        l3: [
          {
            name: "移动流量",
            items: [
              spItem("GFXIN", "咪咕公司、互联网公司", ["必"]),
              spItem("移动流量", "省公司"),
            ],
          },
          {
            name: "移动语音",
            items: [spItem("移动语音", "省公司")],
          },
          {
            name: "短信彩信",
            items: [
              spItem("个人短信彩信", "省公司"),
              spItem("新消息", "互联网公司", ["主", "必"]),
              spItem("平台短信彩信", "政企事业部、互联网公司、省公司", ["主"], [
                spChild("1.1.3.3.1", "基础平台短彩信"),
                spChild("1.1.3.3.2", "增值平台短彩信"),
              ]),
            ],
          },
          {
            name: "移动增值",
            items: [
              spItem("移动来电管家", "互联网公司", ["主"]),
              spItem("手机报", "咪咕公司"),
              spItem("能力开放", "政企事业部"),
              spItem("新通话", "互联网公司", ["主", "必"]),
              spItem("数字人民币/数字身份", "金科公司", ["育"]),
              spItem("视频彩铃", "咪咕公司", ["主", "必"]),
              spItem("一号双终端", "互联网公司", ["主"]),
              spItem("超级SIM", "互联网公司", ["主"]),
              spItem("移动安全管家", "互联网公司", ["育"]),
              spItem("家庭V网", "省公司"),
              spItem("12580", "江苏"),
              spItem("移动爱家APP", "智家中心", ["主"]),
              spItem("和彩印", "咪咕公司"),
              spItem("集团V网", "省公司"),
              spItem("和多号", "互联网公司"),
              spItem("量子密话", "集成公司"),
            ],
          },
        ],
      },
      {
        name: "宽带网络",
        l3: [
          {
            name: "宽带联网",
            items: [
              spItem("传统宽带", "省公司"),
              spItem("全家WIFI（含FTTR）", "智家中心", ["主", "必"]),
              spItem("企业宽带", "计划建设部、网络事业部、政企事业部"),
              spItem("E企组网（含FTTO）", "计划建设部、网络事业部、政企事业部"),
              spItem("数据专线", "计划建设部、网络事业部、省公司", [], [
                spChild("1.2.1.5.1", "省内数据专线"),
                spChild("1.2.1.5.2", "双跨数据专线"),
              ]),
              spItem("联网专线", "计划建设部、网络事业部、省公司", [], [
                spChild("1.2.1.6.1", "标准产品"),
                spChild("1.2.1.6.2", "SD-WAN"),
              ]),
            ],
          },
          {
            name: "宽带视频",
            items: [spItem("移动高清（含大屏）", "智家中心", ["主", "必"], [
              spChild("1.2.2.1.1", "家庭高清"),
              spChild("1.2.2.1.2", "IPTV"),
              spChild("1.2.2.1.3", "OTT"),
            ])],
          },
          {
            name: "宽带语音",
            items: [
              spItem("传统固话", "省公司"),
              spItem("移动智话", "智家中心", [], [
                spChild("1.2.3.2.1", "和家智话"),
              ]),
              spItem("政企语音", "省公司"),
            ],
          },
          {
            name: "宽带增值",
            items: [
              spItem("移动康养", "智家中心", ["育"]),
              spItem("移动爱宠", "智家中心"),
              spItem("移动伴学", "智家中心", ["育"]),
              spItem("移动全屋智能", "智家中心"),
              spItem("专线卫士", "卓望公司"),
            ],
          },
        ],
      },
      {
        name: "蜂窝物联",
        l3: [
          { name: "物联卡", items: [spItem("物联卡", "物联网公司")] },
          { name: "物联专网", items: [spItem("物联专网", "物联网公司")] },
          { name: "物联增值", items: [spItem("物联增值", "物联网公司")] },
        ],
      },
      {
        name: "卫星互联",
        l3: [
          { name: "北斗卫星业务", items: [spItem("北斗卫星业务", "上海产业研究院", [], [
            spChild("1.4.1.1.1", "北斗短彩信"),
          ])] },
          { name: "天通卫星业务", items: [spItem("天通卫星业务", "在线营销服务中心、省公司")] },
          { name: "窄带物联", items: [spItem("窄带物联", "集团")] },
          { name: "卫星联网", items: [spItem("卫星联网", "集团")] },
        ],
      },
    ],
  },
  {
    name: "算力服务",
    l2: [
      {
        name: "数据中心",
        l3: [
          {
            name: "IDC",
            items: [
              spItem("IDC基础服务", "算力办公室", [], [
                spChild("2.1.1.1.1", "主机托管"),
                spChild("2.1.1.1.2", "带宽端口"),
              ]),
              spItem("IDC增值服务", "算力办公室", [], [
                spChild("2.1.1.2.1", "网络安全"),
                spChild("2.1.1.2.2", "其他增值服务"),
              ]),
            ],
          },
          {
            name: "AIDC",
            items: [
              spItem("AIDC基础服务", "算力办公室", [], [
                spChild("2.1.2.1.1", "主机托管"),
                spChild("2.1.2.1.2", "带宽端口"),
              ]),
              spItem("AIDC增值服务", "算力办公室", [], [
                spChild("2.1.2.2.1", "网络安全"),
                spChild("2.1.2.2.2", "其他增值服务"),
              ]),
            ],
          },
        ],
      },
      {
        name: "移动云",
        l3: [
          { name: "移动云", items: [spItem("移动云", "云能力中心")] },
          { name: "云安全", items: [spItem("和鹰抗D", "卓望公司")] },
        ],
      },
      {
        name: "移动云应用",
        l3: [
          { name: "移动云盘", items: [spItem("移动云盘", "互联网公司", ["主", "必"], [
            spChild("2.3.1.1.1", "移动云盘"),
            spChild("2.3.1.1.2", "139邮箱"),
          ])] },
          {
            name: "移动视频",
            items: [
              spItem("移动看家", "智家中心", ["主", "必"]),
              spItem("千里眼", "物联网公司"),
            ],
          },
          {
            name: "移动云电脑",
            items: [
              spItem("家庭云电脑", "智家中心", ["主"]),
              spItem("政企云电脑", "云能力中心"),
            ],
          },
          { name: "移动云手机", items: [spItem("移动云手机", "互联网公司", ["主"])] },
        ],
      },
    ],
  },
  {
    name: "智能服务",
    l2: [
      {
        name: "数据算法",
        l3: [
          {
            name: "梧桐数据",
            items: [
              spItem("梧桐大数据", "数智事业部、上海产业研究院", [], [
                spChild("3.1.1.1.1", "梧桐大数据-触达"),
                spChild("3.1.1.1.2", "梧桐大数据-风控"),
                spChild("3.1.1.1.3", "梧桐大数据-洞察"),
              ]),
              spItem("数据要素解决方案", "数智事业部"),
            ],
          },
          {
            name: "九天模型",
            items: [
              spItem("九天模型", "数智事业部"),
              spItem("AIOS平台工具", "集团"),
            ],
          },
          {
            name: "灵犀智能体",
            items: [spItem("灵犀智能体", "在线营销服务中心、分公司、咪咕公司", ["育"])],
          },
        ],
      },
      {
        name: "具身智能",
        l3: [
          { name: "具身智能", items: [spItem("家庭服务机器人", "智家中心", ["育"])] },
          { name: "元宇宙", items: [spItem("元宇宙", "咪咕公司", [], [
            spChild("3.2.2.1.1", "云XR"),
            spChild("3.2.2.1.2", "XR数智空间"),
          ])] },
        ],
      },
      {
        name: "数智文化",
        l3: [
          {
            name: "文化服务",
            items: [
              spItem("测试-咪咕飞飞", "咪咕公司"),
              spItem("咪咕视频", "咪咕公司", ["主", "必"]),
              spItem("咪咕音乐", "咪咕公司"),
              spItem("咪咕游戏", "咪咕公司", ["主"]),
              spItem("咪咕阅读", "咪咕公司"),
              spItem("企业学堂", "咪咕公司"),
              spItem("咪咕动漫", "咪咕公司"),
              spItem("咪咕直播", "咪咕公司"),
            ],
          },
        ],
      },
      {
        name: "数智电商",
        l3: [
          { name: "商城服务", items: [spItem("移动爱购（权益）", "在线营销服务中心", ["主", "必"])] },
          {
            name: "金融科技",
            items: [
              spItem("保险服务", "金科公司", ["育"]),
              spItem("互联网金融", "金科公司", [], [
                spChild("3.4.2.2.1", "信用购机"),
                spChild("3.4.2.2.2", "和包"),
                spChild("3.4.2.2.3", "其他互联网金融"),
              ]),
            ],
          },
        ],
      },
      {
        name: "行业数智服务",
        l3: [
          {
            name: "平台数智服务",
            items: [
              spItem("移动数智教育（OneEDU）", "上海产业研究院"),
              spItem("移动坤灵智联（OneNET）", "物联网公司"),
              spItem("移动天工（OnePower）", "上海产业研究院"),
              spItem("移动万象（OnePoint）", "数智事业部"),
              spItem("移动专网智用", "政企事业部"),
              spItem("移动智行（OneTraffic）", "政企事业部"),
              spItem("中移凌云（OneSKY）", "集成公司"),
              spItem("移动认证", "互联网公司", ["主"]),
              spItem("智慧媒体（OneMedia）", "咪咕公司"),
              spItem("移动爱车（人车家）", "智家中心"),
              spItem("移动智慧城市（OneCity）", "政企事业部"),
              spItem("移动办公", "政企事业部"),
              spItem("移动星辰安全（OneS）", "安全公司"),
              spItem("星火党建", "政企事业部"),
              spItem("移动对讲", "政企事业部"),
              spItem("移动乡村", "政企事业部"),
              spItem("移动会议", "政企事业部"),
              spItem("移动社区", "智家中心"),
            ],
          },
          { name: "物联定制集成", items: [spItem("物联定制集成", "集团")] },
          { name: "AICT定制集成", items: [spItem("AICT定制集成", "集团")] },
        ],
      },
    ],
  },
];

SPECTRUM.forEach((l1) => {
  l1.l2.forEach((row) => {
    row.n = row.l3.reduce((s, g) => s + g.items.length, 0);
  });
  l1.n = l1.l2.reduce((s, row) => s + row.n, 0);
});

const SP_LEVEL_COLOR = ["#417FFB", "#6799FC", "#5B8DEF", "#84EAB7", "#918DFC"];
/** 固定 100% 球径：层级越大球略小，但展开时绝不整体缩小 */
const SP_LEVEL_SIZE = [100, 72, 58, 50, 36];
const SP_ORB_STOPS = [
  [[0, "#E8EEFF"], [0.3, "#A8B8FF"], [0.65, "#6B7CFF"], [1, "#417FFB"]],
  [[0, "#EAF2FF"], [0.35, "#9EC0FF"], [0.72, "#6799FC"], [1, "#417FFB"]],
  [[0, "#EEF5FF"], [0.4, "#9BB8FF"], [0.78, "#5B8DEF"], [1, "#3A6FE8"]],
  [[0, "#F0FFFB"], [0.32, "#B5F3D8"], [0.7, "#84EAB7"], [1, "#3DC99A"]],
  [[0, "#F4F2FF"], [0.38, "#C8C4FF"], [0.75, "#918DFC"], [1, "#6B66E0"]],
];
const SP_ORB_GLOW = [
  "rgba(65,127,251,.42)",
  "rgba(103,153,252,.38)",
  "rgba(91,141,239,.32)",
  "rgba(132,234,183,.38)",
  "rgba(145,141,252,.35)",
];
/**
 * 固定像素半径：展开三四级只增加外环，内圈位置/球径不变，视口保持 zoom=1
 * 外环可超出画布，用拖拽平移查看（禁止自动缩放到适应）
 */
const SP_RING_R = [0, 200, 380, 620, 900];
const SP_SECTOR_GAP = [0, 0.42, 0.28, 0.2, 0.14];

const spState = { kw: "", grade: "", pri: "", pris: [], brand: "", view: "card", depth: 2, zoom: 1, focusId: "", l2Sel: {} };
let spChart = null;
let spChartRo = null;

function spOrbFill(lv) {
  const stops = SP_ORB_STOPS[Math.min(lv, SP_ORB_STOPS.length - 1)];
  return {
    type: "radial",
    x: 0.32,
    y: 0.28,
    r: 0.88,
    colorStops: stops.map(([offset, color]) => ({ offset, color })),
  };
}

function syncSpZoomUi() {
  const pct = document.getElementById("spZoomPct");
  const range = document.getElementById("spZoomRange");
  const v = Math.round(spState.zoom * 100);
  if (pct) pct.textContent = `${v}%`;
  if (range && Number(range.value) !== v) range.value = String(v);
}

function syncSpLegendDepth() {
  const box = document.getElementById("spGraphLegend");
  if (!box) return;
  box.querySelectorAll("[data-spdepth]").forEach((btn) => {
    const d = Number(btn.dataset.spdepth) || 0;
    btn.classList.toggle("is-on", d <= spState.depth);
  });
}

function setSpZoom(z, rerender) {
  spState.zoom = Math.min(2.4, Math.max(0.4, +Number(z).toFixed(2)));
  syncSpZoomUi();
  if (rerender === false) return;
  const chart = ensureSpChart();
  if (!chart) return;
  /* 滑条缩放：临时放开 scaleLimit，不重算布局（避免节点挤缩） */
  chart.setOption({
    series: [{
      id: "spGraphSeries",
      zoom: spState.zoom,
      scaleLimit: { min: 0.4, max: 2.4 },
      roam: true,
    }],
  });
}

/** 切换层级：强制 100%，只向外扩散节点，禁止缩放到适应 */
function setSpDepth(depth, toastMsg) {
  spState.depth = Math.max(1, Math.min(4, Number(depth) || 2));
  spState.zoom = 1;
  const stage = document.getElementById("spGraphWrap");
  if (stage) {
    stage.classList.toggle("is-deep", spState.depth >= 3);
    stage.classList.toggle("is-deeper", spState.depth >= 4);
  }
  syncSpZoomUi();
  syncSpLegendDepth();
  renderSpectrumGraph(true);
  renderSpectrumGraphSide();
  if (toastMsg) toast(toastMsg);
}

function lockSpChartZoom100(chart) {
  spState.zoom = 1;
  syncSpZoomUi();
  if (!chart) return;
  try {
    chart.setOption({
      series: [{ id: "spGraphSeries", zoom: 1, center: null }],
    }, { lazyUpdate: true });
  } catch (e) { /* ignore */ }
}

function spTagsHtml(tags) {
  if (!tags || !tags.length) return "";
  return `<span class="sp-tags">${tags.map((t) => {
    const cls = t === "主" ? "is-main" : t === "育" ? "is-grow" : t === "必" ? "is-must" : "";
    return `<i class="sp-tag ${cls}" title="${t === "主" ? "战略主推" : t === "育" ? "战略培育" : t === "必" ? "必推产品" : t}">${t}</i>`;
  }).join("")}</span>`;
}

function spKidsHtml(it) {
  const kids = (it && it.kids) || (it && it.children && it.children.length) || 0;
  if (!kids) return "";
  const payload = encodeURIComponent(JSON.stringify(it.children || []));
  return `<span class="sp-kids" role="button" tabindex="0" aria-expanded="false" title="含 ${kids} 个下级产品" data-spkids="${payload}">${kids}</span>`;
}

function ensureSpKidsPop() {
  let el = document.getElementById("spKidsPop");
  if (el) return el;
  el = document.createElement("div");
  el.id = "spKidsPop";
  el.className = "sp-kids-pop";
  el.hidden = true;
  el.innerHTML = '<i class="sp-kids-pop-arrow" aria-hidden="true"></i><div class="sp-kids-pop-in"></div>';
  document.body.appendChild(el);
  return el;
}

function closeSpKidsPop() {
  const pop = document.getElementById("spKidsPop");
  if (pop) pop.hidden = true;
  document.querySelectorAll(".sp-kids[aria-expanded='true']").forEach((b) => b.setAttribute("aria-expanded", "false"));
}

function openSpKidsPop(btn) {
  let children = [];
  try {
    children = JSON.parse(decodeURIComponent(btn.dataset.spkids || "%5B%5D"));
  } catch (e) {
    children = [];
  }
  const pop = ensureSpKidsPop();
  const box = pop.querySelector(".sp-kids-pop-in");
  box.innerHTML = children.length
    ? children.map((c) => `<button type="button" class="sp-pop-item"><b>${c.code || ""}</b><span>${c.name || ""}</span></button>`).join("")
    : '<div class="sp-pop-empty">暂无下级产品明细</div>';
  pop.hidden = false;
  btn.setAttribute("aria-expanded", "true");
  const r = btn.getBoundingClientRect();
  const pad = 8;
  pop.style.visibility = "hidden";
  const pw = pop.offsetWidth || 220;
  const ph = pop.offsetHeight || 80;
  let left = r.left + r.width / 2 - pw / 2;
  left = Math.max(pad, Math.min(left, window.innerWidth - pw - pad));
  let top = r.bottom + 10;
  if (top + ph > window.innerHeight - pad && r.top > ph + 16) {
    top = r.top - ph - 10;
    pop.classList.add("is-above");
  } else {
    pop.classList.remove("is-above");
  }
  pop.style.left = `${Math.round(left)}px`;
  pop.style.top = `${Math.round(top)}px`;
  const arrowX = r.left + r.width / 2 - left;
  pop.style.setProperty("--sp-pop-arrow-x", `${Math.round(arrowX)}px`);
  pop.style.visibility = "";
}

function spOrgHtml(org) {
  if (!org) return "";
  const parts = String(org).split(/[、,，/]/).map((s) => s.trim()).filter(Boolean);
  if (!parts.length) return "";
  return `<span class="sp-card-orgs">${parts.map((p) => `<i class="sp-org-tag">${p}</i>`).join("")}</span>`;
}

function spMatch(text) {
  const q = spState.kw;
  if (!q) return true;
  return String(text).toLowerCase().includes(q.toLowerCase());
}

function filteredSpectrum() {
  return SPECTRUM.map((l1) => {
    const l2 = l1.l2.map((row) => {
      const l3 = row.l3.map((g) => {
        const items = g.items.filter((it) => {
          if (spState.pris.length && !(it.tags || []).some((t) => spState.pris.includes(t))) return false;
          if (spState.kw && !spMatch(it.name) && !spMatch(it.org) && !spMatch(g.name) && !spMatch(row.name) && !spMatch(l1.name)) return false;
          return true;
        });
        return { ...g, items };
      }).filter((g) => g.items.length);
      const n = l3.reduce((s, g) => s + g.items.length, 0);
      return { ...row, l3, n };
    }).filter((row) => row.l3.length);
    const n = l2.reduce((s, row) => s + row.n, 0);
    return { ...l1, l2, n };
  }).filter((l1) => l1.l2.length);
}

function buildSpTreeData(depth) {
  const data = filteredSpectrum();
  const maxDepth = depth == null ? spState.depth : depth;
  const root = {
    id: "root",
    name: "产品图谱",
    value: data.reduce((s, x) => s + x.n, 0),
    level: 0,
    children: data.map((l1, i1) => {
      const n1 = `l1-${i1}`;
      return {
        id: n1,
        name: l1.name,
        value: l1.n,
        level: 1,
        children: maxDepth < 2 ? undefined : l1.l2.map((row, i2) => {
          const n2 = `${n1}-${i2}`;
          return {
            id: n2,
            name: row.name,
            value: row.n,
            level: 2,
            children: maxDepth < 3 ? undefined : row.l3.map((g, i3) => {
              const n3 = `${n2}-${i3}`;
              return {
                id: n3,
                name: g.name,
                value: g.items.length,
                level: 3,
                children: maxDepth < 4
                  ? undefined
                  : g.items.map((it, i4) => ({
                      id: `${n3}-${i4}`,
                      name: it.name,
                      value: 1,
                      level: 4,
                      org: it.org || "",
                      tags: it.tags || [],
                    })),
              };
            }),
          };
        }),
      };
    }),
  };
  return root;
}

function renderSpectrumStats() {
  const l1 = SPECTRUM.length;
  const l2 = SPECTRUM.reduce((s, x) => s + x.l2.length, 0);
  const l3 = SPECTRUM.reduce((s, x) => s + x.l2.reduce((a, r) => a + r.l3.length, 0), 0);
  const l4 = SPECTRUM.reduce((s, x) => s + x.n, 0);
  const l5 = SPECTRUM.reduce((s, x) => s + x.l2.reduce((a, r) => a + r.l3.reduce((b, g) => b + g.items.reduce((c, it) => c + (it.kids || 0), 0), 0), 0), 0);
  const box = document.getElementById("spKpis");
  if (!box) return;
  const items = [
    { label: "一级业务", num: l1, tone: "blue", ico: "img/bare/sp-kpi-v2-l1.png" },
    { label: "二级业务", num: l2, tone: "cyan", ico: "img/bare/sp-kpi-v2-l2.png" },
    { label: "三级业务", num: l3, tone: "purple", ico: "img/bare/sp-kpi-v2-l3.png" },
    { label: "四级产品", num: l4, tone: "orange", ico: "img/bare/sp-kpi-v2-l4.png" },
    { label: "五级产品", num: l5, tone: "green", ico: "img/bare/sp-kpi-v2-l5.png" },
  ];
  box.innerHTML = items.map((it) => `
    <article class="stat-mod">
      <div class="stat-mod-txt">
        <div class="stat-mod-label">${it.label}</div>
        <div class="stat-mod-num">${it.num}</div>
      </div>
      <span class="stat-mod-ico t-${it.tone}"><img src="${it.ico}" alt=""></span>
    </article>`).join("");
}

function setSpectrumView(view) {
  spState.view = view;
  const page = document.getElementById("pageSpectrum");
  const card = document.getElementById("spCardPanel");
  const graph = document.getElementById("spGraphWrap");
  const seg = document.getElementById("spViewSeg");
  if (page) page.classList.toggle("is-graph", view === "graph");
  if (seg) {
    seg.querySelectorAll("[data-spview]").forEach((btn) => {
      btn.classList.toggle("is-on", btn.dataset.spview === view);
    });
  }
  if (card) card.classList.toggle("hidden", view !== "card");
  if (graph) graph.classList.toggle("hidden", view !== "graph");
  if (view === "graph") {
    spState.zoom = 1;
    requestAnimationFrame(() => {
      if (spChart) spChart.resize();
      renderSpectrumGraph(true);
      renderSpectrumGraphSide();
      syncSpLegendDepth();
      syncSpZoomUi();
    });
  }
}

function renderSpectrumGraphSide() {
  const side = document.getElementById("spGraphSide");
  const total = document.getElementById("spGraphTotal");
  const num = document.getElementById("spGraphTotalNum");
  if (!side) return;
  const data = filteredSpectrum();
  const count = data.reduce((s, x) => s + x.n, 0);
  if (total) total.textContent = `${count} 项`;
  if (num) num.textContent = String(count);
  side.innerHTML = data.map((l1, i1) => {
    const id1 = `l1-${i1}`;
    return `<div class="sp-gs-l1">
      <button type="button" class="sp-gs-item ${spState.focusId === id1 ? "is-on" : ""}" data-spid="${id1}" data-level="1">
        <i class="sp-gs-dot l1"></i><span>${l1.name}</span><em>${l1.n}</em>
      </button>
      <div class="sp-gs-kids">
        ${l1.l2.map((row, i2) => {
          const id2 = `${id1}-${i2}`;
          return `<div class="sp-gs-l2">
            <button type="button" class="sp-gs-item ${spState.focusId === id2 ? "is-on" : ""}" data-spid="${id2}" data-level="2">
              <i class="sp-gs-dot l2"></i><span>${row.name}</span><em>${row.n}</em>
            </button>
            <div class="sp-gs-kids">
              ${row.l3.map((g, i3) => {
                const id3 = `${id2}-${i3}`;
                return `<button type="button" class="sp-gs-item is-l3 ${spState.focusId === id3 ? "is-on" : ""}" data-spid="${id3}" data-level="3">
                  <i class="sp-gs-dot l3"></i><span>${g.name}</span><em>${g.items.length}</em>
                </button>`;
              }).join("")}
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>`;
  }).join("") || '<div class="sp-gs-empty">暂无匹配结果</div>';
}

function ensureSpChart() {
  const el = document.getElementById("spGraph");
  if (!el) return null;
  if (typeof echarts === "undefined") {
    el.innerHTML = '<div class="sp-empty">图谱组件加载失败，请检查网络后刷新</div>';
    return null;
  }
  if (!spChart) {
    spChart = echarts.init(el);
    spChart.on("click", (params) => {
      if (!params.data || !params.data.id) return;
      if (String(params.data.id).startsWith("lbl-")) return;
      if (params.data.level === 4) {
        const hit = findSpectrumProduct(params.data.name);
        openProductDetail(
          hit || {
            name: params.data.name,
            org: params.data.org || "",
            tags: params.data.tags || [],
          }
        );
        return;
      }
      focusSpGraphNode(params.data.id);
    });
    if (!spChartRo && typeof ResizeObserver !== "undefined") {
      let t = 0;
      spChartRo = new ResizeObserver(() => {
        if (!(spChart && spState.view === "graph")) return;
        clearTimeout(t);
        t = setTimeout(() => {
          spChart.resize();
          renderSpectrumGraph(true);
        }, 90);
      });
      spChartRo.observe(el);
    }
  }
  return spChart;
}

function spSubtreeWeight(node) {
  const kids = node.children || [];
  if (!kids.length) return Math.max(1, node.value || 1);
  return kids.reduce((s, c) => s + spSubtreeWeight(c), 0);
}

function spWrapName(name, maxPerLine) {
  const s = String(name || "");
  if (s.length <= maxPerLine) return s;
  if (s.endsWith("服务") && s.length <= maxPerLine + 2) {
    return `${s.slice(0, -2)}\n服务`;
  }
  const mid = Math.ceil(s.length / 2);
  return `${s.slice(0, mid)}\n${s.slice(mid)}`;
}

function spOuterLabelPos(angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  if (Math.abs(cos) >= Math.abs(sin)) return cos >= 0 ? "right" : "left";
  return sin >= 0 ? "bottom" : "top";
}

/**
 * 参考图文案（固定 100% 尺寸）：
 * - 中心 / 内圈蓝球：白字居中在球内
 * - 外圈绿球：球内只居中数字；名称作为同系列透明节点放在球外（跟随漫游，不缩放）
 */
function styleSpGraphNode(node, angle) {
  const lv = node.level || 0;
  const focused = node.id && node.id === spState.focusId;
  const size = SP_LEVEL_SIZE[Math.min(lv, SP_LEVEL_SIZE.length - 1)];
  const hasKids = !!(node.children && node.children.length);
  const count = node.value || 0;
  const name = node.name || "";
  const isInner = lv === 0 || lv === 1 || (lv === 2 && hasKids);
  const fillLv = isInner ? Math.min(lv, 2) : 3;

  let label;
  let outerLabel = "";
  let labelPos = "bottom";

  if (lv === 0) {
    label = {
      show: true,
      position: "inside",
      color: "#fff",
      fontSize: 17,
      fontWeight: 700,
      lineHeight: 24,
      align: "center",
      verticalAlign: "middle",
      formatter: () => "产品\n图谱",
    };
  } else if (isInner) {
    label = {
      show: true,
      position: "inside",
      color: "#fff",
      fontSize: lv === 1 ? 14 : 13,
      fontWeight: 600,
      lineHeight: 20,
      align: "center",
      verticalAlign: "middle",
      formatter: () => spWrapName(name, lv === 1 ? 4 : 5),
    };
  } else {
    label = {
      show: true,
      position: "inside",
      color: "#fff",
      fontSize: size >= 48 ? 16 : 15,
      fontWeight: 700,
      align: "center",
      verticalAlign: "middle",
      formatter: () => String(count),
    };
    outerLabel = name.length > 10 ? `${name.slice(0, 9)}…` : name;
    labelPos = spOuterLabelPos(angle || 0);
  }

  return {
    id: node.id,
    name,
    value: count,
    level: lv,
    org: node.org || "",
    tags: node.tags || [],
    symbolSize: size,
    category: Math.min(lv, 4),
    _outerLabel: outerLabel,
    _labelPos: labelPos,
    _angle: angle || 0,
    itemStyle: {
      color: spOrbFill(fillLv),
      borderColor: focused ? "#fff" : "rgba(255,255,255,.96)",
      borderWidth: focused ? 3 : lv === 0 ? 3 : 2,
      shadowBlur: focused ? 30 : isInner ? 22 : 12,
      shadowColor: SP_ORB_GLOW[Math.min(fillLv, SP_ORB_GLOW.length - 1)],
    },
    label,
    emphasis: {
      scale: false,
      itemStyle: { shadowBlur: 32, borderWidth: 3 },
      label: { fontWeight: 700 },
    },
  };
}

/** 名称节点：与主节点同系列，向径向外侧偏移，保证 100% 下文字清晰且随拖拽一致 */
function buildSpOuterLabelNodes(nodes) {
  return nodes.filter((n) => n._outerLabel).map((n) => {
    const ang = n._angle || 0;
    const dist = n.symbolSize / 2 + 22;
    const pos = n._labelPos || "bottom";
    let ox = 0;
    let oy = 0;
    if (pos === "right") ox = dist;
    else if (pos === "left") ox = -dist;
    else if (pos === "bottom") oy = dist;
    else oy = -dist;
    /* 再沿径向微调，让标签更偏外侧 */
    ox += Math.cos(ang) * 6;
    oy += Math.sin(ang) * 6;
    return {
      id: `lbl-${n.id}`,
      name: n._outerLabel,
      x: n.x + ox,
      y: n.y + oy,
      symbolSize: 2,
      value: n.value,
      level: n.level,
      category: n.category,
      itemStyle: { color: "transparent", borderWidth: 0, shadowBlur: 0, opacity: 0 },
      label: {
        show: true,
        position: "inside",
        color: "#3F4247",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 20,
        align: "center",
        verticalAlign: "middle",
        formatter: () => n._outerLabel,
      },
      emphasis: { disabled: true },
      tooltip: { show: false },
      silent: true,
    };
  });
}

/** 扇区径向布局：固定像素；展开更深层级只加大外环半径 */
function buildSpGraphLayout(tree, cx, cy) {
  const nodes = [];
  const links = [];

  function place(node, a0, a1, parentId) {
    const mid = (a0 + a1) / 2;
    const lv = node.level || 0;
    const r = SP_RING_R[Math.min(lv, SP_RING_R.length - 1)] || 900;
    const styled = styleSpGraphNode(node, mid);
    styled.x = cx + (lv === 0 ? 0 : r * Math.cos(mid));
    styled.y = cy + (lv === 0 ? 0 : r * Math.sin(mid));
    nodes.push(styled);
    if (parentId != null) {
      links.push({
        source: parentId,
        target: node.id,
        lineStyle: {
          color: "rgba(130,145,170,.28)",
          width: lv <= 2 ? 1.2 : 1,
          curveness: 0.08,
          opacity: 0.9,
        },
      });
    }

    const kids = node.children || [];
    if (!kids.length) return;

    const span = a1 - a0;
    const gapBase = SP_SECTOR_GAP[Math.min(lv + 1, SP_SECTOR_GAP.length - 1)] || 0.14;
    const n = kids.length;
    /* 外层保证最小夹角，避免挤成一团（宁可扇区外扩到重叠父扇区边缘） */
    const minArc = lv >= 2 ? 0.2 : lv >= 1 ? 0.28 : 0.5;
    const gapBudget = Math.min(gapBase * Math.max(0, n - 1), span * 0.34);
    let usable = Math.max(span - gapBudget, n * minArc);
    if (usable > span * 0.95) usable = span * 0.92;
    const realGap = n > 1 ? Math.max(0, (span - usable) / (n - 1)) : 0;
    const each = usable / n;

    let cur = a0 + (span - usable - realGap * Math.max(0, n - 1)) / 2;
    kids.forEach((child, i) => {
      const w = Math.max(each, minArc * 0.85);
      const aStart = cur;
      const aEnd = cur + each;
      place(child, aStart, aEnd, node.id);
      cur = aEnd + (i < n - 1 ? realGap : 0);
    });
  }

  const startAng = -Math.PI / 2;
  place(tree, startAng, startAng + Math.PI * 2, null);
  return { nodes, links };
}

function renderSpectrumGraph(force100) {
  const chart = ensureSpChart();
  if (!chart) return;
  if (force100) spState.zoom = 1;
  const tree = buildSpTreeData(spState.depth);
  syncSpZoomUi();
  syncSpLegendDepth();

  const el = document.getElementById("spGraph");
  const stage = document.getElementById("spGraphWrap");
  if (stage) {
    stage.classList.toggle("is-deep", spState.depth >= 3);
    stage.classList.toggle("is-deeper", spState.depth >= 4);
  }
  const w = (el && el.clientWidth) || chart.getWidth() || 900;
  const h = (el && el.clientHeight) || chart.getHeight() || 640;
  const cx = w * 0.5;
  const cy = h * 0.5;
  const { nodes, links } = buildSpGraphLayout(tree, cx, cy);
  const outerLabels = buildSpOuterLabelNodes(nodes);
  const data = nodes.concat(outerLabels);

  chart.setOption({
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255,255,255,.96)",
      borderColor: "rgba(65,127,251,.12)",
      borderWidth: 1,
      padding: [10, 14],
      textStyle: { color: "#3F4247", fontSize: 12 },
      extraCssText: "box-shadow:0 8px 24px rgba(72,90,129,.12);border-radius:10px;",
      formatter: (p) => {
        if (p.dataType === "edge") return "";
        const d = p.data || {};
        if (d.id && String(d.id).startsWith("lbl-")) return "";
        const bits = [`<b style="font-size:13px">${d.name || ""}</b>`];
        if (d.level === 0) bits.push(`产品总数 ${d.value || 0}`);
        else if (d.level < 4) bits.push(`含 ${d.value || 0} 个四级产品`);
        else {
          if (d.org) bits.push(d.org);
          if (d.tags && d.tags.length) bits.push(`标签：${d.tags.join("、")}`);
        }
        return bits.join("<br>");
      },
    },
    series: [{
      type: "graph",
      id: "spGraphSeries",
      layout: "none",
      data,
      links,
      categories: [
        { name: "中心" },
        { name: "一级" },
        { name: "二级" },
        { name: "三级" },
        { name: "四级" },
      ],
      /* 只允许平移，禁止滚轮缩小整图 */
      roam: "move",
      draggable: false,
      scaleLimit: { min: 1, max: 1 },
      zoom: 1,
      center: null,
      label: { show: true },
      lineStyle: {
        color: "rgba(130,145,170,.26)",
        width: 1.1,
        curveness: 0.08,
        opacity: 0.9,
      },
      emphasis: {
        focus: "adjacency",
        scale: false,
        lineStyle: { width: 2, color: "rgba(65,127,251,.5)" },
        itemStyle: { shadowBlur: 28 },
      },
      blur: {
        itemStyle: { opacity: 0.28 },
        lineStyle: { opacity: 0.1 },
      },
      animationDuration: 420,
      animationDurationUpdate: 320,
      animationEasingUpdate: "cubicOut",
    }],
  }, { notMerge: true });

  /* 二次锁定：防止 ECharts 按包围盒自动缩小 */
  requestAnimationFrame(() => {
    lockSpChartZoom100(chart);
    spState.zoom = 1;
    syncSpZoomUi();
  });
}

function focusSpGraphNode(id) {
  spState.focusId = id || "";
  if (id) {
    const lv = (id.match(/-/g) || []).length;
    if (lv > spState.depth) {
      setSpDepth(Math.min(4, lv));
      return;
    }
  }
  renderSpectrumGraphSide();
  if (spState.view === "graph") renderSpectrumGraph(true);
}

function renderSpectrumPage() {
  renderSpectrumStats();
  const box = document.getElementById("spTree");
  if (!box) return;
  const data = filteredSpectrum();
  if (!data.length) {
    box.innerHTML = '<div class="sp-empty">暂无匹配产品</div>';
  } else {
    box.innerHTML = data.map((l1, li) => {
      const selName = spState.l2Sel[l1.name];
      const active = l1.l2.find((r) => r.name === selName) || l1.l2[0];
      if (active) spState.l2Sel[l1.name] = active.name;
      return `
      <section class="sp-block" data-spl1="${l1.name}">
        <header class="sp-l1">
          <span class="sp-l1-ico">${SP_ICO}</span>
          <b class="sp-l1-name">${l1.name}</b>
          <em>${l1.n}个产品</em>
        </header>
        <div class="sp-body">
          <aside class="sp-l2-nav" role="tablist" aria-label="${l1.name}二级业务">
            ${l1.l2.map((row) => `
              <button type="button" class="sp-l2-nav-item ${row.name === active.name ? "is-on" : ""}"
                role="tab" aria-selected="${row.name === active.name}"
                data-spl1="${l1.name}" data-spl2="${row.name}">
                <span class="sp-l2-ico">${spL2Ico(row.name)}</span>
                <strong>${row.name}</strong>
                <small>${row.n}个产品</small>
              </button>
            `).join("")}
          </aside>
          <div class="sp-l2-main">
            ${l1.l2.map((row) => `
              <div class="sp-l2-panel ${row.name === active.name ? "is-on" : ""}" data-spl1="${l1.name}" data-spl2="${row.name}" role="tabpanel">
                ${row.l3.map((g) => `
                  <section class="sp-l3">
                    <h3 class="sp-l3-name">${g.name}</h3>
                    <div class="sp-cards">
                      ${g.items.map((it) => `<article class="sp-card" role="button" tabindex="0"
                        data-sp-name="${it.name}"
                        data-sp-org="${it.org || ""}"
                        data-sp-tags="${(it.tags || []).join(",")}"
                        data-sp-path="${l1.name} / ${row.name} / ${g.name} / ${it.name}">
                        ${spKidsHtml(it)}
                        <span class="sp-card-ico">${spProductIco(it.name)}</span>
                        <span class="sp-card-body">
                          <span class="sp-card-name"><span class="sp-card-title">${it.name}</span>${spTagsHtml(it.tags)}</span>
                          ${spOrgHtml(it.org)}
                        </span>
                      </article>`).join("")}
                    </div>
                  </section>
                `).join("")}
              </div>
            `).join("")}
          </div>
        </div>
      </section>`;
    }).join("");
  }
  if (spState.view === "graph") {
    renderSpectrumGraph(true);
    renderSpectrumGraphSide();
  }
}

function renderSpectrum() {
  renderSpectrumPage();
  return "";
}

/* ---------- 产品详情（产品图谱） ---------- */
const pdState = {
  name: "GFXIN",
  org: "咪咕公司、互联网公司",
  tags: ["必"],
  path: "通信服务 / 移动通信 / 移动流量 / GFXIN",
  code: "",
  type: "",
  tab: "bp",
  bpCode: "BP-0-20260826174153",
  bpName: "2026年GFXIN商业计划书",
};

const PD_REQ_SEED = [
  { code: "RR-2041-202608208249", name: "123", stage: "RR", status: "待分析", tone: "warn", user: "平台运营测试员2号—广东", time: "2026-08-20 19:56:58" },
  { code: "RR-2041-202608208250", name: "测试我的发起", stage: "RR", status: "待分析审核", tone: "ing", user: "RMT测试员1号—集团", time: "2026-08-20 18:12:05" },
  { code: "RR-2041-202608208251", name: "流量套餐优化", stage: "RR", status: "已驳回", tone: "alert", user: "平台运营测试员2号—广东", time: "2026-08-19 11:20:33" },
  { code: "RR-2041-202608208252", name: "分省运营看板", stage: "RR", status: "待分析", tone: "warn", user: "RMT测试员1号—集团", time: "2026-08-18 09:40:11" },
  { code: "RR-2041-202608208253", name: "计费能力对齐", stage: "RR", status: "待分析审核", tone: "ing", user: "平台运营测试员2号—广东", time: "2026-08-17 16:05:44" },
  { code: "RR-2041-202608208254", name: "渠道分发策略", stage: "RR", status: "待分析", tone: "warn", user: "RMT测试员2号—集团", time: "2026-08-16 14:22:09" },
  { code: "RR-2041-202608208255", name: "风控规则补充", stage: "RR", status: "已驳回", tone: "alert", user: "平台运营测试员1号—广东", time: "2026-08-15 10:11:50" },
  { code: "RR-2041-202608208256", name: "内容触达模板", stage: "RR", status: "待分析", tone: "warn", user: "RMT测试员1号—集团", time: "2026-08-14 20:08:27" },
  { code: "RR-2041-202608208257", name: "跨省复制方案", stage: "RR", status: "待分析审核", tone: "ing", user: "平台运营测试员2号—广东", time: "2026-08-13 08:33:16" },
  { code: "RR-2041-202608208258", name: "运营指标闭环", stage: "RR", status: "待分析", tone: "warn", user: "RMT测试员1号—集团", time: "2026-08-12 15:49:02" },
];

function openProductDetail(payload) {
  const p = payload || {};
  const found = p.name ? findSpectrumProduct(p.name) : null;
  const src = { ...(found || {}), ...p };
  pdState.name = src.name || "GFXIN";
  pdState.org = src.org || "—";
  pdState.tags = Array.isArray(src.tags) ? src.tags : [];
  pdState.path = src.path || pdState.name;
  pdState.code = src.code || "";
  pdState.type = src.type || "";
  if (pdState.name === "移动流量") {
    pdState.code = pdState.code || "1.1.1.1";
    pdState.type = pdState.type || "一";
    pdState.tab = "req";
  } else {
    pdState.tab = "bp";
  }
  pdState.bpCode = pdState.name === "GFXIN" ? "BP-0-20260826174153" : `BP-0-20260827${String(Date.now()).slice(-6)}`;
  pdState.bpName = `2026年${pdState.name}商业计划书`;
  goPath("#/product/spectrum/detail");
}

function findSpectrumProduct(name) {
  for (const l1 of SPECTRUM) {
    for (const l2 of l1.l2) {
      for (const g of l2.l3) {
        const hit = g.items.find((it) => it.name === name);
        if (hit) {
          return {
            name: hit.name,
            org: hit.org || "",
            tags: hit.tags || [],
            path: `${l1.name} / ${l2.name} / ${g.name} / ${hit.name}`,
            code: "",
            type: "",
          };
        }
      }
    }
  }
  return null;
}

function pdTagHtml(tags) {
  const t = (tags && tags[0]) || "";
  if (!t) return "";
  const cls = t === "必" ? "is-must" : t === "主" ? "is-main" : t === "育" ? "is-grow" : "is-new";
  return `<span class="sp-tag ${cls}" id="pdTag">${t === "必" ? "必" : t}</span>`;
}

function renderProductDetail() {
  const nameEl = document.getElementById("pdName");
  if (nameEl) nameEl.textContent = pdState.name;
  const tagHost = document.querySelector("#pageProductDetail .pd-title-row");
  if (tagHost) {
    const old = document.getElementById("pdTag");
    if (old) old.remove();
    if (pdState.tags.length) {
      nameEl.insertAdjacentHTML("afterend", pdTagHtml(pdState.tags));
    }
  }
  const setText = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = v || "—";
  };
  setText("pdPath", pdState.path);
  setText("pdCode", pdState.code || "—");
  setText("pdOrg", pdState.org || "—");
  setText("pdType", pdState.type || "—");

  const bps =
    pdState.name === "移动流量"
      ? []
      : [
          {
            code: pdState.bpCode,
            year: "2026",
            name: pdState.bpName,
            ver: "V1.0",
            time: pdState.name === "GFXIN" ? "2026-08-26 17:41:53" : "2026-08-27 10:20:11",
          },
        ];
  const reqs = pdState.name === "移动流量" ? PD_REQ_SEED : [];

  const bpCount = document.getElementById("pdBpCount");
  const reqCount = document.getElementById("pdReqCount");
  if (bpCount) bpCount.textContent = String(bps.length);
  if (reqCount) reqCount.textContent = String(reqs.length);

  document.querySelectorAll("#pdTabs .ad-tab").forEach((btn) => {
    btn.classList.toggle("is-on", btn.dataset.pdtab === pdState.tab);
  });
  const paneBp = document.getElementById("pdPaneBp");
  const paneReq = document.getElementById("pdPaneReq");
  if (paneBp) paneBp.classList.toggle("hidden", pdState.tab !== "bp");
  if (paneReq) paneReq.classList.toggle("hidden", pdState.tab !== "req");

  const bpBody = document.getElementById("pdBpBody");
  if (bpBody) {
    bpBody.innerHTML = bps.length
      ? bps.map((r) => `<tr>
          <td><a class="link" href="#/product/spectrum/bp" data-pd-bp="${r.code}">${r.code}</a></td>
          <td>${r.year}</td>
          <td>${r.name}</td>
          <td>${r.ver}</td>
          <td>${r.time}</td>
          <td class="col-ops"><a class="link" href="#/product/spectrum/bp" data-pd-preview="${r.code}">预览</a></td>
        </tr>`).join("")
      : `<tr><td colspan="6"><div class="pd-empty">暂无商业计划书</div></td></tr>`;
  }
  const bpFoot = document.getElementById("pdBpFoot");
  if (bpFoot) bpFoot.textContent = `共 ${bps.length} 条`;

  const reqBody = document.getElementById("pdReqBody");
  if (reqBody) {
    reqBody.innerHTML = reqs.length
      ? reqs.map((r) => `<tr>
          <td><a class="link" href="#/req/list/detail">${r.code}</a></td>
          <td>${r.name}</td>
          <td><span class="linetag t-ing">${r.stage}</span></td>
          <td><span class="st-tag t-${r.tone}"><i></i>${r.status}</span></td>
          <td>${r.user}</td>
          <td>${r.time}</td>
          <td class="col-ops"><a class="link" href="#/req/list/detail">详情</a></td>
        </tr>`).join("")
      : `<tr><td colspan="7"><div class="pd-empty">暂无产品需求</div></td></tr>`;
  }
  const reqFoot = document.getElementById("pdReqFoot");
  if (reqFoot) reqFoot.textContent = `共 ${reqs.length} 条`;
}

function renderProductBpArchive() {
  const name = pdState.name || "GFXIN";
  const setText = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = v;
  };
  setText("pdBpName", name);
  setText("pdBpNavName", name);
  const tag = document.getElementById("pdBpTag");
  if (tag) tag.textContent = "新产品";
  const meta = document.getElementById("pdBpMeta");
  if (meta) {
    meta.innerHTML = `
      <span>文档编号：<em class="is-code">${pdState.bpCode || "BP-0-20260826174153"}</em></span>
      <span>归属公司：<em>${pdState.org || "—"}</em></span>
      <span>规划年度：<em>2026</em></span>
      <span>截止时间：<em>2026-08-31</em></span>
      <span>当前处理人：<em>平台运营测试员2号</em></span>
      <span>流程环节：<em>归档</em></span>
      <span>版本标签：<em>V1.0</em></span>`;
  }
  const body = document.getElementById("pdBpBodyText");
  if (body) {
    body.innerHTML = `
      <p>${name} 以移动流量与内容分发场景为切入点，面向政企与省级客户提供可规模化交付的流量运营与内容触达能力。产品定位聚焦「可编排、可计量、可运营」的流量服务底座，支撑套餐包装、渠道分发与运营分析闭环。</p>
      <p>过去一年已完成核心算法与试点省落地验证，重点市场占有率稳步提升。2026 年将以标准化产品包为主线，推动跨省复制与渠道协同，完善计费、风控与运营看板能力。</p>
      <p>未来三年规划保持两位数增长目标，投入重点覆盖研发迭代、运营保障与市场拓展。通过联合例会与版本窗口管理，降低跨单位协作风险，保障规划落地节奏。</p>
      <p>风险方面重点关注协作断点、需求变更与交付窗口冲突，将通过联合例会、版本冻结窗口与应急预案机制持续管控。</p>`;
  }
  const title = document.getElementById("bpPreviewTitle");
  if (title) title.textContent = `${name} 产品商业计划书-2026版`;
  const paper = document.querySelector("#bpPreviewDlg .bp-preview-paper");
  if (paper) {
    paper.innerHTML = `
      <h4>商业计划书正文</h4>
      <p>${name} 以移动流量与内容分发场景为切入点，面向政企与省级客户提供可规模化交付的流量运营与内容触达能力。产品定位聚焦「可编排、可计量、可运营」的流量服务底座，支撑套餐包装、渠道分发与运营分析闭环。</p>
      <p>过去一年已完成核心算法与试点省落地验证，重点市场占有率稳步提升。2026 年将以标准化产品包为主线，推动跨省复制与渠道协同，完善计费、风控与运营看板能力。</p>
      <p>未来三年规划保持两位数增长目标，投入重点覆盖研发迭代、运营保障与市场拓展。通过联合例会与版本窗口管理，降低跨单位协作风险，保障规划落地节奏。</p>
      <p>风险方面重点关注协作断点、需求变更与交付窗口冲突，将通过联合例会、版本冻结窗口与应急预案机制持续管控。</p>`;
  }
}

const BO_ING_SEED = [
  { code: "BP-0-20260827120045", name: "咪咕动漫", company: "咪咕公司", time: "2026-08-27", left: "6 天", phase: "商业计划书分派" },
  { code: "BP-0-20260827120112", name: "网络摄像机", company: "终端公司", time: "2026-08-26", left: "5 天", phase: "商业计划书初审" },
  { code: "BP-0-20260825114002", name: "咪咕音乐", company: "咪咕公司", time: "2026-08-25", left: "4 天", phase: "商业计划书编制" },
  { code: "BP-7468-20260528063524", name: "5G新通话20元微信立减金", company: "金科公司", time: "2026-08-24", left: "8 天", phase: "商业计划书编制" },
  { code: "BP-0-20260823100331", name: "云电脑中小企业版", company: "互联网公司", time: "2026-08-23", left: "3 天", phase: "商业计划书初审" },
  { code: "BP-0-20260822153018", name: "咪咕游戏", company: "咪咕公司", time: "2026-08-22", left: "7 天", phase: "商业计划书分派" },
];
const BO_ING = Array.from({ length: 117 }, (_, i) => {
  const s = BO_ING_SEED[i % BO_ING_SEED.length];
  if (i < BO_ING_SEED.length) return s;
  return { ...s, code: `BP-0-20260827${String(120000 + i).slice(-6)}`, name: `${s.name}-${i}`, time: `2026-08-${String((i % 27) + 1).padStart(2, "0")}` };
});
const BO_DONE_SEED = [
  { code: "BP-0-20260827120045", name: "咪咕动漫", company: "咪咕公司", time: "2026-08-27", result: "通过", score: "87" },
  { code: "BP-0-20260826110108", name: "咪咕游戏", company: "咪咕公司", time: "2026-08-26", result: "通过", score: "91" },
  { code: "BP-0-20260825143022", name: "咪咕音乐", company: "咪咕公司", time: "2026-08-25", result: "通过", score: "88" },
  { code: "BP-0-20260823120011", name: "云电脑", company: "互联网公司", time: "2026-08-23", result: "-", score: "-" },
  { code: "BP-0-20260821100844", name: "视频彩铃", company: "咪咕公司", time: "2026-08-21", result: "通过", score: "84" },
];
const BO_DONE = Array.from({ length: 27 }, (_, i) => {
  const s = BO_DONE_SEED[i % BO_DONE_SEED.length];
  if (i < BO_DONE_SEED.length) return s;
  return { ...s, code: `BP-0-2026082${String(100000 + i).slice(-6)}`, name: `${s.name}-${i}` };
});
const boState = { tab: "ing", kw: "", page: 1, pageSize: 10, unit: "migu", units: ["migu", "internet", "jinke"] };

const BO_STAGES = [
  { key: "assign", name: "商业计划书分派", card: "计划书分派", short: "商业计划书<br>分派", ico: "img/bare/q-assign.png", bar: "#417FFB" },
  { key: "compile", name: "商业计划书编制", card: "计划书编制", short: "商业计划书<br>编制", ico: "img/bare/bo-unit-doc.png", bar: "#417FFB" },
  { key: "cdt", name: "CDT团队负责人审批", card: "CDT审批", short: "CDT团队<br>负责人审批", ico: "img/bare/q-cdt.png", bar: "#417FFB" },
  { key: "first", name: "商业计划书初审", card: "计划书初审", short: "商业计划书<br>初审", ico: "img/bare/q-search.png", bar: "#417FFB" },
  { key: "pmt", name: "PMT领导审批", card: "PMT审批", short: "PMT领导<br>审批", ico: "img/bare/q-users.png", bar: "#417FFB" },
  { key: "pm", name: "集团产品PM审查", card: "PM审查", short: "集团产品<br>PM审查", ico: "img/bare/q-pdt.png", bar: "#417FFB" },
  { key: "mgr", name: "集团处室经理审批", card: "处室审批", short: "集团处室<br>经理审批", ico: "img/bare/bo-unit-stamp.png", bar: "#417FFB" },
  { key: "review", name: "商业计划书评审", card: "计划书评审", short: "商业计划书<br>评审", ico: "img/bare/q-eval.png", bar: "#417FFB" },
];
const BO_PIE = ["#6799FC", "#84EAB7", "#FFD381", "#918DFC", "#FF8EC3", "#417FFB", "#A8C5FD", "#C4C1FD"];
const BO_HBAR_KEYS = ["review", "mgr", "pm", "pmt", "first", "cdt", "compile", "assign"];
function boUnitIco(key) {
  const s = 'stroke="#417FFB" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
  const d = {
    assign: `<path d="M5 12.1L19 6.2l-4.8 12.2-1.7-5.5z" ${s}/><path d="M12.5 12.9L19 6.2" ${s}/>`,
    compile: `<rect x="6" y="4.8" width="12" height="14.4" rx="2" ${s}/><path d="M8.4 9h7.2M8.4 12.1h7.2M8.4 15.2h4.6" ${s}/>`,
    cdt: `<path d="M12 4.1l6.4 2.3v4.6c0 3.7-2.8 6.2-6.4 7.4-3.6-1.2-6.4-3.7-6.4-7.4V6.4L12 4.1z" ${s}/><path d="M9.3 11.9l1.9 1.9 3.8-3.9" ${s}/>`,
    first: `<circle cx="11.2" cy="11.2" r="5.2" ${s}/><path d="M15 15l4.2 4.2" ${s}/>`,
    pmt: `<circle cx="9.2" cy="8.4" r="2.5" ${s}/><path d="M5 18.6c.4-2.6 2-4 4.2-4s3.8 1.4 4.2 4" ${s}/><circle cx="16" cy="9" r="2.1" ${s}/><path d="M13.4 18.6c.3-2 1.5-3.1 3-3.2 1.6.1 2.8 1.3 3 3.2" ${s}/>`,
    pm: `<path d="M4.2 12c2.6-4.4 5.1-5.6 7.8-5.6s5.2 1.2 7.8 5.6c-2.6 4.4-5.1 5.6-7.8 5.6S6.8 16.4 4.2 12z" ${s}/><circle cx="12" cy="12" r="2.3" ${s}/>`,
    mgr: `<circle cx="12" cy="10.2" r="5.4" ${s}/><circle cx="12" cy="10.2" r="2.1" ${s}/><path d="M8.2 17.2h7.6M9.6 17.2v2.6M14.4 17.2v2.6" ${s}/>`,
    review: `<rect x="6.2" y="5.6" width="11.6" height="13.2" rx="2" ${s}/><rect x="8.8" y="3.6" width="6.4" height="2.8" rx="0.8" ${s}/><path d="M9.2 12.2l2.1 2.1 4-4.1" ${s}/>`,
  };
  return `<svg viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${d[key] || ""}</svg>`;
}
const BO_COUNT_ICO = {
  review: '<path d="M9 4.6h6v2.2H9z"/><path d="M8 5.6h8a1.6 1.6 0 0 1 1.6 1.6v11.2A1.6 1.6 0 0 1 16 20H8a1.6 1.6 0 0 1-1.6-1.6V7.2A1.6 1.6 0 0 1 8 5.6z"/><path d="M9.4 12.1l1.7 1.7 3.5-3.6"/>',
  mgr: '<circle cx="12" cy="10" r="5.2"/><circle cx="12" cy="10" r="2"/><path d="M8.2 16.6h7.6M9.6 16.6v3M14.4 16.6v3"/>',
  pm: '<path d="M4.2 9h5.2l1.5 1.8H19.8v8.1a1.4 1.4 0 0 1-1.4 1.4H5.6A1.4 1.4 0 0 1 4.2 18.9V9z"/>',
  pmt: '<circle cx="9" cy="8.2" r="2.3"/><path d="M4.6 18.6c.4-2.8 2.1-4.2 4.4-4.2s4 1.4 4.4 4.2"/><circle cx="16.2" cy="8.8" r="1.9"/><path d="M13.4 18.6c.3-2.1 1.6-3.2 3.3-3.4 1.8.2 3.1 1.5 3.3 3.4"/>',
  first: '<circle cx="10.8" cy="10.8" r="5.1"/><path d="M14.8 14.8L19.4 19.4"/>',
  cdt: '<path d="M12 3.6l7.2 2.7v5.4c0 4.2-3.2 7.2-7.2 8.5-4-1.3-7.2-4.3-7.2-8.5V6.3L12 3.6z"/><path d="M9.4 12.2l1.8 1.8 3.6-3.7"/>',
  compile: '<path d="M5.4 9.4h13.2v9.4H5.4z"/><path d="M5.4 9.4l2.5-3.2h13.2l-2.5 3.2"/><path d="M9.4 14.2h5.2"/>',
  assign: '<path d="M4.2 12.2L20 5.2l-6.4 14.2-1.9-6.5L4.2 12.2z"/><path d="M11.7 12.9L20 5.2"/>',
};
const BO_CYCLE = { review: 18.8, mgr: 9.2, pm: 4.9, pmt: 0.1, first: 14.2, cdt: 2.9, compile: 25.6, assign: 30.6 };
const BO_COUNT = { review: 8, mgr: 0, pm: 1, pmt: 0, first: 5, cdt: 2, compile: 28, assign: 73 };
const BO_COMPANIES = [
  { id: "internet", name: "互联网公司", submit: 42, pass: 8, passRate: "19%", avg: 23, over: 0, timely: "2.4%", cycle: { assign: 40, compile: 45, cdt: 12, first: 28, pmt: 3, pm: 14, mgr: 20, review: 22 } },
  { id: "jinke", name: "金科公司", submit: 25, pass: 4, passRate: "16%", avg: 32.6, over: 0, timely: "4%", cycle: { assign: 50, compile: 55, cdt: 18, first: 42, pmt: 4, pm: 18, mgr: 32, review: 42 } },
  { id: "migu", name: "咪咕公司", submit: 77, pass: 14, passRate: "18.2%", avg: 18.3, over: 0, timely: "11.7%", cycle: { assign: 28, compile: 32, cdt: 6, first: 22, pmt: 2, pm: 10, mgr: 16, review: 30 } },
  { id: "oms", name: "在线营销服务中心", submit: 19, pass: 3, passRate: "15.8%", avg: 21, over: 0, timely: "5.3%", cycle: { assign: 24, compile: 30, cdt: 8, first: 18, pmt: 2, pm: 11, mgr: 15, review: 20 } },
  { id: "intl", name: "国际公司", submit: 12, pass: 2, passRate: "16.7%", avg: 26.4, over: 0, timely: "8.3%", cycle: { assign: 36, compile: 40, cdt: 10, first: 24, pmt: 3, pm: 13, mgr: 22, review: 28 } },
  { id: "shri", name: "上海产业研究院", submit: 9, pass: 1, passRate: "11.1%", avg: 19.5, over: 0, timely: "11.1%", cycle: { assign: 22, compile: 26, cdt: 7, first: 16, pmt: 1, pm: 9, mgr: 14, review: 18 } },
  { id: "terminal", name: "终端公司", submit: 18, pass: 1, passRate: "5.6%", avg: 13, over: 0, timely: "5.6%", cycle: { assign: 20, compile: 24, cdt: 5, first: 16, pmt: 1, pm: 8, mgr: 12, review: 18 } },
  { id: "iot", name: "物联网公司", submit: 14, pass: 1, passRate: "7.1%", avg: 17, over: 0, timely: "7.1%", cycle: { assign: 26, compile: 30, cdt: 8, first: 20, pmt: 2, pm: 11, mgr: 15, review: 24 } },
];

function boStageByKey(key) {
  return BO_STAGES.find((s) => s.key === key);
}

function boTicks(max, step) {
  const out = [];
  for (let v = 0; v <= max; v += step) out.push(v);
  return out;
}

function selectedBoCompanies() {
  return boState.units.map((id) => BO_COMPANIES.find((c) => c.id === id)).filter(Boolean);
}

function selectedBoCompany() {
  return selectedBoCompanies().find((c) => c.id === boState.unit) || selectedBoCompanies()[0] || BO_COMPANIES[0];
}

function toggleBoUnit(id) {
  const on = boState.units.includes(id);
  if (on) {
    if (boState.units.length === 1) {
      toast("至少选择 1 个单位");
      return;
    }
    boState.units = boState.units.filter((x) => x !== id);
    if (boState.unit === id) boState.unit = boState.units[0];
  } else {
    if (boState.units.length >= 3) {
      toast("最多选择 3 个单位");
      return;
    }
    boState.units = [...boState.units, id];
  }
  renderBoUnitViz();
}

function renderBoUnitPick() {
  const tags = document.getElementById("boUnitPickTags");
  const pop = document.getElementById("boUnitPop");
  const pick = document.getElementById("boUnitPick");
  if (!tags || !pop) return;
  const selected = selectedBoCompanies();
  const first = selected[0];
  const more = selected.length - 1;
  let html = "";
  if (first) {
    html += `<span class="bo-msel-tag"><em>${first.name}</em><button type="button" data-unpick="${first.id}" aria-label="移除">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.2 2.2l5.6 5.6M7.8 2.2L2.2 7.8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
    </button></span>`;
    if (more > 0) html += `<span class="bo-msel-tag"><em>+ ${more} ...</em></span>`;
  }
  tags.innerHTML = html;
  if (pick) pick.classList.toggle("has-val", selected.length > 0);
  const check = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.4 8.2l3.1 3.1 6.1-6.4" stroke="#417FFB" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  pop.innerHTML = BO_COMPANIES.map((c) => {
    const on = boState.units.includes(c.id);
    return `<button type="button" class="bo-msel-opt${on ? " is-on" : ""}" data-uid="${c.id}"><span>${c.name}</span>${check}</button>`;
  }).join("");
}

function renderBoCycleChart() {
  const box = document.getElementById("boCycleChart");
  if (!box) return;
  const max = 50;
  const rows = BO_HBAR_KEYS.map((key) => {
    const val = BO_CYCLE[key];
    const w = val > 0 ? Math.max((val / max) * 100, 2.4) : 0;
    return `<li>
      <span class="bo-plab">${boStageByKey(key).name}</span>
      <div class="bo-ptrack"><b style="width:${w}%"><i></i></b></div>
      <em class="bo-pval">${val}<span>天</span></em>
    </li>`;
  }).join("");
  box.innerHTML = `<ul class="bo-plist">${rows}</ul>`;
}

function polarXY(cx, cy, r, ang) {
  const a = ((ang - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [n >> 16, (n >> 8) & 255, n & 255];
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("")}`;
}

function mixHex(a, b, t) {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  return rgbToHex(A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t);
}

function boStageColor(key) {
  const i = BO_STAGES.findIndex((s) => s.key === key);
  return BO_PIE[i] || BO_PIE[0];
}

function donutSlice(cx, cy, r, r0, a0, a1) {
  const large = a1 - a0 > 180 ? 1 : 0;
  const [x0, y0] = polarXY(cx, cy, r, a0);
  const [x1, y1] = polarXY(cx, cy, r, a1);
  const [ix0, iy0] = polarXY(cx, cy, r0, a1);
  const [ix1, iy1] = polarXY(cx, cy, r0, a0);
  return `M${x0.toFixed(2)} ${y0.toFixed(2)} A${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} L${ix0.toFixed(2)} ${iy0.toFixed(2)} A${r0} ${r0} 0 ${large} 0 ${ix1.toFixed(2)} ${iy1.toFixed(2)} Z`;
}

function renderBoCountChart() {
  const box = document.getElementById("boCountChart");
  if (!box) return;
  const items = BO_STAGES.map((st) => ({ ...st, n: BO_COUNT[st.key], c: boStageColor(st.key) }));
  const total = items.reduce((s, d) => s + d.n, 0) || 1;
  const maxN = Math.max(...items.map((d) => d.n));
  const cx = 120;
  const cy = 120;
  const r = 90;
  const r0 = 56;
  const rHi = 94;
  const r0Hi = 54;
  let ang = 0;
  const slices = items.filter((d) => d.n > 0).map((d) => {
    const sweep = (d.n / total) * 360;
    const a0 = ang;
    const a1 = ang + sweep;
    ang = a1;
    const hi = d.n === maxN;
    return { ...d, hi, dth: donutSlice(cx, cy, hi ? rHi : r, hi ? r0Hi : r0, a0, a1) };
  });
  const paths = [
    ...slices.filter((s) => !s.hi),
    ...slices.filter((s) => s.hi),
  ].map((s) => `<path fill="${s.c}" d="${s.dth}"></path>`).join("");
  const list = BO_HBAR_KEYS.map((key) => {
    const st = boStageByKey(key);
    const n = BO_COUNT[key];
    const c = boStageColor(key);
    return `<li>
      <p><i style="background:${c}"></i><span>${st.name}</span></p>
      <em>${n}</em>
    </li>`;
  }).join("");
  box.innerHTML = `<div class="bo-ring">
    <div class="bo-donut">
      <svg viewBox="0 0 240 240" aria-hidden="true">${paths}</svg>
      <div class="bo-donut-c"><b>${items.reduce((s, d) => s + d.n, 0)}</b><span>任务总数</span></div>
    </div>
    <ul class="bo-ring-leg">${list}</ul>
  </div>`;
}

function renderBoUnitViz() {
  const tabs = document.getElementById("boUnitTabs");
  const chart = document.getElementById("boUnitChart");
  const tb = document.getElementById("boUnitTbody");
  if (!tabs || !chart || !tb) return;
  renderBoUnitPick();
  const units = selectedBoCompanies();
  const cur = selectedBoCompany();
  tabs.innerHTML = units.map((c) =>
    `<button type="button" class="bo-flow-tab${c.id === cur.id ? " is-on" : ""}" data-uid="${c.id}">${c.name}</button>`
  ).join("");
  chart.innerHTML = BO_STAGES.map((st) => {
    const val = cur.cycle[st.key];
    return `<article class="bo-flow-card">
      <span class="bo-flow-ico">${boUnitIco(st.key)}</span>
      <h4>${st.name}</h4>
      <b>${val}<span>天</span></b>
    </article>`;
  }).join("");
  tb.innerHTML = units.map((u) => `<tr class="${u.id === cur.id ? "is-on" : ""}">
    <td>${u.name}</td><td>${u.submit}</td><td>${u.pass}</td><td>${u.passRate}</td>
    <td>${u.avg}</td><td>${u.over}</td><td>${u.timely}</td>
  </tr>`).join("");
}

function renderBoCharts() {
  renderBoCycleChart();
  renderBoCountChart();
  renderBoUnitViz();
}

function filteredBo() {
  const src = boState.tab === "done" ? BO_DONE : BO_ING;
  return src.filter((r) => {
    const q = boState.kw;
    if (q && !r.name.includes(q) && !r.company.includes(q) && !r.code.includes(q)) return false;
    return true;
  });
}

function renderBoTable() {
  const head = document.getElementById("boThead");
  const tb = document.getElementById("boTbody");
  if (!head || !tb) return;
  const done = boState.tab === "done";
  head.innerHTML = done
    ? "<tr><th>文档编号</th><th>产品名称</th><th>所属公司</th><th>完成时间</th><th>结果</th><th>得分</th><th>评审报告</th></tr>"
    : "<tr><th>文档编号</th><th>产品名称</th><th>所属公司</th><th>提交时间</th><th>剩余时间</th><th>当前环节</th><th>操作</th></tr>";
  const list = filteredBo();
  const pages = Math.max(1, Math.ceil(list.length / boState.pageSize));
  if (boState.page > pages) boState.page = pages;
  const slice = list.slice((boState.page - 1) * boState.pageSize, boState.page * boState.pageSize);
  tb.innerHTML = slice.map((r) => {
    if (done) {
      const score = r.score === "-" ? "-" : `<span class="bo-score">${r.score}分</span>`;
      const result = r.result === "通过" ? '<span class="linetag t-ok">通过</span>' : "-";
      return `<tr>
        <td>${r.code}</td><td>${r.name}</td><td>${r.company}</td><td>${r.time}</td>
        <td>${result}</td><td>${score}</td>
        <td><button type="button" class="link" data-bpreport="${r.code}">查看报告</button></td>
      </tr>`;
    }
    return `<tr>
      <td>${r.code}</td><td>${r.name}</td><td>${r.company}</td><td>${r.time}</td>
      <td class="bo-remain">${r.left}</td><td>${r.phase}</td>
      <td><a class="link" href="#/product/bp-overview/detail">查看</a></td>
    </tr>`;
  }).join("");
  paintPager(document.getElementById("boPager"), "bo", boState.page, pages, list.length, boState.pageSize);
  document.querySelectorAll(".bo-tab").forEach((el) => el.classList.toggle("is-on", el.dataset.botab === boState.tab));
}

/* ---------- Insight page ---------- */
const state = {
  pill: "全部",
  tab: "list",
  page: 1,
  pageSize: 10,
  detailId: 1,
  product: "",
  dateKey: "全部",
  keyword: "",
};

function filteredReports() {
  return REPORTS.filter((r) => {
    if (state.pill !== "全部" && !r.tags.includes(state.pill)) return false;
    if (state.product && !r.products.includes(state.product)) return false;
    if (state.keyword && !r.title.includes(state.keyword)) return false;
    return true;
  });
}

function syncReportCheckAll() {
  const all = [...document.querySelectorAll("#reportList .ck")];
  const bar = document.getElementById("reportBar");
  const ck = document.getElementById("reportCheckAll");
  const count = document.getElementById("reportBarCount");
  const share = document.getElementById("reportShare");
  if (!bar || !ck) return;
  bar.hidden = !all.length;
  const n = all.filter((c) => c.checked).length;
  ck.checked = all.length > 0 && n === all.length;
  ck.indeterminate = n > 0 && n < all.length;
  if (count) {
    count.hidden = n === 0;
    count.textContent = `已选 ${n} 项`;
  }
  if (share) share.hidden = n === 0;
}

function reportCats(r) {
  const cats = ["行业洞察", "市场洞察", "客户洞察", "竞争分析", "其他"];
  return (r.tags || []).filter((t) => cats.includes(t));
}

function reportLabels(r) {
  const cats = ["行业洞察", "市场洞察", "客户洞察", "竞争分析", "其他"];
  const extra = (r.tags || []).filter((t) => !cats.includes(t));
  return [...(r.label ? [r.label] : []), ...extra];
}

function renderList() {
  const all = filteredReports();
  const start = (state.page - 1) * state.pageSize;
  const slice = all.slice(start, start + state.pageSize);
  const box = document.getElementById("reportList");
  if (state.tab === "history") {
    box.innerHTML = HISTORY_ROWS.map(
      (r) => `<div class="report-item">
      <input class="ck" type="checkbox">
      <div class="report-main">
        <div class="report-title-row">
          <span class="report-title">${r.title}</span>
        </div>
        <div class="meta-row">
          <span>${ICONS.clock} 分发时间：${r.time}</span>
          <span>${ICONS.user} 操作人：${r.owner}</span>
        </div>
      </div>
    </div>`
    ).join("");
    renderPager(HISTORY_ROWS.length);
    syncReportCheckAll();
    return;
  }
  if (state.tab === "draft") {
    box.innerHTML = `<div class="report-item">
      <input class="ck" type="checkbox">
      <div class="report-main">
        <div class="report-title-row">
          <span class="report-title">未命名草稿-市场洞察</span>
          <span class="tag">草稿</span>
        </div>
        <div class="meta-row"><span>${ICONS.clock} 保存时间：2026-08-24 11:20:03</span></div>
      </div>
      <div class="report-ops">
        <button>${ICONS.eye} 继续编辑</button>
      </div>
    </div>`;
    renderPager(1);
    syncReportCheckAll();
    return;
  }
  if (!slice.length) {
    box.innerHTML = `<div class="empty"><p>暂无报告</p></div>`;
    renderPager(0);
    syncReportCheckAll();
    return;
  }
  box.innerHTML = slice
    .map(
      (r) => `<div class="report-item">
      <input class="ck" type="checkbox" data-id="${r.id}">
      <div class="report-main">
        <div class="report-title-row">
          ${r.unread ? `<span class="unread-flag">未读</span>` : ""}
          <button class="report-title" data-act="view" data-id="${r.id}">${r.title}</button>
          ${reportCats(r).map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="meta-row">
          <span>${ICONS.building} ${dash(r.company)}</span>
          <span>${ICONS.clock} 提交时间：${r.time}</span>
          <span>${ICONS.user} ${dash(r.owner)}</span>
          <span>${ICONS.cal} 所属月度：${dash(r.month)}</span>
        </div>
        <div class="rel-row">
          <span>${ICONS.box} 关联产品：${r.products.map((p) => `<span class="tag tag-blue">${p}</span>`).join("")}</span>
          <span class="rel-tag">${ICONS.tag} 标签：${reportLabels(r).map((t) => `<span class="tag">${t}</span>`).join("") || "-"}</span>
        </div>
      </div>
      <div class="report-ops">
        <button data-act="view" data-id="${r.id}">查看</button>
        <button data-act="share" data-id="${r.id}">分发</button>
        <button data-act="down">下载</button>
      </div>
    </div>`
    )
    .join("");
  renderPager(all.length);
  syncReportCheckAll();
}

function renderPager(total) {
  const pages = Math.max(1, Math.ceil(total / state.pageSize));
  if (state.page > pages) state.page = pages;
  const el = document.getElementById("pager");
  const nums = [];
  for (let i = 1; i <= pages; i++) nums.push(i);
  el.innerHTML = `
    <span class="total">共 ${total} 条</span>
    <button class="pager-btn" data-p="prev" ${state.page <= 1 ? "disabled" : ""}>‹</button>
    ${nums
      .map((n) => `<button class="pager-btn ${n === state.page ? "is-on" : ""}" data-p="${n}">${n}</button>`)
      .join("")}
    <button class="pager-btn" data-p="next" ${state.page >= pages ? "disabled" : ""}>›</button>
    <span>10 条/页</span>
    <span>跳至</span>
    <input class="jump" id="jumpPage" value="${state.page}">
    <span>页</span>`;
}

function toast(msg, type) {
  const t = document.getElementById("toast");
  const fail = type === "fail" || type === "error" || /失败|请选择|请填写|请上传|不超过|最多/.test(String(msg || ""));
  t.classList.toggle("is-fail", fail);
  t.querySelector(".toast-txt").textContent = msg;
  t.classList.add("show");
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove("show"), 1800);
}

let confirmAction = null;
function openConfirm({ title, desc, onOk }) {
  document.getElementById("confirmTitle").textContent = title;
  document.getElementById("confirmDesc").textContent = desc || "";
  confirmAction = onOk;
  document.getElementById("confirmDlg").classList.remove("hidden");
}
function closeConfirm() {
  document.getElementById("confirmDlg").classList.add("hidden");
  confirmAction = null;
}
function bindConfirmDlg() {
  const close = () => closeConfirm();
  document.getElementById("confirmClose").addEventListener("click", close);
  document.getElementById("confirmCancel").addEventListener("click", close);
  document.getElementById("confirmMask").addEventListener("click", close);
  document.getElementById("confirmOk").addEventListener("click", () => {
    const fn = confirmAction;
    closeConfirm();
    if (fn) fn();
  });
}

const SHARE_MEMBERS = [
  { name: "市场经营部-测试多角色 (协同岗)" },
  { name: "超级管理员" },
  { name: "平台运营测试员2号" },
  { name: "PMT测试员1号" },
  { name: "集团-钟（测试）", disabled: true },
  { name: "集团-IPMT测试员3号", disabled: true },
];

function selectedReports() {
  const ids = [...document.querySelectorAll("#reportList .ck:checked")]
    .map((c) => Number(c.dataset.id))
    .filter(Boolean);
  return REPORTS.filter((r) => ids.includes(r.id));
}

function syncShareGroup() {
  const group = document.getElementById("shareGroup");
  if (!group) return;
  const enabled = [...document.querySelectorAll("#shareTree .share-mem:not(:disabled)")];
  const n = enabled.filter((c) => c.checked).length;
  group.checked = enabled.length > 0 && n === enabled.length;
  group.indeterminate = n > 0 && n < enabled.length;
}

function renderShareTree() {
  const caret = `<svg class="caret" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-linecap="round"/></svg>`;
  document.getElementById("shareTree").innerHTML = `
    <details open>
      <summary>
        <input type="checkbox" id="shareGroup" checked>
        ${caret}
        产品管理团队
      </summary>
      ${SHARE_MEMBERS.map(
        (m) => `<label class="dlg-node${m.disabled ? " is-off" : ""}">
        <input type="checkbox" class="share-mem" ${m.disabled ? "disabled" : "checked"}>
        ${m.name}${m.disabled ? "　已有阅读权限" : ""}
      </label>`
      ).join("")}
    </details>`;
  const group = document.getElementById("shareGroup");
  group.addEventListener("click", (e) => e.stopPropagation());
  group.addEventListener("change", () => {
    document.querySelectorAll("#shareTree .share-mem:not(:disabled)").forEach((c) => {
      c.checked = group.checked;
    });
    group.indeterminate = false;
  });
  document.querySelectorAll("#shareTree .share-mem").forEach((c) => {
    c.addEventListener("change", syncShareGroup);
  });
  syncShareGroup();
}

function openShareModal(reports) {
  if (!reports || !reports.length) return;
  document.getElementById("shareCount").textContent = `分发报告（${reports.length} 份）`;
  document.getElementById("shareChips").innerHTML = reports
    .map((r) => `<span class="tag tag-blue">${r.title}</span>`)
    .join("");
  document.getElementById("shareNote").value = "";
  document.getElementById("shareNoteCount").textContent = "0 / 200";
  renderShareTree();
  document.getElementById("shareDlg").classList.remove("hidden");
}

function closeShareModal() {
  document.getElementById("shareDlg").classList.add("hidden");
}

function bindShareDlg() {
  const close = () => closeShareModal();
  document.getElementById("shareClose").addEventListener("click", close);
  document.getElementById("shareCancel").addEventListener("click", close);
  document.getElementById("shareMask").addEventListener("click", close);
  document.getElementById("shareOk").addEventListener("click", () => {
    closeShareModal();
    toast("分发成功");
  });
  document.getElementById("shareNote").addEventListener("input", (e) => {
    document.getElementById("shareNoteCount").textContent = `${e.target.value.length} / 200`;
  });
}

const UPLOAD_PRODUCTS = [
  { name: "启明星辰", children: ["移动星辰安全 (OneS)"] },
  { name: "省公司" },
  { name: "云公司" },
  { name: "互联网公司" },
  { name: "在线营销中心" },
  { name: "咪咕公司" },
  { name: "终端公司" },
  { name: "物联网公司" },
  { name: "金科公司" },
  { name: "集成公司" },
  { name: "上研院" },
  { name: "智家中心" },
  { name: "上海产业研究院" },
  { name: "成都产业研究院" },
  { name: "杭州研发中心" },
  { name: "苏州研发中心" },
  { name: "广州研发中心" },
  { name: "信息技术中心" },
  { name: "设计院" },
  { name: "铁通" },
];

const uploadState = { tags: [], file: null };

function renderUploadProducts() {
  document.getElementById("upProdGrid").innerHTML = UPLOAD_PRODUCTS.map(
    (p) => `<label><input type="checkbox" class="up-prod" value="${p.name}">${p.name}</label>`
  ).join("");
  document.getElementById("upProdGrid").querySelectorAll(".up-prod").forEach((c) => {
    c.addEventListener("change", renderUploadKids);
  });
  renderUploadKids();
}

function selectedUploadProducts() {
  return [...document.querySelectorAll("#upProdGrid .up-prod:checked")].map((c) => c.value);
}

function renderUploadKids() {
  const box = document.getElementById("upProdKids");
  const picked = UPLOAD_PRODUCTS.filter(
    (p) => p.children && p.children.length && selectedUploadProducts().includes(p.name)
  );
  if (!picked.length) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }
  box.hidden = false;
  box.innerHTML = picked
    .map(
      (p) => `<div class="dlg-prod-kids-block" data-prod="${p.name}">
      <div class="dlg-prod-kids-hd">
        <span>${p.name}</span>
        <div class="dlg-prod-kids-ops">
          <button type="button" data-kids="all">全选</button>
          <button type="button" data-kids="none">清空</button>
        </div>
      </div>
      <div class="dlg-prod-kids-list">
        ${p.children.map((c) => `<label><input type="checkbox" class="up-kid">${c}</label>`).join("")}
      </div>
    </div>`
    )
    .join("");
  box.querySelectorAll("[data-kids]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const on = btn.dataset.kids === "all";
      btn.closest(".dlg-prod-kids-block").querySelectorAll(".up-kid").forEach((c) => {
        c.checked = on;
      });
    });
  });
}

function renderUploadTags() {
  const box = document.getElementById("upTagsBox");
  const input = document.getElementById("upTagInput");
  box.querySelectorAll(".dlg-tag").forEach((el) => el.remove());
  uploadState.tags.forEach((t, i) => {
    const chip = document.createElement("span");
    chip.className = "dlg-tag";
    chip.appendChild(document.createTextNode(t));
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.i = String(i);
    btn.setAttribute("aria-label", "删除");
    btn.textContent = "×";
    chip.appendChild(btn);
    box.insertBefore(chip, input);
  });
  input.placeholder = uploadState.tags.length ? "" : "输入标签后回车";
}

function fileExtLabel(name) {
  const ext = String(name || "").split(".").pop().toLowerCase();
  if (ext === "pdf") return "PDF";
  if (ext === "doc" || ext === "docx") return "DOC";
  if (ext === "ppt" || ext === "pptx") return "PPT";
  if (ext === "xls" || ext === "xlsx") return "XLS";
  if (ext === "zip") return "ZIP";
  return (ext || "FILE").slice(0, 4).toUpperCase();
}

function formatFileSize(n) {
  const size = Number(n) || 0;
  if (size >= 1048576) return `${(size / 1048576).toFixed(2)}MB`;
  if (size >= 1024) return `${(size / 1024).toFixed(2)}KB`;
  return `${size}B`;
}

function setUploadFile(file) {
  uploadState.file = file || null;
  const row = document.getElementById("upFileRow");
  row.hidden = !file;
  if (!file) return;
  document.getElementById("upFileName").textContent = file.name;
  document.getElementById("upFileSize").textContent = `文件大小：${formatFileSize(file.size)}`;
  document.getElementById("upFileExt").textContent = fileExtLabel(file.name);
}

function resetUploadForm() {
  document.getElementById("upName").value = "";
  document.getElementById("upNameCount").textContent = "0 / 100";
  document.querySelectorAll("#upCats input").forEach((c) => {
    c.checked = false;
  });
  document.getElementById("upIntro").value = "";
  document.getElementById("upIntroCount").textContent = "0 / 500";
  renderUploadProducts();
  uploadState.tags = [];
  renderUploadTags();
  setCalDisplay(document.getElementById("upMonth"), "");
  document.getElementById("upFile").value = "";
  setUploadFile(null);
}

function openUploadModal() {
  resetUploadForm();
  document.getElementById("uploadDlg").classList.remove("hidden");
}

function closeUploadModal() {
  closeCal();
  document.getElementById("uploadDlg").classList.add("hidden");
}

function validateUpload() {
  if (!document.getElementById("upName").value.trim()) return "请输入研究课题名称";
  if (![...document.querySelectorAll("#upCats input:checked")].length) return "请选择所属类别";
  if (!document.getElementById("upIntro").value.trim()) return "请输入课题简介";
  if (!uploadState.file) return "请上传附件";
  return "";
}

function bindUploadDlg() {
  const close = () => closeUploadModal();
  document.getElementById("uploadClose").addEventListener("click", close);
  document.getElementById("uploadCancel").addEventListener("click", close);
  document.getElementById("uploadMask").addEventListener("click", close);
  document.getElementById("uploadDraft").addEventListener("click", () => {
    closeUploadModal();
    toast("草稿已保存");
  });
  document.getElementById("uploadOk").addEventListener("click", () => {
    const err = validateUpload();
    if (err) {
      toast(err);
      return;
    }
    openConfirm({
      title: "确定要提交吗？",
      desc: "提交后报告将进入审核，提交前请确认内容完整。",
      onOk: () => {
        closeUploadModal();
        toast("提交成功");
      },
    });
  });
  document.getElementById("upName").addEventListener("input", (e) => {
    document.getElementById("upNameCount").textContent = `${e.target.value.length} / 100`;
  });
  document.getElementById("upIntro").addEventListener("input", (e) => {
    document.getElementById("upIntroCount").textContent = `${e.target.value.length} / 500`;
  });
  const tagInput = document.getElementById("upTagInput");
  tagInput.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const v = tagInput.value.trim();
    if (!v) return;
    if (uploadState.tags.length >= 3 || uploadState.tags.includes(v)) {
      tagInput.value = "";
      return;
    }
    uploadState.tags.push(v);
    tagInput.value = "";
    renderUploadTags();
  });
  document.getElementById("upTagsBox").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-i]");
    if (!btn) return;
    uploadState.tags.splice(Number(btn.dataset.i), 1);
    renderUploadTags();
  });
  const drop = document.getElementById("upDrop");
  const fileInput = document.getElementById("upFile");
  drop.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", () => {
    setUploadFile(fileInput.files[0] || null);
  });
  document.getElementById("upFileDel").addEventListener("click", (e) => {
    e.stopPropagation();
    fileInput.value = "";
    setUploadFile(null);
  });
  ["dragenter", "dragover"].forEach((ev) => {
    drop.addEventListener(ev, (e) => {
      e.preventDefault();
      drop.classList.add("is-over");
    });
  });
  ["dragleave", "drop"].forEach((ev) => {
    drop.addEventListener(ev, (e) => {
      e.preventDefault();
      drop.classList.remove("is-over");
    });
  });
  drop.addEventListener("drop", (e) => {
    const f = e.dataTransfer.files[0];
    if (f) setUploadFile(f);
  });
}

const CAL_WEEK = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const calState = { mode: "single", view: new Date(), role: "", anchor: null };

function pad2(n) {
  return String(n).padStart(2, "0");
}
function fmtYMD(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}
function fmtYM(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`;
}
function parseYMD(s) {
  if (!s) return null;
  const p = String(s).split("-").map(Number);
  if (p.length < 2 || !p[0]) return null;
  return new Date(p[0], p[1] - 1, p[2] || 1);
}
function monthTitle(d) {
  return `${d.getFullYear()} - ${d.getMonth() + 1}`;
}
function monthCells(year, month) {
  const start = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();
  const cells = [];
  for (let i = 0; i < start; i++) {
    const day = prevDays - start + 1 + i;
    cells.push({ day, off: true, date: new Date(year, month - 1, day) });
  }
  for (let d = 1; d <= days; d++) {
    cells.push({ day: d, off: false, date: new Date(year, month, d) });
  }
  let n = 1;
  while (cells.length < 42) {
    cells.push({ day: n, off: true, date: new Date(year, month + 1, n) });
    n += 1;
  }
  return cells;
}
function setCalDisplay(el, value) {
  if (!el) return;
  el.dataset.value = value || "";
  const val = el.querySelector(".cal-val");
  const ph = el.dataset.ph || "请输入";
  if (!val) return;
  if (!value) {
    val.textContent = ph;
    val.classList.add("is-ph");
  } else {
    val.textContent = value;
    val.classList.remove("is-ph");
  }
}
function closeCal() {
  const pop = document.getElementById("calPop");
  if (pop) pop.classList.add("hidden");
  document.querySelectorAll(".cal-input.is-on").forEach((el) => el.classList.remove("is-on"));
  calState.anchor = null;
}
function calSelected() {
  if (calState.mode === "range") {
    return [
      document.getElementById("dateStart")?.dataset.value || "",
      document.getElementById("dateEnd")?.dataset.value || "",
    ];
  }
  return [calState.anchor?.dataset.value || "", ""];
}
function renderMonthGrid(year, month, selected) {
  const [a, b] = selected;
  const cells = monthCells(year, month)
    .map((c) => {
      const iso = fmtYMD(c.date);
      const on = calState.mode === "month" ? false : iso === a || iso === b;
      return `<button type="button" data-iso="${iso}" class="${c.off ? "is-off" : ""}${on ? " is-on" : ""}">${c.day}</button>`;
    })
    .join("");
  return `<div class="cal-month">
    <div class="cal-week">${CAL_WEEK.map((w) => `<span>${w}</span>`).join("")}</div>
    <div class="cal-grid">${cells}</div>
  </div>`;
}
function renderCalPop() {
  const pop = document.getElementById("calPop");
  if (calState.mode === "year") {
    const y = calState.view.getFullYear();
    const start = y - (y % 12);
    const selected = calState.anchor?.dataset.value || "";
    pop.classList.remove("is-dual");
    pop.innerHTML = `
      <div class="cal-hd">
        <div class="cal-nav"><button type="button" data-nav="y-">«</button></div>
        <div class="cal-titles"><span>${start} - ${start + 11}</span></div>
        <div class="cal-nav"><button type="button" data-nav="y+">»</button></div>
      </div>
      <div class="cal-years">${Array.from({ length: 12 }, (_, i) => {
        const yy = start + i;
        return `<button type="button" data-year="${yy}" class="${String(yy) === selected ? "is-on" : ""}">${yy}</button>`;
      }).join("")}</div>
      <div class="cal-ft"><button type="button" data-today="1">今年</button></div>
    `;
    return;
  }
  const dual = calState.mode === "range";
  const view = calState.view;
  const next = new Date(view.getFullYear(), view.getMonth() + 1, 1);
  const selected = calSelected();
  pop.classList.toggle("is-dual", dual);
  pop.innerHTML = `
    <div class="cal-hd">
      <div class="cal-nav">
        <button type="button" data-nav="y-">«</button>
        <button type="button" data-nav="m-">‹</button>
      </div>
      <div class="cal-titles">
        <span>${monthTitle(view)}</span>
        ${dual ? `<span>${monthTitle(next)}</span>` : ""}
      </div>
      <div class="cal-nav">
        <button type="button" data-nav="m+">›</button>
        <button type="button" data-nav="y+">»</button>
      </div>
    </div>
    <div class="cal-months">
      ${renderMonthGrid(view.getFullYear(), view.getMonth(), selected)}
      ${dual ? renderMonthGrid(next.getFullYear(), next.getMonth(), selected) : ""}
    </div>
    ${calState.mode === "range" ? "" : `<div class="cal-ft"><button type="button" data-today="1">今天</button></div>`}
  `;
}
function placeCal(el) {
  const pop = document.getElementById("calPop");
  pop.classList.remove("hidden");
  const r = el.getBoundingClientRect();
  pop.style.top = `${r.bottom + 4}px`;
  pop.style.left = `${r.left}px`;
  requestAnimationFrame(() => {
    const w = pop.offsetWidth;
    const max = window.innerWidth - 16;
    if (r.left + w > max) pop.style.left = `${Math.max(16, r.right - w)}px`;
  });
}
function openCal(el) {
  calState.anchor = el;
  calState.mode = el.dataset.cal || "single";
  calState.role = el.dataset.role || "";
  const raw =
    el.dataset.value ||
    (calState.mode === "range" ? document.getElementById("dateStart")?.dataset.value : "") ||
    "";
  if (calState.mode === "year") {
    const y = /^\d{4}$/.test(raw) ? Number(raw) : new Date().getFullYear();
    calState.view = new Date(y, 0, 1);
  } else {
    const d = parseYMD(raw) || new Date();
    calState.view = new Date(d.getFullYear(), d.getMonth(), 1);
  }
  document.querySelectorAll(".cal-input").forEach((x) => x.classList.toggle("is-on", x === el));
  renderCalPop();
  placeCal(el);
}
function pickCalYear(year) {
  setCalDisplay(calState.anchor, String(year));
  closeCal();
}
function pickCalDay(iso) {
  if (calState.mode === "month") {
    setCalDisplay(calState.anchor, iso.slice(0, 7));
    closeCal();
    return;
  }
  if (calState.mode === "single") {
    setCalDisplay(calState.anchor, iso);
    closeCal();
    return;
  }
  const startEl = document.getElementById("dateStart");
  const endEl = document.getElementById("dateEnd");
  if (!startEl || !endEl) {
    setCalDisplay(calState.anchor, iso);
    closeCal();
    return;
  }
  const start = startEl.dataset.value || "";
  const end = endEl.dataset.value || "";
  if (calState.role === "start" || !start || (start && end)) {
    setCalDisplay(startEl, iso);
    setCalDisplay(endEl, "");
    calState.role = "end";
    calState.anchor = endEl;
    document.querySelectorAll(".cal-input").forEach((x) => x.classList.toggle("is-on", x === endEl));
    renderCalPop();
    return;
  }
  let a = start;
  let b = iso;
  if (b < a) {
    const t = a;
    a = b;
    b = t;
  }
  setCalDisplay(startEl, a);
  setCalDisplay(endEl, b);
  closeCal();
}
function shiftCal(kind) {
  const y = calState.view.getFullYear();
  const m = calState.view.getMonth();
  if (calState.mode === "year") {
    if (kind === "y-") calState.view = new Date(y - 12, 0, 1);
    if (kind === "y+") calState.view = new Date(y + 12, 0, 1);
    renderCalPop();
    return;
  }
  if (kind === "y-") calState.view = new Date(y - 1, m, 1);
  if (kind === "y+") calState.view = new Date(y + 1, m, 1);
  if (kind === "m-") calState.view = new Date(y, m - 1, 1);
  if (kind === "m+") calState.view = new Date(y, m + 1, 1);
  renderCalPop();
}
function bindCalendars() {
  document.querySelectorAll(".cal-input").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      if (el.classList.contains("is-on")) closeCal();
      else openCal(el);
    });
  });
  document.getElementById("calPop").addEventListener("click", (e) => {
    e.stopPropagation();
    const nav = e.target.closest("[data-nav]");
    if (nav) {
      shiftCal(nav.dataset.nav);
      return;
    }
    if (e.target.closest("[data-today]")) {
      const now = new Date();
      if (calState.mode === "year") pickCalYear(now.getFullYear());
      else pickCalDay(fmtYMD(now));
      return;
    }
    const yearBtn = e.target.closest("[data-year]");
    if (yearBtn) {
      pickCalYear(Number(yearBtn.dataset.year));
      return;
    }
    const day = e.target.closest("[data-iso]");
    if (day) pickCalDay(day.dataset.iso);
  });
  document.addEventListener("mousedown", (e) => {
    const pop = document.getElementById("calPop");
    if (!pop || pop.classList.contains("hidden")) return;
    if (pop.contains(e.target) || e.target.closest(".cal-input")) return;
    closeCal();
  });
}

function bindInsight() {
  document.querySelectorAll("#pageInsight .seg-tab").forEach((p) => {
    p.addEventListener("click", () => {
      document.querySelectorAll("#pageInsight .seg-tab").forEach((x) => x.classList.remove("is-on"));
      p.classList.add("is-on");
      state.pill = p.dataset.val;
      state.page = 1;
      renderList();
    });
  });
  document.querySelectorAll("#pageInsight .subtab").forEach((p) => {
    p.addEventListener("click", () => {
      document.querySelectorAll("#pageInsight .subtab").forEach((x) => x.classList.remove("is-on"));
      p.classList.add("is-on");
      state.tab = p.dataset.tab;
      state.page = 1;
      renderList();
    });
  });
  document.querySelectorAll("#pageInsight .quick-dates button").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#pageInsight .quick-dates button").forEach((x) => x.classList.remove("is-on"));
      b.classList.add("is-on");
      state.dateKey = b.textContent.trim();
    });
  });
  document.getElementById("btnSearch").addEventListener("click", () => {
    state.keyword = document.getElementById("kw").value.trim();
    state.page = 1;
    renderList();
  });
  document.getElementById("btnReset").addEventListener("click", () => {
    state.pill = "全部";
    state.product = "";
    state.dateKey = "全部";
    state.keyword = "";
    state.page = 1;
    document.getElementById("kw").value = "";
    document.getElementById("productLabel").textContent = "请选择";
    document.getElementById("productLabel").parentElement.classList.remove("has-val");
    document.querySelectorAll("#pageInsight .seg-tab").forEach((x) => x.classList.toggle("is-on", x.dataset.val === "全部"));
    document.querySelectorAll("#pageInsight .quick-dates button").forEach((x) =>
      x.classList.toggle("is-on", x.textContent.trim() === "全部")
    );
    setCalDisplay(document.getElementById("dateStart"), "");
    setCalDisplay(document.getElementById("dateEnd"), "");
    renderList();
  });
  document.getElementById("btnUpload").addEventListener("click", () => openUploadModal());
  document.getElementById("reportCheckAll").addEventListener("change", (e) => {
    document.querySelectorAll("#reportList .ck").forEach((c) => {
      c.checked = e.target.checked;
    });
    e.target.indeterminate = false;
    syncReportCheckAll();
  });
  document.getElementById("reportShare").addEventListener("click", () => openShareModal(selectedReports()));
  document.getElementById("reportList").addEventListener("change", (e) => {
    if (e.target.classList.contains("ck")) syncReportCheckAll();
  });
  document.getElementById("reportList").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-act], .report-title");
    if (!btn) return;
    const act = btn.dataset.act;
    if (act === "view" || btn.classList.contains("report-title")) {
      const id = Number(btn.dataset.id);
      if (id) {
        state.detailId = id;
        location.hash = "/market/insight/detail";
      }
      return;
    }
    if (act === "share") {
      const id = Number(btn.dataset.id);
      const r = REPORTS.find((x) => x.id === id);
      if (r) openShareModal([r]);
      return;
    }
    if (act === "down") toast("开始下载");
  });
  document.getElementById("pager").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-p]");
    if (!btn || btn.disabled) return;
    const v = btn.dataset.p;
    const total = filteredReports().length;
    const pages = Math.max(1, Math.ceil(total / state.pageSize));
    if (v === "prev") state.page = Math.max(1, state.page - 1);
    else if (v === "next") state.page = Math.min(pages, state.page + 1);
    else state.page = Number(v);
    renderList();
  });
  document.getElementById("pager").addEventListener("change", (e) => {
    if (e.target.id === "pageSize") {
      state.pageSize = Number(e.target.value);
      state.page = 1;
      renderList();
    }
  });
  document.getElementById("pager").addEventListener("keydown", (e) => {
    if (e.target.id === "jumpPage" && e.key === "Enter") {
      state.page = Math.max(1, Number(e.target.value) || 1);
      renderList();
    }
  });

  const prod = document.getElementById("productSelect");
  prod.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.closest(".select-pop")) return;
    prod.classList.toggle("is-on");
  });
  prod.querySelector(".select-pop").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    state.product = b.dataset.val;
    const label = document.getElementById("productLabel");
    label.textContent = b.dataset.val || "请选择";
    prod.classList.toggle("has-val", !!b.dataset.val);
    prod.classList.remove("is-on");
  });

  renderList();
  document.getElementById("insightBack").addEventListener("click", () => {
    location.hash = "/market/insight";
  });
  document.getElementById("insightDown").addEventListener("click", () => toast("开始下载"));
  document.getElementById("insightShare").addEventListener("click", () => openShareModal([insightReport()]));
  bindShareDlg();
  bindUploadDlg();
}

function dash(v) {
  return v == null || String(v).trim() === "" ? "-" : v;
}

function insightReport() {
  return REPORTS.find((r) => r.id === state.detailId) || REPORTS[0];
}

function renderInsightDetail() {
  const r = insightReport();
  const file = `${r.title}.pdf`;
  const chips = (arr, cls) =>
    (arr || []).map((t) => `<span class="tag${cls ? " " + cls : ""}">${t}</span>`).join("") || "-";
  document.getElementById("insightInfo").innerHTML = `
      <h3 class="side-card-hd">
        <span class="wb-hd-ico" aria-hidden="true"><img src="img/detail/report.svg" alt=""></span>
        <span class="side-card-hd-txt">${r.title}</span>
        ${r.unread ? `<span class="unread-flag">未读</span>` : `<span class="linetag t-ing">${dash(r.company)}</span>`}
      </h3>
      <dl class="side-kv">
        <div><dt>提交人</dt><dd>${dash(r.owner)}</dd></div>
        <div><dt>提交时间</dt><dd>${dash(r.time)}</dd></div>
        <div><dt>报告分类</dt><dd>${chips(reportCats(r))}</dd></div>
        <div><dt>关联产品</dt><dd>${chips(r.products, "tag-blue")}</dd></div>
        <div><dt>标签</dt><dd>${chips(reportLabels(r))}</dd></div>
      </dl>
      <div class="side-file">
        <img src="img/detail/file.svg" alt="">
        <span>${file}</span>
      </div>`;
  const rows = [
    ["报告分类", reportCats(r).join("、") || "-"],
    ["所属公司", dash(r.company)],
    ["提交人", dash(r.owner)],
    ["提交时间", dash(r.time)],
    ["所属月度", dash(r.month)],
    ["关联产品", r.products.join("、") || "-"],
    ["标签", reportLabels(r).join("、") || "-"],
  ]
    .map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`)
    .join("");
  const prods = r.products.join("、") || "-";
  const cats = reportCats(r).join("、") || "市场洞察";
  document.getElementById("insightPreview").innerHTML = `
    <article class="rd-page">
      <div class="rd-page-inner">
        <div class="rd-doc-kicker">市场洞察报告</div>
        <h2 class="rd-doc-title">${r.title}</h2>
        <p class="rd-doc-meta">${dash(r.owner)}　${dash(r.time)}</p>
        <h3 class="rd-doc-h">基本信息</h3>
        <table class="rd-doc-table">${rows}</table>
        <h3 class="rd-doc-h">报告说明</h3>
        <p class="rd-doc-p">本报告围绕「${cats}」方向，对关联产品（${prods}）所处市场环境、客户需求与竞争格局进行梳理，供产品规划与经营决策参考。报告数据口径以 ${dash(r.month)} 为主，覆盖近期公开信息与内部经营观察。</p>
        <p class="rd-doc-p">全文按「基本信息 → 市场与需求 → 竞争与建议」三部分组织。请结合任务「${dash(r.task)}」的推进节奏阅读后续页内容。</p>
      </div>
      <div class="rd-doc-foot">- 1 -</div>
    </article>
    <article class="rd-page">
      <div class="rd-page-inner">
        <div class="rd-page-running">${r.title}</div>
        <h3 class="rd-doc-h">一、市场环境</h3>
        <p class="rd-doc-p">当前相关市场仍处于结构优化阶段。供给端能力持续集中，需求端更关注交付稳定性、场景适配与成本可控。对 ${prods} 而言，短期以巩固存量、提升转化效率为主，中期需关注新场景渗透与区域差异。</p>
        <p class="rd-doc-p">从客户侧看，决策链路拉长、验收标准趋严，单一功能卖点难以支撑签约。建议将洞察结论落到可执行的产品组合与渠道话术，避免只停留在趋势描述。</p>
        <h3 class="rd-doc-h">二、客户需求观察</h3>
        <p class="rd-doc-p">高频诉求集中在：现网兼容、开通时效、问题闭环与可视化运营。部分头部客户已明确提出按场景打包交付，对跨产品协同和统一入口的要求上升。</p>
        <p class="rd-doc-p">建议按「刚需保障 / 体验增强 / 创新试点」三层管理需求池，优先保障影响续约与口碑的问题，创新类需求放入试点清单并设定退出条件。</p>
        <h3 class="rd-doc-h">三、本期要点</h3>
        <p class="rd-doc-p">1. 明确 ${cats} 口径下的目标客群与可量化指标，避免报告结论与经营动作脱节。</p>
        <p class="rd-doc-p">2. 对关联产品建立统一竞品对照表，按季度更新份额、价格带与关键能力差异。</p>
        <p class="rd-doc-p">3. 将洞察结论同步至需求分析与商业计划书编制环节，形成闭环。</p>
      </div>
      <div class="rd-doc-foot">- 2 -</div>
    </article>
    <article class="rd-page">
      <div class="rd-page-inner">
        <div class="rd-page-running">${r.title}</div>
        <h3 class="rd-doc-h">四、竞争格局</h3>
        <p class="rd-doc-p">主要竞品在渠道覆盖、方案包装与交付周期上持续加压。我方优势仍在现网基础与服务半径，短板集中在场景化方案的标准化程度，以及对外叙事的一致性。</p>
        <p class="rd-doc-p">建议选取 2～3 个可复制场景做样板，沉淀标准清单、报价逻辑与交付节奏，再向同类客户复制，避免全面铺开导致资源分散。</p>
        <h3 class="rd-doc-h">五、工作建议</h3>
        <p class="rd-doc-p">近期：完成竞品对照与客户访谈纪要归档，输出一页纸结论供专题会使用。</p>
        <p class="rd-doc-p">中期：将本报告要点纳入商业计划书对应章节，明确资源诉求与里程碑。</p>
        <p class="rd-doc-p">持续：按月回看指标偏差，超阈值时启动专项复盘，并更新本报告附件。</p>
        <h3 class="rd-doc-h">六、附件与版本</h3>
        <p class="rd-doc-p">附件：${file}。版本说明：本稿由 ${dash(r.owner)} 于 ${dash(r.time)} 提交，对应月度 ${dash(r.month)}。如需分发，请使用右侧「分发」操作，勿通过即时通讯直接转发源文件。</p>
      </div>
      <div class="rd-doc-foot">- 3 -</div>
    </article>`;
}

function bindHeaderExtras() {
  const portal = document.getElementById("portalSwitch");
  const user = document.getElementById("userEntry");
  const more = document.getElementById("tagsMore");
  portal.addEventListener("click", (e) => {
    e.stopPropagation();
    portal.classList.toggle("is-on");
    user.classList.remove("is-on");
    more.classList.remove("is-on");
  });
  portal.querySelector(".portal-menu").addEventListener("click", (e) => {
    e.stopPropagation();
    const btn = e.target.closest("[data-portal]");
    if (!btn) return;
    portal.classList.remove("is-on");
    switchPortal(btn.dataset.portal);
  });
  user.addEventListener("click", (e) => {
    e.stopPropagation();
    user.classList.toggle("is-on");
    portal.classList.remove("is-on");
    more.classList.remove("is-on");
  });
  document.addEventListener("click", () => {
    portal.classList.remove("is-on");
    user.classList.remove("is-on");
    more.classList.remove("is-on");
    const prod = document.getElementById("productSelect");
    if (prod) prod.classList.remove("is-on");
    document.querySelectorAll(".select-like.is-on").forEach((el) => el.classList.remove("is-on"));
  });
  document.getElementById("goTodo").addEventListener("click", () => {
    goPath("#/me/todo");
  });
}

function bindTodo() {
  const tabs = document.getElementById("wbTaskTabs");
  if (!tabs) return;
  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".task-kpi");
    if (!btn) return;
    tabs.querySelectorAll(".task-kpi").forEach((el) => el.classList.toggle("is-on", el === btn));
    renderTodoTable(btn.dataset.task);
  });
  const notices = document.getElementById("wbNoticeList");
  if (notices) {
    notices.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li) return;
      location.hash = "/me/notices";
    });
  }
  renderTodoTable("all");
  bindQuickFuncs();
}

/* ---------- 常用功能设置（IPD 菜单叶子项，最多 6 个） ---------- */
const QUICK_MAX = 6;
const QUICK_STORE_KEY = "hub_quick_funcs_v1";
const QUICK_DEFAULT = [
  "bp-handle",
  "bp-overview",
  "insight",
  "product-tags",
  "req-overview",
  "req-analysis",
];

const QUICK_CATALOG = [
  {
    title: "市场管理",
    items: [
      { id: "insight", name: "市场洞察", path: "#/market/insight", icon: "img/quick/q-insight.png", tone: "blue" },
    ],
  },
  {
    title: "需求管理",
    items: [
      { id: "req-overview", name: "需求总览", path: "#/req/overview", icon: "img/quick/q-req-overview.png", tone: "blue" },
      { id: "req-list", name: "需求清单", path: "#/req/list", icon: "img/quick/q-doc.png", tone: "orange" },
      { id: "req-analysis", name: "需求分析", path: "#/req/analysis", icon: "img/quick/q-req-analysis.png", tone: "red" },
      { id: "req-assign", name: "需求分配", path: "#/req/assign", icon: "img/quick/q-assign.png", tone: "blue" },
      { id: "req-arbitrate", name: "需求仲裁", path: "#/req/arbitrate", icon: "img/quick/q-scale.png", tone: "orange" },
      { id: "req-change", name: "需求变更", path: "#/req/change", icon: "img/quick/q-change.png", tone: "green" },
      { id: "req-dev", name: "需求开发", path: "#/req/dev", icon: "img/quick/q-dev-code.png", tone: "purple" },
    ],
  },
  {
    title: "产品管理",
    items: [
      { id: "spectrum", name: "产品型谱", path: "#/product/spectrum", icon: "img/quick/q-cube-cyan.png", tone: "blue" },
      { id: "bp-overview", name: "商业计划书总览", path: "#/product/bp-overview", icon: "img/quick/q-bp-overview.png", tone: "green" },
      { id: "bp-publish", name: "商业计划书任务发布", path: "#/product/bp-publish", icon: "img/quick/q-plane.png", tone: "blue" },
      { id: "bp-handle", name: "商业计划书任务处理", path: "#/product/bp-handle", icon: "img/quick/q-bp-handle.png", tone: "orange" },
    ],
  },
  {
    title: "配置管理",
    groups: [
      {
        title: "型谱配置",
        items: [
          { id: "spectrum-catalog", name: "型谱目录配置", path: "#/config/spectrum-catalog", icon: "img/quick/q-catalog.png", tone: "purple" },
          { id: "product-tags", name: "产品标签管理", path: "#/config/product-tags", icon: "img/quick/q-tags.png", tone: "cyan" },
        ],
      },
      {
        title: "产品IPD配置",
        items: [
          { id: "ipd-team", name: "产品IPD团队", path: "#/config/ipd-team", icon: "img/quick/q-users-blue.png", tone: "blue" },
          { id: "templates", name: "模板管理", path: "#/config/templates", icon: "img/quick/q-doc-blue.png", tone: "blue" },
          { id: "bp-score", name: "商业计划书评分规则", path: "#/config/bp-score", icon: "img/quick/q-eval.png", tone: "cyan" },
          { id: "req-rules", name: "需求设置规则", path: "#/config/req-rules", icon: "img/quick/q-rules.png", tone: "orange" },
        ],
      },
      {
        title: "基础配置",
        items: [
          { id: "roles", name: "角色管理", path: "#/config/roles", icon: "img/quick/q-users-blue.png", tone: "blue" },
          { id: "account-review", name: "账号审阅记录", path: "#/config/account-review", icon: "img/quick/q-stamp.png", tone: "green" },
          { id: "org", name: "组织管理", path: "#/config/org", icon: "img/quick/q-apps.png", tone: "cyan" },
          { id: "accounts", name: "账号管理", path: "#/config/accounts", icon: "img/quick/q-account.png", tone: "blue" },
          { id: "menus", name: "菜单管理", path: "#/config/menus", icon: "img/quick/q-apps-purple.png", tone: "purple" },
          { id: "cache", name: "缓存管理", path: "#/config/cache", icon: "img/quick/q-cache.png", tone: "cyan" },
          { id: "permissions", name: "操作权限管理", path: "#/config/permissions", icon: "img/quick/q-permission.png", tone: "orange" },
        ],
      },
      {
        title: "流程管理",
        items: [
          { id: "process-nodes", name: "环节配置", path: "#/config/process-nodes", icon: "img/quick/q-target.png", tone: "blue" },
          { id: "process-model", name: "流程建模", path: "#/config/process-model", icon: "img/quick/q-flow.png", tone: "purple" },
          { id: "process-inst", name: "流程实例管理", path: "#/config/process-inst", icon: "img/quick/q-clock-cyan.png", tone: "cyan" },
          { id: "exceptions", name: "异常单管理", path: "#/config/exceptions", icon: "img/quick/q-exception.png", tone: "red" },
          { id: "testdata", name: "测试数据清理", path: "#/config/testdata", icon: "img/quick/q-cleanup.png", tone: "orange" },
        ],
      },
    ],
  },
  {
    title: "个人中心",
    items: [
      { id: "notices", name: "公告消息", path: "#/me/notices", icon: "img/quick/q-bell.png", tone: "green" },
    ],
  },
];

function quickAllItems() {
  const list = [];
  QUICK_CATALOG.forEach((sec) => {
    if (sec.items) list.push(...sec.items);
    (sec.groups || []).forEach((g) => list.push(...g.items));
  });
  return list;
}

function quickItemById(id) {
  return quickAllItems().find((d) => d.id === id);
}

function loadQuickIds() {
  try {
    const raw = localStorage.getItem(QUICK_STORE_KEY);
    if (!raw) return [...QUICK_DEFAULT];
    const ids = JSON.parse(raw);
    if (!Array.isArray(ids)) return [...QUICK_DEFAULT];
    const valid = ids.map(String).filter((id) => quickItemById(id)).slice(0, QUICK_MAX);
    return valid.length ? valid : [...QUICK_DEFAULT];
  } catch (e) {
    return [...QUICK_DEFAULT];
  }
}

function saveQuickIds(ids) {
  localStorage.setItem(QUICK_STORE_KEY, JSON.stringify(ids.slice(0, QUICK_MAX)));
}

function quickIconHtml(item, sizeClass) {
  return `<span class="wb-q-plate t-${item.tone}${sizeClass ? ` ${sizeClass}` : ""}"><img src="${item.icon}" alt=""></span>`;
}

function renderQuickList() {
  const box = document.getElementById("wbQuickList");
  if (!box) return;
  const ids = loadQuickIds();
  box.innerHTML = ids.map((id) => {
    const item = quickItemById(id);
    if (!item) return "";
    return `<a class="wb-quick-item" href="${item.path}">
      ${quickIconHtml(item)}
      <span class="wb-q-name">${item.name}</span>
    </a>`;
  }).join("");
}

let quickDraft = [];

function updateQuickCount() {
  const el = document.getElementById("wbQuickCount");
  if (el) el.innerHTML = `已选 <b>${quickDraft.length}</b>/${QUICK_MAX}`;
}

function renderQuickCatalog() {
  const box = document.getElementById("wbQuickCatalog");
  if (!box) return;
  const full = quickDraft.length >= QUICK_MAX;
  const checkSvg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 5.2l2 2 4-4" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const tile = (item) => {
    const on = quickDraft.includes(item.id);
    const disabled = !on && full;
    return `<button type="button" class="wb-qset-item${on ? " is-on" : ""}${disabled ? " is-disabled" : ""}" data-qid="${item.id}" ${disabled ? "disabled" : ""}>
      <i class="wb-q-check">${checkSvg}</i>
      ${quickIconHtml(item)}
      <span class="wb-q-name">${item.name}</span>
    </button>`;
  };
  box.innerHTML = QUICK_CATALOG.map((sec) => {
    let body = "";
    if (sec.items) {
      body += `<div class="wb-qset-grid">${sec.items.map(tile).join("")}</div>`;
    }
    (sec.groups || []).forEach((g) => {
      body += `<div class="wb-qset-group"><p class="wb-qset-sub">${g.title}</p><div class="wb-qset-grid">${g.items.map(tile).join("")}</div></div>`;
    });
    return `<section class="wb-qset-sec"><h4>${sec.title}</h4>${body}</section>`;
  }).join("");
  updateQuickCount();
}

function bindQuickFuncs() {
  renderQuickList();
  const dlg = bindDlg("wbQuickDlg", ["wbQuickMask", "wbQuickClose", "wbQuickCancel"], () => {
    quickDraft = loadQuickIds();
    renderQuickCatalog();
  });
  const openBtn = document.getElementById("wbQuickSet");
  if (openBtn && dlg) {
    openBtn.addEventListener("click", () => dlg.open());
  }
  const catalog = document.getElementById("wbQuickCatalog");
  if (catalog) {
    catalog.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-qid]");
      if (!btn || btn.disabled) return;
      const id = btn.dataset.qid;
      const idx = quickDraft.indexOf(id);
      if (idx >= 0) quickDraft.splice(idx, 1);
      else if (quickDraft.length < QUICK_MAX) quickDraft.push(id);
      else {
        toast(`最多选择 ${QUICK_MAX} 个常用功能`);
        return;
      }
      renderQuickCatalog();
    });
  }
  const save = document.getElementById("wbQuickSave");
  if (save) {
    save.addEventListener("click", () => {
      if (!quickDraft.length) {
        toast("请至少选择 1 个常用功能");
        return;
      }
      saveQuickIds(quickDraft);
      renderQuickList();
      if (dlg) dlg.close();
      toast("常用功能已更新");
    });
  }
}

const TODO_META = {
  todo: { status: "待处理", cls: "t-alert", act: "处理" },
  done: { status: "已完成", cls: "t-ok", act: "详情" },
  start: { status: "处理中", cls: "t-ing", act: "跟踪" },
  unread: { status: "待阅", cls: "t-warn", act: "查阅" },
  read: { status: "已阅", cls: "t-mute", act: "查看" },
};

const TODO_ROWS = [
  { tab: "todo", title: "需求分析", stage: "需求分析", time: "2026-08-24 18:22:27", href: "#/req/analysis" },
  { tab: "todo", title: "市场洞察报告审核：精品产品市场洞察报告0723-0001", stage: "报告审核", time: "2026-08-23 15:10:46", href: "#/market/insight" },
  { tab: "todo", title: "商业计划书任务处理：测试待办任务1", stage: "任务处理", time: "2026-08-22 09:32:11", href: "#/product/bp-handle" },
  { tab: "todo", title: "需求分配：家庭宽带体验优化", stage: "需求分配", time: "2026-08-21 11:08:03", href: "#/req/assign" },
  { tab: "done", title: "需求分析：5G 套餐权益升级", stage: "需求分析", time: "2026-08-20 16:40:09", href: "#/req/analysis" },
  { tab: "done", title: "市场洞察报告审核：云计算市场发展趋势分析08", stage: "报告审核", time: "2026-08-19 10:15:00", href: "#/market/insight" },
  { tab: "done", title: "商业计划书任务处理：KY11 规划任务", stage: "任务处理", time: "2026-08-18 14:22:38", href: "#/product/bp-handle" },
  { tab: "done", title: "需求仲裁：物联网资费标准化", stage: "需求仲裁", time: "2026-08-17 09:01:12", href: "#/req/arbitrate" },
  { tab: "done", title: "产品标签管理：样站终端标签校准", stage: "基础配置", time: "2026-08-16 17:40:09", href: "#/config/product-tags" },
  { tab: "done", title: "需求开发：国际漫游流量包", stage: "需求开发", time: "2026-08-15 13:19:44", href: "#/req/dev" },
  { tab: "done", title: "商业计划书总览核对：Q3 规划清单", stage: "计划书总览", time: "2026-08-14 11:26:03", href: "#/product/bp-overview" },
  { tab: "done", title: "型谱目录配置：家庭市场目录更新", stage: "型谱配置", time: "2026-08-13 08:32:11", href: "#/config/spectrum-catalog" },
  { tab: "start", title: "商业计划书任务发布：测试待办任务1", stage: "任务发布", time: "2026-08-12 15:10:46", href: "#/product/bp-publish" },
  { tab: "start", title: "市场洞察报告上传：华东宽带客户调研纪要", stage: "报告上传", time: "2026-08-11 09:32:11", href: "#/market/insight" },
  { tab: "start", title: "需求变更：云电脑中小企业版开通流程", stage: "需求变更", time: "2026-08-10 18:04:20", href: "#/req/change" },
  { tab: "start", title: "产品IPD团队成员调整", stage: "产品IPD配置", time: "2026-08-09 10:15:00", href: "#/config/ipd-team" },
  { tab: "start", title: "需求分析：政企快线开通工单字段补齐", stage: "需求分析", time: "2026-08-08 14:08:11", href: "#/req/analysis" },
  { tab: "unread", title: "8 月 IPD 流程变更通知", stage: "公告消息", time: "2026-08-07 10:00:00", href: "#/me/notices" },
  { tab: "unread", title: "配置管理-缓存管理例行清理提醒", stage: "系统消息", time: "2026-08-05 09:30:00", href: "#/me/notices" },
  { tab: "read", title: "本月市场洞察报告上报截止提醒", stage: "公告消息", time: "2026-08-04 16:12:00", href: "#/me/notices" },
  { tab: "read", title: "【商业计划书】规划任务已发布：测试待办任务1", stage: "个人消息", time: "2026-08-03 11:20:00", href: "#/me/notices" },
];

function renderTodoTable(tab) {
  const list = tab === "all" ? TODO_ROWS : TODO_ROWS.filter((r) => r.tab === tab);
  const body = document.getElementById("wbTaskBody");
  const empty = document.getElementById("wbTaskEmpty");
  if (!body) return;
  if (!list.length) {
    body.innerHTML = "";
    if (empty) empty.classList.remove("hidden");
    return;
  }
  if (empty) empty.classList.add("hidden");
  body.innerHTML = list
    .map((r) => {
      const m = TODO_META[r.tab];
      const tip = r.title.length > 18 ? ` data-tip="${r.title}"` : "";
      return `<tr>
        <td class="cell-ellip"${tip}>${r.title}</td>
        <td>${r.stage}</td>
        <td>${r.time}</td>
        <td>${stTag(m.status, m.cls)}</td>
        <td><a class="link" href="${r.href}">${m.act}</a></td>
      </tr>`;
    })
    .join("");
}

const AN_SEED = [
  { code: "RR-10040018", tags: ["RMT"], name: "家庭宽带测速结果不准优化", product: "千兆宽带", cat: "功能需求", owner: "平台运营测试员2号-广东", urg: "高", time: "2026-08-20 09:12:33", stay: "3天1小时", stayWarn: true },
  { code: "RR-10040012", tags: ["RAT"], name: "5G 套餐权益升级展示异常", product: "5G 终端", cat: "功能需求", owner: "市场部-陈敏", urg: "中", time: "2026-08-19 14:08:11", stay: "2天4小时", stayWarn: true },
  { code: "RR-10040009", tags: ["RMT", "RAT"], name: "云电脑中小企业版开通流程简化", product: "云电脑", cat: "非功能需求", owner: "云能事业部-刘洋", urg: "低", time: "2026-08-18 11:26:03", stay: "1天2小时", stayWarn: false },
  { code: "RR-10040004", tags: ["RMT"], name: "物联网资费标准化规则校验", product: "物联网专网", cat: "功能需求", owner: "物联网事业部-王磊", urg: "高", time: "2026-08-17 16:40:09", stay: "4天6小时", stayWarn: true },
  { code: "RR-10039988", tags: ["RAT"], name: "国际漫游流量包订购失败提示优化", product: "国际漫游", cat: "功能需求", owner: "国际业务部-周琪", urg: "中", time: "2026-08-16 10:15:00", stay: "18小时", stayWarn: false },
  { code: "RR-10039971", tags: ["RMT"], name: "政企快线开通工单字段补齐", product: "政企快线", cat: "非功能需求", owner: "平台运营测试员4号-北京", urg: "低", time: "2026-08-15 09:01:12", stay: "6小时", stayWarn: false },
  { code: "RR-10039960", tags: ["RAT"], name: "咪咕视频会员权益同步延迟", product: "咪咕视频", cat: "功能需求", owner: "文娱产品部-孙悦", urg: "高", time: "2026-08-14 18:04:20", stay: "2天9小时", stayWarn: true },
  { code: "RR-10039942", tags: ["RMT"], name: "芯片封装产能看板权限拆分", product: "芯片封装", cat: "非功能需求", owner: "制造中心-赵鹏", urg: "中", time: "2026-08-13 13:19:44", stay: "1天", stayWarn: false },
  { code: "RR-10039931", tags: ["RMT", "RAT"], name: "KY11 终端日志采集策略调整", product: "KY11", cat: "功能需求", owner: "终端产品部-吴芳", urg: "低", time: "2026-08-12 08:32:11", stay: "5小时", stayWarn: false },
  { code: "RR-10039908", tags: ["RAT"], name: "产品枢纽平台菜单权限审计", product: "产品枢纽平台", cat: "非功能需求", owner: "超级管理员", urg: "中", time: "2026-08-11 15:10:46", stay: "8小时", stayWarn: false },
];
const AN_ROWS = Array.from({ length: 46 }, (_, i) => {
  const s = AN_SEED[i % AN_SEED.length];
  if (i < AN_SEED.length) return s;
  return { ...s, code: `RR-1004${String(1000 + i).slice(-4)}`, time: `2026-08-${String((i % 20) + 1).padStart(2, "0")} 10:00:00` };
});
const anState = { kw: "", urg: "", cat: "", owner: "", time: "", page: 1, pageSize: 10 };

function filteredAn() {
  return AN_ROWS.filter((r) => {
    const q = anState.kw;
    if (q && !r.code.includes(q) && !r.name.includes(q)) return false;
    if (anState.urg && r.urg !== anState.urg) return false;
    if (anState.cat && r.cat !== anState.cat) return false;
    if (anState.owner && !r.owner.includes(anState.owner)) return false;
    if (anState.time && !r.time.includes(anState.time)) return false;
    return true;
  });
}

function urgHtml(u) {
  const cls = u === "高" ? "t-alert" : u === "中" ? "t-warn" : "t-ing";
  return `<span class="linetag ${cls}">${u}</span>`;
}

function renderAnTable() {
  const list = filteredAn();
  const pages = Math.max(1, Math.ceil(list.length / anState.pageSize));
  if (anState.page > pages) anState.page = pages;
  const start = (anState.page - 1) * anState.pageSize;
  const slice = list.slice(start, start + anState.pageSize);
  document.getElementById("anTbody").innerHTML = slice
    .map(
      (r) => `<tr>
        <td><a class="an-code" href="javascript:;">${r.code}</a>${r.tags.map((t) => `<span class="tag-mini">${t}</span>`).join("")}</td>
        <td>${r.name}</td>
        <td>${r.product}</td>
        <td>${r.cat}</td>
        <td>${r.owner}</td>
        <td>${urgHtml(r.urg)}</td>
        <td>${r.time}</td>
        <td>${r.stay}</td>
        <td>${stTag("待分析", "t-ing")}</td>
        <td><button class="link" data-an="do">分析</button></td>
      </tr>`
    )
    .join("");
  const btns = [];
  btns.push(`<span class="total">共 ${list.length} 条</span>`);
  btns.push(`<button class="pager-btn" data-ap="prev" ${anState.page === 1 ? "disabled" : ""}>‹</button>`);
  for (let i = 1; i <= pages; i++) {
    if (pages > 7 && i > 3 && i < pages - 1 && Math.abs(i - anState.page) > 1) {
      if (btns[btns.length - 1] !== "…") btns.push("…");
      continue;
    }
    btns.push(`<button class="pager-btn ${i === anState.page ? "is-on" : ""}" data-ap="${i}">${i}</button>`);
  }
  btns.push(`<button class="pager-btn" data-ap="next" ${anState.page === pages ? "disabled" : ""}>›</button>`);
  btns.push(`<select id="anPageSize"><option ${anState.pageSize === 10 ? "selected" : ""}>10</option><option ${anState.pageSize === 20 ? "selected" : ""}>20</option></select><span>条/页</span>`);
  document.getElementById("anPager").innerHTML = btns.join("");
}

function bindSelect(id, labelId, onVal, placeholder) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.closest(".select-pop")) return;
    el.classList.toggle("is-on");
  });
  el.querySelector(".select-pop").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    onVal(b.dataset.val);
    document.getElementById(labelId).textContent = b.dataset.val || placeholder || "全部";
    el.classList.toggle("has-val", !!b.dataset.val);
    el.classList.remove("is-on");
  });
}

const OV_FUNNEL = {
  year: { rr: 204, ir: 87, ar: 71, pdt: 21, cdt: 50 },
  quarter: { rr: 64, ir: 27, ar: 22, pdt: 7, cdt: 15 },
  month: { rr: 22, ir: 9, ar: 7, pdt: 2, cdt: 5 },
};

function pct(a, b) {
  if (!b) return "0%";
  return `${Math.round((a / b) * 100)}%`;
}

function renderOvFunnel(span) {
  const d = OV_FUNNEL[span] || OV_FUNNEL.year;
  const set = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = v;
  };
  set("ovRr", d.rr);
  set("ovIr", d.ir);
  set("ovAr", d.ar);
  set("ovPdt", d.pdt);
  set("ovCdt", d.cdt);
  set("ovRr2Ir", pct(d.ir, d.rr));
  set("ovIr2Ar", pct(d.ar, d.ir));
  set("ovArPdt", pct(d.pdt, d.ar));
  set("ovArCdt", pct(d.cdt, d.ar));
  set("ovArHint", pct(d.ar, d.rr));
  const root = document.getElementById("ovFunnel");
  if (root) {
    const fill = (n, base) => `${Math.round(52 + (n / (base || 1)) * 36)}%`;
    root.style.setProperty("--h-rr", fill(d.rr, d.rr));
    root.style.setProperty("--h-ir", fill(d.ir, d.rr));
    root.style.setProperty("--h-ar", fill(d.ar, d.rr));
    root.style.setProperty("--h-pdt", fill(d.pdt, d.ar));
    root.style.setProperty("--h-cdt", fill(d.cdt, d.ar));
  }
}

const OV_STATUS = [
  { name: "待分析需求", tip: "RAT 团队", n: 71, href: "#/req/analysis", c: "#6799FC" },
  { name: "待审核需求", tip: "RAT 团队", n: 18, href: "#/req/analysis", c: "#84EAB7" },
  { name: "待分配决策需求", tip: "RAT 团队", n: 11, href: "#/req/assign", c: "#918DFC" },
  { name: "待纳入商业计划书需求", tip: "CDT 团队", n: 30, href: "#/product/bp-publish", c: "#FFD381" },
  { name: "待开发需求", tip: "PDT 团队", n: 8, href: "#/req/dev", c: "#FF8EC3" },
  { name: "AR 变更待审批", tip: "需求变更申请", n: 6, href: "#/req/change", c: "#417FFB" },
];

function renderOvStatusChart() {
  const box = document.getElementById("ovStatusChart");
  if (!box) return;
  const items = OV_STATUS;
  const total = items.reduce((s, d) => s + d.n, 0);
  const sum = total || 1;
  const maxN = Math.max(...items.map((d) => d.n));
  const cx = 120;
  const cy = 120;
  const r = 88;
  const r0 = 58;
  const rHi = 92;
  const r0Hi = 56;
  let ang = 0;
  const slices = items.filter((d) => d.n > 0).map((d) => {
    const sweep = (d.n / sum) * 360;
    const a0 = ang;
    const a1 = ang + sweep;
    ang = a1;
    const hi = d.n === maxN;
    return { ...d, hi, dth: donutSlice(cx, cy, hi ? rHi : r, hi ? r0Hi : r0, a0, a1) };
  });
  const paths = [
    ...slices.filter((s) => !s.hi),
    ...slices.filter((s) => s.hi),
  ].map((s) => `<path fill="${s.c}" d="${s.dth}"></path>`).join("");
  const list = items.map((d) => `<li>
    <a href="${d.href}">
      <p>
        <i style="background:${d.c}"></i>
        <span class="ov-ring-lab">${d.name}<span class="ov-tip ov-ring-tip" tabindex="0" data-tip="${d.tip}">!</span></span>
      </p>
      <em>${d.n}</em>
    </a>
  </li>`).join("");
  box.innerHTML = `<div class="ov-ring">
    <div class="ov-donut">
      <svg viewBox="0 0 240 240" aria-hidden="true">${paths}</svg>
      <div class="ov-donut-c"><b>${total}</b><span>需求总数</span></div>
    </div>
    <ul class="ov-ring-leg">${list}</ul>
  </div>`;
  box.querySelectorAll(".ov-ring-tip").forEach((tip) => {
    tip.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  });
}

const OV_TEAM = [
  { name: "PDT", n: 174, c: "#6799FC" },
  { name: "RMT", n: 120, c: "#84EAB7" },
  { name: "RAT", n: 32, c: "#918DFC" },
];

const OV_PROV = [
  { name: "广东", n: 88, c: "#6799FC" },
  { name: "山东", n: 71, c: "#84EAB7" },
  { name: "河南", n: 32, c: "#918DFC" },
  { name: "北京", n: 25, c: "#FFD381" },
];

function ovChanCardHtml(d, side) {
  return `<li class="ov-chan-card" data-mid="${d.mid}" data-side="${side}" data-c="${d.c}">
    <i class="ov-chan-dot" style="--c:${d.c}"></i>
    <div class="ov-chan-meta">
      <p class="ov-chan-title"><b>${d.name}</b><em class="ov-chan-pct">${d.pct}%</em></p>
      <span class="ov-chan-val">${d.n}</span>
    </div>
    <em class="ov-chan-pin" aria-hidden="true"></em>
  </li>`;
}

function paintOvChanLines(box) {
  if (!box || box.classList.contains("hidden")) return;
  const root = box.querySelector(".ov-chan-split");
  const svg = box.querySelector(".ov-chan-lines");
  const donut = box.querySelector(".ov-chan-donut");
  if (!root || !svg || !donut) return;
  const rb = root.getBoundingClientRect();
  const db = donut.getBoundingClientRect();
  // Page often paints while #pageReqOverview is still display:none (bindOverview
  // runs before navigate). Zero-size viewBox + stroke-width:1 + round caps
  // scales into a huge grey disk once the section becomes visible.
  if (rb.width < 8 || rb.height < 8 || db.width < 8) {
    svg.innerHTML = "";
    svg.removeAttribute("viewBox");
    return;
  }
  const w = rb.width;
  const h = rb.height;
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  const cx = db.left + db.width / 2 - rb.left;
  const cy = db.top + db.height / 2 - rb.top;
  const rOuter = (db.width / 2) * (90 / 120);
  const leftCards = [...box.querySelectorAll(".ov-chan-side.is-left .ov-chan-card")];
  const rightCards = [...box.querySelectorAll(".ov-chan-side.is-right .ov-chan-card")];
  const parts = [];
  const paintSide = (cards, left) => {
    cards.forEach((card, i) => {
      const mid = Number(card.dataset.mid);
      const pin = card.querySelector(".ov-chan-pin");
      if (!pin || Number.isNaN(mid)) return;
      const [sx, sy] = polarXY(cx, cy, rOuter, mid);
      const pb = pin.getBoundingClientRect();
      const ax = pb.left + pb.width / 2 - rb.left;
      const ay = pb.top + pb.height / 2 - rb.top;
      const stub = 14 + i * 6;
      let ex = left ? ax + stub : ax - stub;
      if (left) ex = Math.min(Math.max(ex, ax + 10), (sx + ax) / 2);
      else ex = Math.max(Math.min(ex, ax - 10), (sx + ax) / 2);
      const d = Math.abs(ay - sy) < 4
        ? `M${sx.toFixed(1)} ${sy.toFixed(1)} L${ax.toFixed(1)} ${ay.toFixed(1)}`
        : `M${sx.toFixed(1)} ${sy.toFixed(1)} L${ex.toFixed(1)} ${ay.toFixed(1)} L${ax.toFixed(1)} ${ay.toFixed(1)}`;
      parts.push(`<path d="${d}" fill="none" stroke="#D0D5DD" stroke-width="1" stroke-dasharray="4 3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>`);
    });
  };
  paintSide(leftCards, true);
  paintSide(rightCards, false);
  svg.innerHTML = parts.join("");
}

function refreshOvChanLines() {
  paintOvChanLines(document.getElementById("ovChanTeam"));
  paintOvChanLines(document.getElementById("ovChanProv"));
}

function ovChanStartAng(items, sum) {
  const rightColors = new Set(["#6799FC", "#84EAB7"]);
  const lead = [];
  for (const d of items) {
    if (!rightColors.has(d.c)) break;
    lead.push((d.n / sum) * 360);
  }
  if (!lead.length) return 0;
  if (lead.length === 1) return 90 - lead[0] / 2;
  const a = lead[0];
  const b = lead[1];
  const lo = Math.max(-a / 2, -a - b / 2);
  const hi = Math.min(180 - a / 2, 180 - a - b / 2);
  const prefer = 90 - (a + b) / 2;
  if (lo <= hi) return Math.max(lo, Math.min(hi, prefer));
  return prefer;
}

function ovChanNormAng(ang) {
  return ((ang % 360) + 360) % 360;
}

function renderOvChanRing(box, items) {
  if (!box) return;
  const total = items.reduce((s, d) => s + d.n, 0);
  const sum = total || 1;
  const cx = 120;
  const cy = 120;
  const r = 90;
  const r0 = 58;
  let ang = ovChanStartAng(items, sum);
  const pad = 1.2;
  const slices = items.filter((d) => d.n > 0).map((d) => {
    const sweep = Math.max(0, (d.n / sum) * 360 - pad);
    const a0 = ang + pad / 2;
    const a1 = a0 + sweep;
    ang += (d.n / sum) * 360;
    const mid = ovChanNormAng((a0 + a1) / 2);
    const pct = Math.round((d.n / sum) * 100);
    const [mx, my] = polarXY(0, 0, 1, mid);
    return { ...d, mid, pct, mx, my, dth: donutSlice(cx, cy, r, r0, a0, a1) };
  });
  const paths = slices.map((s) => `<path fill="${s.c}" d="${s.dth}"></path>`).join("");
  let leftItems = slices.filter((d) => d.mx < 0).sort((a, b) => a.my - b.my);
  let rightItems = slices.filter((d) => d.mx >= 0).sort((a, b) => a.my - b.my);
  if (!leftItems.length || !rightItems.length) {
    const byX = [...slices].sort((a, b) => a.mx - b.mx);
    const splitAt = Math.ceil(byX.length / 2);
    leftItems = byX.slice(0, splitAt).sort((a, b) => a.my - b.my);
    rightItems = byX.slice(splitAt).sort((a, b) => a.my - b.my);
  }
  box.innerHTML = `<div class="ov-chan-split">
    <svg class="ov-chan-lines" aria-hidden="true"></svg>
    <ul class="ov-chan-side is-left">${leftItems.map((d) => ovChanCardHtml(d, "left")).join("")}</ul>
    <div class="ov-chan-mid">
      <div class="ov-chan-donut">
        <svg viewBox="0 0 240 240" aria-hidden="true">${paths}</svg>
        <div class="ov-donut-c"><b>${total}</b><span>需求总数</span></div>
      </div>
    </div>
    <ul class="ov-chan-side is-right">${rightItems.map((d) => ovChanCardHtml(d, "right")).join("")}</ul>
  </div>`;
  requestAnimationFrame(() => requestAnimationFrame(() => paintOvChanLines(box)));
}

function renderOvTeamChart() {
  renderOvChanRing(document.getElementById("ovChanTeam"), OV_TEAM);
}

function renderOvProvChart() {
  renderOvChanRing(document.getElementById("ovChanProv"), OV_PROV);
}

function bindOverview() {
  const seg = document.getElementById("ovFunnelSeg");
  if (seg) {
    seg.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-span]");
      if (!btn) return;
      seg.querySelectorAll("button").forEach((b) => b.classList.toggle("is-on", b === btn));
      renderOvFunnel(btn.dataset.span);
    });
  }
  const tabs = document.getElementById("ovChanTabs");
  if (tabs) {
    tabs.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-chan]");
      if (!btn) return;
      tabs.querySelectorAll("button").forEach((b) => b.classList.toggle("is-on", b === btn));
      const team = document.getElementById("ovChanTeam");
      const prov = document.getElementById("ovChanProv");
      if (team) team.classList.toggle("hidden", btn.dataset.chan !== "team");
      if (prov) prov.classList.toggle("hidden", btn.dataset.chan !== "prov");
      requestAnimationFrame(() => {
        paintOvChanLines(btn.dataset.chan === "team" ? team : prov);
      });
    });
  }
  const srcTabs = document.getElementById("ovSrcTabs");
  if (srcTabs) {
    srcTabs.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-src]");
      if (!btn) return;
      srcTabs.querySelectorAll("button").forEach((b) => b.classList.toggle("is-on", b === btn));
      const hub = document.getElementById("ovSrcHub");
      const qa = document.getElementById("ovSrcQa");
      if (hub) hub.classList.toggle("hidden", btn.dataset.src !== "hub");
      if (qa) qa.classList.toggle("hidden", btn.dataset.src !== "qa");
    });
  }
  renderOvFunnel("year");
  renderOvStatusChart();
  renderOvTeamChart();
  renderOvProvChart();
  if (!window.__ovChanResizeBound) {
    window.__ovChanResizeBound = true;
    window.addEventListener("resize", refreshOvChanLines);
  }
}

function paintPager(el, key, page, pages, total, pageSize, sizeOpts) {
  if (!el) return;
  const btns = [];
  const opts = sizeOpts && sizeOpts.length ? sizeOpts : [pageSize === 5 ? 5 : 10, pageSize === 5 ? 10 : 20];
  btns.push(`<span class="total">共 ${total} 条</span>`);
  btns.push(`<button class="pager-btn" data-${key}="prev" ${page === 1 ? "disabled" : ""}>‹</button>`);
  for (let i = 1; i <= pages; i++) {
    if (pages > 7 && i > 3 && i < pages - 1 && Math.abs(i - page) > 1) {
      if (btns[btns.length - 1] !== "…") btns.push("…");
      continue;
    }
    btns.push(`<button class="pager-btn ${i === page ? "is-on" : ""}" data-${key}="${i}">${i}</button>`);
  }
  btns.push(`<button class="pager-btn" data-${key}="next" ${page === pages ? "disabled" : ""}>›</button>`);
  btns.push(`<select id="${el.id}Size">${opts.map((s) => `<option ${pageSize === s ? "selected" : ""}>${s}</option>`).join("")}</select><span>条/页</span>`);
  el.innerHTML = btns.join("");
}

function bindCount(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const box = el.parentElement && el.parentElement.querySelector(".dlg-count");
  const max = el.maxLength || 1000;
  const sync = () => { if (box) box.textContent = `${el.value.length} / ${max}`; };
  el.addEventListener("input", sync);
  sync();
}

function bindDlg(id, closers, onOpen) {
  const root = document.getElementById(id);
  if (!root) return;
  const close = () => root.classList.add("hidden");
  const open = () => {
    root.classList.remove("hidden");
    if (onOpen) onOpen();
  };
  closers.forEach((cid) => {
    const el = document.getElementById(cid);
    if (el) el.addEventListener("click", close);
  });
  return { open, close, root };
}

const RL_TABS = [
  { key: "all", name: "全部需求" },
  { key: "rr", name: "RR原始需求" },
  { key: "ir", name: "IR初始需求" },
  { key: "ar", name: "AR分配需求" },
  { key: "mine", name: "我提交的" },
  { key: "handle", name: "我处理的" },
  { key: "rel", name: "与我相关" },
  { key: "draft", name: "草稿箱" },
];
const RL_SEED = [
  { code: "AR-1020-202808275002", tags: ["PDT"], name: "新通话0827-001（测试勿动）", stage: "AR分配需求", status: "已完成", st: "t-ok", product: "新通话", owner: "肖瑞丹", urg: "低", time: "2026-08-27 09:42:20", tabs: ["ar", "rel"], act: "详情" },
  { code: "RR-1780-202608262713", tags: ["RMT"], name: "新通话0826-001", stage: "RR原始需求", status: "待分析", st: "t-warn", product: "新通话", owner: "超级管理员-金科公司", urg: "高", time: "2026-08-26 15:49:23", tabs: ["rr", "mine"], act: "分析" },
  { code: "RR-1780-202608262700", tags: ["RAT"], name: "咪咕阅读定时发送", stage: "RR原始需求", status: "待分析", st: "t-warn", product: "咪咕阅读", owner: "平台运营测试员2号", urg: "中", time: "2026-08-26 11:20:03", tabs: ["rr"], act: "分析" },
  { code: "IR-1780-202608269705", tags: ["RMT"], name: "测试2", stage: "IR初始需求", status: "已分析", st: "t-ok", product: "12580", owner: "超级管理员-金科公司", urg: "高", time: "2026-08-25 16:40:09", tabs: ["ir", "handle"], act: "详情" },
  { code: "AR-1024-20260820001", tags: ["PDT"], name: "云电脑中小企业版", stage: "AR分配需求", status: "已分配", st: "t-ok", product: "云电脑", owner: "云能事业部-刘洋", urg: "中", time: "2026-08-20 09:12:33", tabs: ["ar", "rel"], act: "详情" },
  { code: "AR-1024-20260818009", tags: ["RMT"], name: "5G 套餐权益升级", stage: "AR分配需求", status: "待纳入商业计划书", st: "t-warn", product: "5G 终端", owner: "市场部-陈敏", urg: "高", time: "2026-08-18 14:08:11", tabs: ["ar"], act: "分配" },
  { code: "RR-10039988", tags: ["RAT"], name: "国际漫游流量包", stage: "RR原始需求", status: "已驳回", st: "t-alert", product: "国际漫游", owner: "国际业务部-周琪", urg: "中", time: "2026-08-16 10:15:00", tabs: ["rr", "mine"], act: "重提" },
  { code: "IR-10040004", tags: ["RMT"], name: "物联网资费标准化", stage: "IR初始需求", status: "待决策", st: "t-warn", product: "物联网专网", owner: "物联网事业部-王磊", urg: "高", time: "2026-08-17 16:40:09", tabs: ["ir", "handle"], act: "分配" },
  { code: "RR-10039942", tags: ["RMT"], name: "芯片封装产能看板", stage: "RR原始需求", status: "待分析", st: "t-warn", product: "芯片封装", owner: "制造中心-赵鹏", urg: "低", time: "2026-08-13 13:19:44", tabs: ["rr"], act: "分析" },
];
const RL_ROWS = Array.from({ length: 36 }, (_, i) => {
  const s = RL_SEED[i % RL_SEED.length];
  if (i < RL_SEED.length) return s;
  return { ...s, code: `${s.code.slice(0, 2)}-${1000 + i}-20260826`, time: `2026-08-${String((i % 20) + 1).padStart(2, "0")} 10:00:00` };
});
const rlState = { kw: "", src: "", urg: "", tab: "all", page: 1, pageSize: 10 };

function filteredRl() {
  return RL_ROWS.filter((r) => {
    const q = rlState.kw;
    if (q && !r.code.includes(q) && !r.name.includes(q) && !r.owner.includes(q)) return false;
    if (rlState.urg && r.urg !== rlState.urg) return false;
    if (rlState.tab !== "all" && rlState.tab !== "draft" && !(r.tabs || []).includes(rlState.tab)) return false;
    if (rlState.tab === "draft") return false;
    return true;
  });
}

function renderRlTabs() {
  const el = document.getElementById("rlTabs");
  if (!el) return;
  el.innerHTML = RL_TABS.map((t) => {
    const n = t.key === "all" ? RL_ROWS.length : t.key === "draft" ? 0 : RL_ROWS.filter((r) => (r.tabs || []).includes(t.key)).length;
    return `<button type="button" class="subtab ${rlState.tab === t.key ? "is-on" : ""}" data-rtab="${t.key}">${t.name}<em>${n}</em></button>`;
  }).join("");
}

function renderRlTable() {
  const tb = document.getElementById("rlTbody");
  if (!tb) return;
  const list = filteredRl();
  const pages = Math.max(1, Math.ceil(list.length / rlState.pageSize));
  if (rlState.page > pages) rlState.page = pages;
  const slice = list.slice((rlState.page - 1) * rlState.pageSize, rlState.page * rlState.pageSize);
  tb.innerHTML = slice
    .map((r) => `<tr>
      <td><a class="an-code" href="javascript:;">${r.code}</a>${(r.tags || []).map((t) => `<span class="tag-mini">${t}</span>`).join("")}</td>
      <td>${r.name}</td>
      <td>${r.stage}</td>
      <td>${stTag(r.status, r.st)}</td>
      <td>${r.product}</td>
      <td>${r.owner}</td>
      <td>${urgHtml(r.urg)}</td>
      <td>${r.time}</td>
      <td><button type="button" class="link" data-rl="${r.act}">${r.act}</button></td>
    </tr>`)
    .join("");
  paintPager(document.getElementById("rlPager"), "rl", rlState.page, pages, list.length, rlState.pageSize);
}

const AS_ROWS = [
  { code: "IR-1780-202608269705", tags: ["RMT"], name: "测试2", product: "12580", cat: "功能需求", owner: "超级管理员-金科公司", urg: "高", time: "2026-08-26 11:20:03", stay: "4小时", status: "待分配" },
];
const asState = { kw: "", urg: "", cat: "", owner: "", page: 1, pageSize: 10 };

function filteredAs() {
  return AS_ROWS.filter((r) => {
    const q = asState.kw;
    if (q && !r.code.includes(q) && !r.name.includes(q)) return false;
    if (asState.urg && r.urg !== asState.urg) return false;
    if (asState.cat && r.cat !== asState.cat) return false;
    if (asState.owner && !r.owner.includes(asState.owner)) return false;
    return true;
  });
}

function renderAsTable() {
  const tb = document.getElementById("asTbody");
  if (!tb) return;
  const list = filteredAs();
  const pages = Math.max(1, Math.ceil(list.length / asState.pageSize) || 1);
  const slice = list.slice((asState.page - 1) * asState.pageSize, asState.page * asState.pageSize);
  tb.innerHTML = slice
    .map((r) => `<tr>
      <td><input type="checkbox" aria-label="选择 ${r.code}"></td>
      <td><a class="an-code" href="javascript:;">${r.code}</a>${(r.tags || []).map((t) => `<span class="tag-mini">${t}</span>`).join("")}</td>
      <td>${r.name}</td>
      <td>${r.product}</td>
      <td>${r.cat}</td>
      <td>${r.owner}</td>
      <td>${urgHtml(r.urg)}</td>
      <td>${r.time}</td>
      <td class="td-warn">${r.stay}</td>
      <td>${stTag(r.status, "t-warn")}</td>
      <td><button type="button" class="link" data-as="分配">分配</button></td>
    </tr>`)
    .join("");
  paintPager(document.getElementById("asPager"), "as", asState.page, pages, list.length, asState.pageSize);
}

const DV_ROWS = [
  { code: "AR-1780-202608269705", tags: ["CDT"], name: "测试2", product: "12580", cat: "功能需求", owner: "超级管理员·金科公司", urg: "高", time: "2026-08-26 16:21:54", stay: "17小时", status: "待纳入商业计划书" },
  { code: "AR-1781-202608269801", tags: ["CDT"], name: "11", product: "12580", cat: "功能需求", owner: "超级管理员·金科公司", urg: "中", time: "2026-08-26 15:08:12", stay: "18小时", status: "待纳入商业计划书" },
];
const dvState = { kw: "", urg: "", cat: "", owner: "", time: "", page: 1, pageSize: 10 };

function filteredDv() {
  return DV_ROWS.filter((r) => {
    const q = dvState.kw;
    if (q && !r.code.includes(q) && !r.name.includes(q)) return false;
    if (dvState.urg && r.urg !== dvState.urg) return false;
    if (dvState.cat && r.cat !== dvState.cat) return false;
    if (dvState.owner && !r.owner.includes(dvState.owner)) return false;
    if (dvState.time && !r.time.includes(dvState.time)) return false;
    return true;
  });
}

function renderDvTable() {
  const tb = document.getElementById("dvTbody");
  if (!tb) return;
  const list = filteredDv();
  const pages = Math.max(1, Math.ceil(list.length / dvState.pageSize) || 1);
  if (dvState.page > pages) dvState.page = pages;
  const slice = list.slice((dvState.page - 1) * dvState.pageSize, dvState.page * dvState.pageSize);
  tb.innerHTML = slice
    .map((r) => `<tr>
      <td><a class="an-code" href="javascript:;">${r.code}</a>${(r.tags || []).map((t) => `<span class="tag-mini">${t}</span>`).join("")}</td>
      <td>${r.name}</td>
      <td>${r.product}</td>
      <td>${r.cat}</td>
      <td>${r.owner}</td>
      <td>${urgHtml(r.urg)}</td>
      <td>${r.time}</td>
      <td class="td-warn">${r.stay}</td>
      <td>${stTag(r.status)}</td>
      <td><button type="button" class="link" data-dv="详情">详情</button></td>
    </tr>`)
    .join("");
  paintPager(document.getElementById("dvPager"), "dv", dvState.page, pages, list.length, dvState.pageSize);
}

function renderRbTable() {
  const tb = document.getElementById("rbTbody");
  if (!tb) return;
  tb.innerHTML = `<tr><td colspan="10">
    <div class="empty">
      <svg width="64" height="48" viewBox="0 0 64 48" fill="none"><rect x="8" y="10" width="48" height="30" rx="4" stroke="#EBEBF0"/><path d="M8 20h48" stroke="#EBEBF0"/><rect x="16" y="26" width="14" height="6" rx="2" fill="#F2F3F5"/><rect x="34" y="26" width="14" height="6" rx="2" fill="#F2F3F5"/></svg>
      <p>暂无数据</p>
    </div>
  </td></tr>`;
  paintPager(document.getElementById("rbPager"), "rb", 1, 1, 0, 10);
}

const CH_ROWS = [
  { no: "CHG-AR-20260826001", ar: "AR-1780-202608269705", tags: ["RMT"], name: "新通话0825-002（变更3）", owner: "超级管理员", time: "2026-08-26 11:20:03", status: "待审批", st: "t-warn" },
  { no: "CHG-AR-20260825008", ar: "AR-1024-20260820001", tags: ["PDT"], name: "云电脑中小企业版", owner: "刘洋", time: "2026-08-25 16:40:09", status: "已批准", st: "t-ok" },
  { no: "CHG-AR-20260824003", ar: "AR-1024-20260818009", tags: ["RMT"], name: "5G 套餐权益升级", owner: "陈敏", time: "2026-08-24 09:12:33", status: "已驳回", st: "t-alert" },
  { no: "CHG-AR-20260823012", ar: "AR-10039971", tags: ["RAT"], name: "政企快线开通工单字段补齐", owner: "平台运营测试员4号", time: "2026-08-23 14:08:11", status: "待审批", st: "t-warn" },
  { no: "CHG-AR-20260822006", ar: "AR-10039960", tags: ["RMT"], name: "咪咕视频会员权益同步", owner: "孙悦", time: "2026-08-22 18:04:20", status: "已批准", st: "t-ok" },
  { no: "CHG-AR-20260821004", ar: "AR-10039931", tags: ["PDT"], name: "KY11 终端日志采集策略", owner: "吴芳", time: "2026-08-21 08:32:11", status: "待审批", st: "t-warn" },
  { no: "CHG-AR-20260820002", ar: "AR-10039908", tags: ["RMT"], name: "产品枢纽平台菜单权限审计", owner: "超级管理员", time: "2026-08-20 15:10:46", status: "已批准", st: "t-ok" },
  { no: "CHG-AR-20260819001", ar: "AR-10040012", tags: ["RAT"], name: "家庭宽带测速结果不准优化", owner: "平台运营测试员2号", time: "2026-08-19 09:12:33", status: "待审批", st: "t-warn" },
];
const CH_MORE = Array.from({ length: 22 }, (_, i) => {
  const s = CH_ROWS[i % CH_ROWS.length];
  return { ...s, no: `CHG-AR-202608${String(10 + i).padStart(2, "0")}${String(i).padStart(2, "0")}` };
});
const CH_ALL = [...CH_ROWS, ...CH_MORE];
const chState = { kw: "", st: "", page: 1, pageSize: 10 };

const CH_PICK = [
  { code: "AR-1780-202608269705", name: "测试2", product: "通信服务 / 移动通信 / 移动语音 / 12580", cat: "功能需求", team: "广东 RAT", urg: "高", status: "待纳入商业计划书", time: "2026-08-26" },
  { code: "AR-1781-202608269801", name: "11", product: "通信服务 / 移动通信 / 移动语音 / 12580", cat: "功能需求", team: "广东 RAT", urg: "中", status: "待纳入商业计划书", time: "2026-08-26" },
  { code: "AR-1024-20260820001", name: "云电脑中小企业版", product: "云电脑 / 云电脑中小企业版", cat: "功能需求", team: "山东 POT", urg: "中", status: "待开发", time: "2026-08-20" },
  { code: "AR-1024-20260818009", name: "5G 套餐权益升级", product: "5G 终端 / 套餐权益", cat: "非功能需求", team: "广东 RAT", urg: "高", status: "待开发", time: "2026-08-18" },
];
const chPickState = { kw: "", cat: "", page: 1, pageSize: 5, selected: "" };
let chApplyPicked = null;

function filteredChPick() {
  return CH_PICK.filter((r) => {
    const q = chPickState.kw;
    if (q && !r.code.includes(q) && !r.name.includes(q)) return false;
    if (chPickState.cat && r.cat !== chPickState.cat) return false;
    return true;
  });
}

function renderChPickTable() {
  const tb = document.getElementById("chgPickTbody");
  if (!tb) return;
  const list = filteredChPick();
  const pages = Math.max(1, Math.ceil(list.length / chPickState.pageSize));
  if (chPickState.page > pages) chPickState.page = pages;
  const slice = list.slice((chPickState.page - 1) * chPickState.pageSize, chPickState.page * chPickState.pageSize);
  tb.innerHTML = slice
    .map((r) => `<tr>
      <td><input type="radio" name="chgPickRow" value="${r.code}" ${chPickState.selected === r.code ? "checked" : ""} aria-label="选择 ${r.code}"></td>
      <td><a class="an-code" href="javascript:;">${r.code}</a></td>
      <td>${r.name}</td>
      <td>${r.product}</td>
      <td>${r.cat}</td>
      <td>${r.team}</td>
      <td>${urgHtml(r.urg)}</td>
      <td>${stTag(r.status)}</td>
      <td>${r.time}</td>
    </tr>`)
    .join("");
  paintPager(document.getElementById("chgPickPager"), "cpick", chPickState.page, pages, list.length, chPickState.pageSize, [5, 10]);
}

function setChApplyPicked(row) {
  chApplyPicked = row || null;
  const hint = document.getElementById("chgPickHint");
  const box = document.getElementById("chgPicked");
  if (!hint || !box) return;
  if (!row) {
    hint.classList.remove("hidden");
    box.classList.add("hidden");
    document.getElementById("chgPickCode").textContent = "";
    document.getElementById("chgPickName").textContent = "";
    return;
  }
  hint.classList.add("hidden");
  box.classList.remove("hidden");
  document.getElementById("chgPickCode").textContent = row.code;
  document.getElementById("chgPickName").textContent = row.name;
}

function resetChApplyForm() {
  setChApplyPicked(null);
  const reason = document.getElementById("chgReason");
  if (reason) {
    reason.value = "";
    reason.dispatchEvent(new Event("input"));
  }
  const t = document.getElementById("chgImpactTime");
  const c = document.getElementById("chgImpactCost");
  if (t) t.value = "";
  if (c) c.value = "";
  const risk = document.getElementById("chgRiskLabel");
  if (risk) risk.textContent = "请选择";
  document.getElementById("chgRisk")?.classList.remove("has-val");
}

function filteredCh() {
  return CH_ALL.filter((r) => {
    const q = chState.kw;
    if (q && !r.no.includes(q) && !r.ar.includes(q) && !r.name.includes(q)) return false;
    if (chState.st && r.status !== chState.st) return false;
    return true;
  });
}

function renderChTable() {
  const tb = document.getElementById("chTbody");
  if (!tb) return;
  const list = filteredCh();
  const pages = Math.max(1, Math.ceil(list.length / chState.pageSize));
  if (chState.page > pages) chState.page = pages;
  const slice = list.slice((chState.page - 1) * chState.pageSize, chState.page * chState.pageSize);
  tb.innerHTML = slice
    .map((r) => {
      const act = r.status === "待审批" ? "审批处理" : "详情";
      return `<tr>
        <td>${r.no}</td>
        <td><a class="an-code" href="javascript:;">${r.ar}</a>${(r.tags || []).map((t) => `<span class="tag-mini">${t}</span>`).join("")}</td>
        <td>${r.name}</td>
        <td>${r.owner}</td>
        <td>${r.time}</td>
        <td>${stTag(r.status, r.st)}</td>
        <td><button type="button" class="link" data-ch="${act}">${act}</button></td>
      </tr>`;
    })
    .join("");
  paintPager(document.getElementById("chPager"), "ch", chState.page, pages, list.length, chState.pageSize);
}

function listen(id, ev, fn) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(ev, fn);
  return el;
}

const BH_TABS = [
  { key: "all", name: "全部", n: 377 },
  { key: "todo", name: "待处理", n: 1 },
  { key: "soon", name: "即将到期", n: 17 },
  { key: "done", name: "已完成", n: 185 },
  { key: "mine", name: "我处理的", n: 43 },
  { key: "rel", name: "与我相关", n: 130 },
];
const BH_NAMES = ["咪咕音乐", "咪咕阅读", "咪咕视频", "视频彩铃", "咪咕直播", "咪咕游戏", "咪咕动漫", "云电脑"];
const BH_PHASES = ["商业计划书编制", "商业计划书初审", "IPMT处室经理审批", "归档"];
const BH_COS = ["咪咕公司", "互联网公司", "金科公司"];
const BH_OWNERS = ["CDT测试员1号", "CDT测试员2号", "平台运营测试员2号", "PMT测试员1号", "平台运营测试员2号、PMT测试员1号"];
const BH_YEARS = ["2032", "2031", "2028", "2027", "2026", "2020"];
function bhTabOf(i) {
  if (i === 0) return "todo";
  if (i < 18) return "soon";
  if (i < 203) return "done";
  if (i < 246) return "mine";
  return "rel";
}
const BH_ROWS = Array.from({ length: 378 }, (_, i) => {
  if (i === 0) {
    return {
      code: "BP-1018-20260827105707",
      year: "2032",
      name: "咪咕音乐",
      neu: true,
      company: "咪咕公司",
      due: "2026-08-27",
      phase: "商业计划书初审",
      owner: "平台运营测试员2号、PMT测试员1号",
      tab: "todo",
      over: false,
    };
  }
  const tab = bhTabOf(i);
  return {
    code: `BP-${String(1018 + (i % 80)).padStart(4, "0")}-20260827${String(100000 + i).slice(-6)}`,
    year: BH_YEARS[i % BH_YEARS.length],
    name: BH_NAMES[i % BH_NAMES.length],
    neu: i % 7 === 0,
    company: BH_COS[i % BH_COS.length],
    due: `2026-08-${String((i % 28) + 1).padStart(2, "0")}`,
    phase: tab === "done" ? "归档" : BH_PHASES[i % 3],
    owner: BH_OWNERS[i % BH_OWNERS.length],
    tab,
    over: tab === "done" && i % 5 === 0,
  };
});
const bhState = { kw: "", co: "", phase: "", over: "", year: "", tab: "all", page: 1, pageSize: 10 };

function filteredBh() {
  return BH_ROWS.filter((r) => {
    const q = bhState.kw;
    if (q && !r.code.includes(q) && !r.name.includes(q)) return false;
    if (bhState.co && r.company !== bhState.co) return false;
    if (bhState.phase && r.phase !== bhState.phase) return false;
    if (bhState.over === "是" && !r.over) return false;
    if (bhState.over === "否" && r.over) return false;
    if (bhState.year && r.year !== bhState.year) return false;
    if (bhState.tab !== "all" && r.tab !== bhState.tab) return false;
    return true;
  });
}

function renderBhTabs() {
  const el = document.getElementById("bhTabs");
  if (!el) return;
  el.innerHTML = BH_TABS.map((t) =>
    `<button type="button" class="subtab ${bhState.tab === t.key ? "is-on" : ""}" data-bhtab="${t.key}">${t.name}<em>${t.n}</em></button>`
  ).join("");
}

function renderBhTable() {
  const tb = document.getElementById("bhTbody");
  if (!tb) return;
  const list = filteredBh();
  const pages = Math.max(1, Math.ceil(list.length / bhState.pageSize));
  if (bhState.page > pages) bhState.page = pages;
  const start = (bhState.page - 1) * bhState.pageSize;
  const slice = list.slice(start, start + bhState.pageSize);
  tb.innerHTML = slice
    .map((r) => `<tr>
      <td>${r.code}</td>
      <td>${r.year}</td>
      <td><span class="bh-cell">${r.name}${r.neu ? '<span class="linetag t-ing">新产品</span>' : ""}</span></td>
      <td>${r.company}</td>
      <td>${r.due}</td>
      <td><span class="bh-cell">${r.phase}${r.over ? '<span class="linetag t-warn">超时关闭</span>' : ""}</span></td>
      <td>${r.owner}</td>
      <td class="col-ops"><span class="ops-links"><a class="link" href="#/product/bp-handle/detail">详情</a>${r.phase === "归档" ? "" : '<a class="link" href="#/product/bp-handle/edit">处理</a>'}</span></td>
    </tr>`)
    .join("");
  paintPager(document.getElementById("bhPager"), "bh", bhState.page, pages, list.length, bhState.pageSize);
}

function bindReqFlow() {
  bindSelect("rlSrc", "rlSrcLabel", (v) => { rlState.src = v; }, "请选择");
  bindSelect("rlUrg", "rlUrgLabel", (v) => { rlState.urg = v; }, "请选择");
  bindSelect("reSrc", "reSrcLabel", () => {}, "请选择需求来源");
  bindSelect("reProd", "reProdLabel", () => {}, "请选择");
  bindSelect("reCat", "reCatLabel", () => {}, "请选择需求类别");
  bindSelect("reUrg", "reUrgLabel", () => {}, "请选择紧急程度");
  bindSelect("rePri", "rePriLabel", () => {}, "请选择建议优先级");
  bindSelect("asUrg", "asUrgLabel", (v) => { asState.urg = v; }, "请选择");
  bindSelect("asCat", "asCatLabel", (v) => { asState.cat = v; }, "请选择");
  bindSelect("bhCo", "bhCoLabel", (v) => { bhState.co = v; }, "请选择");
  bindSelect("bhPhase", "bhPhaseLabel", (v) => { bhState.phase = v; }, "请选择");
  bindSelect("bhOver", "bhOverLabel", (v) => { bhState.over = v; }, "请选择");
  bindSelect("dvUrg", "dvUrgLabel", (v) => { dvState.urg = v; }, "请选择");
  bindSelect("dvCat", "dvCatLabel", (v) => { dvState.cat = v; }, "请选择");
  bindSelect("rbUrg", "rbUrgLabel", () => {}, "请选择");
  bindSelect("rbWay", "rbWayLabel", () => {}, "请选择");
  bindSelect("chSt", "chStLabel", (v) => { chState.st = v; }, "请选择");
  bindSelect("chgRisk", "chgRiskLabel", () => {}, "请选择");
  bindSelect("chgPickCat", "chgPickCatLabel", (v) => { chPickState.cat = v; chPickState.page = 1; renderChPickTable(); }, "请选择需求类别");
  bindCount("reBg");
  bindCount("reScene");
  bindCount("reDesc");
  bindCount("reComp");
  bindCount("reValue");
  bindCount("chgReason");
  bindCount("chgApprNote");

  listen("rlCreate", "click", () => { goPath("#/req/list/create"); });
  listen("rlSearch", "click", () => {
    rlState.kw = document.getElementById("rlKw").value.trim();
    rlState.page = 1;
    renderRlTable();
  });
  listen("rlReset", "click", () => {
    rlState.kw = rlState.src = rlState.urg = "";
    rlState.page = 1;
    document.getElementById("rlKw").value = "";
    document.getElementById("rlSrcLabel").textContent = "请选择";
    document.getElementById("rlUrgLabel").textContent = "请选择";
    document.getElementById("rlSrc").classList.remove("has-val");
    document.getElementById("rlUrg").classList.remove("has-val");
    document.querySelectorAll("#pageReqList .quick-dates button").forEach((x) =>
      x.classList.toggle("is-on", x.textContent.trim() === "全部")
    );
    setCalDisplay(document.getElementById("rlStart"), "");
    setCalDisplay(document.getElementById("rlEnd"), "");
    renderRlTable();
  });
  listen("rlQuickDates", "click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    document.querySelectorAll("#pageReqList .quick-dates button").forEach((x) => x.classList.remove("is-on"));
    btn.classList.add("is-on");
  });
  listen("rlTabs", "click", (e) => {
    const btn = e.target.closest("[data-rtab]");
    if (!btn) return;
    rlState.tab = btn.dataset.rtab;
    rlState.page = 1;
    renderRlTabs();
    renderRlTable();
  });
  listen("rlTbody", "click", (e) => {
    const btn = e.target.closest("[data-rl], .an-code");
    if (!btn) return;
    const act = btn.dataset.rl || (btn.closest("tr") && btn.closest("tr").querySelector("[data-rl]") && btn.closest("tr").querySelector("[data-rl]").dataset.rl);
    if (act === "分配") goPath("#/req/assign/new");
    else if (act === "重提") toast("已提交重提");
    else if (act === "分析") goPath("#/req/analysis/detail");
    else goPath("#/req/list/detail");
  });
  listen("rlPager", "click", (e) => {
    const btn = e.target.closest("[data-rl]");
    if (!btn || btn.disabled || btn.closest("tbody")) return;
    const pages = Math.max(1, Math.ceil(filteredRl().length / rlState.pageSize));
    const v = btn.dataset.rl;
    if (v === "prev") rlState.page = Math.max(1, rlState.page - 1);
    else if (v === "next") rlState.page = Math.min(pages, rlState.page + 1);
    else if (Number(v)) rlState.page = Number(v);
    renderRlTable();
  });
  listen("rlPager", "change", (e) => {
    if (e.target.id === "rlPagerSize") {
      rlState.pageSize = Number(e.target.value);
      rlState.page = 1;
      renderRlTable();
    }
  });

  listen("reBack", "click", () => { goPath("#/req/list"); });
  listen("reImport", "click", () => toast("请选择导入文件"));
  listen("reDraft", "click", () => toast("已存为草稿"));
  listen("reSubmit", "click", () => toast("需求已提交"));
  listen("reUpload", "click", () => toast("请选择上传文件"));

  listen("rldBack", "click", () => { goPath("#/req/list"); });
  listen("rldTrace", "click", () => {
    if (document.getElementById("traceDlg")) openTraceModal();
    else toast("暂无处理轨迹");
  });
  listen("rldTabs", "click", (e) => {
    const tab = e.target.closest(".ad-tab");
    if (!tab) return;
    document.querySelectorAll("#rldTabs .ad-tab").forEach((t) => t.classList.toggle("is-on", t === tab));
    const desc = document.getElementById("rldPaneDesc");
    const bp = document.getElementById("rldPaneBp");
    const chg = document.getElementById("rldPaneChg");
    if (desc) desc.classList.toggle("hidden", tab.dataset.pane !== "desc");
    if (bp) bp.classList.toggle("hidden", tab.dataset.pane !== "bp");
    if (chg) chg.classList.toggle("hidden", tab.dataset.pane !== "chg");
  });
  listen("rldLogMore", "click", () => {
    const extra = document.querySelectorAll("#pageReqListDetail .ad-log-more");
    const btn = document.getElementById("rldLogMore");
    const open = btn.classList.toggle("is-open");
    extra.forEach((el) => el.classList.toggle("hidden", !open));
    btn.innerHTML = (open ? "收起日志" : "展开日志") +
      '<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-linecap="round"/></svg>';
  });
  const rldSteps = document.querySelector("#pageReqListDetail .ad-steps");
  if (rldSteps) {
    rldSteps.addEventListener("click", (e) => {
      const wrap = e.target.closest(".step-people");
      if (!wrap) return;
      e.stopPropagation();
      const open = wrap.classList.contains("is-open");
      rldSteps.querySelectorAll(".step-people.is-open").forEach((el) => el.classList.remove("is-open"));
      wrap.classList.toggle("is-open", !open);
    });
    document.addEventListener("click", () => {
      rldSteps.querySelectorAll(".step-people.is-open").forEach((el) => el.classList.remove("is-open"));
    });
  }

  listen("asCreate", "click", () => { goPath("#/req/assign/new"); });
  listen("asQuality", "click", () => toast("品质需求入口"));
  listen("asSearch", "click", () => {
    asState.kw = document.getElementById("asKw").value.trim();
    asState.owner = document.getElementById("asOwner").value.trim();
    asState.page = 1;
    renderAsTable();
  });
  listen("asReset", "click", () => {
    asState.kw = asState.urg = asState.cat = asState.owner = "";
    asState.page = 1;
    document.getElementById("asKw").value = "";
    document.getElementById("asOwner").value = "";
    document.getElementById("asUrgLabel").textContent = "请选择";
    document.getElementById("asCatLabel").textContent = "请选择";
    document.getElementById("asUrg").classList.remove("has-val");
    document.getElementById("asCat").classList.remove("has-val");
    setCalDisplay(document.getElementById("asTime"), "");
    renderAsTable();
  });
  listen("asExport", "click", () => toast("已导出当前筛选结果"));
  listen("asChkAll", "change", (e) => {
    document.querySelectorAll("#asTbody input[type=checkbox]").forEach((c) => { c.checked = e.target.checked; });
  });
  listen("asTbody", "click", (e) => {
    if (e.target.closest("[data-as], .an-code")) goPath("#/req/assign/new");
  });
  listen("asPager", "click", (e) => {
    const btn = e.target.closest("[data-as]");
    if (!btn || btn.disabled) return;
    const pages = Math.max(1, Math.ceil(filteredAs().length / asState.pageSize));
    const v = btn.dataset.as;
    if (v === "prev") asState.page = Math.max(1, asState.page - 1);
    else if (v === "next") asState.page = Math.min(pages, asState.page + 1);
    else if (Number(v)) asState.page = Number(v);
    renderAsTable();
  });

  listen("dvSearch", "click", () => {
    dvState.kw = document.getElementById("dvKw").value.trim();
    dvState.owner = document.getElementById("dvOwner").value.trim();
    dvState.time = (document.getElementById("dvStart") && document.getElementById("dvStart").dataset.value) || "";
    dvState.page = 1;
    renderDvTable();
  });
  listen("dvReset", "click", () => {
    dvState.kw = dvState.urg = dvState.cat = dvState.owner = dvState.time = "";
    dvState.page = 1;
    document.getElementById("dvKw").value = "";
    document.getElementById("dvOwner").value = "";
    document.getElementById("dvUrgLabel").textContent = "请选择";
    document.getElementById("dvCatLabel").textContent = "请选择";
    document.getElementById("dvUrg").classList.remove("has-val");
    document.getElementById("dvCat").classList.remove("has-val");
    document.querySelectorAll("#pageReqDev .quick-dates button").forEach((x) =>
      x.classList.toggle("is-on", x.textContent.trim() === "全部")
    );
    setCalDisplay(document.getElementById("dvStart"), "");
    setCalDisplay(document.getElementById("dvEnd"), "");
    renderDvTable();
  });
  listen("dvQuickDates", "click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    document.querySelectorAll("#pageReqDev .quick-dates button").forEach((x) => x.classList.remove("is-on"));
    btn.classList.add("is-on");
  });
  listen("dvTbody", "click", (e) => {
    if (e.target.closest("[data-dv], .an-code")) goPath("#/req/dev/detail");
  });
  listen("dvPager", "click", (e) => {
    const btn = e.target.closest("[data-dv]");
    if (!btn || btn.disabled) return;
    const pages = Math.max(1, Math.ceil(filteredDv().length / dvState.pageSize));
    const v = btn.dataset.dv;
    if (v === "prev") dvState.page = Math.max(1, dvState.page - 1);
    else if (v === "next") dvState.page = Math.min(pages, dvState.page + 1);
    else if (Number(v)) dvState.page = Number(v);
    renderDvTable();
  });
  listen("dvPager", "change", (e) => {
    if (e.target.id === "dvPagerSize") {
      dvState.pageSize = Number(e.target.value);
      dvState.page = 1;
      renderDvTable();
    }
  });
  listen("bhSearch", "click", () => {
    bhState.kw = document.getElementById("bhKw").value.trim();
    bhState.year = document.getElementById("bhYear").dataset.value || "";
    bhState.page = 1;
    renderBhTable();
  });
  listen("bhReset", "click", () => {
    bhState.kw = bhState.co = bhState.phase = bhState.over = bhState.year = "";
    bhState.page = 1;
    document.getElementById("bhKw").value = "";
    document.getElementById("bhCoLabel").textContent = "请选择";
    document.getElementById("bhPhaseLabel").textContent = "请选择";
    document.getElementById("bhOverLabel").textContent = "请选择";
    document.getElementById("bhCo").classList.remove("has-val");
    document.getElementById("bhPhase").classList.remove("has-val");
    document.getElementById("bhOver").classList.remove("has-val");
    setCalDisplay(document.getElementById("bhYear"), "");
    renderBhTable();
  });
  listen("bhTabs", "click", (e) => {
    const btn = e.target.closest("[data-bhtab]");
    if (!btn) return;
    bhState.tab = btn.dataset.bhtab;
    bhState.page = 1;
    renderBhTabs();
    renderBhTable();
  });
  listen("bhPager", "click", (e) => {
    const btn = e.target.closest("[data-bh]");
    if (!btn || btn.disabled) return;
    const pages = Math.max(1, Math.ceil(filteredBh().length / bhState.pageSize));
    const v = btn.dataset.bh;
    if (v === "prev") bhState.page = Math.max(1, bhState.page - 1);
    else if (v === "next") bhState.page = Math.min(pages, bhState.page + 1);
    else if (Number(v)) bhState.page = Number(v);
    renderBhTable();
  });
  listen("bhPager", "change", (e) => {
    if (e.target.id === "bhPagerSize") {
      bhState.pageSize = Number(e.target.value);
      bhState.page = 1;
      renderBhTable();
    }
  });

  listen("dvBack", "click", () => { goPath("#/req/dev"); });
  listen("dvChange", "click", () => { goPath("#/req/change"); });
  listen("dvTabs", "click", (e) => {
    const tab = e.target.closest(".ad-tab");
    if (!tab) return;
    document.querySelectorAll("#dvTabs .ad-tab").forEach((t) => t.classList.toggle("is-on", t === tab));
    const desc = document.getElementById("dvPaneDesc");
    const bp = document.getElementById("dvPaneBp");
    const chg = document.getElementById("dvPaneChg");
    if (desc) desc.classList.toggle("hidden", tab.dataset.pane !== "desc");
    if (bp) bp.classList.toggle("hidden", tab.dataset.pane !== "bp");
    if (chg) chg.classList.toggle("hidden", tab.dataset.pane !== "chg");
  });
  listen("dvLogMore", "click", () => {
    const extra = document.querySelectorAll("#pageReqDevDetail .ad-log-more");
    const btn = document.getElementById("dvLogMore");
    const open = btn.classList.toggle("is-open");
    extra.forEach((el) => el.classList.toggle("hidden", !open));
    btn.innerHTML = (open ? "收起日志" : "展开日志") +
      '<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-linecap="round"/></svg>';
  });
  const dvSteps = document.querySelector("#pageReqDevDetail .ad-steps");
  if (dvSteps) {
    dvSteps.addEventListener("click", (e) => {
      const wrap = e.target.closest(".step-people");
      if (!wrap) return;
      e.stopPropagation();
      const open = wrap.classList.contains("is-open");
      dvSteps.querySelectorAll(".step-people.is-open").forEach((el) => el.classList.remove("is-open"));
      wrap.classList.toggle("is-open", !open);
    });
    document.addEventListener("click", () => {
      dvSteps.querySelectorAll(".step-people.is-open").forEach((el) => el.classList.remove("is-open"));
    });
  }

  listen("afBack", "click", () => { goPath("#/req/assign"); });
  listen("afCancel", "click", () => { goPath("#/req/assign"); });
  listen("afCdt", "click", () => {
    openConfirm({ title: "确定纳入 CDT？", desc: "纳入后将进入规划分流，此操作不可撤回。", onOk: () => toast("已纳入 CDT") });
  });
  listen("afPdt", "click", () => {
    openConfirm({ title: "确定纳入 PDT？", desc: "纳入后将进入研发闭环，此操作不可撤回。", onOk: () => toast("已纳入 PDT") });
  });
  listen("afNext", "click", () => {
    openConfirm({ title: "确定放入下一年度？", desc: "放入下一年度后本年度不再排期，此操作不可撤回。", onOk: () => toast("已放入下一年度") });
  });
  listen("afAddIr", "click", () => toast("请选择 IR 需求"));
  listen("afDelIr", "click", () => toast("已移除"));

  listen("rbSearch", "click", renderRbTable);
  listen("rbReset", "click", () => {
    document.getElementById("rbKw").value = "";
    document.getElementById("rbOwner").value = "";
    document.getElementById("rbUrgLabel").textContent = "请选择";
    document.getElementById("rbWayLabel").textContent = "请选择";
    document.getElementById("rbUrg").classList.remove("has-val");
    document.getElementById("rbWay").classList.remove("has-val");
    setCalDisplay(document.getElementById("rbTime"), "");
    renderRbTable();
  });
  listen("rbExport", "click", () => toast("已导出当前筛选结果"));

  const applyDlg = bindDlg("chgApplyDlg", ["chgApplyMask", "chgApplyClose", "chgApplyCancel"]);
  const pickDlg = bindDlg("chgPickDlg", ["chgPickMask", "chgPickClose", "chgPickCancel"]);
  const detailDlg = bindDlg("chgDetailDlg", ["chgDetailMask", "chgDetailClose", "chgDetailOk"]);
  const apprDlg = bindDlg("chgApprDlg", ["chgApprMask", "chgApprClose", "chgApprCancel"]);
  listen("chApply", "click", () => {
    resetChApplyForm();
    pickDlg && pickDlg.close();
    applyDlg && applyDlg.open();
  });
  ["chgApplyMask", "chgApplyClose", "chgApplyCancel"].forEach((id) => {
    listen(id, "click", () => pickDlg && pickDlg.close());
  });
  listen("chgDetailDlg", "click", (e) => {
    if (e.target.closest(".dlg-banner .link")) toast("已发起 RMT 决策");
  });
  listen("chgApplyOk", "click", () => {
    if (!chApplyPicked) {
      toast("请选择 AR 需求");
      return;
    }
    if (!document.getElementById("chgReason").value.trim()) {
      toast("请填写变更原因");
      return;
    }
    pickDlg && pickDlg.close();
    applyDlg && applyDlg.close();
    toast("变更申请已提交");
  });
  listen("chgPickAr", "click", () => {
    chPickState.kw = chPickState.cat = "";
    chPickState.page = 1;
    chPickState.selected = chApplyPicked ? chApplyPicked.code : "";
    const kw = document.getElementById("chgPickKw");
    if (kw) kw.value = "";
    const lab = document.getElementById("chgPickCatLabel");
    if (lab) lab.textContent = "请选择需求类别";
    document.getElementById("chgPickCat")?.classList.remove("has-val");
    renderChPickTable();
    pickDlg && pickDlg.open();
  });
  listen("chgPickReset", "click", () => {
    chPickState.kw = chPickState.cat = "";
    chPickState.page = 1;
    document.getElementById("chgPickKw").value = "";
    document.getElementById("chgPickCatLabel").textContent = "请选择需求类别";
    document.getElementById("chgPickCat").classList.remove("has-val");
    renderChPickTable();
  });
  listen("chgPickKw", "input", () => {
    chPickState.kw = document.getElementById("chgPickKw").value.trim();
    chPickState.page = 1;
    renderChPickTable();
  });
  listen("chgPickTbody", "change", (e) => {
    const radio = e.target.closest("input[type=radio]");
    if (radio) chPickState.selected = radio.value;
  });
  listen("chgPickTbody", "click", (e) => {
    const tr = e.target.closest("tr");
    if (!tr) return;
    const radio = tr.querySelector("input[type=radio]");
    if (!radio) return;
    radio.checked = true;
    chPickState.selected = radio.value;
  });
  listen("chgPickOk", "click", () => {
    const row = CH_PICK.find((r) => r.code === chPickState.selected);
    if (!row) {
      toast("请选择 AR 需求");
      return;
    }
    setChApplyPicked(row);
    pickDlg && pickDlg.close();
  });
  listen("chgPickPager", "click", (e) => {
    const btn = e.target.closest("[data-cpick]");
    if (!btn || btn.disabled) return;
    const pages = Math.max(1, Math.ceil(filteredChPick().length / chPickState.pageSize));
    const v = btn.dataset.cpick;
    if (v === "prev") chPickState.page = Math.max(1, chPickState.page - 1);
    else if (v === "next") chPickState.page = Math.min(pages, chPickState.page + 1);
    else if (Number(v)) chPickState.page = Number(v);
    renderChPickTable();
  });
  listen("chgPickPager", "change", (e) => {
    if (e.target.id === "chgPickPagerSize") {
      chPickState.pageSize = Number(e.target.value);
      chPickState.page = 1;
      renderChPickTable();
    }
  });
  listen("chgApprPass", "click", () => {
    openConfirm({ title: "确定要通过吗？", desc: "通过后变更生效，此操作不可撤回。", onOk: () => { if (apprDlg) apprDlg.close(); toast("审批已通过"); } });
  });
  listen("chgApprReject", "click", () => {
    openConfirm({ title: "确定要驳回吗？", desc: "驳回后需重新提交申请，此操作不可撤回。", onOk: () => { if (apprDlg) apprDlg.close(); toast("审批已驳回"); } });
  });
  listen("chSearch", "click", () => {
    chState.kw = document.getElementById("chKw").value.trim();
    chState.page = 1;
    renderChTable();
  });
  listen("chReset", "click", () => {
    chState.kw = chState.st = "";
    chState.page = 1;
    document.getElementById("chKw").value = "";
    document.getElementById("chStLabel").textContent = "请选择";
    document.getElementById("chSt").classList.remove("has-val");
    setCalDisplay(document.getElementById("chStart"), "");
    setCalDisplay(document.getElementById("chEnd"), "");
    renderChTable();
  });
  listen("chExport", "click", () => toast("已导出当前筛选结果"));
  listen("chTbody", "click", (e) => {
    const btn = e.target.closest("[data-ch]");
    if (!btn) return;
    if (btn.dataset.ch === "审批处理") apprDlg.open();
    else detailDlg.open();
  });
  listen("chPager", "click", (e) => {
    const btn = e.target.closest("[data-ch]");
    if (!btn || btn.disabled) return;
    const pages = Math.max(1, Math.ceil(filteredCh().length / chState.pageSize));
    const v = btn.dataset.ch;
    if (v === "prev") chState.page = Math.max(1, chState.page - 1);
    else if (v === "next") chState.page = Math.min(pages, chState.page + 1);
    else if (Number(v)) chState.page = Number(v);
    renderChTable();
  });
  listen("chPager", "change", (e) => {
    if (e.target.id === "chPagerSize") {
      chState.pageSize = Number(e.target.value);
      chState.page = 1;
      renderChTable();
    }
  });

  renderRlTabs();
  renderRlTable();
  renderAsTable();
  renderDvTable();
  renderRbTable();
  renderChTable();
  renderBhTabs();
  renderBhTable();
}

function bindAnalysis() {
  bindSelect("anUrg", "anUrgLabel", (v) => { anState.urg = v; }, "紧急程度");
  bindSelect("anCat", "anCatLabel", (v) => { anState.cat = v; }, "需求类别");
  document.getElementById("anSearch").addEventListener("click", () => {
    anState.kw = document.getElementById("anKw").value.trim();
    anState.owner = document.getElementById("anOwner").value.trim();
    anState.time = document.getElementById("anTime").dataset.value || "";
    anState.page = 1;
    renderAnTable();
  });
  document.getElementById("anReset").addEventListener("click", () => {
    anState.kw = anState.urg = anState.cat = anState.owner = anState.time = "";
    anState.page = 1;
    document.getElementById("anKw").value = "";
    document.getElementById("anOwner").value = "";
    setCalDisplay(document.getElementById("anTime"), "");
    document.getElementById("anUrgLabel").textContent = "紧急程度";
    document.getElementById("anCatLabel").textContent = "需求类别";
    document.getElementById("anUrg").classList.remove("has-val");
    document.getElementById("anCat").classList.remove("has-val");
    renderAnTable();
  });
  document.getElementById("anExport").addEventListener("click", () => toast("已导出当前筛选结果"));
  document.getElementById("anTbody").addEventListener("click", (e) => {
    if (e.target.closest("[data-an], .link, .an-code")) {
      e.preventDefault();
      location.hash = "/req/analysis/detail";
    }
  });
  document.getElementById("anPager").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-ap]");
    if (!btn || btn.disabled) return;
    const pages = Math.max(1, Math.ceil(filteredAn().length / anState.pageSize));
    const v = btn.dataset.ap;
    if (v === "prev") anState.page = Math.max(1, anState.page - 1);
    else if (v === "next") anState.page = Math.min(pages, anState.page + 1);
    else anState.page = Number(v);
    renderAnTable();
  });
  document.getElementById("anPager").addEventListener("change", (e) => {
    if (e.target.id === "anPageSize") {
      anState.pageSize = Number(e.target.value);
      anState.page = 1;
      renderAnTable();
    }
  });
  renderAnTable();
}

function openTraceModal() {
  document.getElementById("traceDlg").classList.remove("hidden");
}

function closeTraceModal() {
  document.getElementById("traceDlg").classList.add("hidden");
}

function bindTraceDlg() {
  const close = () => closeTraceModal();
  document.getElementById("traceClose").addEventListener("click", close);
  document.getElementById("traceOk").addEventListener("click", close);
  document.getElementById("traceMask").addEventListener("click", close);
}

function bindAnDetail() {
  document.getElementById("anBack").addEventListener("click", () => {
    location.hash = "/req/analysis";
  });
  document.getElementById("anReject").addEventListener("click", () => {
    openConfirm({
      title: "确定要驳回吗？",
      desc: "驳回后需补充材料重新提交，此操作不可撤回。",
      onOk: () => toast("分析已驳回"),
    });
  });
  document.getElementById("anPass").addEventListener("click", () => {
    openConfirm({
      title: "确定要通过吗？",
      desc: "通过后需求将进入下一环节，此操作不可撤回。",
      onOk: () => toast("分析已通过"),
    });
  });
  document.getElementById("adTabs").addEventListener("click", (e) => {
    const tab = e.target.closest(".ad-tab");
    if (!tab) return;
    document.querySelectorAll("#adTabs .ad-tab").forEach((t) => t.classList.toggle("is-on", t === tab));
    document.getElementById("adPaneDesc").classList.toggle("hidden", tab.dataset.pane !== "desc");
    document.getElementById("adPaneIr").classList.toggle("hidden", tab.dataset.pane !== "ir");
  });
  document.getElementById("adTrace").addEventListener("click", openTraceModal);
  bindTraceDlg();
  const steps = document.querySelector("#pageAnDetail .ad-steps");
  if (steps) {
    steps.addEventListener("click", (e) => {
      const wrap = e.target.closest(".step-people");
      if (!wrap) return;
      e.stopPropagation();
      const open = wrap.classList.contains("is-open");
      steps.querySelectorAll(".step-people.is-open").forEach((el) => el.classList.remove("is-open"));
      wrap.classList.toggle("is-open", !open);
    });
    document.addEventListener("click", () => {
      steps.querySelectorAll(".step-people.is-open").forEach((el) => el.classList.remove("is-open"));
    });
  }
  document.getElementById("adLogMore").addEventListener("click", () => {
    const extra = document.querySelectorAll(".ad-log-more");
    const btn = document.getElementById("adLogMore");
    const open = btn.classList.toggle("is-open");
    extra.forEach((el) => el.classList.toggle("hidden", !open));
    btn.innerHTML = (open ? "收起日志" : "展开日志") +
      '<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-linecap="round"/></svg>';
  });
}

const BP_SEED = [
  { year: "2033", seg: "面向公众客户", type: "商业计划书编制", name: "CS824", due: "2026-08-27", company: "咪咕公司", desc: "测试:123", status: "处理中" },
  { year: "2020", seg: "面向公众客户", type: "商业计划书编制", name: "824GF", due: "2026-08-27", company: "咪咕公司", desc: "专项编制", status: "处理中" },
  { year: "2031", seg: "面向政企客户", type: "商业计划书编制", name: "HLB测试0823-2", due: "2026-08-26", company: "互联网公司", desc: "HLB验证", status: "处理中" },
  { year: "2026", seg: "面向公众客户", type: "商业计划书修订", name: "MIGU-BP-0824", due: "2026-09-12", company: "咪咕公司", desc: "年度修订", status: "处理中" },
  { year: "2028", seg: "面向政企客户", type: "商业计划书编制", name: "CMCC-QY-01", due: "2026-08-30", company: "政企事业部", desc: "-", status: "处理中" },
  { year: "2026", seg: "面向公众客户", type: "商业计划书编制", name: "INTL-0822", due: "2026-08-29", company: "国际公司", desc: "国际市场", status: "处理中" },
  { year: "2033", seg: "面向公众客户", type: "商业计划书编制", name: "READ-PLAN-01", due: "2026-08-28", company: "咪咕公司", desc: "阅读增长", status: "处理中" },
  { year: "2020", seg: "面向政企客户", type: "商业计划书修订", name: "VIDEO-0821", due: "2026-09-03", company: "互联网公司", desc: "-", status: "处理中" },
];
const BP_ROWS = [
  ...Array.from({ length: 85 }, (_, i) => {
    const s = BP_SEED[i % BP_SEED.length];
    if (i === 0) return s;
    return { ...s, name: i < BP_SEED.length ? s.name : `${s.name}-${i + 1}`, due: `2026-08-${String((i % 20) + 8).padStart(2, "0")}` };
  }),
  ...Array.from({ length: 79 }, (_, i) => {
    const s = BP_SEED[i % BP_SEED.length];
    return { ...s, name: `DONE-${s.name}-${i + 1}`, status: "已完成", due: "2026-07-15" };
  }),
  ...Array.from({ length: 3 }, (_, i) => {
    const s = BP_SEED[i % BP_SEED.length];
    return { ...s, name: `DRAFT-${s.name}-${i + 1}`, status: "草稿", due: "2026-09-20" };
  }),
];
const bpState = { kw: "", type: "", year: "", st: "处理中", page: 1, pageSize: 10 };

function filteredBp() {
  return BP_ROWS.filter((r) => {
    if (r.status !== bpState.st) return false;
    if (bpState.kw && !r.name.includes(bpState.kw)) return false;
    if (bpState.type && r.type !== bpState.type) return false;
    if (bpState.year && r.year !== bpState.year) return false;
    return true;
  });
}

function renderBpPager(el, page, pages, total, pageSize) {
  const btns = [];
  btns.push(`<span class="total">共 ${total} 条</span>`);
  btns.push(`<button class="pager-btn" data-bp="${page === 1 ? "" : "prev"}" ${page === 1 ? "disabled" : ""}>‹</button>`);
  for (let i = 1; i <= pages; i++) {
    if (pages > 7 && i > 3 && i < pages - 1 && Math.abs(i - page) > 1) {
      if (btns[btns.length - 1] !== "…") btns.push("…");
      continue;
    }
    btns.push(`<button class="pager-btn ${i === page ? "is-on" : ""}" data-bp="${i}">${i}</button>`);
  }
  btns.push(`<button class="pager-btn" data-bp="${page === pages ? "" : "next"}" ${page === pages ? "disabled" : ""}>›</button>`);
  btns.push(`<select id="bpPageSize"><option ${pageSize === 10 ? "selected" : ""}>10</option><option ${pageSize === 20 ? "selected" : ""}>20</option></select><span>条/页</span>`);
  el.innerHTML = btns.join("");
}

function renderBpTable() {
  const list = filteredBp();
  const pages = Math.max(1, Math.ceil(list.length / bpState.pageSize));
  if (bpState.page > pages) bpState.page = pages;
  const start = (bpState.page - 1) * bpState.pageSize;
  const slice = list.slice(start, start + bpState.pageSize);
  const body = document.getElementById("bpTbody");
  if (!list.length) {
    body.innerHTML = `<tr class="table-empty"><td colspan="9"><div class="empty"><p>暂无任务</p></div></td></tr>`;
  } else {
    body.innerHTML = slice
      .map(
        (r) => `<tr>
        <td>${r.year}</td>
        <td>${r.seg}</td>
        <td>${r.type}</td>
        <td>${r.name}</td>
        <td>${r.due}</td>
        <td>${r.company}</td>
        <td>${r.desc}</td>
        <td>${stTag(r.status, r.status === "已完成" ? "t-ok" : r.status === "草稿" ? "t-mute" : "t-ing")}</td>
        <td><a class="link" href="#/product/bp-publish/detail">详情</a></td>
      </tr>`
      )
      .join("");
  }
  renderBpPager(document.getElementById("bpPager"), bpState.page, pages, list.length, bpState.pageSize);
  document.querySelectorAll("#bpStabs .subtab").forEach((el) => {
    el.classList.toggle("is-on", el.dataset.st === bpState.st);
  });
}

const taskState = {
  type: "商业计划书编制任务",
  seg: "",
  tpl: false,
  files: [],
};

function renderTaskCompanies() {
  document.getElementById("taskCoGrid").innerHTML = UPLOAD_PRODUCTS.map(
    (p) => `<label><input type="checkbox" class="task-co" value="${p.name}">${p.name}</label>`
  ).join("");
  document.getElementById("taskCoGrid").querySelectorAll(".task-co").forEach((c) => {
    c.addEventListener("change", renderTaskKids);
  });
  renderTaskKids();
}

function selectedTaskCompanies() {
  return [...document.querySelectorAll("#taskCoGrid .task-co:checked")].map((c) => c.value);
}

function renderTaskKids() {
  const box = document.getElementById("taskCoKids");
  const picked = UPLOAD_PRODUCTS.filter(
    (p) => p.children && p.children.length && selectedTaskCompanies().includes(p.name)
  );
  if (!picked.length) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }
  box.hidden = false;
  box.innerHTML = picked
    .map(
      (p) => `<div class="dlg-prod-kids-block" data-prod="${p.name}">
      <div class="dlg-prod-kids-hd">
        <span>${p.name}</span>
        <div class="dlg-prod-kids-ops">
          <button type="button" data-kids="all">全选</button>
          <button type="button" data-kids="none">清空</button>
        </div>
      </div>
      <div class="dlg-prod-kids-list">
        ${p.children.map((c) => `<label><input type="checkbox" class="task-kid">${c}</label>`).join("")}
      </div>
    </div>`
    )
    .join("");
  box.querySelectorAll("[data-kids]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const on = btn.dataset.kids === "all";
      btn.closest(".dlg-prod-kids-block").querySelectorAll(".task-kid").forEach((c) => {
        c.checked = on;
      });
    });
  });
}

function renderTaskFiles() {
  const list = document.getElementById("taskFileList");
  list.hidden = taskState.files.length === 0;
  list.innerHTML = taskState.files
    .map(
      (f, i) => `<div class="dlg-file">
      <span class="dlg-file-ico" aria-hidden="true">
        <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
          <path d="M7 2.5h12.2L29.5 13V31a3 3 0 01-3 3H7a3 3 0 01-3-3V5.5a3 3 0 013-3z" stroke="currentColor" stroke-width="1.4"/>
          <path d="M19 2.8V13h10.2" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
        </svg>
        <b>${fileExtLabel(f.name)}</b>
      </span>
      <div class="dlg-file-info">
        <strong>${f.name}</strong>
        <span>文件大小：${formatFileSize(f.size)}</span>
      </div>
      <button type="button" class="dlg-file-del" data-del="${i}" aria-label="删除">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 4h10M6.2 4V2.8h3.6V4M5.2 4l.6 9.2h4.4L10.8 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>`
    )
    .join("");
}

function addTaskFiles(fileList) {
  [...fileList].forEach((file) => {
    if (taskState.files.length >= 10) {
      toast("最多上传 10 个附件");
      return;
    }
    if (file.size > 104857600) {
      toast("单个文件不超过 100MB");
      return;
    }
    taskState.files.push(file);
  });
  renderTaskFiles();
}

function resetTaskForm() {
  taskState.type = "商业计划书编制任务";
  taskState.seg = "";
  taskState.tpl = false;
  taskState.files = [];
  document.getElementById("taskName").value = "";
  document.getElementById("taskTypeLabel").textContent = taskState.type;
  document.getElementById("taskType").classList.add("has-val");
  document.getElementById("taskSegLabel").textContent = "请选择客群类别";
  document.getElementById("taskSeg").classList.remove("has-val");
  setCalDisplay(document.getElementById("taskYear"), "");
  setCalDisplay(document.getElementById("taskDue"), "");
  document.getElementById("taskDesc").value = "";
  renderTaskCompanies();
  document.getElementById("taskTpl").classList.remove("is-on");
  document.getElementById("taskTplTxt").textContent = "未选择关联模板，请点击右侧按钮";
  document.getElementById("taskFile").value = "";
  renderTaskFiles();
}

function openTaskModal() {
  resetTaskForm();
  document.getElementById("taskDlg").classList.remove("hidden");
}

function closeTaskModal() {
  closeCal();
  document.getElementById("taskDlg").classList.add("hidden");
}

function validateTask() {
  if (!document.getElementById("taskName").value.trim()) return "请输入任务名称";
  if (!taskState.type) return "请选择任务类型";
  if (!document.getElementById("taskYear").dataset.value) return "请选择规划年度";
  if (!taskState.seg) return "请选择客群类别";
  if (!document.getElementById("taskDue").dataset.value) return "请选择上报截止时间";
  if (!selectedTaskCompanies().length) return "请选择归属公司";
  if (!taskState.tpl) return "请选择关联模板";
  return "";
}

function bindTaskDlg() {
  const close = () => closeTaskModal();
  document.getElementById("taskClose").addEventListener("click", close);
  document.getElementById("taskCancel").addEventListener("click", close);
  document.getElementById("taskMask").addEventListener("click", close);
  bindSelect("taskType", "taskTypeLabel", (v) => { taskState.type = v; }, "任务类型");
  bindSelect("taskSeg", "taskSegLabel", (v) => { taskState.seg = v; }, "请选择客群类别");
  document.getElementById("taskTplBtn").addEventListener("click", () => {
    taskState.tpl = true;
    document.getElementById("taskTpl").classList.add("is-on");
    document.getElementById("taskTplTxt").textContent = "已选择关联模板";
  });
  const drop = document.getElementById("taskDrop");
  const fileInput = document.getElementById("taskFile");
  drop.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", (e) => {
    addTaskFiles(e.target.files);
    e.target.value = "";
  });
  ["dragenter", "dragover"].forEach((ev) => {
    drop.addEventListener(ev, (e) => {
      e.preventDefault();
      drop.classList.add("is-over");
    });
  });
  ["dragleave", "drop"].forEach((ev) => {
    drop.addEventListener(ev, (e) => {
      e.preventDefault();
      drop.classList.remove("is-over");
    });
  });
  drop.addEventListener("drop", (e) => {
    if (e.dataTransfer.files.length) addTaskFiles(e.dataTransfer.files);
  });
  document.getElementById("taskFileList").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-del]");
    if (!btn) return;
    taskState.files.splice(Number(btn.dataset.del), 1);
    renderTaskFiles();
  });
  document.getElementById("taskDraft").addEventListener("click", () => {
    closeTaskModal();
    toast("草稿已保存");
  });
  document.getElementById("taskOk").addEventListener("click", () => {
    const err = validateTask();
    if (err) {
      toast(err);
      return;
    }
    openConfirm({
      title: "确定要发布吗？",
      desc: "发布后任务将下发至对应专业公司，请确认信息无误。",
      onOk: () => {
        closeTaskModal();
        toast("发布成功");
      },
    });
  });
}

function bindBp() {
  bindSelect("bpType", "bpTypeLabel", (v) => { bpState.type = v; }, "请选择");
  bindSelect("bpYear", "bpYearLabel", (v) => { bpState.year = v; }, "请选择");
  document.getElementById("bpSearch").addEventListener("click", () => {
    bpState.kw = document.getElementById("bpKw").value.trim();
    bpState.page = 1;
    renderBpTable();
  });
  document.getElementById("bpAdd").addEventListener("click", openTaskModal);
  document.getElementById("bpReset").addEventListener("click", () => {
    bpState.kw = bpState.type = bpState.year = "";
    bpState.page = 1;
    document.getElementById("bpKw").value = "";
    document.getElementById("bpTypeLabel").textContent = "请选择";
    document.getElementById("bpYearLabel").textContent = "请选择";
    document.getElementById("bpType").classList.remove("has-val");
    document.getElementById("bpYear").classList.remove("has-val");
    renderBpTable();
  });
  document.getElementById("bpStabs").addEventListener("click", (e) => {
    const tab = e.target.closest(".subtab");
    if (!tab) return;
    bpState.st = tab.dataset.st;
    bpState.page = 1;
    renderBpTable();
  });
  document.getElementById("bpPager").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-bp]");
    if (!btn || btn.disabled || !btn.dataset.bp) return;
    const pages = Math.max(1, Math.ceil(filteredBp().length / bpState.pageSize));
    const v = btn.dataset.bp;
    if (v === "prev") bpState.page = Math.max(1, bpState.page - 1);
    else if (v === "next") bpState.page = Math.min(pages, bpState.page + 1);
    else bpState.page = Number(v);
    renderBpTable();
  });
  document.getElementById("bpPager").addEventListener("change", (e) => {
    if (e.target.id === "bpPageSize") {
      bpState.pageSize = Number(e.target.value);
      bpState.page = 1;
      renderBpTable();
    }
  });
  document.getElementById("bpTaskBack").addEventListener("click", () => {
    location.hash = "/product/bp-publish";
  });
  document.getElementById("bpPlanBack").addEventListener("click", () => {
    goPath("#/product/bp-handle");
  });
  const bpRev = bindDlg("bpRevDlg", ["bpRevMask", "bpRevClose"]);
  const bpHist = bindDlg("bpHistDlg", ["bpHistMask", "bpHistClose"]);
  const bpAppr = bindDlg("bpApprDlg", ["bpApprMask", "bpApprClose"]);
  const bpPreview = bindDlg("bpPreviewDlg", ["bpPreviewMask", "bpPreviewClose", "bpPreviewOk"]);
  listen("bpDlTpl", "click", () => toast("已开始下载模板"));
  listen("bpExportPlan", "click", () => toast("已导出商业计划书"));
  listen("bpRevOpen", "click", () => bpRev && bpRev.open());
  listen("bpHistOpen", "click", () => bpHist && bpHist.open());
  listen("bpApprOpen", "click", () => bpAppr && bpAppr.open());
  listen("bpPreviewOpen", "click", () => bpPreview && bpPreview.open());
  listen("bpPreviewExport", "click", () => toast("已导出商业计划书"));
  listen("pdBack", "click", () => goPath("#/product/spectrum"));
  listen("pdTabs", "click", (e) => {
    const btn = e.target.closest("[data-pdtab]");
    if (!btn) return;
    pdState.tab = btn.dataset.pdtab;
    renderProductDetail();
  });
  listen("pdOpsBtn", "click", (e) => {
    e.stopPropagation();
    const wrap = document.getElementById("pdOps");
    if (wrap) wrap.classList.toggle("is-on");
  });
  listen("pdOps", "click", (e) => {
    const btn = e.target.closest("[data-pd-act]");
    if (!btn) return;
    document.getElementById("pdOps")?.classList.remove("is-on");
    if (btn.dataset.pdAct === "export") toast("已导出产品信息");
    if (btn.dataset.pdAct === "refresh") {
      renderProductDetail();
      toast("已刷新");
    }
  });
  listen("pdPaneBp", "click", (e) => {
    const a = e.target.closest("[data-pd-preview], [data-pd-bp]");
    if (!a) return;
    e.preventDefault();
    goPath("#/product/spectrum/bp");
  });
  listen("pdBpBack", "click", () => goPath("#/product/spectrum/detail"));
  listen("pdBpDlTpl", "click", () => toast("已开始下载模板"));
  listen("pdBpExport", "click", () => toast("已导出商业计划书"));
  listen("pdBpRevOpen", "click", () => bpRev && bpRev.open());
  listen("pdBpHistOpen", "click", () => bpHist && bpHist.open());
  listen("pdBpApprOpen", "click", () => bpAppr && bpAppr.open());
  listen("pdBpPreviewOpen", "click", () => bpPreview && bpPreview.open());
  const bpReport = bindDlg("bpReportDlg", ["bpReportMask", "bpReportClose", "bpReportOk"]);
  listen("bpReportDl", "click", () => toast("已开始下载 PDF 报告"));
  listen("bpOvBack", "click", () => goPath("#/product/bp-overview"));
  listen("bpOvDlTpl", "click", () => toast("已开始下载模板"));
  listen("bpOvRevOpen", "click", () => bpRev && bpRev.open());
  listen("bpOvHistOpen", "click", () => bpHist && bpHist.open());
  listen("bpOvAssign", "click", () => toast("请选择分派对象"));
  listen("bpEditBack", "click", () => goPath("#/product/bp-handle"));
  listen("bpEditDlTpl", "click", () => toast("已开始下载模板"));
  listen("bpEditRevOpen", "click", () => bpRev && bpRev.open());
  listen("bpEditHistOpen", "click", () => bpHist && bpHist.open());
  listen("bpEditAssignCh", "click", () => toast("请选择章节处理人"));
  listen("bpEditIncReq", "click", () => toast("请选择纳入的规划需求"));
  listen("bpEditUpload", "click", () => toast("请上传商业计划书文件"));
  listen("bpEditAddCh", "click", () => toast("已添加自定义章节"));
  listen("bpEditAttach", "click", () => toast("暂无附件"));
  listen("bpEditPreview", "click", () => bpPreview && bpPreview.open());
  listen("bpEditSave", "click", () => toast("当前章节已保存"));
  listen("bpEditSubmit", "click", () => {
    openConfirm({
      title: "确定提交商业计划书？",
      desc: "提交后将进入下一审批环节，此操作不可撤回。",
      onOk: () => toast("商业计划书已提交"),
    });
  });
  listen("bpEditNav", "click", (e) => {
    const btn = e.target.closest("[data-ch]");
    if (!btn) return;
    document.querySelectorAll("#bpEditNav [data-ch]").forEach((el) => el.classList.toggle("is-on", el === btn));
    const title = document.getElementById("bpEditTitle");
    if (title) title.value = btn.querySelector("span") ? btn.querySelector("span").textContent : btn.textContent.trim();
  });
  listen("spLegend", "click", (e) => {
    const btn = e.target.closest("[data-sptag]");
    if (!btn) return;
    const tag = btn.dataset.sptag;
    const on = spState.pris.includes(tag);
    spState.pris = on ? spState.pris.filter((t) => t !== tag) : [...spState.pris, tag];
    btn.classList.toggle("is-on", !on);
    btn.setAttribute("aria-pressed", String(!on));
    renderSpectrumPage();
  });
  listen("spTree", "click", (e) => {
    const nav = e.target.closest(".sp-l2-nav-item");
    if (nav) {
      const l1 = nav.dataset.spl1;
      const l2 = nav.dataset.spl2;
      if (!l1 || !l2) return;
      spState.l2Sel[l1] = l2;
      const block = nav.closest(".sp-block");
      if (!block) return;
      block.querySelectorAll(".sp-l2-nav-item").forEach((el) => {
        const on = el.dataset.spl2 === l2;
        el.classList.toggle("is-on", on);
        el.setAttribute("aria-selected", String(on));
      });
      block.querySelectorAll(".sp-l2-panel").forEach((el) => {
        el.classList.toggle("is-on", el.dataset.spl2 === l2);
      });
      closeSpKidsPop();
      return;
    }
    const kidsBtn = e.target.closest(".sp-kids");
    if (kidsBtn) {
      e.preventDefault();
      e.stopPropagation();
      const open = kidsBtn.getAttribute("aria-expanded") === "true";
      closeSpKidsPop();
      if (!open) openSpKidsPop(kidsBtn);
      return;
    }
    if (e.target.closest(".sp-card")) {
      closeSpKidsPop();
      const card = e.target.closest(".sp-card");
      openProductDetail({
        name: card.dataset.spName || "产品",
        org: card.dataset.spOrg || "",
        tags: (card.dataset.spTags || "").split(",").filter(Boolean),
        path: card.dataset.spPath || "",
      });
    }
  });
  listen("spTree", "keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const kidsBtn = e.target.closest(".sp-kids");
    if (kidsBtn) {
      e.preventDefault();
      e.stopPropagation();
      const open = kidsBtn.getAttribute("aria-expanded") === "true";
      closeSpKidsPop();
      if (!open) openSpKidsPop(kidsBtn);
      return;
    }
    const card = e.target.closest(".sp-card");
    if (card && !e.target.closest(".sp-kids")) {
      e.preventDefault();
      closeSpKidsPop();
      openProductDetail({
        name: card.dataset.spName || "产品",
        org: card.dataset.spOrg || "",
        tags: (card.dataset.spTags || "").split(",").filter(Boolean),
        path: card.dataset.spPath || "",
      });
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest(".sp-kids") || e.target.closest("#spKidsPop")) return;
    closeSpKidsPop();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSpKidsPop();
  });
  window.addEventListener("resize", closeSpKidsPop);
  window.addEventListener("scroll", closeSpKidsPop, true);
  listen("spKw", "input", () => {
    spState.kw = document.getElementById("spKw").value.trim();
    const gkw = document.getElementById("spGraphKw");
    if (gkw && gkw.value !== spState.kw) gkw.value = spState.kw;
    renderSpectrumPage();
  });
  listen("spExport", "click", () => toast("导出任务已创建"));
  listen("spViewSeg", "click", (e) => {
    const btn = e.target.closest("[data-spview]");
    if (!btn) return;
    setSpectrumView(btn.dataset.spview);
  });
  listen("spGraphSide", "click", (e) => {
    const btn = e.target.closest("[data-spid]");
    if (!btn) return;
    focusSpGraphNode(btn.dataset.spid);
  });
  listen("spGraphKw", "input", () => {
    const v = document.getElementById("spGraphKw").value.trim();
    spState.kw = v;
    const main = document.getElementById("spKw");
    if (main && main.value !== v) main.value = v;
    renderSpectrumPage();
  });
  listen("spGraphLegend", "click", (e) => {
    const btn = e.target.closest("[data-spdepth]");
    if (!btn) return;
    const d = Math.max(1, Number(btn.dataset.spdepth) || 2);
    setSpDepth(d, d >= 4 ? "已展开四级 · 保持 100%，可拖拽查看外圈" : d >= 3 ? "已展开三级 · 保持 100%，可拖拽查看外圈" : "已切换至中心 / 一 / 二级 · 100%");
  });
  listen("spGraphExpand", "click", () => {
    setSpDepth(4, "已展开四级 · 保持 100%，节点向外扩散，可拖拽画布");
  });
  listen("spGraphCollapse", "click", () => {
    spState.focusId = "";
    setSpDepth(2, "已收起至中心 / 一 / 二级 · 100%");
  });
  listen("spGraphFit", "click", () => {
    spState.zoom = 1;
    if (spChart) {
      try { spChart.dispatchAction({ type: "restore" }); } catch (e) {}
    }
    renderSpectrumGraph(true);
    toast("已复位至 100%");
  });
  listen("spZoomIn", "click", () => setSpZoom(spState.zoom + 0.15));
  listen("spZoomOut", "click", () => setSpZoom(spState.zoom - 0.15));
  listen("spZoomReset", "click", () => {
    spState.zoom = 1;
    if (spChart) {
      try { spChart.dispatchAction({ type: "restore" }); } catch (e) {}
    }
    renderSpectrumGraph(true);
  });
  listen("spZoomRange", "input", () => {
    const el = document.getElementById("spZoomRange");
    if (!el) return;
    setSpZoom(Number(el.value) / 100);
  });
  listen("boRefresh", "click", () => {
    renderBoTable();
    renderBoCharts();
    toast("已刷新");
  });
  listen("boKw", "input", () => {
    boState.kw = document.getElementById("boKw").value.trim();
    boState.page = 1;
    renderBoTable();
  });
  document.querySelectorAll(".bo-tab").forEach((el) => {
    el.addEventListener("click", () => {
      boState.tab = el.dataset.botab;
      boState.page = 1;
      renderBoTable();
    });
  });
  const boUnitPick = document.getElementById("boUnitPick");
  if (boUnitPick) {
    boUnitPick.addEventListener("click", (e) => {
      e.stopPropagation();
      const unpick = e.target.closest("[data-unpick]");
      if (unpick) {
        toggleBoUnit(unpick.dataset.unpick);
        return;
      }
      if (e.target.closest("#boUnitClear")) {
        if (boState.units.length <= 1) {
          toast("至少选择 1 个单位");
          return;
        }
        boState.units = [boState.units[0]];
        boState.unit = boState.units[0];
        renderBoUnitViz();
        return;
      }
      if (e.target.closest(".select-pop")) return;
      boUnitPick.classList.toggle("is-on");
    });
  }
  listen("boUnitPop", "click", (e) => {
    e.stopPropagation();
    const opt = e.target.closest("[data-uid]");
    if (!opt) return;
    toggleBoUnit(opt.dataset.uid);
  });
  listen("boUnitTabs", "click", (e) => {
    const btn = e.target.closest("[data-uid]");
    if (!btn) return;
    boState.unit = btn.dataset.uid;
    renderBoUnitViz();
  });
  listen("boTbody", "click", (e) => {
    const btn = e.target.closest("[data-bpreport]");
    if (!btn) return;
    bpReport && bpReport.open();
  });
  listen("boPager", "click", (e) => {
    const btn = e.target.closest("[data-bo]");
    if (!btn || btn.disabled) return;
    const pages = Math.max(1, Math.ceil(filteredBo().length / boState.pageSize));
    const v = btn.dataset.bo;
    if (v === "prev") boState.page = Math.max(1, boState.page - 1);
    else if (v === "next") boState.page = Math.min(pages, boState.page + 1);
    else if (Number(v)) boState.page = Number(v);
    renderBoTable();
  });
  listen("boPager", "change", (e) => {
    if (e.target.id === "boPagerSize") {
      boState.pageSize = Number(e.target.value);
      boState.page = 1;
      renderBoTable();
    }
  });
  document.getElementById("planNav").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-sec]");
    if (!btn) return;
    const sec = btn.dataset.sec;
    document.querySelectorAll("#planNav [data-sec]").forEach((el) => el.classList.toggle("is-on", el === btn));
    document.querySelectorAll("#pageBpPlan .plan-sec").forEach((el) => el.classList.toggle("hidden", el.dataset.sec !== sec));
  });
  bindStepScrolls();
  bindTaskDlg();
  renderBpTable();
  renderBhTabs();
  renderBhTable();
  renderSpectrumPage();
  renderBoTable();
  renderBoCharts();
}

function revealActiveSteps() {
  document.querySelectorAll(".step-scroll-view").forEach((view) => {
    if (!view.clientWidth) return;
    const on = view.querySelector(".bp-steps > li.is-on");
    if (!on) return;
    const vr = view.getBoundingClientRect();
    const or = on.getBoundingClientRect();
    const next = view.scrollLeft + (or.left - vr.left) - 8;
    const max = Math.max(0, view.scrollWidth - view.clientWidth);
    view.scrollLeft = Math.max(0, Math.min(next, max));
  });
}

function syncStepArrowButtons(root) {
  const view = root.querySelector(".step-scroll-view");
  const prev = root.querySelector('[data-dir="-1"]');
  const next = root.querySelector('[data-dir="1"]');
  if (!view || !prev || !next) return;
  if (!root.classList.contains("is-overflow")) {
    prev.disabled = true;
    next.disabled = true;
    return;
  }
  const max = view.scrollWidth - view.clientWidth;
  prev.disabled = view.scrollLeft <= 2;
  next.disabled = view.scrollLeft >= max - 2 || max <= 0;
}

function syncStepOverflow() {
  document.querySelectorAll(".step-scroll").forEach((root) => {
    const view = root.querySelector(".step-scroll-view");
    if (!view || !view.clientWidth) return;
    root.classList.remove("is-overflow");
    view.scrollLeft = 0;
    void view.offsetWidth;
    const overflow = view.scrollWidth > view.clientWidth + 1;
    root.classList.toggle("is-overflow", overflow);
    if (!overflow) view.scrollLeft = 0;
    syncStepArrowButtons(root);
  });
}

function layoutStepScrolls() {
  syncStepOverflow();
  revealActiveSteps();
  document.querySelectorAll(".step-scroll").forEach(syncStepArrowButtons);
}

function syncStepScrolls() {
  layoutStepScrolls();
}

function bindStepScrolls() {
  document.querySelectorAll(".step-scroll").forEach((root) => {
    const view = root.querySelector(".step-scroll-view");
    const prev = root.querySelector('[data-dir="-1"]');
    const next = root.querySelector('[data-dir="1"]');
    if (!view || !prev || !next) return;
    const stepW = () => {
      const item = view.querySelector(".bp-steps li");
      return item ? item.offsetWidth * 2 : 400;
    };
    prev.addEventListener("click", () => {
      view.scrollBy({ left: -stepW(), behavior: "smooth" });
    });
    next.addEventListener("click", () => {
      view.scrollBy({ left: stepW(), behavior: "smooth" });
    });
    view.addEventListener("scroll", () => syncStepArrowButtons(root), { passive: true });
  });
  window.addEventListener("resize", layoutStepScrolls);
  layoutStepScrolls();
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  bindMega();
  bindHeaderExtras();
  bindTabs();
  bindOverview();
  bindReqFlow();
  bindCalendars();
  bindConfirmDlg();
  if (!isStandalone()) {
    bindInsight();
    bindTodo();
    bindAnalysis();
    bindAnDetail();
    bindBp();
  } else {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#/"]');
      if (!a) return;
      e.preventDefault();
      goPath(a.getAttribute("href"));
    });
    bindStepScrolls();
  }
  window.addEventListener("hashchange", navigate);
  const params = new URLSearchParams(location.search);
  if (params.get("portal") === "ops") {
    currentPortal = "ops";
    MENU = MENU_OPS;
    rebuildPageMeta();
    renderNav();
    document.title = portalTitle("ops");
    const logo = document.getElementById("logoHome");
    if (logo) logo.setAttribute("href", homePath());
    const portal = document.getElementById("portalSwitch");
    portal.querySelectorAll("[data-portal]").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.portal === "ops");
    });
    const label = portal.querySelector(".portal-label");
    if (label) label.textContent = "产品运营门户";
    if (!location.hash) history.replaceState(null, "", homePath());
  }
  navigate();
  if (isStandalone()) {
    const dlgId = { chgApply: "chgApplyDlg", chgDetail: "chgDetailDlg", chgAppr: "chgApprDlg" }[document.body.dataset.standalone];
    const dlg = dlgId && document.getElementById(dlgId);
    if (dlg) dlg.classList.remove("hidden");
  }
  const megaKey = params.get("mega");
  if (megaKey) openMega(megaKey);
});
