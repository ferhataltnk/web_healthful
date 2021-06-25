'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ac75597d92eca069d6501f7c141e09d3",
"assets/assets/animations/238-457-ice-cream.flr": "392ab8669f0d1998cdff9a1b7a75ce8d",
"assets/assets/fonts/ArchitectsDaughter-Regular.ttf": "31c2153c0530e32553b31a49b3d70736",
"assets/assets/images/bacak1.png": "6970e1927883e883ee51bde0f96ea530",
"assets/assets/images/bacak2.png": "cc9dd824ed6984050c6fe5c0749a3cb8",
"assets/assets/images/bacak3.png": "e48de0db7ce9927f93029231f3486337",
"assets/assets/images/bacak4.png": "be9f0255e68d2c0714a1d375d606f6fd",
"assets/assets/images/bacak5.png": "9be2e974ab0b2698961abaefcd6a0f30",
"assets/assets/images/bacak6.png": "b668b67c3a35fe16ae7c2d187e324185",
"assets/assets/images/bacak7.png": "b070f6e0e4ae8e2f6444eede12a04a29",
"assets/assets/images/background.jpg": "0db14787b6e63c1d269b056f090a2aa4",
"assets/assets/images/bel1.png": "9b76123b338cc129337c3a5cd13f38b8",
"assets/assets/images/bel2.png": "2a6e07408a2e44059bf1d3e4b24e8362",
"assets/assets/images/bel3.png": "4f95d2b064b66ec61a207a7c312900f4",
"assets/assets/images/bel4.png": "4fa521b4540ffe22925a141fcbb95ff8",
"assets/assets/images/bel5.png": "6d389f80605462e59eba092c81c21b56",
"assets/assets/images/bel6.png": "303dab1e99e5484558c30e1a666940a7",
"assets/assets/images/bfast1.jpg": "759d8986d09d26c4a895766da3bd0fe6",
"assets/assets/images/bfast2.jpg": "ffa2c2180b1f0bd2fccc9bbf4fcdeb9d",
"assets/assets/images/detoks1.jpg": "7ad085e9befebfdcc47b6a4d0b5a9acf",
"assets/assets/images/detoks2.jpg": "e16e25f88da138b4620dc979e64c29df",
"assets/assets/images/detoks3.jpg": "ac8c7cc08bb20a5b74b96cdb6a67711d",
"assets/assets/images/detoks4.jpg": "4651e5467c4f407ad4e8740be451666b",
"assets/assets/images/kar%25C4%25B1n1.png": "3de1bdf3d1fd3a2bddbae5267dd3a298",
"assets/assets/images/kar%25C4%25B1n2.png": "4384800d46adcfc1067377e8b05c496d",
"assets/assets/images/kar%25C4%25B1n3.png": "3e7c76ea6018848b7268f7f596b40e52",
"assets/assets/images/kol1.png": "b5c35c6a5704f3fadeb6cbe2732936f8",
"assets/assets/images/kol2.png": "fd9c7225437a84b7995277072cc00695",
"assets/assets/images/mainBfast.jpg": "fe91a031f67df8b68eb68497b95ad1b8",
"assets/assets/images/mainDessert.jpg": "dad18624930d2d3f9b635666d75aa1d1",
"assets/assets/images/mainDinner.jpg": "58c98baac7c69c2d8023701fbf566f02",
"assets/assets/images/mainJuice.jpg": "16604af7bc14af1227d944c02feb80bf",
"assets/assets/images/mainSpor1.jpg": "1ae27082dd45d7cb01b856c9d51bcded",
"assets/assets/images/mainSpor2.jpg": "b26bb90d1373b777879d031ae93f0316",
"assets/assets/images/mainSpor3.jpg": "49924529f5b47ebcf7ce752095766566",
"assets/assets/images/mainSpor4.jpg": "f34bd86edd1fa3d7021b22effabfc349",
"assets/assets/images/s%25C4%25B1rt1.png": "04314b85ca2d9ead18a42c226cec4760",
"assets/assets/images/s%25C4%25B1rt2.png": "ffc22babd9a75fe739b8abf79b87a1fb",
"assets/assets/images/spor1.jpg": "878d1d50b8f0c409bd596f3b97abea05",
"assets/assets/images/tatl%25C4%25B11.jpg": "c3603485d1f008d6153f6bc01b969e5f",
"assets/assets/images/tatl%25C4%25B12.jpg": "eb24fd6bea851bc10aebd88e38fff61f",
"assets/assets/images/tatl%25C4%25B13.jpg": "32b4c006f3aa049be19a7c0efab774d0",
"assets/assets/images/user.png": "37f922ae9869e58830827b0e29c017eb",
"assets/assets/images/yemek1.jpg": "452d899e8f61057fb21e690553cab9e2",
"assets/assets/images/yemek2.jpg": "e871bf6e87efad15bf42af9f2a19bb76",
"assets/assets/images/yemek3.jpg": "fe19b5e6d2097b30efcc8ac8133dedbd",
"assets/assets/images/yemek4.jpg": "ea901263211d7dca357a83106d10f004",
"assets/assets/images/yemek5.jpg": "33bbea1d6c93d59531a3d48f034a6080",
"assets/assets/images/yemek6.jpg": "3335fa044ebd162ea9b8ad9ccb63a8b0",
"assets/FontManifest.json": "9be8fd6d901397e949da11ba448cce73",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "6bff6f86c021e08edfe6553792dd10ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d8d137ec2b2f89f0c0a8f1dbb78fd491",
"/": "d8d137ec2b2f89f0c0a8f1dbb78fd491",
"main.dart.js": "61b27ee947fd8842f3093e715bb56928",
"manifest.json": "951833228c6e86c45816cb2d102e2eb3",
"version.json": "dfdf7af7fa9b474b9d6a2dc65ef7f0e0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
