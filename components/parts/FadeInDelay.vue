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
      if (!this.visible && top + 80 < window.innerHeight ) {
          // ブラウザの表示領域の左上を(0, 0)とする要素のtopまでの高さ
          // ページが表示される高さwindow.innerHeight
        this.visible = true;
        // console.log("表示");
        this.$refs.fade.style.animationDelay = this.delay + "s"
      }else if(this.visible && top + 80 > window.innerHeight){
        this.visible = false;
        // console.log("非表示");
      }
    }
  }
};
</script>

<style scoped>
.fade {
  transition: transform 2.5s cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.hidden {
  opacity: 0;
}

.fadein {
  opacity: 0;
  animation: fadeIn 1.5s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    /* transform: translateX(0px) translateY(40vh) ; */
    transform: scale(.1);
  }
  100% {
    opacity: 1;
    /* transform: translate(0px, 0px); */
    transform: scale(1);
  }
}
</style>
