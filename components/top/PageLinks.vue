<template>
  <v-menu
    rounded="xl "
    bottom
    min-width="50"
    transition="slide-y-transition"
    offset-y
    nudge-bottom="2"
  >
    <!-- メニューのアクティベーター -->
    <template v-slot:activator="{ on: menu }">
      <v-tooltip
        transition="slide-x-reverse-transition"
        open-delay="300"
        left
        color="grey"
      >
        <template v-slot:activator="{ on: tooltip }">
          <transition name="in">
            <v-btn
              role="button"
              aria-label="page menu"
              v-on="{ ...tooltip, ...menu }"
              class="links"
              icon
              large
              elevation="2"
              v-show="navIn"
              @click="change = !change"
              ><v-icon large class="links__icon">{{
                change ? mdiMenuUp : mdiMenuDown
              }}</v-icon></v-btn
            >
          </transition>
        </template>
        <span class="text-capitalize">menu</span>
      </v-tooltip>
    </template>
    <!-- メニューになるコンテンツ -->
    <v-sheet class="links__menu" tag="nav">
      <v-tooltip
        v-for="(link, index) in links"
        :key="index"
        left
        color="grey"
        transition="slide-x-reverse-transition"
        open-delay="300"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            icon
            small
            fab
            @click="
              $vuetify.goTo(`#${link.name}`, {
                duration: 1500,
                easing: 'easeOutCubic',
              })
            "
            class="my-1 v-btn"
          >
            <v-icon>{{ link.icon }}</v-icon>
          </v-btn>
        </template>
        <span class="text-capitalize">{{ link.name }}</span>
      </v-tooltip>
    </v-sheet>
  </v-menu>
</template>

<script>
import {
  mdiMenuUp,
  mdiMenuDown,
  mdiFileDocumentOutline,
  mdiTools,
  mdiViewList,
  mdiEmailOutline,
} from "@mdi/js";
export default {
  data() {
    return {
      mdiMenuUp,
      mdiMenuDown,
      links: [
        { name: "message", icon: mdiFileDocumentOutline },
        { name: "skill", icon: mdiTools },
        { name: "list", icon: mdiViewList },
        { name: "contact", icon: mdiEmailOutline },
      ],
      navIn: false, //アイコン時間差
      change: false, //アイコンクリック
    };
  },
  mounted() {
    setTimeout(() => {
      this.navIn = true;
    }, 1500);
  },
};
</script>

<style lang="scss" scoped>
.in-enter-active,
.in-leave-active {
  transition: 1.3s ease-out;
}
.in-enter,
.in-leave-to {
  transform: translateX(48px);
}
.links {
  position: fixed;
  top: 70px;
  right: 4px;
  z-index: 5;

  background-color: #fff;
  transition: all 0.7s ease-out;
  pointer-events: auto;
  &:hover {
    background-color: #ddd;
  }
  &:hover &__icon {
    color: #fff;
    transform: scale(1.15);
  }
  &__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
  }
}
</style>
