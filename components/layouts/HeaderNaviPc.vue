<template>
  <v-toolbar-items
    class="hidden-xs-only"
    @mouseenter="delayActive"
    @mouseleave="isActive = false"
  >
    <v-btn
      color="white"
      plain
      :class="{
        header__btn_scroll: scrollY > fvHeight,
        header__btn_active: isActive
      }"
      active-class="link-active"
      class="header__btn text-md-subtitle-1"
      v-for="(item, index) in $ITEMS.menuItems"
      :key="index"
      :to="item.path"
      nuxt
      exact
    >
      <!-- plugins/constrants.jsのmenuItems -->
      {{ item.name }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  props: {
    scrollY: {
      type: Number,
      default: 0
    },
    fvHeight: {
      type: Number
    }
  },
  data() {
    return {
      isActive: false //ボタンの遅延設定
    };
  },
  methods: {
    delayActive() {
      //ページ遷移botann遅延
      setTimeout(() => {
        this.isActive = true;
      }, 1200);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  &__btn {
    position: relative;
    pointer-events: none;
    &::after {
      position: absolute;
      bottom: 10px;
      left: 15%;
      content: "";
      width: 70%;
      height: 1.5px;
      background: #fff;
      transform: scale(0, 1);
      transform-origin: right top;
      transition: transform 0.3s ease-out;
    }
    &:hover::after {
      transform-origin: left top;
      transform: scale(1, 1);
    }
    &_active {
      pointer-events: auto;
    }
    &_scroll {
      //変化後
      color: #333 !important;
      &::after {
        height: 1.5px;
        background: #333;
      }
    }
  }
  // スクロール変化後の現在のページ
  &_scroll .link-active {
    font-weight: bold;
    &::after {
      transform: none;
    }
  }
}
// 現在のページ
.link-active {
  font-weight: bold;
  &::after {
    transform: none;
  }
}
</style>
