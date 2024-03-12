const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/app.css",
      "/app.js",
      "/favicon-48.png",
      "/favicon-96.png",
      "/favicon-128.png",
      "/favicon-256.png",
      "/favicon-512.png",
    ]),
  );
});