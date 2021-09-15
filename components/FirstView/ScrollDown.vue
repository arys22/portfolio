<template>
  <transition name="down">
    <v-btn
      absolute
      right
      bottom
      text
      height="auto"
      plain
      :ripple="false"
      v-show="show"
      @click.stop="
        $vuetify.goTo('#scroll', {
          duration: 800,
          easing: 'easeOutCubic',
          offset: -45
        })
      "
      class="mb-12 mr-n4 text-md-h6"
    >
      <span class="v-btn__text">Scroll down</span>
      <span class="v-btn__mark"></span>
      <span class="v-btn__mark"></span>
      <span class="v-btn__mark"></span>
    </v-btn>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1500);
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  right: 4%;
  transition: transform .5s ease-in-out;
    &:hover{
      color: #000;
      transform: scale(1.05);
      animation: hov 1.5s ease 1;
    }
  &__text {
    writing-mode: vertical-rl;
  }
  &__mark {
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 14px;
    height: 14px;
    margin-left: -6px;
    border-left: 1.8px solid black;
    border-bottom: 1.8px solid black;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb 2s infinite;
    animation: sdb 2s infinite;
    opacity: 0;
    box-sizing: border-box;
    &:nth-of-type(1) {
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }
    &:nth-of-type(2) {
      bottom: -35px;
      -webkit-animation-delay: 0.15s;
      animation-delay: 0.15s;
    }
    &:nth-of-type(3) {
      bottom: -50px;
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
    }
  }
}
@-webkit-keyframes sdb {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes hov {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px) scale(1.025);
  }
  100% {
    transform: translateY(0) scale(1.05);
  }
}

// スライド スクロールdown
.down-enter-active,
.down-leave-active {
  transition: transform 2.5s ease-in;
  transform: translate(0px, 0px);
}
.down-enter,
.down-leave-to {
  transform: translateY(-100vh) translateY(0px);
}
</style>
