<template>
  <div
    ref="mouse"
    class="mouse"
    :class="{ up: mouseUp, down: mouseDown, hov: mouseHov, show: mouse }"
    :style="bgColor"
  ></div>
</template>

<script>
export default {
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
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
  methods: {
    transformStalker() {
      this.y = this.mouseY + 100;
      this.$refs.mouse.style.transform =
        "translate(" + this.mouseX + "px, " + this.y + "px) ";
    }
  },
  computed: {
    bgColor() {
      return {
        "--bg-color": this.color
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.mouse {
  will-change: transform, animation;
  z-index: 100;
  pointer-events: none;
  opacity: 0;
  position: absolute;
  top: -122px;
  left: -22px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--bg-color);
  transform: translate(0, 0);
  transition: transform 0.05s ease-out, opacity 0.3s ease-in-out 0.2s,
    width 0.3s ease, height 0.3s ease, top 0.3s ease, left 0.3s ease;
  // 重なると反転
  mix-blend-mode: difference;
  &::after {
    content: "click";
    position: absolute;
    top: 50%;
    left: 48%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-transform: capitalize;
    text-shadow: 1px 1px black;
    pointer-events: none;
  }
  &.hov {
    top: -150px;
    left: -50px;
    width: 100px;
    height: 100px;
  }
  &.show {
    opacity: 1;
  }
  &.down {
    top: -120px;
    left: -20px;
    width: 40px;
    height: 40px;
    &::after {
      content: "";
    }
  }
  &.up {
    animation: shrink 0.3s ease-out 1;
    &::after {
      content: "";
    }
  }
}

@keyframes shrink {
  0% {
    // transform: scale(0.7);
    top: -108px;
    left: -8px;
    width: 16px;
    height: 16px;
  }
  100% {
    top: -115px;
    left: -15px;
    width: 30px;
    height: 30px;
  }
}
</style>
