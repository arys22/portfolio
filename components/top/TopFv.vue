<template>
  <v-container
    fluid
    class="fv blue"
    :style="style"
    ref="fv"
    @click="titleEvent"
    @mousemove="cursorCoordinates">
      <v-row  no-gutters ref="wrap" class="fv__wrap">
        <v-col>
          <FvTitle ref="title" />
          <!-- <Fvtext/> -->
        </v-col>
      </v-row>
      <ScrollDown/>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      style: {
        "--wh": "100vh"
      },
      fvHeight: null
      //カーソル座標
      // mouseX: 0,
      // mouseY: 0,
    };
  },
  mounted() {
    this.dom = this.$refs.fv; //fv取得
    this.$nextTick(() => {//DOM更新後
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
      this.style["--wh"] = `${window.innerHeight -
        this.$vuetify.application.top}px`;
    },
    // fvの下座標取得
    getFvHeight() {
      this.fvHeight = this.dom.getBoundingClientRect().height;
      // Headerに値を渡す
      this.$nuxt.$emit("getFvHeight", this.fvHeight);
    },

    titleEvent() {
      //子のmethods
      this.$refs.title.gather();
    },

    // カーソル座標
    cursorCoordinates(e) {
      // this.fv = this.dom.getBoundingClientRect();
      // this.mouseX = e.clientX - this.fv.left;
      // this.mouseY = e.clientY - this.fv.top;
      // let xAxis = (window.innerWidth / 2 - this.mouseX) / 20;
      // let yAxis = (window.innerHeight / 2 - this.mouseY) / 20;
      // let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
      // let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
      let xAxis = (window.innerWidth / 2 - e.pageX) / 22;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 17;
      this.$refs.wrap.style.transform =
        "translateY(" + -yAxis + "px) translateX(" + -xAxis + "px)";
      this.$refs.wrap.style.textShadow =("" + -xAxis/20 + "px " + -yAxis/20 + "px  1px rgba(255,255,255,.8), "+ xAxis/6 + "px " + yAxis/6 + "px 2px rgb(180, 180, 180,.8),"+ xAxis/4 + "px " + yAxis/4 + "px 2px rgba(100,100,100,.8),"+ xAxis/2 + "px " + yAxis/3 + "px 2px rgba(10,10,10,.8)");

    }
  }
};
</script>

<style lang="scss" scoped>
.fv {
  cursor: pointer;
  min-height: 100vh;
  min-height: calc(var(--wh, 100vh));
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  // overflow: hidden;
  // perspective: calc(100vw/4);//奥行き
  // transform-style: preserve-3d;//3d宣言
  // perspective-origin: 15% 50%;//奥行きの視点
  &__wrap {
    padding: 4%;
    // backface-visibility: hidden;
    transition: all 0s ease;
    // transform-style: preserve-3d;//3d宣言
    // box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    text-shadow:
    -1px -1px 1px rgba(255,255,255,.8),
    1px 1px 2px rgba(170, 170, 170,.8),
    2px 2px 2px rgba(85,85,85,.8),
    3px 3px 2px rgba(0,0,0,.8);
    color:#fefefefe;
    background-color: #fff;
  }
}
// @media screen and(min-width: 960px) {
//   .fv{
//   perspective-origin: 50% 50%;
//   perspective: calc(100vw/3);
//     &__wrap {
//     }
//   }
// }
</style>
