<template>
  <v-row justify="center" tag="section" align="center" class="ma-0 skill">
    <h2 class="text-center text-uppercase my-2 font-weight-bold skill__theme">skill</h2>
    <v-col cols="12" sm="10" lg="8" >
      <v-row justify="center">
        <v-col cols="11" sm="6" md="4" class="skill__box" tag="section">
          <v-card >
            <v-card-title class="text-uppercase">
              <h3>html・css</h3>
            </v-card-title>

            <!-- html -->
            <svg viewBox="0 0 256 361" class="svg">
              <use xlink:href="#html" x="0" y="0"></use>
            </svg>
            <!-- css -->
            <svg viewBox="0 0 256 361" class="svg">
              <use xlink:href="#css" x="0" y="0"></use>
            </svg>
            <!-- sass -->
            <svg viewBox="0 0 256 192" class="svg">
              <use xlink:href="#sass" x="0" y="0"></use>
            </svg>
            <!-- bootstrap -->
            <svg viewBox="0 0 256 256" class="svg">
              <use xlink:href="#bootstrap" x="0" y="0"></use>
            </svg>

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
          <v-card >
            <v-card-title class="text-capitalize">
              <h3>JavaScript</h3>
            </v-card-title>
            <!-- js -->
            <svg viewBox="0 0 256 256" class="svg">
              <use xlink:href="#js" x="0" y="0"></use>
            </svg>
            <!-- vue -->
            <svg viewBox="0 0 256 221" class="svg">
              <use xlink:href="#vue" x="0" y="0"></use>
            </svg>
            <!-- vuetify -->
            <svg viewBox="0 0 256 293" class="svg">
              <use xlink:href="#vuetify" x="0" y="0"></use>
            </svg>
            <!-- node -->
            <svg viewBox="0 0 512 314" class="svg">
              <use xlink:href="#node" x="0" y="0"></use>
            </svg>
            <!-- nuxt -->
            <svg viewBox="0 0 256 191" class="svg">
              <use xlink:href="#nuxt" x="0" y="0"></use>
            </svg>

            <v-card-subtitle>JavaSript・Vue.js・Vuetify・Vuex・VueRouter・Vuelidate・Node.js・Nuxt.js</v-card-subtitle>
            <v-card-text>本文</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="11" sm="6" md="4" class="skill__box" tag="section">
          <v-card>
            <v-card-title class="text-uppercase">
              <h3>その他</h3>
            </v-card-title>

            <!-- git -->
            <svg viewBox="0 0 256 256" class="svg">
              <use xlink:href="#git" x="0" y="0"></use>
            </svg>
            <!-- github -->
            <svg viewBox="0 0 256 250" class="svg">
              <use xlink:href="#github" x="0" y="0"></use>
            </svg>
            <!-- firebase -->
            <svg viewBox="0 0 256 351" class="svg">
              <use xlink:href="#firebase" x="0" y="0"></use>
            </svg>

            <v-card-subtitle>Git・GitHub・Firebase 等</v-card-subtitle>
            <v-card-text>本文</v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.skill {
  &__theme{
    width: 100%;
  }
}
@media screen and (min-width: 600px){
  .skill__box:last-of-type{
    margin: 0 auto 0 0;
  }
}
.svg {
  width: 50px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
  padding: 0 5px 0;
}
@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
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
