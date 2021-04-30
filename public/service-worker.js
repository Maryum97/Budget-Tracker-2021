const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "index.js",
    "/db.js",
    "/style.css"
];

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

// Activate app; to wipe out old caches in the install step (cache management)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        cache.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (CACHE_NAME.indexOf(cacheNames) === -1) {
                        console.log("Removing old cache data", cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});