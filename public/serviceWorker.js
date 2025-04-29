const CACHE_NAME = "my_cache";

const urlToCache = ["/bloque-techTest-monolithic"];

const filesUpdate = (cache) => {
  const stack = [];
  urlToCache.forEach((file) =>
    stack.push(
      cache
        .add(file)
        .catch((_) => console.error(`can't load ${file} to cache`)),
    ),
  );
  return Promise.all(stack);
};

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(filesUpdate));
  // event.waitUntil(
  //   caches
  //     .open(CACHE_NAME)
  //     .then((cache) => {
  //       console.log("Cache open");
  //       return cache.addAll(urlToCache);
  //     })
  //     .catch((error) => {
  //       console.error("error: ", error);
  //     }),
  // );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((error) => {
        console.error("error: ", error);
      }),
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
