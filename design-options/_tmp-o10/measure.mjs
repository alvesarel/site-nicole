import { chromium } from 'playwright';
const b = await chromium.launch();
const out = {};
for (const v of ['v0','v1','v2','v3','v4','v5']) {
  const res = [];
  for (let i=0;i<4;i++){
    const ctx = await b.newContext({ viewport:{width:412,height:823}, deviceScaleFactor:1.75, isMobile:true });
    const p = await ctx.newPage();
    const cdp = await ctx.newCDPSession(p);
    await cdp.send('Emulation.setCPUThrottlingRate',{rate:4});
    await p.addInitScript(()=>{window.__m={};new PerformanceObserver(l=>l.getEntries().forEach(e=>{window.__m[e.name]=Math.round(e.startTime)})).observe({type:'paint',buffered:true});new PerformanceObserver(l=>l.getEntries().forEach(e=>{window.__m.lcp=Math.round(e.startTime)})).observe({type:'largest-contentful-paint',buffered:true});});
    await p.goto('http://127.0.0.1:8787/design-options/_tmp-o10/'+v+'.html',{waitUntil:'load'});
    await p.waitForTimeout(800);
    const m = await p.evaluate(()=>{const n=performance.getEntriesByType('navigation')[0];return {...window.__m, ttfb:Math.round(n.responseStart), domInt:Math.round(n.domInteractive)}});
    res.push(m); await ctx.close();
  }
  const med=k=>{const a=res.map(r=>r[k]).filter(x=>x!=null).sort((x,y)=>x-y);return a[Math.floor(a.length/2)]};
  out[v]={fcp:med('first-contentful-paint'),lcp:med('lcp'),ttfb:med('ttfb'),domInt:med('domInt')};
}
await b.close();
console.log(JSON.stringify(out,null,1));
