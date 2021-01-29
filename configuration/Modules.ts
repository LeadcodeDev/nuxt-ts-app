// Axios module configuration: https://go.nuxtjs.dev/config-axios
const axios = {
  baseURL: 'http://localhost:3333/api',
  credentials: true,
  progress: false,
}

// Modules: https://go.nuxtjs.dev/config-modules
const Modules = [
  // https://go.nuxtjs.dev/axios
  ['@nuxtjs/axios', axios],
]

export default Modules
