<template>
  <transition
    name="ripple"
    tag="div"
    @enter="rippleEnter"
    @after-enter="afterRippleEnter"
  >
    <div v-show="rip" ref="ripples" class="ripple">
      <span class="ripple__item" v-for="i in 3" :key="i" />
    </div>
  </transition>
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
    rip: {
      type: Boolean
    }
  },
  methods: {
    rippleEnter() {
      this.$refs.ripples.style.top = `${this.mouseY}px`;
        // - this.$vuetify.application.top
      this.$refs.ripples.style.left = `${this.mouseX}px`;
      // console.log(this.$parent.rip);
    },
    afterRippleEnter() {
      this.$parent.rip = false;
      // console.log(this.$parent.rip);
    }
  }
};
</script>

<style lang="scss" scoped>
.ripple {
  position: absolute;
  transition: all 0.5s;
  &__item {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #999;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0;
    &:nth-of-type(2) {
      border: 1px solid #aaa;
      // animation-delay: 0.2s;
      transform: translate(-50%, -50%) scale(.8);
      animation: wave 1.6s ease-out 1;
    }
    &:nth-of-type(3) {
      border: 1px solid #bbb;
      // animation-delay: 0.1s;
      transform: translate(-50%, -50%) scale(.5);
      animation: wave 3.2s ease-out 1;
    }
    animation: wave .8s ease-out 1;
  }
}
@keyframes wave {
  from {
    width: 50px;
    height: 50px;
    box-shadow: 0 0 30px inset #888;
    opacity: 1;
  }
  to {
    width: 220px;
    height: 220px;
    opacity: 0;
  }
}
</style>
