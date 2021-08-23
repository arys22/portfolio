<template>
  <v-app dark>
      <Header :scrollY="scrollY"/>
    <v-main>
      <Nuxt />
    </v-main>
      <ReTop :scrollY="scrollY"/>
      <BottomNavigation :scrollY="scrollY"/>
    <v-footer absolute class="text-center" padless color="#f5f5f5">
      <v-col class="font-weight-medium text-center py-0" cols="12">&copy; <small>{{ new Date().getFullYear() }} portfolio</small></v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      scrollY: 0,
    }
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
  },
};
</script>

<style lang="scss" scoped>
.v-footer{
  z-index: 4;
}
</style>
