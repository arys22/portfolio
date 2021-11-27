<template>
  <v-container fluid>
    <Breadcrumbs :items-data="breadData" />
    <StepBar />
    <Confirm />
  </v-container>
</template>

<script>
export default {
  middleware: "authConfirm",
  // metaタグ設定
  head() {
    return {
      title: "Portfolioの確認ページ",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "エンジニアのportfolio(ポートフォリオ)サイトのお問い合わせの内容をもう一度確認していただくページです。"
        }
      ]
    };
  },
  data() {
    return {
      header: {
        title: "confirmation" //内容確認ヘッダータイトル
      },
      breadData: [
        //パンくず
        {
          text: "top",
          icon: "mdi-home",
          disabled: false,
          path: "/"
        },
        {
          text: "お問い合わせ",
          disabled: false,
          path: "/contact"
        },
        {
          text: "確認",
          disabled: true,
          path: "/confirm"
        }
      ]
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
