<template>
  <v-container
    fluid
    class="fv"
    ref="fv"
    @click="titleEvent"
    @mousemove="cursorCoordinates"
    @mouseenter="mouse = true"
    @mouseleave="mouse = false"
    @mousedown="(mouseUp = false), (mouseDown = true)"
    @mouseup="(mouseUp = true), (mouseDown = false)"
    :class="{ invalid: !showTitle }"
  >
    <Fvtext />
    <MouseStalker
      ref="mouseStalker"
      :mouseX="mouseX"
      :mouseY="mouseY"
      :mouseUp="mouseUp"
      :mouseDown="mouseDown"
      :mouseHov="mouseHov"
      :mouse="mouse"
      :color="color"
    />
    <Ripple
      :mouseX="mouseX"
      :mouseY="mouseY"
      :rip="rip"
      :color="color"
      ref="ripple"
    />
    <v-row class="fv__row" dense>
      <v-col ref="wrap" class="fv__wrap" cols="12">
        <FvTitle ref="title" />
      </v-col>
    </v-row>

    <!-- 背景 ラインver-->
    <BgLogo :color="color" :logo="logo" />
    <ScrollDown
      @mouseenter.native="mouseHov = true"
      @mouseleave.native="mouseHov = false"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fvHeight: null,
      //マウス位置
      mouseX: 0,
      mouseY: 0,
      // 表示,非表示
      mouse: false,
      // クリック
      mouseDown: false,
      mouseUp: false,
      showTitle: false,
      // ホバー時
      mouseHov: false,
      // 波紋
      rip: false,
      // logo アニメ on off
      logo: true,
      //クリック時の色変
      color: "#fff",
      index: 0,
      colorList: [
        "#555",
        "#fff",
        "#0ff",
        "#fff",
        "#fd33bb",
        "#fff",
        "#7fff00",
        "#fff"
      ]
      // , "#0ff", "#fff", "#FF53bb",  "#fff"
      //ここまで
    };
  },
  mounted() {
    this.dom = this.$refs.fv; //fv取得
    // // 100vh WindowSize fvの高さ 保留
    // this.getWindowSize();
    // window.addEventListener("resize", this.getWindowSize);

    this.$nextTick(() => {
      //DOM更新後
      // fvの下座標取得
      this.getFvHeight();
      window.addEventListener("resize", this.getFvHeight);
    });

    setTimeout(() => {
      this.showTitle = true;
    }, 3700);
  },
  methods: {
    // // 100vh fv WindowSize - headerの高さ 保留
    // getWindowSize() {
    //   // this.dom.style.height=`${window.innerHeight  - this.$vuetify.application.top}px`;
    //     console.log(window.innerHeight)
    // },

    // fvの下座標取得
    getFvHeight() {
      this.fvHeight = this.dom.getBoundingClientRect().height;
      // Headerに値を渡す
      this.$nuxt.$emit("getFvHeight", this.fvHeight);
    },
    // クリック時
    titleEvent() {
      //子のmethods
      this.$refs.title.gather();
      //色変化 ripple マウスストーカー bg線
      this.color = this.colorList[this.index];
      this.index < this.colorList.length - 1 ? this.index++ : (this.index = 0);

      this.rip = !this.rip; //波紋
      this.logo = !this.logo; //ロゴアニメ
    },

    // カーソル座標
    cursorCoordinates(e) {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY - this.$vuetify.application.top;
      if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
        //ここに書いた処理はスマホの時は無効
        window.requestAnimationFrame(this.$refs.mouseStalker.transformStalker); //マウスストーカー
        window.requestAnimationFrame(this.transformShadow); // titleのshadow
      }
    },

    transformShadow() {
      let xAxis = (window.innerWidth / 2 - this.mouseX) / 40;
      let yAxis = (window.innerHeight / 2 - this.mouseY) / 35;
      this.$refs.wrap.style.textShadow =
        "" + xAxis / 2 + "px " + yAxis / 2 + "px 3px rgba(0,0,0,.8)";
    }
  }
};
</script>

<style lang="scss" scoped>
.fv {
  cursor: default;
  width: 100%;
  height: calc(100vh - 56px);
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  &__row {
    z-index: 5;
    position: absolute;
    pointer-events: none;
  }
  &__wrap {
    padding: 2% 4%;
    transition: all 0s ease;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.8),
      1px 1px 2px rgba(170, 170, 170, 0.8), 2px 2px 2px rgba(85, 85, 85, 0.8),
      3px 3px 2px rgba(0, 0, 0, 0.8);
    color: #fff;
  }
}
//clickさせないため
.invalid {
  pointer-events: none;
}

@media screen and (min-width: 960px) {
  .fv {
    height: calc(100vh - 64px);
  }
}
</style>
