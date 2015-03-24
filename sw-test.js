// sw.js - Service Worker file

// ------------------------------------- install --------------------------------------
this.addEventListener('install', function(event){
  // we are going to use the install event to cache everything we need to load the page
  event.waitUntil(
    // some promises
    caches.create('static-v1').then(function(cache){
      return cache.add({
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/sw-test.js',
        '/sw-test/manifest.json'
      });
    });
  );
});

// -------------------------------------- request ------------------------------------
// this fires for every page request with in the ServiceWorker scope but also for requ
// maded by those pages, even if they're to other domains, and we have a lot of infor
// mation about the request.
this.addEventListener('fetch', function(event){
  console.log('event.request:',event.request);
  console.log('event.request.url:',event.request.url);
  console.log('event.request.method:',event.request.method);
  console.log('event.request.headers:',event.request.headers);

  // however the most interesting think is hijack the event
  /* event.respondWith(response);

        so you can use the constructor yourself

     event.respondWith(new Response('Hello World'));

        or with some stuff we have in the cache, Caches.match takes a request
        and give us a promise for the response that matches the request

     caches.match(event.request); */

});
