<template>
  <div class="mouse" ref="stalker">
    <div class="mouse__stalker" :class="{ up: mouseUp,down:mouseDown }"></div>
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
    }
  },
  methods: {
    transformStalker() {
      let y = this.mouseY - this.$vuetify.application.top;
      this.$refs.stalker.style.transform =
        "translate(" + this.mouseX + "px, " + y + "px) ";
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
  top: 0;
  left: 0;
  z-index: 4;
  pointer-events: none;
  // 重なると反転
  mix-blend-mode: difference;
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
    background: #ddd;
    // 内側の要素が常に真ん中に来る
    // flex-shrink: 0 ;
    transition: all .3s;
  }
}


.down{
    transform: scale(.8);
}
.up {
  animation: shrink .5s ease-out 1;
}
@keyframes shrink {
  from {
    transform: scale(.8);
    box-shadow: 0 0 5px inset #000;
    opacity: 1;
  }
  to {
    transform: scale(.2);
    opacity: 0;
  }
}
</style>
