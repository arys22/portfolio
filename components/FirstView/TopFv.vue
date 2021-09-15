<template>
  <v-container
    fluid
    class="fv"
    :style="style"
    ref="fv"
    @click="titleEvent"
    @mousemove="cursorCoordinates"
    @mouseenter ="mouse = true"
    @mouseleave ="mouse = false"
    @mousedown="mouseUp = false,mouseDown = true"
    @mouseup="mouseUpChange"
    >
    <!-- 連打防止 追加上
    :class="{invalid:rip}" -->
        <MouseStalker ref="mouseStalker" :mouseX="mouseX" :mouseY="mouseY" :mouseUp="mouseUp" :mouseDown="mouseDown" :mouseHov="mouseHov" :class="{show:mouse}"/>
      <v-row class="fv__row" dense>
        <v-col ref="wrap" class="fv__wrap" cols=12>
          <FvTitle ref="title" />
        </v-col>
          <Fvtext />
      </v-row>
      <div @mouseenter="mouseHov = true" @mouseleave="mouseHov = false">
      <ScrollDown />
      </div>
      <Ripple :mouseX="mouseX" :mouseY="mouseY" :rip="rip"/>
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
      //マウス位置
      mouseX: 0,
      mouseY: 0,
      // 表示,非表示
      mouse: true,
      // クリック
      mouseDown:false,
      mouseUp:false,
      // ホバー時
      mouseHov:false,
      // 波紋
      rip: false,
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
    // クリック時
    titleEvent() {
      //子のmethods
      this.$refs.title.gather();
      this.rip = !this.rip;
    },

    // カーソル座標
    cursorCoordinates(e) {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY - this.$vuetify.application.top;
      if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
      window.requestAnimationFrame(this.transformShadow);// titleのshadow
      //ここに書いた処理はスマホの時は無効
        window.requestAnimationFrame(this.$refs.mouseStalker.transformStalker);//マウスストーカー
      }
    },
    transformShadow(){
      let xAxis = (window.innerWidth / 2 - this.mouseX) / 40;
      let yAxis = (window.innerHeight / 2 - this.mouseY) / 35;
      this.$refs.wrap.style.transform =
        "translateY(" + -yAxis + "px) translateX(" + -xAxis + "px)";
      this.$refs.wrap.style.textShadow =(""+ xAxis/2 + "px " + yAxis/2 + "px 3px rgba(100,100,100,.8),"+ xAxis/1.1 + "px " + yAxis/1.1 + "px 2px rgba(10,10,10,.8)");
    },
    mouseUpChange(){//マウスアップ時
      this.mouseUp = true;
      this.mouseDown = false;
      this.$refs.mouseStalker.bgcChange();//マウスストーカー色変化
    },
  }
};
</script>

<style lang="scss" scoped>
.fv {
  // 2重丸カーソル採用時
  // &,.text,.scroll{
    // cursor: none;
    // }
  cursor: default;
  min-height: 100vh;
  min-height: calc(var(--wh, 100vh));
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  &__row{
  z-index: 2;
  position: relative;
  }
  &__wrap {
    padding: 4%;
    transition: all 0s ease;
    text-shadow:
    -1px -1px 1px rgba(255,255,255,.8),
    1px 1px 2px rgba(170, 170, 170,.8),
    2px 2px 2px rgba(85,85,85,.8),
    3px 3px 2px rgba(0,0,0,.8);
    color:#fefefefe;
  }
}
// 連打防止
// .invalid{
//   pointer-events: none;
// }

.show{
opacity: 1;
}
.shrink {
  transform: scale(0.3);
}
</style>
