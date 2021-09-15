<template>
  <div class="mouse" ref="mouse">
    <div ref="stalker"
      class="mouse__stalker"
      :class="{ up: mouseUp, down: mouseDown, hov: mouseHov }"
    ></div>
    <div class="mouse__text">click!</div>
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
    top: -12px;
    left: -12px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0 0 2px #666;
    opacity: .5;
    // background: rgba($color: #111, $alpha: 0.5);
    transition: all .3s ease-in-out ;
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
  &__text{
    opacity: .2;
    position: absolute;
    top: 12px;
  }
}

.down {
  transform: scale(1.3);
}
.up {
  animation: shrink 0.3s ease-out 1;
}
@keyframes shrink {
  from {
    transform: scale(0.7);
    box-shadow: 0 0 25px inset #555;
  }
  to {
    transform: scale(1);
    box-shadow: 0 0 5px inset #ddd;
  }
}
</style>
