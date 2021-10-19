<template>
  <div class="index">
    <TopFv />
    <!-- <Canvas class="canvas" /> -->
    <Message id="message" />
    <v-container fluid class="index__container">
      <!-- <Skill id="skill" /> -->
      <!-- <List id="list" /> -->
      <!-- <div class="contact__space">
            <div class="contact__back text-uppercase" v-parallax="-0.17">contact</div>
      </div> -->
      <!-- <ContactForm id="contact" /> -->
      <PageLinks />
      <!-- <v-row justify="center" align="center" tag="section" class="sss">
        <v-col cols="12" sm="8" md="6">
          <v-card class="logo py-4 d-flex justify-center">
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
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
import Opening from '~/components/layouts/Opening.vue';
export default {
  components: { Opening },
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
  data() {
    return {
      header: {
        title: "portfolio" //ヘッダータイトル
      }
    };
  },
  mounted() {
    this.updateHeader(); //ヘッダータイトル

  },
  methods: {
    updateHeader() {
      //ヘッダータイトルとして使いたい情報を渡す
      this.$nuxt.$emit("updateHeader", this.header.title);
    }
  }
};
</script>

<style lang="scss" scoped>
.canvas {
  z-index: 0;
  position: absolute;
  width: 170%;
  top: 300px;
  left: -40%;
  transform: rotate(40deg);
}

.contact{
  // position: relative;
  &__space {
    width: 100vw;
    height: 65px;
    background-color: #f6f6f6;
    position: relative;
  }
  &__back {
      font-size: 15vw;
      font-weight: bolder;
      font-style: italic;
      color: #d9d9d9;
      opacity: 0.7;
      position: absolute;
      top: 50%;
      left: 3%;
      white-space: nowrap;
      transition: transform 0.7s ease-in-out;
    }
}
</style>
