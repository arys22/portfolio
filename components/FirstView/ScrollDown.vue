<template>
  <transition name="down">
    <v-btn
      absolute
      text
      plain
      rounded
      :ripple="false"
      v-show="show"
      @click.stop="
        $vuetify.goTo('#message', {
          duration: 800,
          easing: 'easeOutCubic',
          offset: -45
        })
      "
      class="v-btn py-2"
      height="165"
      small
    >
      <span class="v-btn__mark" v-for="i in 3" :key="i"></span>
      <span class="v-btn__text text-capitalize">scroll down</span>
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
    }, 5800);
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  z-index: 1;
  bottom: 5px;
  right: 4px;
  transition: transform .5s ease-in;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #fff;
    &:hover{
      color: #000;
      transform: scale(1.05);
      animation: hov 1.5s ease 1;
    }
  &__mark {
    position: absolute;
    bottom: -15px;
    left: 50%;
    width: 18px;
    height: 18px;
    margin-left: -9px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
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
      bottom: -30px;
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      bottom: -45px;
      -webkit-animation-delay: 0.4s;
      animation-delay: 0.4s;
    }
  }
  &__text{
    pointer-events: none;
    writing-mode: vertical-rl;
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
    transform:  translateY(0);
  }
  50% {
    transform:  translateY(10px) scale(1.025);
  }
  100% {
    transform:  translateY(0) scale(1.05);
  }
}

// スライド スクロールdown
.down-enter-active,
.down-leave-active {
  transition: transform 2.3s ease-out;
  transform: translatY(0px);
}
.down-enter,
.down-leave-to {
  transform:  translateY(-100vh);
}
</style>
