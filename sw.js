const CACHE_NAME = 'calendar-v1';
// 需要离线保存的文件
const ASSETS = [
  './',
  './index.html',
  'https://cdn.jsdelivr.net/npm/lunar-javascript/lunar.js'
];

// 安装时缓存所有资源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// 没网时，从缓存中读取
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});