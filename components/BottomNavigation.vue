<template>
  <v-bottom-navigation fixed  light grow color="black" active-class="font-weight-bold black-text body-2" class="text--second"  v-model="value" :background-color="backgroundColor"  :class="{'btn-nav__scroll': hide}">

    <v-btn v-for="(item, index) in $ITEMS.menuItems" :key="index" :to="item.path" height="100%" exact text>
        <span>{{ item.name }}</span>
        <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  props:{
  scrollY:{
    type: Number,
    default: 0,
  }
  },
  data() {
    return {
      value: 0,
      hide: true,
    }
  },
  computed: {
    backgroundColor () {
      switch (this.value) {
        case 0: return '#fff'
        case 1: return '#dbdbdb'
        case 2: return '#d7d7d7'
        default: return '#fff'
      }
    }
  },
    watch: {
    // 上にスクロールした時に表示
    scrollY :{
      handler(newValue, oldValue) {
        // リアクティブ
        this.$set(this, 'hide', newValue > oldValue);
      },
      // props時
      deep:true,
      immediate: true,
    }
  },
}
</script>

<style lang="scss" scoped>
// スクロール下は非表示
.btn-nav__scroll{
  transform:translateY(100%) !important;
}
</style>
