module.exports = {
  swDest: 'public/sw.js',
  runtimeCaching: [{
    // Match any same-origin request that contains 'api'.
    urlPattern: new RegExp('https://gateway.marvel.com/v1/public/characters/200?apikey=e511c7f96b65289a6ee7206e89172410'),
    handler: 'cacheFirst',
    options: {
      // Use a custom cache name for this route.
      cacheName: 'api-cache',
      // Configure custom cache expiration.
      expiration: {
        maxEntries: 20,
        maxAgeSeconds: 36000,
      },
      // Configure which responses are considered cacheable.
      cacheableResponse: {
        statuses: [0, 200]
      },
    },
  },
  {
    urlPattern: new RegExp('https://gateway.marvel.com/v1/public/characters/200?apikey=e511c7f96b65289a6ee7206e89172410'),
    handler: 'staleWhileRevalidate',
    options: {
      cacheableResponse: {
        statuses: [0, 200]
      }
    }
  }],
  clientsClaim: true,
  skipWaiting: true,
  globPatterns: ['**/*.{js,html,css,woff2,woff,svg}'],
  globFollow: false,
  globDirectory: './public/'
}
