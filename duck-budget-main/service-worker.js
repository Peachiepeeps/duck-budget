/* Duck Budget offline app shell: does not read or transmit financial data. */
const CACHE = 'duck-budget-static-tabs-v1';
const SHELL = [
  './','./index.html','./manifest.json',
  './images/budgeticon-180.png','./images/budgeticon-192.png','./images/budgeticon-512.png',
  './images/budgeticon.png','./images/sticker-coin.png','./images/stickerbook-icon.png',
  './images/duckie-days/quackers-idle.png','./images/duckie-days/bubble-duck.png',
  './images/duckie-days/shin-duck.png','./images/duckie-days/lain-duck.png',
  './images/duckie-days/tamao-duck.png','./images/duckie-days/strawbunny.webp',
  './images/duckie-days/pudding-snatcher.webp'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith('duck-budget-static-')&&k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin) return;
  // Try fresh pages first so releases are not hidden by stale cache.
  if(request.mode==='navigate') {
    event.respondWith(fetch(request).then(response=>{
      if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put('./index.html',copy));}
      return response;
    }).catch(async()=>await caches.match('./index.html')||Response.error()));
    return;
  }
  event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{
    if(response.ok) {const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));}
    return response;
  })));
});
