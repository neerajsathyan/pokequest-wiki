importScripts("/pokequest-wiki/static/precache-manifest.beb5253ee5a18bddc702f7ea1980d25a.js", "/pokequest-wiki/static/workbox-v3.4.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/pokequest-wiki/static/workbox-v3.4.1"});
workbox.core.setCacheNameDetails({ prefix: 'pokequest-wiki' })

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

/**
 * fonts
 * see: https://developers.google.com/web/tools/workbox/guides/common-recipes
 */
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  }),
)
workbox.routing.registerRoute(
  new RegExp('https://fonts.(gstatic.)?font.im/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'font-im',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  }),
)

/**
 * google analytics
 * see: https://developers.google.com/web/tools/workbox/guides/enable-offline-analytics
 */
workbox.googleAnalytics.initialize()

/**
 * skip waiting api
 * see: https://developers.google.com/web/tools/workbox/guides/advanced-recipes
 */
self.addEventListener('message', (event) => {
  if (!event.data){
    return
  }

  switch (event.data) {
    case 'skipWaiting':
      self.skipWaiting()
      break
    default:
      break
  }
})

