<template>
  <div id="fv" class=" fv green" :style="style" ref="fv">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        "--wh": "100vh"
      },
      fvHeight: null,
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
  },


  methods: {
    // 100vh WindowSize - headerの高さ
    getWindowSize() {
      this.style["--wh"] = `${window.innerHeight - this.$vuetify.application.top}px`;
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
}
</style>
