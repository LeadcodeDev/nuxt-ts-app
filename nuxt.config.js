import head from './configuration/Head'
import buildModules from './configuration/BuildModules'
import modules from './configuration/Modules'
import build from './configuration/Build'
import arch from './configuration/Arch'
import plugins from './configuration/Plugins'

export default {
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  ...head,
  ...buildModules,
  ...modules,
  ...arch,
  ...build,
  ...plugins,
}
