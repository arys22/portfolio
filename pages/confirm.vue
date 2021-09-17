<template>
  <v-container fluid>
    <StepBar />
    <Confirm />
  </v-container>
</template>

<script>
export default {
  middleware: 'authConfirm',
  // metaタグ設定
  head() {
    return {
      title: "confirm Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "お問い合わせの確認ページです。"
        }
      ]
    };
  },
  data() {
    return {
      header: {
        title: "confirm" //内容確認ヘッダータイトル
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
