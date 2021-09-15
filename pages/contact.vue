<template>
  <v-container fluid>
    <StepBar />
    <ContactForm />
  </v-container>
</template>

<script>
export default {
  // metaタグ設定
  head() {
    return {
      title: "contact Page",
      meta: [
        {
          hid: "description", //hidキー 個別ページ
          name: "description",
          content: "contactページです。お問い合わせページです。"
        }
      ]
    };
  },
  data() {
    return {
      header: {
        title: "contact" //ヘッダータイトル
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
