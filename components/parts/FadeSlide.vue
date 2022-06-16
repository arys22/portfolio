<template>
  <div
    ref="fade"
    class="fade"
    :class="{ fade_slide: visible, hidden: !visible }"
  >
    <!-- span -->
    <template class="fade__inner" :class="{ fade_text: visible }">
      <slot v-show="visible"></slot>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("load", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        var top = this.$refs.fade.getBoundingClientRect().top;
        this.visible = top + 70 < window.innerHeight;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fade {
  transition: transform 0.3s ease-out 0s;
  overflow: hidden;
  display: inline-block;
  &__inner {
    transition: transform 0.3s ease-out 0s;
    display: inline-block;
  }
}

.hidden {
  opacity: 0;
}

.fade_slide {
  opacity: 0;
  animation: slideTextX100 2.5s ease-out 0.5s forwards;
}
.fade_text {
  opacity: 0;
  animation: slideTextX-100 2.5s ease-out 0.5s forwards;
}

@keyframes slideTextX100 {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideTextX-100 {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
