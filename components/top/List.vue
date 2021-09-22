<template>
  <v-row justify="center" tag="section" align="center" class="list">
    <v-col cols="12" sm="10" lg="8">
      <!-- 制作一覧 -->
      <h2 class="text-center text-capitalize my-4 list__title">
        <v-icon class="mr-1" color="black">mdi-view-list</v-icon
        >制作物<br /><span class="text-subtitle-1">list</span>
      </h2>
      <Carousel />
      <FadeIn>
      <Btn @click.native="transition" class="my-13">詳細</Btn>
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
  margin-bottom: 150px;
  &__title {
    line-height: 1;
  }
  &__card {
    width: fit-content;
  }
}
</style>
