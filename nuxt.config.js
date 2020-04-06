module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#67C23A' },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.scss'
  ],
  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  env: {
    appName: 'SSR Blog'
  },
  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {
    }
  }
}
