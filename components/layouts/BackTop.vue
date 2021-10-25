<template>
    <v-tooltip left color="grey" transition="slide-x-reverse-transition" open-delay="300">
        <template v-slot:activator="{ on }">
  <transition name="fade">
    <v-btn
      v-on="on"
      @click="$vuetify.goTo(0, { duration: 1000, easing: 'easeOutCubic' })"
      v-show="scrollY > 500"
      fixed
      bottom
      right
      icon
      elevation="2"
      class="mb-4 mr-n2"
      small
      fab
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </transition>
    </template>
      <span class="text-capitalize">top</span>
      </v-tooltip>
</template>

<script>
export default {
  props: {
    scrollY: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
// フェード
.fade-enter-active,
.fade-leave-active {
  transition: 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}

.v-btn {
  background-color: #fff;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #ddd;
  }
  &:hover > &__content .v-icon {
    color: #fff;
    animation: updown 1.5s ease infinite;
  }
}
@keyframes updown {
  0% {
    transform: translateY(1px);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(1px);
  }
}
</style>
