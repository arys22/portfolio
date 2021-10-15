<template>
  <transition name="down">
    <v-btn
      absolute
      right
      bottom
      text
      plain
      :ripple="false"
      v-show="show"
      @click.stop="
        $vuetify.goTo('#message', {
          duration: 800,
          easing: 'easeOutCubic',
          offset: -45
        })
      "
      class="text-md-h6 v-btn"
      height="75"
    >
      <span class="v-btn__mark"></span>
      <span class="v-btn__mark"></span>
      <span class="v-btn__mark"></span>
      <span class="v-btn__text text-capitalize">scroll</span>
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
    }, 5000);
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  left: 50%;
  transform: translateX(-50%);
  transition: transform .5s ease-in;
  display: flex;
  align-items: flex-end;
    &:hover{
      color: #000;
      transform: translateX(-50%) scale(1.05);
      animation: hov 1.5s ease 1;
    }
  &__mark {
    position: absolute;
    top: -23px;
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
      top: -53px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }
    &:nth-of-type(2) {
      top: -38px;
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      -webkit-animation-delay: 0.4s;
      animation-delay: 0.4s;
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
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px) scale(1.025);
  }
  100% {
    transform: translateX(-50%) translateY(0) scale(1.05);
  }
}

// スライド スクロールdown
.down-enter-active,
.down-leave-active {
  transition: transform 2.3s ease-out;
  transform: translate(-50%, 0px);
}
.down-enter,
.down-leave-to {
  transform: translateX(-50%) translateY(-100vh);
}
</style>
