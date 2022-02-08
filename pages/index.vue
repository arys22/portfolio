<template>
  <div class="index">
    <TopFv />
    <Message id="message" />
    <v-container fluid class="index__container">
      <Skill id="skill" />
      <List id="list" />
      <ContactSpace />
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
    title: "Portfolio(ポートフォリオ) webスキル、制作物を紹介",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "エンジニアのportfolio(ポートフォリオ)サイトです。習得したwebスキル、制作物をまとめて紹介しています。"
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
</style>
