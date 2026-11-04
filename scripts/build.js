#!/usr/bin/env node
// Regenerates the parts of the site that are derived from experiments/data.js and git:
//   experiments/index.html  the static catalogue (filter pills, cards) and its ItemList JSON-LD
//   llms-full.txt           the "Experiment templates" section
//   sitemap.xml             lastmod dates from git
// Run after editing data.js:  node scripts/build.js
// Generated regions sit between <!-- build:NAME --> and <!-- /build:NAME --> markers.
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://getabme.com';

// ---- data.js -------------------------------------------------------------
const sandbox = {};
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'experiments/data.js'), 'utf8') +
  '\nthis.CATEGORY_ORDER = CATEGORY_ORDER; this.METRIC_NAMES = METRIC_NAMES; this.EXPERIMENTS = EXPERIMENTS;', sandbox);
const { CATEGORY_ORDER, METRIC_NAMES, EXPERIMENTS } = sandbox;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const catClass = c => c.toLowerCase().replace(/\s+/g, '');
const metricName = id => METRIC_NAMES[id] || id.replace('HKQuantityTypeIdentifier', '');
const unitText = t => {
  const days = t.periodDays === 1 ? '1 day' : `${t.periodDays} days`;
  const wash = t.washoutDays ? `${t.washoutDays}-day washout` : 'no washout';
  return `${days} · ${wash}`;
};
// The abme://template/ deep link is the template JSON, base64url-encoded without padding.
// Non-ASCII characters are escaped first so the payload is plain ASCII, matching the app.
function templateURL(t) {
  const json = JSON.stringify(t).replace(/[\u0080-￿]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  return 'abme://template/' + Buffer.from(json, 'latin1').toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function replaceRegion(file, name, body) {
  const p = path.join(ROOT, file);
  const src = fs.readFileSync(p, 'utf8');
  const open = `<!-- build:${name} -->`, close = `<!-- /build:${name} -->`;
  const a = src.indexOf(open), b = src.indexOf(close);
  if (a < 0 || b < 0 || b < a) throw new Error(`${file}: missing build:${name} markers`);
  const indent = src.slice(src.lastIndexOf('\n', a) + 1, a).replace(/\S.*$/, '');
  const out = src.slice(0, a + open.length) + '\n' + body.replace(/\n$/, '') + '\n' + indent + src.slice(b);
  if (out !== src) { fs.writeFileSync(p, out); console.log(`updated ${file} [${name}]`); }
}

// ---- catalogue HTML ------------------------------------------------------
const counts = {};
for (const e of EXPERIMENTS) counts[e.category] = (counts[e.category] || 0) + 1;

let pills = `<button type="button" class="cat-pill active" data-cat="all" aria-pressed="true">All (${EXPERIMENTS.length})</button>\n`;
for (const cat of CATEGORY_ORDER) pills += `<button type="button" class="cat-pill" data-cat="${cat}" aria-pressed="false">${cat} (${counts[cat] || 0})</button>\n`;
replaceRegion('experiments/index.html', 'filters', pills);

let cards = '';
for (const cat of CATEGORY_ORDER) {
  const items = EXPERIMENTS.filter(e => e.category === cat);
  if (!items.length) continue;
  cards += `<h2 class="cat-heading ${catClass(cat)}" id="${catClass(cat)}" data-cat="${cat}">${esc(cat)}</h2>\n`;
  items.forEach((exp, idx) => {
    const t = exp.template;
    const id = `exp-${catClass(cat)}-${idx}`;
    const allMetrics = [t.primaryMetric, ...t.secondaryMetrics];
    const cites = exp.citations.map(c => {
      const doi = c.doi ? ` <a href="https://doi.org/${esc(c.doi)}" target="_blank" rel="noopener">DOI&nbsp;&#8599;</a>` : '';
      return `<div class="cite">${esc(c.short)} &mdash; <em>${esc(c.journal)}</em>${doi}</div>`;
    }).join('');
    const metricRows = allMetrics.map((m, i) =>
      `<div class="metric-row"><span class="metric-name${i === 0 ? ' primary' : ''}">${esc(metricName(m.identifier))}${i === 0 ? ' (primary)' : ''}</span><span class="metric-agg">${esc(m.aggregation.toLowerCase())}</span></div>`).join('');
    cards += `<div class="exp-card" data-cat="${cat}">
  <div class="exp-head">
    <button type="button" class="exp-summary" aria-expanded="false" aria-controls="${id}">
      <span class="exp-toggle" aria-hidden="true">&#9660;</span>
      <span class="exp-name">${esc(t.name)}</span>
      <span class="exp-effect">${esc(exp.effectSummary)}</span>
    </button>
    <a class="exp-load" href="${templateURL(t)}" data-load>Load in ABMe</a>
  </div>
  <div class="exp-detail" id="${id}">
    <div class="exp-hypothesis">${esc(t.hypothesis)}</div>
    <table class="exp-table">
      <tr><td>Treatment</td><td>${esc(t.interventionDescription)}</td></tr>
      <tr><td>Control</td><td>${esc(t.controlDescription)}</td></tr>
      <tr><td>Window</td><td>${esc(t.windowStart)} &rarr; ${esc(t.windowEnd)}</td></tr>
      <tr><td>Unit</td><td>${esc(unitText(t))}</td></tr>
      <tr><td>&alpha;</td><td>${t.alpha}</td></tr>
    </table>
    <div class="metrics-list">${metricRows}</div>
    <div class="citations">${cites}</div>
  </div>
</div>
`;
  });
}
replaceRegion('experiments/index.html', 'catalogue', cards);

// ---- ItemList JSON-LD ----------------------------------------------------
const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ABMe experiment catalogue',
  description: `${EXPERIMENTS.length} randomized N-of-1 experiment templates for sleep, running and recovery, each with a hypothesis, treatment and control definitions, HealthKit outcome metrics, unit length and literature citations.`,
  url: `${SITE}/experiments/`,
  numberOfItems: EXPERIMENTS.length,
  itemListElement: EXPERIMENTS.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'HowTo',
      name: e.template.name,
      description: `${e.template.hypothesis} Treatment: ${e.template.interventionDescription}. Control: ${e.template.controlDescription}. Primary outcome: ${metricName(e.template.primaryMetric.identifier)}.`,
      url: `${SITE}/experiments/#${catClass(e.category)}`,
      about: e.category,
      citation: e.citations.filter(c => c.doi).map(c => `https://doi.org/${c.doi}`),
    },
  })),
};
replaceRegion('experiments/index.html', 'jsonld',
  `<script type="application/ld+json">\n${JSON.stringify(itemList).replace(/<\//g, "<\\/")}\n</script>`);

// ---- llms-full.txt catalogue section -------------------------------------
let md = '';
for (const cat of CATEGORY_ORDER) {
  const items = EXPERIMENTS.filter(e => e.category === cat);
  if (!items.length) continue;
  md += `\n### ${cat} (${items.length} templates)\n`;
  for (const e of items) {
    const t = e.template;
    const all = [t.primaryMetric, ...t.secondaryMetrics];
    md += `\n#### ${t.name}\n\n`;
    md += `- Hypothesis: ${t.hypothesis}\n`;
    md += `- Treatment: ${t.interventionDescription}\n`;
    md += `- Control: ${t.controlDescription}\n`;
    md += `- Measurement window: ${t.windowStart} to ${t.windowEnd}\n`;
    md += `- Unit: ${unitText(t).replace(' · ', ', ')}; randomization probability ${t.propensity}; alpha ${t.alpha}\n`;
    md += `- Outcomes: ${all.map((m, i) => `${metricName(m.identifier)} (${m.aggregation.toLowerCase()}${i === 0 ? ', primary' : ''})`).join('; ')}\n`;
    md += `- Illustrative effect sizes used for the synthetic preview: ${e.effectSummary}\n`;
    md += `- Literature: ${e.citations.map(c => `${c.short}, "${c.title}", ${c.journal}${c.doi ? `, https://doi.org/${c.doi}` : ''}`).join('; ')}\n`;
  }
}
replaceRegion('llms-full.txt', 'catalogue', md);

// ---- sitemap.xml ---------------------------------------------------------
const pages = [
  ['/', 'index.html'],
  ['/how-it-works/', 'how-it-works/index.html'],
  ['/experiments/', 'experiments/index.html', 'experiments/data.js'],
  ['/blog/', 'blog/index.html'],
  ...fs.readdirSync(path.join(ROOT, 'blog')).filter(f => f.endsWith('.html') && f !== 'index.html').sort().map(f => [`/blog/${f}`, `blog/${f}`]),
  ['/privacy.html', 'privacy.html'],
];
const today = new Date().toISOString().slice(0, 10);
function lastmod(files) {
  let best = '';
  for (const f of files) {
    let d;
    try {
      const dirty = execSync(`git status --porcelain -- "${f}"`, { cwd: ROOT }).toString().trim();
      d = dirty ? today : execSync(`git log -1 --format=%cs -- "${f}"`, { cwd: ROOT }).toString().trim() || today;
    } catch (e) { d = today; }
    if (d > best) best = d;
  }
  return best;
}
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const [url, ...files] of pages) xml += `  <url><loc>${SITE}${url}</loc><lastmod>${lastmod(files)}</lastmod></url>\n`;
xml += '</urlset>\n';
const sp = path.join(ROOT, 'sitemap.xml');
if (fs.readFileSync(sp, 'utf8') !== xml) { fs.writeFileSync(sp, xml); console.log('updated sitemap.xml'); }
console.log(`done: ${EXPERIMENTS.length} templates`);
