export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "portfolio-theo",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js" },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollToPlugin.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/Draggable.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/MotionPathPlugin.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/MotionPathPlugin.min.js",
      },
     
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // fichier CSS dans notre projet
    "~/assets/css/main.css",
    "~assets/scss/_variables.scss",
    "~assets/scss/main.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:["three","gsap","gsap/Draggable"]
  },
};
