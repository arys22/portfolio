<template>
  <div class="index">
    <TopFv />
    <Canvas class="canvas"/>
    <!-- <Message id="scroll"/> -->
    <v-container fluid class="index__container">
      <!-- <Skill/> -->
      <Products/>
      <ContactForm/>
      <v-row justify="center" align="center" tag="section" class="sss" id="scroll">
        <!-- <v-col cols="12" sm="10" lg="8" ></v-col> -->
        <v-col cols="12" sm="8" md="6">
          <v-card class="logo py-4 d-flex justify-center" >
            <NuxtLogo />
            <VuetifyLogo />
          </v-card>
          <v-card>
            <v-card-title class="headline">
              Welcome to the Vuetify + Nuxt.js template
            </v-card-title>
            <v-card-text>
              <p>
                Vuetify is a progressive Material Design component framework for
                Vue.js. It was designed to empower developers to create amazing
                applications.
              </p>
              <p>
                For more information on Vuetify, check out the
                <a
                  href="https://vuetifyjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  documentation </a
                >.
              </p>
              <p>
                If you have questions, please join the official
                <a
                  href="https://chat.vuetifyjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="chat"
                >
                  discord </a
                >.
              </p>
              <p>
                Find a bug? Report it on the github
                <a
                  href="https://github.com/vuetifyjs/vuetify/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="contribute"
                >
                  issue board </a
                >.
              </p>
              <p>
                Thank you for developing with Vuetify and I look forward to
                bringing more exciting features in the future.
              </p>
              <div class="text-xs-right">
                <em><small>&mdash; John Leider</small></em>
              </div>
              <hr class="my-3" />
              <a
                href="https://nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuxt Documentation
              </a>
              <br />
              <a
                href="https://github.com/nuxt/nuxt.js"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuxt GitHub
              </a>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" nuxt to="/inspire">
                Continue
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- <PageLinks/> sm以上最後-->
    </v-container>
  </div>
</template>

<script>
export default {
  // metaタグ設定
  head: {
    titleTemplate: null,
    title: "portfolio",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "ポートフォリオサイトです。"
      }
    ]
  },
    data(){
    return {
      header: {
        title: 'portforio' //ヘッダータイトル
      }
    }
  },
  mounted() {
    this.updateHeader() //ヘッダータイトル
  },
  methods: {
    updateHeader() {
      //ヘッダータイトルとして使いたい情報を渡す
      this.$nuxt.$emit('updateHeader', this.header.title)
    }
  },
};
</script>

<style lang="scss" scoped>
  .canvas{
    z-index: 0;
    position: absolute;
    width: 170%;
    top: 300px;
    left: -40%;
    transform: rotate(40deg);
  }

// .index{
//   &__container{
// //   // 最後に適用保留
// //   //   background-image: url("~@/assets/img/stone-back.jpg");
//   }
// }
</style>
