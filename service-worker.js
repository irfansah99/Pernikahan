const CACHE_NAME = "slider-cache-v2"; // Ganti versi kalau update cache
const urlsToCache = [
    "/", // Halaman utama
  "/index.html",
  "/styles.css", // Sesuaikan dengan file CSS kamu
  "/script.js",  // Sesuaikan dengan file JS kamu
  "/img/pian1.webp",
  "/img/pian2.webp",
  "/img/pian3.webp",
  "/img/dian1.webp",
  "/img/dian2.webp",
  "/img/dian3.webp"
  "img/dian&pian1.webp"
  "img/dian&pian2.webp"
  "img/dian&pian3.webp"
  "img/dian&pian4.webp"
  "img/dian&pian5.webp"
  
];

// Install Service Worker dan cache file
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch dari cache dulu, baru dari network kalau tidak ada
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Hapus cache lama kalau ada update
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
