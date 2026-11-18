// Submit every sitemap URL to IndexNow (Bing, Yandex and others). Run after a deploy:
//   INDEXNOW_KEY=yourkey SITE_URL=https://jasim.syncircle.org node scripts/indexnow.mjs
const site = (process.env.SITE_URL ?? "https://jasim.syncircle.org").replace(/\/$/, "");
const key = process.env.INDEXNOW_KEY;
if (!key) throw new Error("Set INDEXNOW_KEY");

const xml = await (await fetch(`${site}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/indexnow-key.txt`, urlList }),
});
console.log(`Submitted ${urlList.length} URLs: HTTP ${res.status}`);
