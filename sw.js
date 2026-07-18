const CACHE_NAME = 'sosaos-v3';
const ASSETS = [
  './',
  './index.html',
  'https://remotestorage.io/release/remotestorage.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
