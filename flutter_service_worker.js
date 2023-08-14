'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "e8d19b25877b6533d34fb820d455f3b9",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "48679a364dbb2074606b511520dfaa7c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "5020a253e2167daf20f90bfb3928afd6",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"flutter.js": "0b19a3d1d54c58174c41cd35acdd9388",
"main.dart.js": "cf8f701d850fa71b04a3b0144057fd79",
"version.json": "ca5132fbfc5dc6c4ad7361671eadf6d4",
"assets/images/icon.png": "f497fb821fd8430ed6c9a23854238d92",
"assets/images/logo.png": "6b284e4220583334166b8e555cf6da27",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "17697f4f85abd45f7af205f2adebe708",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "beb47ca7ace2917b1e54372b843ce5a5",
"assets/AssetManifest.bin": "c5df896689435136458953ea3e5a6986",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "d8637820710cf8e3ff1c65e6faecb55e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "f724d11cac7a51c47923b5f2bc40b149",
"/": "f724d11cac7a51c47923b5f2bc40b149",
"manifest.json": "116fdf71a41aac6236ca19c373396a70",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "635819fc9c3b5ba54d050ef0c7b063a7",
".git/refs/remotes/origin/main": "635819fc9c3b5ba54d050ef0c7b063a7",
".git/objects/9d/cb2352fe1175a277ee046c11e42cc74075b0fb": "1dafeb712b54e9a375b7dcc681cbf30e",
".git/objects/93/2ece546baff13c0f645b6e702afed490804029": "ce018ad41c6858cb024d366ea5572a88",
".git/objects/6f/8b32e61592596cb8bdd4ef2e36cf26d05dbb1e": "968bed5d1161b55cbdbed392d8710621",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/f8/c9eb3faef49736cd9ba01f08891977c133cdc0": "6610f3ce5396fbb3acacfb60a109d5f5",
".git/objects/8f/b649d759cfa2b9bc27cac9b9b2169386847523": "a4bb8644fcc9a5376bb5a1ffd9a75ae5",
".git/objects/57/a68207fb7335630197acdc5e807dbc654fa743": "f1125841573b777eefcd198dfacc352e",
".git/objects/48/bda84bc533649247f84fc166996a8b709faef9": "94ad8ea03d2a52eaa834ab67803a4c72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/b2/df3f7f5e259bd3923d0aacb0b5a292919caba3": "1ba76bfd257440cc323183fc68a1bb02",
".git/objects/f4/3e882353e284dce518de4ecef80c3434a28f31": "74bdf2e55890dcb9c0d7674cc6457ae8",
".git/objects/05/bd7ee48e8d76198f562946e7b1aa16aed0c58c": "2d098836e7954854fcd3ef0e45bfe465",
".git/objects/22/b3d18d701c496e813b8bee3d4e87abb040a788": "6099b13b6aefa1f755285cf739da5fbd",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/1eead47e148577e413f4b8ea5a6ab41eb105bd": "896f2fcae85b47aa83a4df4a4855e317",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/df/da5268592b33c3cf1a9505f9bdf4ec759f8d1d": "78e03796f19cc40700b5096be9f9f007",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/92/76c1bc44f401145abf9b7d25e3f661fa02d8d8": "1f75bdc5dbb54713d7a00c08ab2007ea",
".git/objects/94/273efc05739ac26fbad6e80cc83eb2a6362d3c": "37db925273c3175e004c533601aafdd6",
".git/objects/dc/ce9f47a37cb535b1aaf610e37d89d629b98bc9": "699432b396f3fe53c0ecdea4e701648a",
".git/objects/a5/2d8618e32864ebe5b0aaba514f1e6353a8eed1": "2f97538de04ef8b3d5dd08e045e94dd2",
".git/objects/09/1fc4c35c74ab6b110798eec2c7a5942f3c8467": "638530b51b523055e7f8c64f63a83467",
".git/objects/a3/06f070a14a8b73ef25cb9a048d47dda1b906fa": "2d542c1afd00a2092c167b73f2ef88bc",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/fd/3547334861a0b54b41f1fbac3784a08f603f9e": "6071e0f9d19dce529a8c2a123800c285",
".git/objects/50/3a60ae9f7c1ae255e125c09746d22c62a926d8": "85a377c723307919118bd5f820bfb17a",
".git/objects/ec/00e2d2bd7f104f49cc34be464f8cf536916b73": "0bc46547eaeb547117ad193f54a08adf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/63/752a16a72d39b2b2e9430d545a32ef4d80e7a1": "1e2148591c9c6af42721369c53ee135d",
".git/objects/06/83641468d34f95b8b5451ac9cafa249b8900d2": "52e463e4483bb4d6ddedc56191cf7262",
".git/index": "8408d430c681b5d4ef551c890ea53b84",
".git/COMMIT_EDITMSG": "ddf66113594310caab29ebc2fd76952d",
".git/logs/HEAD": "babddfc64ff9b89452108241b52416e5",
".git/logs/refs/heads/main": "8ec189f8116431a4034403aba169c003",
".git/logs/refs/remotes/origin/main": "f444d85d018d664713b6b4b68d052687",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "5da68b0c8a1ad176928b4b6cd6879deb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
