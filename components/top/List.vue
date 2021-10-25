<template>
  <v-row justify="center" tag="section" align="center" class="list">
    <!-- 制作一覧 -->
    <h2 class="text-center text-capitalize my-4 list__title">
      <v-icon class="mr-1" color="black">mdi-view-list</v-icon>制作物<br /><span
        class="text-subtitle-1"
        >list</span
      >
    </h2>
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
        <v-card class="list__card">
          <v-row class="mx-0">
            <v-col cols="12" md="5">
            <Fade>
              <v-img
                src="https://via.placeholder.com/500x375"
                alt="デモ"
                max-width="300"
                max-height="200"
                class="mx-auto"
              ></v-img>
            </Fade>
            </v-col>

            <v-col cols="12" md="7">
              <v-card-title>
              <FadeSlide>
                portfolio
              </FadeSlide>
                </v-card-title>
              <FadeSlide>
              <v-card-subtitle>HTML/CSS(SCSS)/Vuetify/Nuxt.js</v-card-subtitle>
              </FadeSlide>
              <v-divider class="skill__border"/>
              <v-card-text>
              <Fade>
                <ul>
                  <li>レスポンシブ(モバイルファースト)</li>
                  <li>ライブラリ(vue-parallax-js、vue-typer)</li>
                  <li>デザインとアクションは引き算を心がけました。</li>
                  <li>
                    ヘッダーメニュー：fv過ぎたら色変化、sp時バーガーメニュー、ボトムナビ：上スクロール時表示、ページ内リンク
                  </li>
                  <li>svg操作</li>
                  <li>fvアクションを工夫しました。</li>
                  <li>fadeアクション4種類</li>
                  <li>listページのモーダルの見やすさを工夫しました。</li>
                  <li>
                    フォームはgoogleフォームと連携、自動返信メール、入力チェック/確認ページ/完了ページ
                  </li>
                  <li>ナビゲーションガード</li>
                  <li>SSG（Static Site Generator）</li>
                  <li>Firebaseでの公開</li>
                  <li>
                    <!-- 新たに学んだこと -->
                    <!-- <li>iOSでの100vh</li> -->
                    <!-- <li>canvas</li>
                      <li>symbol→use</li>
                      <li>vuetify使用時は、使用する箇所としない箇所を分ける</li> -->
                  </li>
                </ul>
              </Fade>
              <FadeSlide>
                <p class="mt-7 mb-0">
                  コードの詳細:
                  <a
                    href="https://github.com/arys22/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none list__link"
                    ><v-icon color="#1976d2" class="text-h6">mdi-github</v-icon>GitHub</a
                  >
                </p>
                </FadeSlide>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
        </FadeIn>
    </v-col>
    <div class="list__back text-uppercase" v-parallax="-0.17">list</div>
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
  padding: 80px 0 100px;
  position: relative;
  &__title {
    line-height: 1;
    width: 100%;
    z-index: 1;
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
  &__link {
    transition: opacity 0.2s ease-in-out;
    margin-left: 12px;
    position: relative;
    display: inline-block;
    width: 90px;
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
      right: 0px;
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
