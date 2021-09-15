<template>
<v-container fluid>
  <v-row justify="center" tag="section" align="center" class="conmp">
    <h2 class="text-center text-uppercase my-4 conmp__title">
      <v-icon class="mr-1" color="black">mdi-email-send-outline</v-icon>お問い合わせ送信完了    
    </h2>
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-title>お問い合わせありがとうございました。</v-card-title>
        <!-- <v-card-subtitle>サブタイトル</v-card-subtitle> -->
        <v-card-text class="conmp__text">
          <p>
            ご入力いただいたメールアドレス宛に返信いたします。
          </p>
          <p>
            万一、返信メールが届かない場合は、送信トラブル等の可能性もありますので、大変お手数ではございますが、もう一度フォームよりお問い合わせお願いいたします。
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
    // metaタグ設定
  head() {
    return {
      title: "complete Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "お問い合わせの完了ページです。"
        }
      ]
    };
  },
  data(){
    return {
      header: {
        title: 'complete' //内容確認ヘッダータイトル
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
};
</script>

<style lang="scss" scoped>
.conmp {
  // margin-bottom: 100px;
  &__title {
    width: 100%;
  }
}
</style>
