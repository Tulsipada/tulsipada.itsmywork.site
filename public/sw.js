// Service Worker for caching and performance optimization
const CACHE_NAME = 'tulsipada-portfolio-v3';
const STATIC_CACHE = 'static-cache-v3';
const DYNAMIC_CACHE = 'dynamic-cache-v3';

// Files to cache immediately - only critical resources
const STATIC_FILES = [
  '/',
  '/index.html',
  '/src/assets/Tulsipada.avif'
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first for static assets
  'static': ['css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'avif', 'woff', 'woff2'],
  // Network first for API calls
  'network': ['api'],
  // Stale while revalidate for HTML
  'stale': ['html', 'document']
};

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - optimized caching strategies
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension requests
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  const url = new URL(event.request.url);
  const pathname = url.pathname;
  
  // Determine cache strategy based on file type
  if (CACHE_STRATEGIES.static.some(ext => pathname.includes(`.${ext}`))) {
    // Cache first for static assets
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request)
          .then(fetchResponse => {
            if (fetchResponse.status === 200) {
              const responseClone = fetchResponse.clone();
              caches.open(STATIC_CACHE).then(cache => cache.put(event.request, responseClone));
            }
            return fetchResponse;
          })
        )
    );
  } else if (pathname === '/' || pathname === '/index.html') {
    // Stale while revalidate for HTML
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          const fetchPromise = fetch(event.request).then(fetchResponse => {
            if (fetchResponse.status === 200) {
              const responseClone = fetchResponse.clone();
              caches.open(DYNAMIC_CACHE).then(cache => cache.put(event.request, responseClone));
            }
            return fetchResponse;
          });
          return response || fetchPromise;
        })
    );
  } else {
    // Network first for other requests
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then(cache => cache.put(event.request, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  }
});
