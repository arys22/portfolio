<template>
  <v-breadcrumbs :items="itemsData" divider=">" class="pt-0 pl-0">
    <template v-slot:item="props">
      <v-breadcrumbs-item
        exact
        :disabled="props.item.disabled"
        :to="props.item.path"
        nuxt
      >
        <span v-if="props.item.path == '/'"
          ><v-icon color="#444">{{ mdiHome }}</v-icon></span
        >
        <span v-else class="bread__item">{{ props.item.text }}</span>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
import { mdiHome } from "@mdi/js";
export default {
  data() {
    return { mdiHome };
  },
  props: {
    itemsData: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped>
.bread {
  &__item {
    color: rgba(0, 0, 0, 0.38);
  }
}
</style>
