const cacheName = "birthday-surprise-v1";


const files = [
"index.html",
"style.css",
"script.js",
"photo1.jpg",
"photo2.jpg",
"photo3.jpg"
];


self.addEventListener("install",event=>{

event.waitUntil(

caches.open(cacheName)
.then(cache=>cache.addAll(files))

);

});



self.addEventListener("fetch",event=>{

event.respondWith(

caches.match(event.request)
.then(response=>response || fetch(event.request))

);

});
