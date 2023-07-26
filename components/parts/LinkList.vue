<template>
  <ul class="link-list">
    <li v-for="(item, index) in items" :key="index" class="ml-5">
      <a
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-decoration-none link-list__item"
        >{{ item.name }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.link-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  &__item {
    display: inline-block;
    padding: 8px 28px 8px 0;
    font-size: 0.95rem;
  }
}
</style>
