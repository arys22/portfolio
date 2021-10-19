<template>
  <transition
    name="ripple"
    tag="div"
    @enter="rippleEnter"
    @after-enter="afterRippleEnter"
  >
    <div v-show="rip" ref="ripples" class="ripple">
      <span class="ripple__item" v-for="i in 3" :key="i" :style="styles"/>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    mouseX: {
      type: Number,
      default:0,
    },
    mouseY: {
      type: Number,
      default:0,
    },
    rip: {
      type: Boolean,
      default:false,
    }
  },
  data() {
    return {
      index: 0,
      bdColor: ["#0ff", "#ff0", "#f00", "#00f", "#f0f","#666","#eee" ],
      styles:{
        borderColor:'transparent',
      },
    };
  },
  methods: {
    rippleEnter() {
      this.$refs.ripples.style.top = `${this.mouseY}px`;
      this.$refs.ripples.style.left = `${this.mouseX}px`;
    },
    afterRippleEnter() {
      this.$parent.rip = false;
    },
    changeRippleColor() {
      this.styles['borderColor']= this.bdColor[this.index];
      this.index < this.bdColor.length - 1 ? this.index ++ : this.index = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.ripple {
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
    border: 4px solid ;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0;
    &:nth-of-type(2) {
      transform: translate(-50%, -50%) scale(.7);
      animation: wave 1.6s ease-out 1;
    }
    &:nth-of-type(3) {
      transform: translate(-50%, -50%) scale(.4);
      animation: wave 3.2s ease-out 1;
    }
    animation: wave .6s ease-out 1;
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
