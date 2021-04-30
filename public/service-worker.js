console.log('This is your service-worker.js file!');

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/index.js",
    "/styles.css",
    "/db.js",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/manifest.json"
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// Install app
self.addEventListener('install', (event) => {
    // Pre cache all files
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache successfully!');
                return cache.addAll(FILES_TO_CACHE);
            })
    );

    // tell the browser to activate this service worker immediately once it has finished installing
    self.skipWaiting();
});

// Activate app
self.addEventListener('activate', (event) => {
    event.waitUntil(
        cache.keys().then((cacheNames) => {
            return Promise.all(
                // Loop through all files and wipe out old caches in the install step (cache management)
                cacheNames.map((cacheName) => {
                    if (CACHE_NAME.indexOf(cacheNames) === -1) {
                        console.log("Removing old cache data", cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );

    // Allow an active service worker to set itself as the controller for all clients 
    // For pages to be controlled immediately
    self.clients.claim();
});

// Fetch app
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return a cached response
                if (response) {
                    return response;
                }

                return fetch(event.request)
                    .then((response) => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    });
            })
    );
});