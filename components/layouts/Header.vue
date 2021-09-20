<template>
  <div>
    <!-- mdi-alpha-p-circle-outline -->
    <v-app-bar
      app
      flat
      color="#333"
      class="header"
      :class="{ header__scroll: scrollY > fvHeight }"
    >
      <v-toolbar-title
        class="white--text"
        v-show="scrollY == 0 || scrollY < fvHeight"
      >
        <v-icon color="white">mdi-alpha-p-circle-outline</v-icon>
        <h1 class="header__title text-h6">{{ title }}</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- pc -->
      <!-- plugins/constrants.jsのmenuItems -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          color="white"
          plain
          :class="{ header__btn__scroll: scrollY > fvHeight }"
          :to="item.path"
          nuxt
          exact
          active-class="link-active"
          class="header__btn text-md-subtitle-1"
          v-for="(item, index) in $ITEMS.menuItems"
          :key="index"
        >
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
      >
      <v-icon>{{ drawer ? 'mdi-window-close' : 'mdi-menu' }}</v-icon>
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
        <v-subheader class="ml-3">menu</v-subheader>
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
            close
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
      drawer: false
    };
  },
  created() {
    // createdのタイミングでイベントリスナーを設定
    this.setListener();
  },
  mounted() {
    // ルートの遷移前（コンポーネントガード解決前）
    this.$router.beforeEach((to, from, next) => {
      // console.log('global:beforeEach');
      this.fvHeight = null;
      next();
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
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  transition: all 0.5s ease-in-out;
  &__scroll {
    background-color: transparent !important;
  }

  &__title {
    display: inline-block;
  }
  &__btn {
    position: relative;
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
    &__scroll {
      //変化後
      color: #333 !important;
      &::after {
        height: 1.5px;
        background: #333;
      }
    }
  }
  &__scroll .link-active {
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
// ホバー時アイコン
.v-list-item:hover .v-icon {
  animation: poyon 1.5s 1;
}
@keyframes poyon {
  0% {
    transform: scale(1, 1) translate(0%, 0%);
  }
  15% {
    transform: scale(0.9, 0.9) translate(0%, 5%);
  }
  30% {
    transform: scale(1.2, 0.8) translate(0%, 8%);
  }
  50% {
    transform: scale(0.8, 1.2) translate(0%, -8%);
  }
  70% {
    transform: scale(1.1, 0.9) translate(0%, 5%);
  }
  100% {
    transform: scale(1, 1) translate(0%, 0%);
  }
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
</style>
