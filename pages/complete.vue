<template>
  <v-container fluid>
    <Breadcrumbs :items-data="breadData" />
    <StepBar />
    <v-row justify="center" tag="section" align="center" class="conmp">
      <h2 class="text-center my-4 conmp__title">
        <v-icon class="mr-1 v-t" large color="black">{{
          mdiEmailFastOutline
        }}</v-icon
        >お問い合わせ送信完了
      </h2>
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="pt-4">
          <v-card-title class="justify-center"
            ><FadeSlide
              >お問い合わせありがとうございました</FadeSlide
            ></v-card-title
          >
          <svg viewBox="0 0 299.803 190.481" class="conmp__svg">
            <use xlink:href="#illustrationEmail" x="0" y="0"></use>
          </svg>
          <v-card-text class="conmp__text">
            <p class="font-weight-bold">
              <v-icon color="#ff1493">{{ mdiAlertCircle }}</v-icon>
              ご入力いただいたメールアドレス宛てに受付完了のメールを自動で送信いたしましたのでご確認ください。
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
import { mdiEmailFastOutline, mdiAlertCircle } from "@mdi/js";
export default {
  // metaタグ設定
  head() {
    return {
      title: "Portfolioのお問い合わせ完了ページ",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "エンジニアのportfolio(ポートフォリオ)サイトのお問い合わせの完了をお知らせするページです。",
        },
      ],
    };
  },
  data() {
    return {
      mdiEmailFastOutline,
      mdiAlertCircle,
      header: {
        title: "completion", //ヘッダータイトル
      },
      breadData: [
        //パンくず
        {
          text: "top",
          disabled: false,
          path: "/",
        },
        {
          text: "お問い合わせ",
          disabled: false,
          path: "/contact",
        },
        {
          text: "確認",
          disabled: true,
          path: "/confirm",
        },
        {
          text: "送信完了",
          disabled: true,
          path: "/complete",
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
    },
  },
};
</script>

<style lang="scss" scoped>
.conmp {
  padding: 15px 0 100px;
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
.v-t {
  vertical-align: top;
}
</style>
