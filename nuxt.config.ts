export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-09-11',
  devtools: { enabled: true },
  // Cloudflare Pages maps extensionless paths differently from a Node server.
  // This keeps static route output aligned with Pages route matching.
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  i18n: {
    defaultLocale: 'id',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    // Keep translation files in the requested root-level `locales/` directory.
    restructureDir: '.',
    langDir: 'locales',
    locales: [
      { code: 'id', language: 'id-ID', file: 'id.json', name: 'Indonesia' },
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' }
    ]
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      meta: [{ name: 'theme-color', content: '#5577AA' }],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/satria-mark.svg' },
        { rel: 'apple-touch-icon', href: '/satria-mark.svg' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})
