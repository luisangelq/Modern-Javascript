const cacheName = "apv-v4";
const files = [
  "/",
  "/index.html",
  "/error.html",
  "/css/bootstrap.css",
  "/css/styles.css",
  "/js/app.js",
  "/js/apv.js",
  "/manifest.json",
  "/img/icons/Icon-120.png",
  "/img/icons/Icon-128.png",
  "/img/icons/Icon-144.png",
  "/img/icons/Icon-152.png",
  "/img/icons/Icon-196.png",
  "/img/icons/Icon-256.png",
  "/img/icons/Icon-512.png",
  "/img/icons/Icon-72.png",
];
//Install service worker
self.addEventListener("install", (e) => {
  console.log("ServiceWorker: installed");

  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("ServiceWorker: caching files");
      cache.addAll(files);
    })
  );
});

//Activate service worker
self.addEventListener("activate", (e) => {
  console.log("ServiceWorker: activated");

  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList
          .filter((key) => key !== cacheName)
          .map((key) => caches.delete(key)) //delete old cache
      );
    })
  );
});

//Fetch event
self.addEventListener("fetch", (e) => {
  console.log("Fetch.. ", e);

  e.respondWith(
    caches
      .match(e.request)
      .then((cacheRes) => (cacheRes ? cacheRes : caches.match("/error.html")))
    //   .catch(() => caches.match("/error.html"))
  );
});
