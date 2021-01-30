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

const auth = {
  strategies: {
    local: {
      endpoints: {
        login: { url: '/authentication/web/login', method: 'post' },
        logout: { url: '/authentication/web/logout', method: 'post' },
        user: {
          url: '/authentication/user/me',
          method: 'get',
          propertyName: 'user',
        },
      },
      tokenRequired: false,
      tokenType: false,
    },
  },
  redirect: {
    login: '/authentication/login',
    logout: '/',
    callback: '/',
    home: '/',
  },
  resetOnError: true,
}

const toast = {
  position: 'bottom-center',
  duration: 5000,
  keepOnHover: true,
}

// Modules: https://go.nuxtjs.dev/config-modules
export default [
  // https://go.nuxtjs.dev/axios
  ['@nuxtjs/axios', axios],

  // https://i18n.nuxtjs.org/
  ['nuxt-i18n', i18n],

  // https://auth.nuxtjs.org/
  ['@nuxtjs/auth-next', auth],

  // https://www.npmjs.com/package/@nuxtjs/toast
  ['@nuxtjs/toast', toast],
]
