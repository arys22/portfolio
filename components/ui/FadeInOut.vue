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
      var top = this.$refs.fade.getBoundingClientRect().top;
      if (!this.visible && top + 60 < window.innerHeight) {
        this.visible = true;
        console.log("表示");
      } else if (this.visible && top + 40 > window.innerHeight) {
        this.visible = false;
        console.log("非表示");
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
  animation: fadeOut 1.5s;
  opacity: 0;
}

.fadein {
  opacity: 1;
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30vh) translateX(0px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  100% {
    opacity: 0;
    transform: translateY(20vh) translateX(0px);
  }
}
</style>
