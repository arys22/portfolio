<template>
  <div>
    <v-app-bar
      app
      flat
      color="#222"
      class="header"
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
          <h1 class="header__title text-h6 text-capitalize" v-show="show">
            {{ title }}
          </h1>
        </transition>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- pc -->
      <!-- plugins/constrants.jsのmenuItems -->
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
          <!-- @click="delayActive(item.path)" -->
          {{ item.name }}
        </v-btn>
      </v-toolbar-items>

      <!-- sp -->
      <!-- アイコン -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up header__icon"
        :class="{ header__icon__scroll: scrollY > fvHeight }"
        large
        elevation="2"
        @mouseenter="delayActive"
        @mouseleave="isActive = false"
      >
        <v-icon>{{ drawer ? "mdi-window-close" : "mdi-menu" }}</v-icon>
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
          class="sp__list text-uppercase mx-1"
        >
          <v-list-item-icon class="ml-3 mr-2">
            <v-icon left color="#999">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="px-4 pb-4">
          <v-btn block @click.stop="drawer = !drawer">
            閉じる
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    scrollY: {
      type: Number,
      default: 0
    },
    title: {
      //ヘッダータイトル
      type: String,
      default: "portfolio"
    }
  },
  data() {
    return {
      fvHeight: null,
      drawer: false,
      isActive: false, //ボタンの遅延設定
      show: false //h1タグ
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
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  transition: all 0.7s ease-in-out;
  &__mark {
    vertical-align: middle;
  }
  &__scroll {
    background-color: transparent !important;
  }
  &__title {
    display: inline-block;
  }
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
  &_scroll .link-active {
    // スクロール変化後の現在のページ
    font-weight: bold;
    &::after {
      transform: none;
    }
  }
}

// sp バーガー 優先度上げ
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
// spメニュー
// 現在のページ
.link-active {
  font-weight: bold;
  &::after {
    transform: none;
  }
}
.v-icon {
  transition: transform 0.5s ease-out;
}

.sp {
  &__list {
    border-bottom: 1px dotted rgba(255, 255, 255, 0.24);
  }
  &__list-active .v-list-item__icon .v-icon {
    font-weight: bold;
    color: #fff !important;
    transform: none;
    opacity: 1;
  }
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
