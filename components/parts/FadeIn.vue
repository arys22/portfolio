<template>
  <div ref="fade" :class="{ fadein: visible, hidden: !visible }" class="fade">
    <slot v-show="visible"></slot>
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
        this.visible = top + 50 < window.innerHeight;
      }
    }
  }
};
</script>

<style scoped>
.fade {
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.hidden {
  opacity: 0;
}

.fadein {
  opacity: 1;
  animation: fadeIn 2s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(50vh) translateX(0px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
</style>
