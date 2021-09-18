<template>
  <v-row justify="center" tag="section" align="center" class="products">
    <v-col cols="12" sm="10" lg="8">
      <!-- 制作実績一覧 -->
      <h2 class="text-center text-uppercase my-4"><v-icon class="mr-1" color="black">mdi-view-list</v-icon>products</h2>
      <Carousel />
      <Btn  @click.native="transition" class="my-13">詳細</Btn>
      <v-card class="products__card">
          <v-row class="mx-0">
            <v-col cols="12" sm="5">
              <v-img src="https://via.placeholder.com/500x375" alt="デモ" max-width="300" max-height="200"></v-img>
            </v-col>
            <v-col cols="12" sm="7">
            <v-card-title>portforio</v-card-title>
            <v-card-subtitle>html/css/vuetify/nuxt.js</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>レスポンシブ(モバイルファースト)</li>
                <li>シンプルなデザインを心がけました。</li>
                <li>fvアクションを工夫しました。</li>
                <li>フォームはgoogleフォームと連携、自動受付完了メール(入力チェック/確認/完了ページ)</li>
                <li>新たに学んだこと(コード)
                  <ul>
                    <li>iOSでの100vh</li>
                    <li>canvas</li>
                    <li>symbol→use</li>
                    <li>ナビゲーションガード</li>
                    <li>Firebaseでの公開 など</li>
                  </ul>
                </li>
              </ul>
                <p class="ma-2">コードの詳細 <a href="https://github.com/arys22/portfolio" target="_blank" rel="noopener">git hub</a></p>
            </v-card-text>
            </v-col>
          </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    transition(){
      this.$router.push({path:'/products'});
    }
  },
};
</script>

<style lang="scss" scoped>
.products {
  margin-bottom: 100px;
  &__card{
    width: fit-content;
  }
}
</style>
