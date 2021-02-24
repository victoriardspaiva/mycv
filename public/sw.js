var CACHE_NAME = 'staticV4';

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                './',

                // CSS
                '../css/w3.css',
                '../css/materialdesignicons.css',
                '../css/materialdesignicons.css.map',
                 // IMAGENS
                 '../assets/cv-36.png',
                 '../assets/cv-96.png',
                 '../assets/cv-194.png',
                 '../assets/vick500.jpeg',

                // FONTES
                '../fonts/materialdesignicons-webfont.woff2?v=5.8.55',
                // MANIFEST
                '../manifest.json',
             ]);
        })
    );
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys
                .filter(function(key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function(key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});