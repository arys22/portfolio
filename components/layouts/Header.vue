<template>
  <div>
    <v-app-bar
      app
      flat
      color="#222"
      class="header f-f"
      :class="{ header__scroll: scrollY > fvHeight }"
    >
      <v-toolbar-title
        class="white--text"
        v-show="scrollY == 0 || scrollY < fvHeight"
      >
        <svg viewBox="0 0 500 500" width="22" height="22" class="header__mark">
          <use xlink:href="#logo" x="0" y="0" fill="#fff"></use>
        </svg>
        <transition name="title">
          <h1 class="header__title text-capitalize f-f" v-show="show">
            {{ title }}
          </h1>
        </transition>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- pcボタン -->
      <HeaderNaviPc :scrollY="scrollY" :fvHeight="fvHeight" />

      <!-- sp -->
      <!-- アイコン -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up header__icon"
        :class="{ header__icon__scroll: scrollY > fvHeight }"
        large
        elevation="2"
        role="button"
        aria-label="menu"
        @mouseenter="delayActive"
        @mouseleave="isActive = false"
      >
        <v-icon large>{{ drawer ? mdiWindowClose : mdiMenu }}</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <!-- メニュー -->
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      color="#333"
      bottom
      dark
      class="d-block d-sm-none"
      height="auto"
    >
      <HeaderNaviSp />
      <template v-slot:append>
        <div class="px-4 pb-4">
          <v-btn block @click.stop="drawer = !drawer"> 閉じる </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mdiWindowClose, mdiMenu, K } from "@mdi/js";
export default {
  props: {
    scrollY: {
      type: Number,
      default: 0,
    },
    title: {
      //ヘッダータイトル
      type: String,
      default: "portfolio",
    },
  },
  data() {
    return {
      mdiWindowClose,
      mdiMenu,
      fvHeight: null,
      drawer: false,
      isActive: false, //ボタンの遅延設定
      show: false, //h1タグ
    };
  },
  created() {
    // createdのタイミングでイベントリスナーを設定
    this.setListener();
  },
  mounted() {
    this.show = true; //h1
    // ルートの遷移前（コンポーネントガード解決前）
    this.$router.beforeEach((to, from, next) => {
      // console.log('global:beforeEach');
      this.fvHeight = null;
      this.show = false; //h1
      next();
    });
    // ルートの遷移後
    this.$router.afterEach((to, from, next) => {
      setTimeout(() => {
        // console.log('global:afterEach');
        this.show = true; //h1
      }, 1000);
    });
  },

  beforeDestroy() {
    // 後処理
    this.$nuxt.$off("getFvHeight");
  },
  methods: {
    setListener() {
      this.$nuxt.$on("getFvHeight", this.setHeader);
    },
    setHeader(e) {
      // 第1引数にはemitで渡した値が入ってくる。
      // 第2引数以降を渡す場合も同様に、それ以降の引数で受け取れる
      const height = Math.floor(e);
      this.fvHeight = height;
      // console.log(this.fvHeight);
    },

    delayActive() {
      //ページ遷移botann遅延
      setTimeout(() => {
        this.isActive = true;
      }, 1200);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  transition: all 0.7s ease-in-out;
  z-index: 98 !important;
  &__mark {
    position: relative;
    top: 4px;
  }
  &__scroll {
    background-color: transparent !important;
  }
  &__icon {
    &__scroll {
      background-color: white;
    }
  }
  &__title {
    display: inline-block;
    padding-left: 5px;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    pointer-events: none;
  }
}

// // sp バーガーアイコン 優先度上げ
.theme--light.v-btn.v-btn--icon.header__icon {
  color: #fff;
  &__scroll {
    //変化後
    color: #333;
  }
  &:hover {
    opacity: 0.8;
  }
}
.v-icon {
  transition: transform 0.5s ease-out;
}

.title-enter {
  transform: translate(50px, 0);
  opacity: 0;
}
.title-enter-to {
  transform: translate(0px, 0);
  opacity: 1;
}
.title-enter-active {
  transition: all 1s 0s ease-out;
}
.title-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.title-leave-to {
  transform: translate(-100px, 0);
  opacity: 0;
}
.title-leave-active {
  transition: all 0.5s 0s ease-in;
}
</style>
