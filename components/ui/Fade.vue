<template>
  <div ref="fade" :class="{ fadeScale: visible, hidden: !visible }" class="fade">
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
  /* height: inherit; */
}

.hidden {
  opacity: 0;
}

.fadeScale {
  opacity: 1;
  animation: fadeScale 2s ease-in-out;
}

@keyframes fadeScale {
  0% {
    opacity: 0;
    /* transform: scale(0.1); */
  }
  100% {
    opacity: 1;
    /* transform: scale(1); */
  }
}
</style>
