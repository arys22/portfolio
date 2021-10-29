<template>
  <v-app dark class="app">
      <Opening/>
      <Header :scrollY="scrollY" :title="title"/>
    <v-main>
      <!-- svg用 -->
      <Svgs />
      <Nuxt />
    </v-main>
      <BackTop :scrollY="scrollY"/>
      <BottomNavigation :scrollY="scrollY"/>
    <v-footer absolute class="text-center" padless color="#f5f5f5">
      <v-col class="font-weight-medium text-center py-0" cols="12">&copy; <small>{{ new Date().getFullYear() }} portfolio</small></v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Opening from '~/components/layouts/Opening.vue';
export default {
  components: { Opening },
  data () {
    return {
      scrollY: 0,
      title: '', //ヘッダータイトル
    }
  },
  created() {
  this.setListener()//ヘッダータイトル
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
    setListener() {//ヘッダータイトル
    // emitで発火させたイベント名にする
    this.$nuxt.$on('updateHeader', data => {
        this.title = data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.app{
  overflow: hidden;
}
.v-footer{
  z-index: 4;
}
</style>
