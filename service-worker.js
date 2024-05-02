const cacheName = 'demo-css-v2';

self.addEventListener('install', (event) =>
{
  console.log('Service Worker Installed');
  event.waitUntil(
  caches.open(cacheName).then((cache) =>
  {
    return cache.addAll([
      '/democss/',
      '/democss/manifest.json',
      '/democss/style.css',
      '/democss/script.js',
      '/democss/favicon.png',
      '/democss/font.woff2',
      '/democss/logo.png',
      '/democss/logoc.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) =>
{
  event.respondWith(
  caches.match(event.request).then((response) =>
  {
    return response || fetch(event.request);
  })
  );
});
