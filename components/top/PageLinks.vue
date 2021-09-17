<template>
  <transition name="in">
    <v-sheet class="d-flex links" tag="nav" elevation="2">
      <v-btn
        icon
        small
        fab
        @click="$vuetify.goTo(0, { duration: 1000, easing: 'easeOutCubic' })"
        v-show="scrollY > 500"
        class="my-1"
        v-for="(link, index) in links"
        :key="index"
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-sheet>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "message", icon: "mdi-file-document-outline" },
        { name: "skill", icon: "mdi-tools" },
        { name: "products", icon: "mdi-view-list" },
        { name: "contact", icon: "mdi-email-outline" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.in-enter-active,
.in-leave-active {
  transition: 1s;
}
.in-enter,
.in-leave-to {
  opacity: 0;
  transform: translateX(-70px);
}
.links {
  flex-direction: column;
  width: 40px;
  position: fixed;
  bottom: 100px;
  right: 20px;
  border-radius: 20px;
}
.v-btn {
  background-color: #fefefe;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #ddd;
  }
  &:hover > &__content .v-icon {
    color: #fff;
    // animation: updown 1.5s ease infinite;
  }
}
</style>
