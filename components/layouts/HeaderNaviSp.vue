<template>
  <v-list nav>
    <v-subheader class="ml-3">メニュー</v-subheader>
    <!-- plugins/constrants.jsのmenuItems -->
    <v-list-item
      nuxt
      exact
      dense
      :to="item.path"
      exact-active-class="sp__list-active"
      v-for="(item, index) in $ITEMS.menuItems"
      :key="index"
      class="sp__list text-uppercase mx-1 f-f"
    >
      <v-list-item-icon class="ml-3 mr-2">
        <v-icon left color="#999">{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<style lang="scss" scoped>
.sp {
  &__list {
    border-bottom: 1px dotted rgba(255, 255, 255, 0.24);
  }
  &__list-active {
    & .v-list-item__content .v-list-item__title {
      font-weight: bold;
      font-size: 0.9rem;
    }
    & .v-list-item__icon .v-icon {
      color: #fff !important;
      transform: scale(1.2);
      opacity: 1;
    }
  }
}
</style>
