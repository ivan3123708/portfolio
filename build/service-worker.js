"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","96c82cc2c7aaceebbd7ac86156726154"],["/static/css/main.fb05c5db.css","5107a1a589f45f23bbd76c8a256464d4"],["/static/js/main.1a324044.js","d69f4cd4a58cbe6fbaeac4024991dfbd"],["/static/media/az.45d4afa4.jpg","45d4afa4bae990651e6f1cdb001d4917"],["/static/media/calculator.1cf88c59.jpg","1cf88c59e822d5685cd48edea683ea8f"],["/static/media/cat.060822e3.jpg","060822e3728b1a1425fb25306391da1c"],["/static/media/css3.d3cb2223.png","d3cb22232b0ca23893e3b17713dd2b56"],["/static/media/git.86a65562.png","86a65562514b354474fee099579e5b01"],["/static/media/homer.f53c8d32.gif","f53c8d3289bfad7730f21422a70dbb48"],["/static/media/html5.91d00372.png","91d00372dc436fe8a4a32672d91514ae"],["/static/media/javascript.162386dd.png","162386ddf22c4a03c575993b15b25227"],["/static/media/jquery.60ac5fa2.png","60ac5fa2e4141ecbdf2bfb2373d050ee"],["/static/media/pomodoro.c8761791.jpg","c8761791a4187b96c6e38b26fed9dd00"],["/static/media/quotes.911ee655.jpg","911ee6552040daef04a7f9e5a0d9ec20"],["/static/media/react.2f724e53.png","2f724e5305a947cf2dc4828ec4d120cd"],["/static/media/recipe_box.35cc3b04.jpg","35cc3b04c27f47217b7c9736cb125103"],["/static/media/redux.e7371f4d.png","e7371f4d9f3b6b2f27f575a48635b8c2"],["/static/media/scss.697d9056.png","697d90568800dfe3a8f8e8d493e52ca4"],["/static/media/simon.227ff3be.jpg","227ff3be30df7a0399fb4664383fafd9"],["/static/media/stimpy.fe53671c.png","fe53671c082f3199575d785c3050ea5d"],["/static/media/sunset.b9d8069a.png","b9d8069acb69699870f571f604e5fe41"],["/static/media/tic_tac_toe.ec81108a.jpg","ec81108a49d767869d368eef5e12c0ca"],["/static/media/webpack.60d97870.png","60d97870405404f4d881598f396d9b3e"],["/static/media/windmill.74790e14.gif","74790e14e3dee14e82ebae49bb823be8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});