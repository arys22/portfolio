<template>
  <v-app dark class="app">
    <Opening />
    <Header :scrollY="scrollY" :title="title" />
    <v-main>
      <!-- svg用 -->
      <Svgs />
      <Nuxt />
    </v-main>
    <Twitter :scrollY="scrollY" />
    <BackTop :scrollY="scrollY" />
    <BottomNavigation :scrollY="scrollY" />
    <v-footer absolute class="text-center" padless color="#f5f5f5">
      <v-col class="font-weight-medium text-center py-0 f-f" cols="12">
        <small
          >Google Play および Google Play ロゴは Google LLC の商標です。<br />Copyright
          &copy;{{ new Date().getFullYear() }} arieght All rights
          reserved.</small
        ></v-col
      >
    </v-footer>
  </v-app>
</template>

<script>
import Opening from "~/components/layouts/Opening.vue";
export default {
  components: { Opening },
  data() {
    return {
      scrollY: 0,
      title: "" //ヘッダータイトル
    };
  },
  created() {
    this.setListener(); //ヘッダータイトル
  },
  mounted() {
    // スクロール時 スクロール位置を取得
    window.addEventListener("scroll", this.onScroll);
    // ロード時
    window.addEventListener("load", this.onScroll);
  },
  methods: {
    // スクロールを検知
    onScroll() {
      this.scrollY = window.scrollY || window.pageYOffset; // window.scrollY はIE11非対応
    },
    setListener() {
      //ヘッダータイトル
      // emitで発火させたイベント名にする
      this.$nuxt.$on("updateHeader", data => {
        this.title = data;
      });
    }
  },
  // linkタグのcanonical設定
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: `https://arieight-portfolio.netlify.app${this.$route.path}`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  overflow: hidden;
}
.v-footer {
  z-index: 4;
}
</style>
