const cacheName = 'restaurant-pages';
const cachedURLs = [
  '/',
  '/css/styles.css',
  '/js/main.js',
  '/js/pk.js',
  '/js/restaurant_info.js',
  '/js/dbhelper.js',
    '/index.html',
    '/restaurant.html',
    '/img/10.jpg',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/data/restaurants.json'
];

//service worker
self.addEventListener('install', function(e) {
    console.log('service worker installed');
    e.waitUntil(
	caches.open(cacheName) //open new cache
	    .then(function(cache) {
		console.log('files cached');
		return cache.addAll(cachedURLs); //add assets to cache
	    })
    )
})


self.addEventListener('activate', function(e) {
    console.log('service worker activated');
})

self.addEventListener('fetch', function(e) {
    console.log('service worker fetching');
    e.respondWith(
	fetch(e.request).catch(function() {
	    return caches.match(e.request);
	})
	    );
})
