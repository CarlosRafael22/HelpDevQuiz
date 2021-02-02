// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
// Disable PWA on development mode since we update the code often and the service worker may not update so fast
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  // other next config
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
})
