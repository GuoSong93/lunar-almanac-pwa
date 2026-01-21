const CACHE_NAME = 'lunar-almanac-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://cdn.jsdelivr.net/npm/lunar-javascript/lunar.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});