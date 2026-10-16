// UNISONE service worker: fast start and an offline-ready app shell.
// Only our own static files are cached. Rooms, search and YouTube always go to the network.
const CACHE = 'unisone-v1.6.1';
const SHELL = ['/', '/index.html', '/manifest.webmanifest', '/logo.svg', '/favicon.svg', '/favicon.png',
  '/icon-192.png', '/icon-512.png', '/dev.jpg', '/privacy.html', '/terms.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (url.pathname === '/sw.js' || url.pathname.startsWith('/.well-known/')) return;

  // Pages: always try the network first so updates arrive at once; fall back to the saved copy when offline.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match('/index.html'))));
    return;
  }

  // Other files: show the saved copy straight away and refresh it in the background.
  e.respondWith(caches.open(CACHE).then(cache => cache.match(req).then(hit => {
    const net = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  })));
});
