<template>
  <v-row justify="center" tag="section" align="center" class="list">
    <!-- 制作一覧 -->
      <Fade>
    <h2 class="text-center text-capitalize my-4 list__title">
        <v-icon class="mr-1" color="black">mdi-view-list</v-icon
        >制作物<br /><span class="list__subtitle f-f">list</span>
    </h2>
      </Fade>
    <v-col cols="12" sm="10" lg="8" class="list__wrap">
      <Fade>
        <Carousel />
      </Fade>
      <FadeIn>
        <Btn @click.native="transitionPage" class="mt-8 mb-16 list__btn"
          >一覧</Btn
        >
      </FadeIn>
      <FadeIn>
        <v-card class="list__card py-8" tag="section">
          <v-row class="mx-0">
            <v-col cols="12" md="5">
              <Fade>
                <v-img
                  :src="require('@/assets/img/portfolio/Portfolio.png')"
                  alt="Portfolioサイト"
                  max-width="250"
                  max-height="350"
                  class="mx-auto list__img"
                  position="center top"
                ></v-img>
              </Fade>
            </v-col>

            <v-col cols="12" md="7">
              <v-card-title>
                <FadeSlide>
                  <h3 class="f-f">Portfolio</h3>
                </FadeSlide>
              </v-card-title>
              <FadeSlide>
                <v-card-subtitle class="f-f">
                  HTML/CSS(SCSS)/Vuetify/Nuxt.js
                </v-card-subtitle>
              </FadeSlide>
              <v-divider class="list__border" />
              <v-card-text>
                <Fade>
                  <ul>
                    <li>レスポンシブ(モバイルファースト)</li>
                    <li>ライブラリ(vue-typer, vue-parallax-js)</li>
                    <li>デザインは引き算を心がけました。</li>
                    <li>ロゴ作成</li>
                    <li>オープニングアニメーション</li>
                    <li>
                      ヘッダーメニュー(fv過ぎたら色変化)・sp時バーガーメニュー・ボトムナビ(上スクロール時のみ表示)・ページ内リンク
                    </li>
                    <li>svg操作</li>
                    <li>
                      FirstViewを工夫しました。clickやマウスを動かしてみてください。
                    </li>
                    <li>fadeアクション5種類</li>
                    <li>listページのモーダルの見やすさを工夫しました。</li>
                    <li>パンくずリスト</li>
                    <li>
                      フォームはgoogleフォームと連携・スプレッドシートで管理・受付時に自動返信メール・入力チェック・確認ページ・完了ページ
                    </li>
                    <li>ナビゲーションガード</li>
                    <li>Google Analytics ｱﾅﾘﾃｨｸｽ導入</li>
                    <li>Google Search Console ｻｰﾁｺﾝｿｰﾙ導入</li>
                    <li>SSG（Static Site Generator）</li>
                    <li>Netlifyでの公開</li>
                    <li>Jest ＋ vue-test-utils でのテストコード記述</li>
                  </ul>
                </Fade>
                <FadeSlide>
                  <p class="mt-7 mb-0">
                    コードの詳細:
                    <a
                      href="https://github.com/arys22/portfolio.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-decoration-none list__link"
                      ><v-icon color="#1976d2" class="list__icon"
                        >mdi-github</v-icon
                      >GitHub</a
                    >
                  </p>
                </FadeSlide>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </FadeIn>
    </v-col>
    <div class="list__back text-uppercase" v-parallax="-0.15">list</div>
  </v-row>
</template>

<script>
export default {
  methods: {
    transitionPage() {
      this.$router.push({ path: "/list" });
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding: 80px 0 150px;
  position: relative;
  &__title {
    line-height: 1;
    width: 100%;
    z-index: 1;
  }
  &__subtitle {
    font-size: 1rem;
    font-weight: normal;
  }
  &__wrap {
    z-index: 1;
  }
  &__btn {
    background-color: #fff;
  }
  &__card {
    width: fit-content;
  }
  &__img {
    box-shadow: 0px 4px 5px -2px rgb(0 0 0 / 20%),
      0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%);
  }
  &__border {
    border-style: dotted;
    width: 95%;
    margin: 0 auto;
  }
  &__icon {
    font-size: 1.25rem !important;
    vertical-align: top !important;
  }
  &__link {
    transition: opacity 0.2s ease-in-out;
    margin-left: 12px;
    position: relative;
    display: inline-block;
    width: 100px;
    position: relative;
    &:hover {
      opacity: 0.7;
      &::after {
        transform: translateX(-2px) rotate(45deg);
        animation: prompt 1.5s ease-in-out infinite;
      }
    }
    &::after {
      content: "";
      right: 10px;
      top: 8px;
      width: 8px;
      height: 8px;
      border-top: 2.5px solid #1976d2;
      border-right: 2.5px solid #1976d2;
      transform: rotate(45deg);
      opacity: 0.4;
      transition: transform 0.3s ease-out;
      position: absolute;
    }
  }
  &__back {
    font-size: 15vw;
    font-weight: bolder;
    font-style: italic;
    color: #d9d9d9;
    opacity: 0.7;
    position: absolute;
    top: 5%;
    left: 3%;
    white-space: nowrap;
    transition: transform 0.7s ease-in-out;
  }
}
</style>
