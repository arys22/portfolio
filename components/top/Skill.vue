<template>
  <v-row justify="center" tag="section" align="center" class="skill">
    <Fade>
      <h2 class="text-center text-capitalize my-4 skill__title">
        <v-icon class="mr-1" color="black">mdi-tools</v-icon>Web技術<br /><span
          class="skill__subtitle f-f"
          >skill</span
        >
      </h2>
    </Fade>
    <v-col cols="11" sm="10" lg="8" class="skill__wrap">
      <v-row justify="center">
        <v-col cols="12">
          <FadeSlide>
            <p>
              日々進化し続ける技術をキャッチアップするための学びはもちろんのこと、悩みや課題や目標を解決できるよう、クライアントの目線での視点や、使う人のものであることを常に意識して、多角的に捉えられるように研鑽を積んでまいります。
            </p>
          </FadeSlide>
        </v-col>
        <v-col cols="12" md="4" class="skill__box">
          <FadeIn>
            <v-card class="py-4" tag="section">
              <v-card-title class="text-uppercase">
                <FadeSlide>
                  <h3>html・css</h3>
                </FadeSlide>
              </v-card-title>
              <div class="skill__icon">
                <template v-for="(skill, index) in firstSkills">
                  <FadeInDelay :delay="skill.delay" :key="index">
                    <svg viewBox="0 0 256 361" class="svg">
                      <use :xlink:href="'#' + skill.name" x="0" y="0"></use>
                    </svg>
                  </FadeInDelay>
                </template>
              </div>
              <v-card-subtitle class="skill__subtitle f-f">
                <FadeSlide>
                  HTML・CSS・Sass(SCSS)・Bootstrap・TailwindCSS
                </FadeSlide>
              </v-card-subtitle>
              <v-divider class="skill__border" />
              <Fade>
                <v-card-text>
                  <ul>
                    <li>
                      できるだけ「見やすく、編集しやすく、簡潔に」を常に心がけています。
                    </li>
                    <li>
                      レスポンシブ対応(モバイルファーストorデスクトップファースト)
                    </li>
                    <li>
                      内部SEOを意識し、且つW3Cに準拠したコーディングを行っております。
                    </li>
                    <li>
                      SCSSで BEM記法、又は
                      FLOCSSで記述しています。(自作のテンプレート使用)
                    </li>
                    <li>svgアニメーション</li>
                    <li>Dart Sass、Bootstrap、Tailwind CSS</li>
                    <li>Bootstrap使用時は、グリッドシステムを利用</li>
                    <li>XD、Figmaからのコーディング可能です。</li>
                  </ul>
                </v-card-text>
              </Fade>
            </v-card>
          </FadeIn>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="skill__box">
          <FadeIn>
            <v-card class="py-4" tag="section">
              <v-card-title>
                <FadeSlide>
                  <h3>JavaScript・Node.js</h3>
                </FadeSlide>
              </v-card-title>
              <div class="skill__icon">
                <template v-for="(skill, index) in secondSkills">
                  <FadeInDelay :delay="skill.delay" :key="index">
                    <svg viewBox="0 0 256 300" class="svg">
                      <use :xlink:href="'#' + skill.name" x="0" y="0"></use>
                    </svg>
                  </FadeInDelay>
                </template>
              </div>
              <v-card-subtitle class="skill__subtitle f-f">
                <FadeSlide>
                  JavaSript・Node.js・Vue.js・VueRouter・Vuex・Pinia・Vuetify・Vue
                  Test Utils・Jest・Nuxt.js
                </FadeSlide>
              </v-card-subtitle>
              <v-divider class="skill__border" />
              <Fade>
                <v-card-text>
                  <ul>
                    <li>
                      JavaScript、フレームワークはVue.js
                    </li>
                    <li>gulp</li>
                    <li>Atomic Design</li>
                    <li>Vite、VueRouter、Vuex、Pinia、Vuetify</li>
                    <li>Vue2 (Options API)</li>
                    <li>Vue3 (Composition API)</li>
                    <!-- <li>
                      Todoアプリ・カレンダー・iTunesのAPIを使用したiTunesSearch・無限スクロール・ページネーション・ドラッグ＆ドロップ機能・スワイプ機能・ログイン機能・等、実装可能です。
                    </li> -->
                    <li>
                      vue-test-utils ＋ Jest でのテストコード
                    </li>
                    <li>TypeScript を使用してのオリジナルアプリ製作中</li>
                    <li>今はVue.js・nuxt.jsが一番好きです。</li>
                  </ul>
                </v-card-text>
              </Fade>
            </v-card>
          </FadeIn>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="skill__box">
          <FadeIn>
            <v-card class="py-4" tag="section">
              <v-card-title class="text-uppercase">
                <FadeSlide>
                  <h3>その他</h3>
                </FadeSlide>
              </v-card-title>
              <div class="skill__icon">
                <template v-for="(skill, index) in thirdSkills">
                  <FadeInDelay :delay="skill.delay" :key="index">
                    <svg viewBox="0 0 256 300" class="svg">
                      <use :xlink:href="'#' + skill.name" x="0" y="0"></use>
                    </svg>
                  </FadeInDelay>
                </template>
              </div>
              <v-card-subtitle class="skill__subtitle f-f">
                <FadeSlide>
                  Git・GitHub・Netlify・Docker 等
                </FadeSlide>
              </v-card-subtitle>
              <v-divider class="skill__border" />
              <Fade>
                <v-card-text>
                  <ul>
                    <li>エディタ：Visual Studio Code</li>
                    <li>デプロイ：Netlify、GitHub Pages</li>
                    <li>デザイン：Figma、XD</li>
                    <li>Git/GitHub 基本操作・プルリクエスト</li>
                    <li>Ruby の Ruby on Rails チュートリアルを1周程度</li>
                    <li>Docker での環境構築</li>
                    <li>Markdown記法</li>
                  </ul>
                </v-card-text>
              </Fade>
            </v-card>
          </FadeIn>
        </v-col>
      </v-row>
    </v-col>
    <div class="skill__back text-uppercase" v-parallax="-0.15">skill</div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      // アイコン
      firstSkills: [
        { name: "html", delay: 0.25 },
        { name: "css", delay: 0.5 },
        { name: "sass", delay: 0.75 },
        { name: "bootstrap", delay: 1 },
        { name: "tailwind", delay: 1.25 }
      ],
      secondSkills: [
        { name: "js", delay: 0.25 },
        { name: "node", delay: 0.5 },
        { name: "vue", delay: 0.75 },
        { name: "vuetify", delay: 1 },
        { name: "jest", delay: 1.25 },
        { name: "nuxt", delay: 1.5 }
      ],
      thirdSkills: [
        { name: "git", delay: 0.25 },
        { name: "github", delay: 0.5 },
        { name: "netlify", delay: 0.75 },
        { name: "docker", delay: 1 },
        { name: "figma", delay: 1.25 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.skill {
  background-image: url("~@/assets/img/stone-back.jpg");
  background-repeat: repeat;
  padding: 80px 0 150px;
  position: relative;
  z-index: 1;
  &__title {
    width: 100%;
    line-height: 1;
  }
  &__subtitle {
    font-size: 1rem;
    font-weight: normal;
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
  }
  &__border {
    border-style: dotted;
    width: 95%;
    margin: 0 auto;
  }
  &__back {
    font-size: 15vw;
    font-weight: bolder;
    font-style: italic;
    color: #d9d9d9;
    opacity: 0.7;
    position: absolute;
    top: 28%;
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
</style>
