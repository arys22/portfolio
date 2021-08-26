<template>
  <v-container fluid  class="fv blue" :style="style" ref="fv">
    <v-row align="center" no-gutters>
      <FvTitle/>
    </v-row>
        <transition name="down">
          <ScrollDown v-show="show" />
        </transition>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      style: {
        "--wh": "100vh"
      },
      fvHeight: null,
      show: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 100vh WindowSize
      this.getWindowSize();
      window.addEventListener("resize", this.getWindowSize);
      // fvの下座標取得
      this.getFvHeight();
      window.addEventListener("resize", this.getFvHeight);
    });
    setTimeout(() => {
      this.show = true;
    }, 1500);
  },

  methods: {
    // 100vh WindowSize - headerの高さ
    getWindowSize() {
      this.style["--wh"] = `${window.innerHeight -
        this.$vuetify.application.top}px`;
    },
    // fvの下座標取得
    getFvHeight() {
      const dom = this.$refs.fv;
      this.fvHeight = dom.getBoundingClientRect().height;
      // Headerに値を渡す
      this.$nuxt.$emit("getFvHeight", this.fvHeight);
    }
  }
};
</script>

<style lang="scss" scoped>
.fv {
  min-height: 100vh;
  min-height: calc(var(--wh, 100vh));
  position: relative;
  display: flex;
  align-items: center;
  padding: 4%;
}

// スライド スクロールdown
.down-enter-active,
.down-leave-active {
  transition: transform 2.5s ease-in;
  transform: translate(0px, 0px);
}
.down-enter,
.down-leave-to {
  transform: translateY(-100vh) translateY(0px);
}
</style>
