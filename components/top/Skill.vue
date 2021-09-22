<template>
  <v-row justify="center" tag="section" align="center" class="skill">
    <h2 class="text-center text-capitalize my-4 skill__title">
      <v-icon class="mr-1" color="black">mdi-tools</v-icon>Web技術<br /><span
        class="text-subtitle-1"
        >skill</span
      >
    </h2>
    <!-- Web技術 -->
    <v-col cols="12" sm="10" lg="8">
      <v-row justify="center">
        <v-col cols="11" sm="6" md="4" class="skill__box" tag="section">
          <v-card>
            <v-card-title class="text-uppercase">
              <h3>html・css</h3>
            </v-card-title>
            <div class="skill__icon">
              <FadeInOut>
                <!-- html -->
                <svg viewBox="0 0 256 361" class="svg">
                  <use xlink:href="#html" x="0" y="0"></use>
                </svg>
              </FadeInOut>
              <FadeInOut :delay="0.1">
                <!-- css -->
                <svg viewBox="0 0 256 361" class="svg">
                  <use xlink:href="#css" x="0" y="0"></use>
                </svg>
              </FadeInOut>
              <FadeInOut :delay="0.2">
                <!-- sass -->
                <svg viewBox="0 0 256 192" class="svg">
                  <use xlink:href="#sass" x="0" y="0"></use>
                </svg>
              </FadeInOut>
              <FadeInOut :delay="0.3">
                <!-- bootstrap -->
                <svg viewBox="0 0 256 256" class="svg">
                  <use xlink:href="#bootstrap" x="0" y="0"></use>
                </svg>
              </FadeInOut>
            </div>

            <v-card-subtitle>html・css・sass(scss)・bootstrap</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>本文</li>
                <li>本文</li>
                <li>本文</li>
                <li>本文</li>
                <li>本文</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="11" sm="6" md="4" class="skill__box" tag="section">
          <v-card>
            <v-card-title class="text-capitalize">
              <h3>JavaScript</h3>
            </v-card-title>
            <div class="skill__icon">
              <FadeInOut>
                <!-- js -->
                <svg viewBox="0 0 256 256" class="svg">
                  <use xlink:href="#js" x="0" y="0"></use>
                </svg>
              </FadeInOut>
              <FadeInOut :delay="0.1">
                <!-- vue -->
                <svg viewBox="0 0 256 221" class="svg">
                  <use xlink:href="#vue" x="0" y="0"></use>
                </svg>
              </FadeInOut>
              <FadeInOut :delay="0.2">
                <!-- vuetify -->
                <svg viewBox="0 0 256 293" class="svg">
                  <use xlink:href="#vuetify" x="0" y="0"></use>
                </svg>
              </FadeInOut>
              <FadeInOut :delay="0.3">
                <!-- node -->
                <svg viewBox="0 0 512 314" class="svg">
                  <use xlink:href="#node" x="0" y="0"></use>
                </svg>
              </FadeInOut>
              <FadeInOut :delay="0.4">
                <!-- nuxt -->
                <svg viewBox="0 0 256 191" class="svg">
                  <use xlink:href="#nuxt" x="0" y="0"></use>
                </svg>
              </FadeInOut>
            </div>

            <v-card-subtitle
              >JavaSript・Vue.js・Vuetify・Vuex・VueRouter・Node.js・Nuxt.js</v-card-subtitle
            >
            <v-card-text>本文</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="11" sm="6" md="4" class="skill__box" tag="section">
          <v-card>
            <v-card-title class="text-uppercase">
              <h3>その他</h3>
            </v-card-title>
            <div class="skill__icon">
              <FadeInOut>
                <!-- git -->
                <svg viewBox="0 0 256 256" class="svg">
                  <use xlink:href="#git" x="0" y="0"></use>
                </svg>
              </FadeInOut>
              <FadeInOut :delay="0.1">
                <!-- github -->
                <svg viewBox="0 0 256 250" class="svg">
                  <use xlink:href="#github" x="0" y="0"></use>
                </svg>
              </FadeInOut>
              <FadeInOut :delay="0.2">
                <!-- firebase -->
                <svg viewBox="0 0 256 351" class="svg">
                  <use xlink:href="#firebase" x="0" y="0"></use>
                </svg>
              </FadeInOut>
            </div>
            <v-card-subtitle>Git・GitHub・Firebase 等</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>RubyのRuby on Railsチュートリアルを1周程度</li>
                <li></li>
                <li></li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.skill {
  margin-bottom: 150px;
  &__title {
    width: 100%;
    line-height: 1;
  }
  &__icon {
    display: flex;
  }
}
@media screen and (min-width: 600px) {
  .skill__box:last-of-type {
    margin: 0 auto 0 0;
  }
}
.svg {
  width: 50px;
  padding: 0 5px 0;
}

// // レスポンシブ Retina
// @media screen and (min-width: 1269px),
//   (-webkit-min-device-pixel-ratio: 2),
//   (min-resolution: 2dppx) {
//   .skill {
//     background-image: url("~@/assets/img/andrew-neel-cckf4TsHAuw-unsplash.jpg");
//   }
// }
</style>
