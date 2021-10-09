<template>
  <v-container fluid>
    <v-row  justify="center" class="list__Wrapper">
      <v-col cols="12" sm="11" lg="9" class="list__wrap" >
        <!-- <p>
          <v-icon>mdi-cursor-default-click-outline</v-icon>
          詳細表示
        </p> -->
        <!-- cursor-default-click-outline -->
        <!-- magnify-expand -->
        <v-sheet tag="section" class="pa-4 mt-2 mb-12">
            <h2 class="text-capitalize mt-2 mb-6 mx-2 list__title">
            コーディング
            <span class="text-subtitle-2">coding</span>
            </h2>
            <Coding/>
          <v-row >
            <!-- <Product/> -->
            <v-col cols="12" sm="6" class="list__box" >
              <v-card>
                <v-img
                  src="https://via.placeholder.com/500x375"
                  alt="デモ"
                  max-height="200"
                ></v-img>
                  <!-- max-width="300"
                  max-height="200" -->
                <v-card-title>タイトル</v-card-title>
                <v-card-subtitle>サブタイトル</v-card-subtitle>
                <v-card-text>本文</v-card-text>
                <v-card-actions>アクション</v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" class="list__box" >
              <v-card>
                <v-card-title>タイトル</v-card-title>
                <v-card-subtitle>サブタイトル</v-card-subtitle>
                <v-card-text>本文</v-card-text>
                <v-card-actions>アクション</v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>

        <v-sheet tag="section" class="pa-4 mt-2 mb-12" >
            <h2 class="text-capitalize mt-2 mb-3 mx-2 list__title">
            コーディング
            <span class="text-subtitle-2">coding</span>
            </h2>
          <v-row  >
            <v-col cols="12" sm="6" class="list__box" >
              <v-card>
                <v-img
                  src="https://via.placeholder.com/500x375"
                  alt="デモ"
                  max-height="200"
                ></v-img>
                  <!-- max-width="300"
                  max-height="200" -->
                <v-card-title>タイトル</v-card-title>
                <v-card-subtitle>サブタイトル</v-card-subtitle>
                <v-card-text>本文</v-card-text>
                <v-card-actions>アクション</v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" class="list__box" >
              <v-card>
                <v-card-title>タイトル</v-card-title>
                <v-card-subtitle>サブタイトル</v-card-subtitle>
                <v-card-text>本文</v-card-text>
                <v-card-actions>アクション</v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // metaタグ設定
  head() {
    return {
      title: "list Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "listページです。ポートフォリオ一覧ページです。"
        }
      ]
    };
  },
  data() {
    return {
      header: {
        title: "list" //ヘッダータイトル
      }
    };
  },
  mounted() {
    this.updateHeader(); //ヘッダータイトル
  },
  methods: {
    updateHeader() {
      //ヘッダータイトルとして使いたい情報を渡す
      this.$nuxt.$emit("updateHeader", this.header.title);
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  &__title{
    font-size: 1.25rem;
  }
}
</style>
