<template>
  <div class="mouse" ref="mouse">
    <div ref="stalker"
      class="mouse__stalker"
      :class="{ up: mouseUp, down: mouseDown, hov: mouseHov }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      bgColor: ["#0ff", "#ff0", "#f00", "#00f", "#f0f", "transparent"]
    };
  },
  props: {
    mouseX: {
      type: Number
    },
    mouseY: {
      type: Number
    },
    mouseDown: {
      type: Boolean
    },
    mouseUp: {
      type: Boolean
    },
    mouseHov: {
      type: Boolean
    }
  },
  methods: {
    transformStalker() {
      let y = this.mouseY + 50;
      this.$refs.mouse.style.transform =
        "translate(" + this.mouseX + "px, " + y + "px) ";
    },
    bgcChange() {
      this.$refs.stalker.style.backgroundColor= this.bgColor[this.index];
      this.index < this.bgColor.length - 1 ? this.index ++ : this.index = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.mouse {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1px;
  height: 1px;
  position: absolute;
  top: -50px;
  left: 0;
  z-index: 5;
  pointer-events: none;
  // 重なると反転
  // mix-blend-mode: difference;
  transform: translate(0, 0);
  transition: transform 0.5s cubic-bezier(0, 0, 0.52, 1.13),
    opacity 0.2s ease-in-out 0.2s;
  opacity: 0;
  &__stalker {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0 0 2px #666;
    opacity: .5;
    // background: rgba($color: #111, $alpha: 0.5);
    // 内側の要素が常に真ん中に来る
    // flex-shrink: 0 ;
    transition: all 0.5s ease-in-out ;
    &.hov {
      top: -50px;
      left: -50px;
      width: 100px;
      height: 100px;
      opacity: 0.2;
      // background-color: rgba($color: #000000, $alpha: .1);
      transition: all 0.5s ease-in-out;
    }
  }
}

.down {
  transform: scale(0.9);
}
.up {
  animation: shrink 0.5s ease-out 1;
}
@keyframes shrink {
  from {
    transform: scale(0.8);
    box-shadow: 0 0 25px inset #aaa;
    opacity: 1;
  }
  to {
    transform: scale(0.2);
    box-shadow: 0 0 20px inset #fdfdfd;
    opacity: 0;
  }
}
</style>
