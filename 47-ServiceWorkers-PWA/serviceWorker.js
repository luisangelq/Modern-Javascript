
//Install service worker
self.addEventListener('install', e => {
    console.log('ServiceWorker: installed');

    console.log(e);
});

//Activate service worker
self.addEventListener('activate', e => {
    console.log('ServiceWorker: activated');

    console.log(e);
});

//Fetch event
self.addEventListener('fetch', e => {
    console.log("Fetch.. ", e);

});