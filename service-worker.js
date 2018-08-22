const cacheName = 'restaurant-webapp';
const cachedURLs = [
//core assets, which don't include images
  '/',
  '/css/styles.css',
  '/js/main.js',
  '/js/pk.js',
  '/js/restaurant_info.js',
  '/js/dbhelper.js',
    '/index.html',
    '/restaurant.html',
];

//service worker
self.addEventListener('install', function(e) {
    console.log('service worker installed');
    e.waitUntil(
	caches.open(cacheName) //open new cache
	    .then(function(cache) {
		console.log('files cached');
		return cache.addAll(cachedURLs); //add core  assets to cache
	    })
    )
})


self.addEventListener('activate', function(e) {
    console.log('service worker activated');
    e.waitUntil(
	//get all the keys from cache...
	caches.keys().then(function(cacheNames) {
	    return Promise.all(
		//run a function on each key that..
		cacheNames.map(function(cache) {
		    //checks if this cache is the same as the latest one
		    if (cache !== cacheName) {
			console.log('clearing old cache');
			//if it is, then it returns a promise that resolves to true and deletes the cache
			return caches.delete(cache);
		    }
		})
	    );
	})
    );
});

self.addEventListener('fetch', function(e) {
    //prevent default behavior of event request and provide response
    e.respondWith(
	//open the cache and then
	caches.open(cacheName).then(function(cache) {
	    //return if the request matches anything cached
	    return cache.match(e.request).then(function (response) {
		//return either the cached file or fetch the request and then
		return response || fetch(e.request).then(function(response) {
		    //add it and the cloned response to the cache
		    cache.put(e.request, response.clone());
		    //and return the network response
		    return response;
		});
	    });
	})
    );
});
