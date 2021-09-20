<template>
    <v-bottom-navigation fixed light grow color="black" active-class="font-weight-bold black-text body-2" class="text--second btn-nav"  v-model="value" :background-color="backgroundColor"  :class="{'btn-nav__scroll': hide}">

      <v-btn v-for="(item, index) in $ITEMS.menuItems" :key="index" :to="item.path" height="100%" exact text exact-active-class="v-btn__active">
          <span class="text-uppercase">{{ item.name }}</span>
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
        case 1: return '#eee'
        case 2: return '#ccc'
        default: return '#fff'
      }
    },
  },
  watch: {
    // 上にスクロールした時に表示
    scrollY :{
      handler(newValue, oldValue) {
        // リアクティブ
        if (newValue < 500) {
          this.$set(this, 'hide', true);
        } else if(newValue > oldValue) {
          this.$set(this, 'hide', true);
        }
        else{
          this.$set(this, 'hide', false);
        }
        // this.$set(this, 'hide', newValue > oldValue );
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
.btn-nav{
  transition: transform .3s ease-in-out .3s;
  &__scroll{
  transform:translateY(100%) !important;
  }
}

// アイコン
.v-btn .v-icon{
  transition:transform .3s ease-out;
}

.v-bottom-navigation .v-btn__active .v-icon{
  transform:none;
  font-size: 1.8rem;
  margin-bottom: 3px;
}

</style>
