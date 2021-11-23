<template>
  <div class="index">
    <TopFv />
    <Message id="message" />
    <v-container fluid class="index__container">
      <Skill id="skill" />
      <List id="list" />
      <div class="contact__space">
        <div class="contact__back text-uppercase" v-parallax="-0.17">
          contact
        </div>
      </div>
      <ContactForm id="contact" />
    </v-container>
    <PageLinks />
  </div>
</template>

<script>
import Opening from "~/components/layouts/Opening.vue";
export default {
  components: { Opening },
  // metaタグ設定
  head: {
    titleTemplate: null,
    title: "portfolio",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "エンジニアのportfolio(ポートフォリオ)サイトです。私のwebスキル、制作物をまとめて紹介しています。"
      }
    ]
  },
  data() {
    return {
      header: {
        title: "portfolio" //ヘッダータイトル
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
.index {
  overflow: hidden;
}
.contact {
  // position: relative;
  &__space {
    width: 100vw;
    height: 65px;
    background-color: #f6f6f6;
    position: relative;
  }
  &__back {
    font-size: 15vw;
    font-weight: bolder;
    font-style: italic;
    color: #d9d9d9;
    opacity: 0.7;
    position: absolute;
    top: 50%;
    left: 3%;
    white-space: nowrap;
    transition: transform 0.7s ease-in-out;
  }
}
</style>
