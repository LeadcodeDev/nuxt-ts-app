// Axios module configuration: https://go.nuxtjs.dev/config-axios
const axios = {
  baseURL: 'http://localhost:3333/api',
  credentials: true,
  progress: false,
}

const i18n = {
  locales: [
    { code: 'en', name: 'English', file: 'en-US.ts' },
    { code: 'fr', name: 'Français', file: 'fr-FR.ts' },
  ],
  strategy: 'no_prefix',
  defaultLocale: 'en',
  langDir: 'lang/',
  lazy: true,
  seo: true,
  vueI18n: { fallbackLocale: 'en' },
}

// Modules: https://go.nuxtjs.dev/config-modules
export default [
  // https://go.nuxtjs.dev/axios
  ['@nuxtjs/axios', axios],

  ['nuxt-i18n', i18n],
]
