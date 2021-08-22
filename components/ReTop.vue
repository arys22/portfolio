<template>
<transition name="fade">
  <v-btn @click="$vuetify.goTo(0,{duration:1200,easing: 'easeOutQuart'})" v-show="scrollY>500" fixed bottom right icon elevation=1 class="mb-4 mr-1" small fab>
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
</transition>
</template>

<script>
export default {
  props: {
    scrollY: {
      type: Number,
      default: 0
    }
  },
};
</script>

<style lang="scss" scoped>
// フェード
.fade-enter-active, .fade-leave-active {
  transition: 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
