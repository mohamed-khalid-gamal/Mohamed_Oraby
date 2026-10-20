/* =====================================================================
   MOHAMED ORABY 98  -  SERVICE WORKER (OFFLINE PWA ENGINE)
   ===================================================================== */

const CACHE_NAME = 'oraby98-offline-v1.1';

// Core assets to pre-cache on install for 100% offline capability
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './favicon.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './public/mo Oraby (1).png',
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap'
];

/* ---------------------------------------------------------------------
   INSTALL: Pre-cache core files and activate immediately
   --------------------------------------------------------------------- */
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching offline assets...');
      return cache.addAll(PRECACHE_ASSETS).catch(err => {
        console.warn('[SW] Some assets failed to precache during install:', err);
      });
    })
  );
});

/* ---------------------------------------------------------------------
   ACTIVATE: Purge stale caches and claim clients
   --------------------------------------------------------------------- */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

/* ---------------------------------------------------------------------
   FETCH: Stale-While-Revalidate with Offline Cache Fallback
   --------------------------------------------------------------------- */
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // For navigation (HTML document requests), try network first, fallback to cached index.html
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match('./index.html') || caches.match('./');
        })
    );
    return;
  }

  // For all other assets (CSS, JS, images, fonts): Cache-First with Network Background Revalidation
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(err => {
          // Network failed, if cachedResponse exists it was already returned
          return cachedResponse;
        });

      return cachedResponse || fetchPromise;
    })
  );
});
