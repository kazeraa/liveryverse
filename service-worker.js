self.addEventListener("install", () => {
  console.log("KazeraaID App installed");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});