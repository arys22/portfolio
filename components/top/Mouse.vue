<template>
 <!-- 2重丸マウスストーカー カクつくので一つ採用-->
  <div class="mouse">
    <div class="mouse__coursor" ref="coursor" :class="{ hov: mouseHov }"></div>
    <div
      class="mouse__stalker"
      ref="stalker"
      :class="{ up: mouseUp, down: mouseDown, hov: mouseHov }"
    ></div>
  </div>
</template>

<script>
export default {
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
      let y = this.mouseY + 30;
      this.$refs.stalker.style.transform =
        "translate(" + this.mouseX + "px, " + y + "px) ";
      this.$refs.coursor.style.transform =
        "translate(" + this.mouseX + "px, " + y + "px) ";
    }
  }
};
</script>

<style lang="scss" scoped>
.mouse {
  &__coursor,
  &__stalker {
    border-radius: 50%;
    position: absolute; //bodyの一番左上になるように配置する
    cursor: none; //もともとあるカーソルは見えなくなるようにする
    pointer-events: none; //他の要素がクリックできなくならないように
  }
  &__coursor {
    top: -34px;
    left: -4px;
    width: 8px;
    height: 8px;
    background-color: #fff;
    z-index: 1001; //どの要素よりも一番上になるようにする
    transform: translate(0, 0);
    transition: opacity 0.3s ease-in-out 0.2s;
    &.hov {
      opacity: 0;
    }
  }
  z-index: 4;
  pointer-events: none;
  // 重なると反転
  mix-blend-mode: difference;
  opacity: 0;
  &__stalker {
    top: -45px;
    left: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba($color: #fff, $alpha: 0.3);
    // transition: 0.2s;
    transform: translate(0, 0);
    transition: transform 0.5s cubic-bezier(0, 0, 0.52, 1.13),opacity 0.3s ease-in-out 0.2s;

    // transition: all 0.2s;
    &.hov {
      top: -50px;
      left: -50px;
      width: 100px;
      height: 100px;
      background-color: #fff;
      transition: 0.5s;
    }
  }
}

.down {
  transform: scale(0.8);
}
.up {
  animation: shrink 0.5s ease-out 1;
}
@keyframes shrink {
  from {
    transform: scale(0.8);
    box-shadow: 0 0 5px inset #000;
    opacity: 1;
  }
  to {
    transform: scale(0.2);
    opacity: 0;
  }
}
</style>
