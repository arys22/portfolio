<template>
  <div
    ref="mouse"
    class="mouse"
    :class="{ up: mouseUp, down: mouseDown, hov: mouseHov, show: mouse }"
  ><span class="mouse__text">click!</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      bdColor: ["#0ff", "#ff0", "#f00", "#00f", "#f0f", "#222","#fff"]
    };
  },
  props: {
    mouseX: {
      type: Number,
      default: 0
    },
    mouseY: {
      type: Number,
      default: 0
    },
    mouseDown: {
      type: Boolean,
      default: false
    },
    mouseUp: {
      type: Boolean,
      default: false
    },
    mouseHov: {
      type: Boolean,
      default: false
    },
    mouse: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    transformStalker() {
      this.$refs.mouse.style.transform =
        "translate(" + this.mouseX + "px, " + this.mouseY + "px) ";
    },
    bgcChange() {
      // this.$refs.mouse.style.borderColor= this.bdColor[this.index];
      this.$refs.mouse.style.backgroundColor = this.bdColor[this.index];
      this.index < this.bdColor.length - 1 ? this.index++ : (this.index = 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.mouse {
  z-index: 100;
  pointer-events: none;
  opacity: 0;
  position: absolute;
  top: -16px;
  left: -16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  // border: 4px solid #222;
  background-color: #fff;
  transform: translate(0, 0);
  transition: transform 0.1s ease-out, opacity 0.3s ease-in-out 0.2s, width 0.3s ease, height 0.3s ease;
  // 重なると反転
  mix-blend-mode: difference;
  &.hov {
    // transform: scale(.5);
    top: -50px;
    left: -50px;
    width: 100px;
    height: 100px;
    // opacity: 0.5;
  }
  &.show {
    opacity: 1;
  }
  &.down {
    // transform: scale(1.35);
    top: -20px;
    left: -20px;
    width: 40px;
    height: 40px;
  }
  &.up {
    animation: shrink 0.3s ease-out 1;
  }
  &__text{
    opacity: .5;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
  }
}

@keyframes shrink {
  0% {
    // transform: scale(0.7);
    top: -8px;
    left: -8px;
    width: 16px;
    height: 16px;
  }
  100% {
    top: -15px;
    left: -15px;
    width: 30px;
    height: 30px;
  }
}
</style>
