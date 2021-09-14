<template>
  <v-container fluid>
      <ContactConfirm />
  </v-container>
</template>

<script>
export default {
  // metaタグ設定
  head() {
    return {
      title: "confirm Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "contactの確認ページです。お問い合わせの確認ページです。"
        }
      ]
    };
  },
  data(){
    return {
      header: {
        title: '確認' //ヘッダータイトル
      }
    }
  },
}
  </script>
