export default {
  head: {
    title: 'aryar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://highlightjs.org/static/demo/styles/atom-one-dark.css"},
    ],
    script:[
      {src:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"}
    ]
  },

  css: [
    '@/assets/css/main.css',
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  },

  serverMiddleware: [
    {path:'/api/',handler:"~/api/index.js"},
  ]
}
