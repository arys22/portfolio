<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // metaタグ設定
  head() {
    return {
      title: "products Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "contactページです。お問い合わせぺーじです。"
        }
      ]
    };
  },
  data(){
    return {
      header: {
        title: 'contact' //ヘッダータイトル
      }
    }
  },
  mounted() {
    this.updateHeader() //ヘッダータイトル
  },
  methods: {
    updateHeader() {
      //ヘッダータイトルとして使いたい情報を渡す
      this.$nuxt.$emit('updateHeader', this.header.title)
    }
  },
}
</script>
