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
      <FadeIn>
        <Carousel />
      </FadeIn>
      <FadeIn>
        <Btn @click.native="transition" class="mt-8 mb-16 list__btn">一覧</Btn>
      </FadeIn>
      <FadeIn>
        <v-card class="list__card">
          <v-row class="mx-0">
            <v-col cols="12" sm="5">
              <v-img
                src="https://via.placeholder.com/500x375"
                alt="デモ"
                max-width="300"
                max-height="200"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="7">
              <v-card-title>portfolio</v-card-title>
              <v-card-subtitle>html/css/vuetify/nuxt.js</v-card-subtitle>
              <v-card-text>
                <ul>
                  <li>レスポンシブ(モバイルファースト)</li>
                  <li>シンプルなデザインを心がけました。</li>
                  <li>fvアクションを工夫しました。</li>
                  <li>
                    フォームはgoogleフォームと連携、自動返信メール(入力チェック/確認/完了ページ)
                  </li>
                  <li>
                    新たに学んだこと(コード)
                    <ul>
                      <li>iOSでの100vh</li>
                      <li>canvas</li>
                      <li>symbol→use</li>
                      <li>ナビゲーションガード</li>
                      <li>Firebaseでの公開 など</li>
                    </ul>
                  </li>
                </ul>
                <p class="ma-2">
                  コードの詳細
                  <a
                    href="https://github.com/arys22/portfolio"
                    target="_blank"
                    rel="noopener"
                    >git hub</a
                  >
                </p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </FadeIn>
    </v-col>
    <div class="list__bg text-uppercase" v-parallax.horizontal="-0.2">portfolio<br>list</div>
  </v-row>
</template>

<script>
export default {
  methods: {
    transition() {
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
  &__btn{
    background-color: #fff;
  }
  &__card {
    width: fit-content;
  }
  &__bg {
    font-size: 15vw;
    font-weight: bolder;
    font-style: italic;
    color: #d9d9d9;
    opacity: 0.7;
    position: absolute;
    top: 0%;
    left: 3%;
    white-space: nowrap;
    transition: transform 0.5s ease-in-out;
  }
}
</style>
