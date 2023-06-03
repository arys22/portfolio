<template>
  <v-tooltip
    left
    color="grey"
    transition="slide-x-reverse-transition"
    open-delay="300"
  >
    <template v-slot:activator="{ on }">
      <transition name="fade">
        <v-btn
          v-on="on"
          href="https://twitter.com/arieight_8"
          target="_blank"
          rel="noopener noreferrer"
          v-show="scrollY > 500"
          fixed
          elevation="2"
          class="btn pa-2"
          height="44"
          width="44"
          fab
          icon
        >
          <svg viewBox="0 0 248 204" class="svg">
            <use xlink:href="#twitter" x="0" y="0"></use>
          </svg>
        </v-btn>
      </transition>
    </template>
    <span class="text-capitalize">Twitterページへ</span>
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
  }
}
.btn {
  right: 4px;
  bottom: 124px;
}
</style>
