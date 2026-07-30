const CACHE_NAME = "tetris-themes-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./src/styles/main.css",
  "./src/styles/themes.css",
  "./src/js/themes.js",
  "./src/js/storage.js",
  "./src/js/game.js",
  "./src/js/input.js",
  "./src/js/ui.js",
  "./src/js/main.js",
  "./icons/icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
