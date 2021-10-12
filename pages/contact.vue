<template>
  <v-container fluid>
    <Breadcrumbs :items-data="breadData"/>
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
      },
      breadData:[//パンくず
        {
          text: 'top',
          icon:"mdi-home",
          disabled: false,
          path: '/',
        },
        {
          text: 'お問い合わせ',
          disabled: true,
          path: '/contact',
        },
      ],
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
