const staticDevBIESS = "dev-biess-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/scripts.js",
  "/assets/img/portrait_black.png",
  "/assets/img/app-store-badge.svg",
  "/assets/img/google-play-badge.svg",
  "/assets/img/tnw-logo.svg",
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticDevBIESS).then(cache => {
        cache.addAll(assets)
      })
    )
  })
 self.addEventListener("fetch", fetchEvent => {
     fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
