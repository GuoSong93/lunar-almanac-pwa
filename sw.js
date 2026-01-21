// sw.js 开头的 ASSETS 数组
const CACHE_NAME = 'time-calendar-v2.1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://cdn.jsdelivr.net/npm/lunar-javascript/lunar.js',
  'https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});