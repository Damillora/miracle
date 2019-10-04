require('dotenv').config({ path: process.env.THEME ? ".env."+process.env.THEME : ".env"})

console.log("We are running "+process.env.THEME+" theme");

module.exports = {
  mode: 'universal',
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 14033
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Damillora - '+(process.env.DOMAIN || "nanao.moe"),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Exo+2:300,400,500&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=M+PLUS+1p:300,400,500&display=swap' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/themes/'+(process.env.THEME || "yuriko")+'.css'
  ],
  env: {
    subheader: process.env.SUBHEADER || "" ,
    header: process.env.HEADER || "Sample Theming",
    romaji: process.env.ROMAJI || "This demonstrates themable aspects",
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/dotenv', { filename: process.env.THEME ? ".env."+process.env.THEME : ".env" }],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    }
  },
  serverMiddleware: [

  ],
  buildDir: '.nuxt.'+(process.env.THEME || "yuriko")
}
