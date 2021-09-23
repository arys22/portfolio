<template>
  <div ref="fade" :class="{ fadein: visible, hidden: !visible }" class="fade">
    <slot v-show="visible"></slot>
  </div>
</template>

<script>
export default {
  props:{
    delay:{
      type:Number,
      default:0,
    }
  },
  data() {
    return {
      visible: false,
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
        // ブラウザの表示領域の左上を(0, 0)とする要素のtopまでの高さ
        // ページが表示される高さwindow.innerHeight
      if (!this.visible && top + 10 < window.innerHeight && top > 10) {
        this.visible = true;
        this.$refs.fade.style.animationDelay = this.delay + "s"
        // console.log("表示");
      }else if (this.visible && top <= 0 || this.visible && top > window.innerHeight) {
        this.visible = false;
        // console.log("非表示");
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
  animation: fadeOut 1.5s ease-in-out forwards;
  opacity: 0;
}

.fadein {
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(35vh) translateX(0px);
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
    transform: translateY(25vh) translateX(0px);
  }
}
</style>
