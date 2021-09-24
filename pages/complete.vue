<template>
  <v-container fluid>
    <StepBar />
    <v-row justify="center" tag="section" align="center" class="conmp">
      <h2 class="text-center  my-4 conmp__title">
        <v-icon class="mr-1" color="black">mdi-email-send-outline</v-icon
        >お問い合わせ送信完了
      </h2>
      <!-- mdi-email-outline -->
      <!-- mdi-email-send-outline -->
      <!-- mdi-email-open-outline -->
      <v-col cols="12" sm="10" md="8" lg="6">
        <FadeIn>
          <v-card>
            <v-card-title class="justify-center"
              >お問い合わせありがとうございました。</v-card-title
            >
            <svg viewBox="0 0 299.803 190.481" class="conmp__svg">
              <use xlink:href="#illustrationEmail" x="0" y="0"></use>
            </svg>
            <v-card-text class="conmp__text">
              <p class="font-weight-bold">
                <v-icon color="#ff1493">mdi-alert-circle</v-icon>
                ご入力いただいたメールアドレス宛てに受付完了のメールを自動で送信いたしましたのでご確認ください。
              </p>
              <p>
                万一、返信メールが届かない場合は、送信トラブル等の可能性もありますので、大変お手数ではございますが、もう一度フォームよりお問い合わせお願いいたします。
              </p>
            </v-card-text>
          </v-card>
        </FadeIn>
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
  data() {
    return {
      header: {
        title: "complete" //内容確認ヘッダータイトル
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
.conmp {
  padding: 15px 0 80px;
  background-color: #f6f6f6;
  &__title {
    width: 100%;
  }
  &__svg {
    display: block;
    margin: 0 auto;
    width: 25%;
  }
}
</style>
