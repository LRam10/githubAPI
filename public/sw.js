const assets =[
    './',
    './index.html',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
    'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js'
]
self.addEventListener('install', async event=>{
    console.log('service worker register');
const cache = await caches.open('new-static');
cache.addAll(assets);
});

self.addEventListener('fetch',event =>{
    const req = event.request;
    const url = new URL(req.url);
    if(url.origin === location.origin){
        event.respondWith(cacheFirst(req));
    } 
    else{
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req){
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req){
    const cache = await caches.open('API-dynamic');
    try {
        const res = await fetch(req);
        cache.put(req,res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}

