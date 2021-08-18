<template>
  <v-app-bar
    app
    flat
    color="black"
    class="header"
    :class="{ 'header__scroll': scrollY > fvHeight }"
  >
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        color="white"
        plain
        :class="{ 'header__btn': scrollY > fvHeight }"
      >
        <!-- <v-icon class="mr-1">mdi-home-circle-outline</v-icon> -->
        top</v-btn
      >
      <v-btn
        color="white"
        plain
        :class="{ 'header__btn': scrollY > fvHeight }"
        >product</v-btn
      >
      <v-btn
        color="white"
        plain
        :class="{'header__btn': scrollY > fvHeight }"
        >contact</v-btn
      >
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      fvHeight: null,
      scrollY: 0
    };
  },
  created() {
    // createdのタイミングでイベントリスナーを設定
    this.setListener();
  },
  mounted() {
    // スクロール時 スクロール位置を取得
    window.addEventListener("scroll", this.onScroll);
    // ロード時
    window.addEventListener("load", this.onScroll);
  },
   beforeDestroy() {
  // 後処理
  this.$nuxt.$off('getFvHeight')
 },
  methods: {
    setListener() {
      this.$nuxt.$on('getFvHeight', this.setHeader);
    },
    setHeader(e) {
      // 第1引数にはemitで渡した値が入ってくる。
      // 第2引数以降を渡す場合も同様に、それ以降の引数で受け取れる
      const height = Math.floor(e);
      this.fvHeight = height;
      console.log(this.fvHeight);
    },
    // スクロールを検知
    onScroll() {
      this.scrollY = window.scrollY || window.pageYOffset; // window.scrollY はIE11非対応
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  transition: all 0.5s ease-in-out;
  &__scroll {
    background-color: transparent !important;
  }
  &__btn {
    color: #333 !important;
  }
}
</style>
