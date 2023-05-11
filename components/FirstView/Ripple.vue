<template>
  <transition
    name="ripple"
    tag="div"
    @enter="rippleEnter"
    @after-enter="afterRippleEnter"
  >
    <div v-show="rip" ref="ripples" class="ripple">
      <span class="ripple__item" v-for="i in 3" :key="i" :style="borderColor" />
    </div>
  </transition>
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
    rip: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#eee"
    }
  },
  data() {
    return {};
  },
  methods: {
    rippleEnter() {
      this.$refs.ripples.style.top = `${this.mouseY}px`;
      this.$refs.ripples.style.left = `${this.mouseX}px`;
    },
    afterRippleEnter() {
      this.$parent.rip = false;
    }
  },
  computed: {
    borderColor() {
      return {
        "--border-color": this.color
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.ripple {
  pointer-events: none;
  position: absolute;
  transition: all 0.6s;
  z-index: 100;
  // 重なると反転
  mix-blend-mode: difference;
  &__item {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border: 4px solid;
    border-radius: 50%;
    border-color: var(--border-color);
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0;
    will-change: animation;
    &:nth-of-type(2) {
      transform: translate(-50%, -50%) scale(0.7);
      animation: wave 1.6s ease-out 1;
    }
    &:nth-of-type(3) {
      transform: translate(-50%, -50%) scale(0.4);
      animation: wave 3.2s ease-out 1;
    }
    animation: wave 0.6s ease-out 1;
  }
}
@keyframes wave {
  from {
    width: 80px;
    height: 80px;
    opacity: 1;
    border-width: 4px;
  }
  to {
    width: 350px;
    height: 350px;
    opacity: 0;
    border-width: 0px;
  }
}
</style>
