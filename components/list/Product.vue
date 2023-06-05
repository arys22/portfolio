<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
      class="product mb-10"
      v-for="item in reverseItems"
      :key="item.id"
    >
      <v-card tag="section" class="py-7">
        <v-row class="mx-0">
          <v-col cols="12" sm="4">
            <v-hover v-slot="{ hover }">
              <v-img
                :class="{ 'on-hover': hover }"
                :src="item.img_src"
                :alt="`サンプル画像${item.id}`"
                max-width="267"
                max-height="200"
                position="center top"
                class="product__img"
                @click.stop="open(item.component)"
              >
                <!-- hover時 -->
                <div class="product__wrap" :class="{ 'delay-hover': hover }">
                  <span
                    class="product__wrap--title"
                    :class="{ 'delay-hover': hover }"
                    >全{{ item.page }}ページ</span
                  >
                  <span
                    class="product__wrap--text f-f"
                    :class="{ 'delay-hover': hover }"
                  >
                    {{ item.page_type }}
                  </span>
                </div>
              </v-img>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="8" class="product__text">
            <v-card-title class="pt-0"
              ><h3 class="f-f">{{ item.title }}</h3></v-card-title
            >
            <v-card-subtitle class="py-0 f-f">{{ item.lang }}</v-card-subtitle>
            <v-card-text class="py-1">
              <ul>
                <li>{{ item.desc }}</li>
                <li>{{ item.range }}</li>
              </ul>
              <p class="mb-0 pt-1">
                <template v-if="item.id !== 6">
                  コード詳細:
                  <a
                    :href="item.code_href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none product__link"
                  >
                    <v-icon
                      v-if="item.icon == 'mdiGoogle'"
                      color="#1976d2"
                      class="product__icon"
                      >{{ mdiGoogle }}</v-icon
                    >
                    <svg v-else viewBox="0 0 256 300" class="product__icon">
                      <use xlink:href="#githubAtag" x="0" y="0"></use>
                    </svg>
                    {{ item.code_type }}
                  </a>
                  <br />
                </template>
                <template v-if="item.id === 3 || item.id === 4">
                  webサイト:
                  <a
                    :href="item.web_href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none product__link"
                  >
                    <v-icon
                      color="#1976d2"
                      class="product__icon product__sample"
                      >{{ mdiFileOutline }}</v-icon
                    >
                    sampleページ
                  </a>
                </template>
                <template v-if="item.id === 6">
                  webサイト:
                  <a
                    :href="item.web_href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none product__link"
                  >
                    <v-icon
                      color="#1976d2"
                      class="product__icon product__sample"
                      >{{ mdiFileOutline }}</v-icon
                    >
                    Lisbleページ
                  </a>
                </template>
              </p>
            </v-card-text>
            <v-card-actions>
              <!-- モーダルウィンドウ -->
              <v-btn
                @click.stop="open(item.component)"
                class="product__btn"
                plain
                rounded
              >
                詳細表示
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      transition="scale-transition"
      max-width="1000"
      eager
    >
      <!-- ダイアログコンテンツ -->
      <!-- @close モーダルの× -->
      <keep-alive>
        <Component :is="componentTitle" @close="dialog = false" />
      </keep-alive>
    </v-dialog>
  </v-row>
</template>

<script>
// ssgなので事前
import ModalCoding1 from "@/components/list/modal/ModalCoding1.vue";
import ModalCoding2 from "@/components/list/modal/ModalCoding2.vue";
import ModalCoding3 from "@/components/list/modal/ModalCoding3.vue";
import ModalLP1 from "@/components/list/modal/ModalLP1.vue";
import ModalPortfolio from "@/components/list/modal/ModalPortfolio.vue";
import ModalLisble from "@/components/list/modal/ModalLisble.vue";
import { mdiFileOutline, mdiGoogle } from "@mdi/js";
export default {
  components: {
    ModalCoding1,
    ModalCoding2,
    ModalCoding3,
    ModalLP1,
    ModalPortfolio,
    ModalLisble
  },
  data() {
    return {
      mdiFileOutline,
      mdiGoogle,
      dialog: false,
      componentTitle: null,
      items: [
        {
          id: 1,
          title: "コーポレートサイト",
          desc: "XDデザインカンプからコーディング",
          range: "レスポンシブ",
          lang: "HTML/CSS(SCSS)/JavaScript",
          page: "2",
          page_type: "top, contact",
          img_src: require("@/assets/img/coding1/TOP2-1.png"),
          code_href:
            "https://drive.google.com/drive/folders/1xoUMEwNm_OI2jcuYdVkhREhmvZAYeAlV?usp=sharing",
          icon: "mdiGoogle",
          code_type: "google Drive",
          web_href:
            "https://32ba4riyvpz35dzawvoszw-on.drv.tw/code/www.design.com/html/",
          component: "ModalCoding1"
        },
        {
          id: 2,
          title: "コーポレートサイト",
          desc: "XDデザインカンプからコーディング",
          range: "レスポンシブ(スマホ、タブレット、pc)",
          lang: "HTML/CSS(SCSS)/JavaScript",
          page: "3",
          page_type: "top, about, contact",
          img_src: require("@/assets/img/coding2/home_pc1-min.png"),
          code_href:
            "https://drive.google.com/drive/folders/1g_FEX5jw7VwIIueJfB8Whxe_Kwvvh4z8?usp=sharing",
          icon: "mdiGoogle",
          code_type: "google Drive",
          web_href:
            "https://32ba4riyvpz35dzawvoszw-on.drv.tw/code/www.DIGSMILE.com/html/",
          component: "ModalCoding2"
        },
        {
          id: 3,
          title: "コーポレートサイト",
          desc: "XDデザインカンプからコーディング",
          range: "レスポンシブ",
          lang: "HTML/CSS(SCSS)/Vue.js",
          page: "8",
          page_type:
            "top, news, article, service, works, company, recruit, contact",
          img_src: require("@/assets/img/coding3/index1-pc-min.png"),
          code_href: "https://github.com/arys22/pon-design.git",
          icon: "github",
          code_type: "GitHub",
          web_href: "https://arys22.github.io/pon-design/", // GitHub Pages
          component: "ModalCoding3"
        },
        {
          id: 4,
          title: "架空のLP(オリジナル)",
          desc: "設定からデザイン、コーディング、全て",
          range: "レスポンシブ",
          lang: "HTML/CSS(SCSS)/JavaScript",
          page: "1",
          page_type: "架空のグランピング施設",
          img_src: require("@/assets/img/LP1/LP_pc-1-min.png"),
          code_href: "https://github.com/arys22/LP.git",
          icon: "github",
          code_type: "GitHub",
          web_href: "https://arys22.github.io/LP/", // GitHub Pages
          component: "ModalLP1"
        },
        {
          id: 5,
          title: "Portfolio",
          desc: "デザイン、コーディング",
          range: "レスポンシブ",
          lang: "CSS(SCSS)/Vuetify/Nuxt2",
          page: "5",
          page_type: "home, list, contact, 確認ページ, 完了ページ",
          img_src: require("@/assets/img/portfolio/Portfolio.png"),
          code_href: "https://github.com/arys22/portfolio.git",
          icon: "github",
          code_type: "GitHub",
          web_href: "",
          component: "ModalPortfolio"
        },
        {
          id: 6,
          title: "買い物リスト Lisble",
          desc: "アプリ(Google Play)",
          range: "レスポンシブ、i18n",
          lang: "Figma/TailwindCSS/TypeScript/Nuxt3",
          page: "4",
          page_type: "list, history, about, 404エラーページ",
          img_src: require("@/assets/img/lisble/lisble-pc.png"),
          web_href: "https://lisble.net/",
          component: "ModalLisble"
        }
      ]
    };
  },
  methods: {
    open(component) {
      this.dialog = true;
      this.componentTitle = component;
    }
  },
  // 配列の順番を入れ替え表示順逆
  computed: {
    reverseItems() {
      return this.items.slice().reverse();
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  &__img {
    height: 155px;
    margin: 0 auto;
    box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
      0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);
    transition: box-shadow 0.3s ease-in-out;
    font-weight: bold;
    &.on-hover {
      box-shadow: none;
    }
  }
  //hover時
  &__wrap {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    height: 50%;
    top: 100%;
    opacity: 0;
    left: 0;
    position: absolute;
    width: 100%;
    padding: 10px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    transition: all 0.3s ease-out;
    &.delay-hover {
      transform: translateY(-100%);
      opacity: 1;
    }
    &--title {
      position: relative;
      left: 0;
      top: 100px;
      opacity: 0;
      transition: all 0.3s ease-out 0.15s;
      &.delay-hover {
        transform: translateY(-100px);
        opacity: 1;
      }
    }
    &--text {
      width: 100%;
      font-size: 14px;
      font-weight: normal;
      position: relative;
      left: 0;
      top: 100px;
      opacity: 0;
      transition: all 0.3s ease-out 0.3s;
      &.delay-hover {
        transform: translateY(-100px);
        opacity: 1;
      }
    }
  } //hover時ここまで
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__link {
    transition: opacity 0.2s ease-in-out;
    margin-left: 12px;
    position: relative;
    display: inline-block;
    width: 135px;
    position: relative;
    &:hover {
      opacity: 0.7;
      &::after {
        transform: translateX(-2px) rotate(45deg);
        animation: prompt 1.5s ease-in-out infinite;
      }
    }
    &::after {
      content: "";
      right: 0px;
      top: 8px;
      width: 8px;
      height: 8px;
      border-top: 2.5px solid #1976d2;
      border-right: 2.5px solid #1976d2;
      transform: rotate(45deg);
      opacity: 0.4;
      transition: transform 0.3s ease-out;
      position: absolute;
    }
  }
  &__icon {
    width: 18px;
    vertical-align: top;
  }
  &__sample {
    margin-left: 2.1px;
    vertical-align: bottom;
  }
  &__btn {
    width: 100%;
    box-shadow: 0px 1px 5px #b5b6b6, -5px -5px 5px #fff;
    transition-duration: 0.2s;
    &:hover {
      box-shadow: 0 0 4px #babbbd, -2px -2px 4px #fff;
    }
  }
}
// md以上
@media screen and (min-width: 600px) {
  .product {
    &__img {
      height: 200px;
    }
  }
}

@keyframes prompt {
  0% {
    transform: translateX(-1px) rotate(45deg);
  }
  50% {
    transform: translateX(4px) rotate(45deg);
  }
  100% {
    transform: translateX(-1px) rotate(45deg);
  }
}
</style>
