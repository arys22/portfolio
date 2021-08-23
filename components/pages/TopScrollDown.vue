<template>
  <v-btn
    absolute
    right
    bottom
    text
    height="auto"
    plain
    :ripple="false"
    @click="
      $vuetify.goTo('#scroll', {
        duration: 800,
        easing: 'easeOutCubic',
        offset: -30
      })
    "
    class="mb-12 mr-n4"
  >
    <span class="v-btn__text">Scroll down</span>
    <span class="v-btn__mark"></span>
    <span class="v-btn__mark"></span>
    <span class="v-btn__mark"></span>
  </v-btn>
</template>

<style lang="scss" scoped>
.v-btn {
  &__text {
    writing-mode: vertical-rl;
  }
  &__mark {
    position: absolute;
    bottom: -15px;
    left: 50%;
    width: 14px;
    height: 14px;
    margin-left: -6px;
    border-left: 1.7px solid black;
    border-bottom: 1.7px solid black;
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
      -webkit-animation-delay: 0.15s;
      animation-delay: 0.15s;
    }
    &:nth-of-type(3) {
      bottom: -45px;
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
</style>
