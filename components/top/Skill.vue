<template>
  <v-row justify="center" tag="section" align="center" class="skill">
    <h2 class="text-center text-capitalize my-4 skill__title">
      <v-icon class="mr-1" color="black">mdi-tools</v-icon>Web技術<br /><span
        class="text-subtitle-1"
        >skill</span
      >
    </h2>
    <v-col cols="11" sm="10" lg="8" class="skill__wrap">
      <v-row justify="center">
        <v-col cols="12">
          <FadeIn>
            <p>
              日々進化し続ける技術をキャッチアップするための学びはもちろんのこと、悩みや課題や目標を解決できるよう、クライアントの目線での視点や、使う人のものであることを常に意識して、多角的に捉えられるように研鑽していきます。
            </p>
          </FadeIn>
        </v-col>
        <v-col cols="12" md="4" class="skill__box" tag="section">
          <FadeIn>
            <v-card>
              <v-card-title class="text-uppercase">
                <h3>html・css</h3>
              </v-card-title>
              <div class="skill__icon">
                <FadeInDelay>
                  <!-- html -->
                  <svg viewBox="0 0 256 361" class="svg">
                    <use xlink:href="#html" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
                <FadeInDelay :delay="0.15">
                  <!-- css -->
                  <svg viewBox="0 0 256 361" class="svg">
                    <use xlink:href="#css" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
                <FadeInDelay :delay="0.25">
                  <!-- sass -->
                  <svg viewBox="0 0 256 192" class="svg">
                    <use xlink:href="#sass" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
                <FadeInDelay :delay="0.35">
                  <!-- bootstrap -->
                  <svg viewBox="0 0 256 256" class="svg">
                    <use xlink:href="#bootstrap" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
              </div>
              <v-card-subtitle class="skill__subtitle"
                >html・css・sass(scss)・bootstrap</v-card-subtitle
              >
              <v-card-text>
                <ul>
                  <li>
                    できるだけ「見やすく、編集しやすく、簡潔に」を常に心がけています。
                  </li>
                  <li>レスポンシブ対応(モバイルファースト)</li>
                  <li>scssでBEM記法で記述しています。</li>
                  <li>bootstrap使用時は、グリッドシステムを利用します。</li>
                  <li>XDからのコーディング可能です。</li>
                  <li>今後は、特にSEO対策の理解を深めていきます。</li>
                </ul>
              </v-card-text>
            </v-card>
          </FadeIn>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="skill__box" tag="section">
          <FadeIn>
            <v-card>
              <v-card-title class="text-capitalize">
                <h3>JavaScript</h3>
              </v-card-title>
              <div class="skill__icon">
                <FadeInDelay>
                  <!-- js -->
                  <svg viewBox="0 0 256 256" class="svg">
                    <use xlink:href="#js" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
                <FadeInDelay :delay="0.15">
                  <!-- vue -->
                  <svg viewBox="0 0 256 221" class="svg">
                    <use xlink:href="#vue" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
                <FadeInDelay :delay="0.25">
                  <!-- vuetify -->
                  <svg viewBox="0 0 256 293" class="svg">
                    <use xlink:href="#vuetify" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
                <FadeInDelay :delay="0.35">
                  <!-- node -->
                  <svg viewBox="0 0 512 314" class="svg">
                    <use xlink:href="#node" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
                <FadeInDelay :delay="0.45">
                  <!-- nuxt -->
                  <svg viewBox="0 0 256 191" class="svg">
                    <use xlink:href="#nuxt" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
              </div>
              <v-card-subtitle class="skill__subtitle"
                >JavaSript・Vue.js・Vuetify・Vuex・VueRouter・Node.js・Nuxt.js</v-card-subtitle
              >
              <v-card-text>
                <ul>
                  <li>
                    主にJavaScript,フレームワークはVue.jsを中心に開発しています。
                  </li>
                  <li>基本的な機能の実装はできます。</li>
                  <!-- <li>ロジックを考えるのが好きです。</li> -->
                  <li>APIなど、より一層の習熟の必要があります。</li>
                </ul>
              </v-card-text>
            </v-card>
          </FadeIn>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="skill__box" tag="section">
          <FadeIn>
            <v-card>
              <v-card-title class="text-uppercase">
                <h3>その他</h3>
              </v-card-title>
              <div class="skill__icon">
                <FadeInDelay>
                  <!-- git -->
                  <svg viewBox="0 0 256 256" class="svg">
                    <use xlink:href="#git" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
                <FadeInDelay :delay="0.15">
                  <!-- github -->
                  <svg viewBox="0 0 256 250" class="svg">
                    <use xlink:href="#github" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
                <FadeInDelay :delay="0.25">
                  <!-- firebase -->
                  <svg viewBox="0 0 256 351" class="svg">
                    <use xlink:href="#firebase" x="0" y="0"></use>
                  </svg>
                </FadeInDelay>
              </div>
              <v-card-subtitle class="skill__subtitle"
                >Git・GitHub・Firebase 等</v-card-subtitle
              >
              <v-card-text>
                <ul>
                  <li>エディタは Visual Studio Code</li>
                  <li>Git/GitHub基本操作</li>
                  <li>Firebase?</li>
                  <li>今後はバックエンドの理解を深めていきます。</li>
                  <li>RubyのRuby on Railsチュートリアルを1周程度</li>
                </ul>
              </v-card-text>
            </v-card>
          </FadeIn>
        </v-col>
      </v-row>
    </v-col>
    <div class="skill__back text-uppercase" v-parallax="-0.17">skill</div>
  </v-row>
</template>
<style lang="scss" scoped>
.skill {
  background-image: url("~@/assets/img/stone-back.jpg");
  background-repeat: repeat;
  padding: 80px 0 100px;
  position: relative;
  &__title {
    width: 100%;
    line-height: 1;
  }
  &__wrap {
    z-index: 1;
  }
  &__icon {
    display: flex;
    flex-wrap: wrap;
    padding: 0 14px;
  }
  &__subtitle {
    font-weight: 600;
    border-bottom: 1px dotted #ccc;
    margin-bottom: 1rem;
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
