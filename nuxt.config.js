import colors from "vuetify/es5/util/colors";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - portfolio",
    title: "portfolio",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "エンジニアのportfolio(ポートフォリオ)サイトです。webスキル、制作物をまとめて紹介しています。"
      },
      { name: "author", content: "齋藤" },
      { name: "format-detection", content: "telephone=no" },
      // 自動翻訳させないための記述
      { "http-equiv": "Content-Language", content: "ja" },
      { name: "google", content: "notranslate" }
    ],
    link: [
      { hid: "icon", rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
      {
        hid: "icon32",
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "@/assets/img/logo-32.png"
      },
      {
        hid: "icon16",
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "@/assets/img/logo-32.png"
      },
      // Safariのページピン用のアイコン
      { rel: "mask-icon", href: "/logo.svg", color: "#333" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "@/assets/img/logo-180.png"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // 共通関数
    "@/plugins/constants.js",
    // vue-typer
    "@/plugins/vue-typer.client.js",
    // vue-parallax-js
    { src: "~/plugins/vue-parallax-js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    {
      path: "@/components",
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true, //追加
    theme: {
      dark: false, //変更
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    // アイコン設定
    defaultAssets: {
      font: true,
      icons: "mdi"
    },
    icons: {
      iconfont: "mdi"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: true, //<-追加
    cache: true, //<-追加
    hardSource: true //<-追加
  }
};
