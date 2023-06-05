<template>
  <v-row justify="center" tag="section" align="center" class="skill">
    <Fade>
      <h2 class="text-center text-capitalize my-4 skill__title">
        <v-icon class="mr-1" large color="black">{{ mdiTools }}</v-icon
        >Web技術<br /><span class="skill__subtitle f-f">skill</span>
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
        <!-- html・css -->
        <v-col cols="12" md="6" xl="3" class="skill__box">
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
                    <li>「見やすく、編集しやすく、簡潔に」。</li>
                    <li>
                      レスポンシブ(モバイルファーストorデスクトップファースト)
                    </li>
                    <li>内部SEOを意識、且つW3Cに準拠したコーディング。</li>
                    <li>
                      SCSSで BEM記法、又は
                      FLOCSSで記述しています。(自作のテンプレート使用)
                    </li>
                    <li>svgアニメーション</li>
                    <li>Dart Sass・Bootstrap・★TailwindCSS</li>
                    <li>TailwindCSSが好きです。</li>
                    <li>XD、Figmaからのコーディング</li>
                  </ul>
                </v-card-text>
              </Fade>
            </v-card>
          </FadeIn>
        </v-col>
        <!-- JavaScript・TypeScript -->
        <v-col cols="12" md="6" xl="3" class="skill__box">
          <FadeIn>
            <v-card class="py-4" tag="section">
              <v-card-title>
                <FadeSlide>
                  <h3>JavaScript・TypeScript</h3>
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
                <FadeSlide> JavaSript・TypeScript・Node.js </FadeSlide>
              </v-card-subtitle>
              <v-divider class="skill__border" />
              <Fade>
                <v-card-text>
                  <ul>
                    <li>Vanilla JavaScript</li>
                    <li>TypeScript</li>
                    <li>gulp</li>
                    <li>Web Storage(localStorage)</li>
                    <li>PageSpeed Insightsのスコア改善(Web Worker等)</li>
                  </ul>
                </v-card-text>
              </Fade>
            </v-card>
          </FadeIn>
        </v-col>
        <!-- Vue・Nuxt -->
        <v-col cols="12" md="6" xl="3" class="skill__box">
          <FadeIn>
            <v-card class="py-4" tag="section">
              <v-card-title>
                <FadeSlide>
                  <h3>Vue・Nuxt</h3>
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
                  Vue.js(2,3)・Nuxt.js(2,3)・VueRouter・Vuex・Pinia・Vuetify・Vue
                  Test Utils・Jest
                </FadeSlide>
              </v-card-subtitle>
              <v-divider class="skill__border" />
              <Fade>
                <v-card-text>
                  <ul>
                    <li>Vue2 Nuxt2(Options API)</li>
                    <li>Vue3 Nuxt3(Composition API、composables)</li>
                    <li>Vite、VueRouter、Vuex、Pinia、Vuetify</li>
                    <li>vue-test-utils + Jest テストコード</li>
                    <li>Atomic Design</li>
                    <li>
                      Todoアプリ・カレンダー・iTunesのAPIを使用したiTunesSearch・無限スクロール・ページネーション・ドラッグ＆ドロップ機能・スワイプ機能・ログイン機能・等
                    </li>
                    <li>今はVue.js・nuxt.jsが一番好きです。</li>
                  </ul>
                </v-card-text>
              </Fade>
            </v-card>
          </FadeIn>
        </v-col>
        <!-- その他 -->
        <v-col cols="12" md="6" xl="3" class="skill__box">
          <FadeIn>
            <v-card class="py-4" tag="section">
              <v-card-title class="text-uppercase">
                <FadeSlide>
                  <h3>その他</h3>
                </FadeSlide>
              </v-card-title>
              <div class="skill__icon">
                <template v-for="(skill, index) in fourthSkills">
                  <FadeInDelay :delay="skill.delay" :key="index">
                    <svg viewBox="0 0 256 300" class="svg">
                      <use :xlink:href="'#' + skill.name" x="0" y="0"></use>
                    </svg>
                  </FadeInDelay>
                </template>
              </div>
              <v-card-subtitle class="skill__subtitle f-f">
                <FadeSlide>
                  Git・GitHub・Docker・Figma・Netlify・Cloudflare・GooglePlay
                </FadeSlide>
              </v-card-subtitle>
              <v-divider class="skill__border" />
              <Fade>
                <v-card-text>
                  <ul>
                    <li>エディタ：Visual Studio Code</li>
                    <li>デプロイ：Netlify、GitHub Pages、Cloudflare</li>
                    <li>デザイン：Figma、XD</li>
                    <li>Figmaでプロトタイプ、ロゴ制作</li>
                    <li>GooglePlayでアプリ配信</li>
                    <li>Git/GitHub プルリクエスト</li>
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
    <div class="skill__back text-uppercase" v-parallax="0.16">skill</div>
  </v-row>
</template>

<script>
import { mdiTools } from "@mdi/js";
export default {
  data() {
    return {
      mdiTools,
      // アイコン
      firstSkills: [
        { name: "html", delay: 0.25 },
        { name: "css", delay: 0.5 },
        { name: "sass", delay: 0.75 },
        { name: "bootstrap", delay: 1 },
        { name: "tailwind", delay: 1.25 },
      ],
      secondSkills: [
        { name: "js", delay: 0.25 },
        { name: "typescript", delay: 0.5 },
        { name: "node", delay: 0.75 },
      ],
      thirdSkills: [
        { name: "vue", delay: 0.25 },
        { name: "nuxt", delay: 0.5 },
        { name: "nuxt3", delay: 0.75 },
        { name: "vuetify", delay: 1 },
        { name: "vite", delay: 1.25 },
        { name: "pinia", delay: 1.5 },
        { name: "jest", delay: 1.75 },
      ],
      fourthSkills: [
        { name: "git", delay: 0.2 },
        { name: "github", delay: 0.4 },
        { name: "netlify", delay: 0.6 },
        { name: "cloudflare", delay: 0.8 },
        { name: "docker", delay: 1 },
        { name: "figma", delay: 1.2 },
        { name: "xd", delay: 1.4 },
        { name: "markdown", delay: 1.6 },
        { name: "vsc", delay: 1.8 },
        { name: "googleplay", delay: 2 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skill {
  background-image: url("~@/assets/img/stone-back.webp"),
    url("~@/assets/img/stone-back.jpg");
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
