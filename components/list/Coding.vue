<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
      class="coding mb-10"
      v-for="item in items"
      :key="item.id"
    >
      <v-card>
        <v-row class="mx-0">
          <v-col cols="12" sm="4">
            <v-hover v-slot="{ hover }">
              <v-img
                :class="{ 'on-hover': hover }"
                :src="item.img_src"
                :alt="`コーディング画像${item.id}`"
                max-width="267"
                max-height="200"
                position="center top"
                class="coding__img"
                @click.stop="open(item.component)"
              >
                <!-- hover時 -->
                <div class="coding__wrap" :class="{ 'delay-hover': hover }">
                  <span
                    class="coding__wrap--title"
                    :class="{ 'delay-hover': hover }"
                    >全{{ item.page }}ページ</span
                  >
                  <span
                    class="coding__wrap--text"
                    :class="{ 'delay-hover': hover }"
                  >
                    {{ item.page_type }}
                  </span>
                </div>
              </v-img>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="8" class="coding__text">
            <v-card-title class="pt-0">{{ item.title }}</v-card-title>
            <v-card-subtitle class="py-0">{{ item.lang }}</v-card-subtitle>
            <v-card-text class="py-1">
              <ul>
                <li>{{ item.desc }}</li>
                <li>{{ item.range }}</li>
              </ul>
              <p class="mb-0 pt-1">
                コード詳細:
                <a
                  :href="item.code_href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-decoration-none coding__link"
                  ><v-icon color="#1976d2" class="text-body-1">{{
                    item.icon
                  }}</v-icon>
                  {{ item.code_type }}
                </a>
                <br />
                webサイト:
                <a
                  :href="item.web_href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-decoration-none coding__link"
                  ><v-icon color="#1976d2" class="text-body-1"
                    >mdi-file-outline</v-icon
                  >
                  sampleページ
                </a>
              </p>
            </v-card-text>
            <v-card-actions>
              <!-- モーダルウィンドウ -->
              <v-btn
                @click.stop="open(item.component)"
                class="coding__btn"
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
    >
      <!-- ダイアログコンテンツ -->
      <!-- @close モーダルの× -->
      <Component :is="componentTitle" @close="dialog = false"/>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      componentTitle: null,
      items: [
        {
          id: 1,
          title: "コーポレートサイト",
          desc: "XDデザインカンプからコーディング",
          range: "レスポンシブ(スマホ、pc)",
          lang: "HTML/CSS(Scss)/JavaScript",
          page: "2",
          page_type: "top, contact",
          img_src: require("@/assets/img/coding1/TOP2-1.png"),
          code_href:
            "https://drive.google.com/drive/folders/1xoUMEwNm_OI2jcuYdVkhREhmvZAYeAlV?usp=sharing",
          icon: "mdi-google-drive",
          code_type: "google Drive",
          web_href:
            "https://32ba4riyvpz35dzawvoszw-on.drv.tw/code/www.design.com/html/",
          component:"ModalCoding01",
        },
        {
          id: 2,
          title: "コーポレートサイト",
          desc: "XDデザインカンプからコーディング",
          range: "レスポンシブ(スマホ、タブレット、pc)",
          lang: "HTML/CSS(Scss)/JavaScript",
          page: "3",
          page_type: "top, about, contact",
          img_src: require("@/assets/img/coding2/home_pc1-min.png"),
          code_href:
            "https://drive.google.com/drive/folders/1g_FEX5jw7VwIIueJfB8Whxe_Kwvvh4z8?usp=sharing",
          icon: "mdi-google-drive",
          code_type: "google Drive",
          web_href:
            "https://32ba4riyvpz35dzawvoszw-on.drv.tw/code/www.DIGSMILE.com/html/",
          component:"ModalCoding02",
        },
        {
          id: 3,
          title: "コーポレートサイト",
          desc: "XDデザインカンプからコーディング",
          range: "レスポンシブ(スマホ、pc)",
          lang: "HTML/CSS(Scss)/vue.js",
          page: "8",
          page_type:
            "top, news, article, service, works, company, recruit, contact",
          img_src: require("@/assets/img/coding3/index1-pc-min.png"),
          code_href: "https://github.com/arys22/pon-design",
          icon: "mdi-github",
          code_type: "GitHub",
          web_href: "https://arys22.github.io/pon-design/",// GitHub Pages
          component:"ModalCoding03",
        }
      ]
    };
  },
  methods: {
    open (component){
      this.dialog = true;
      this.componentTitle = component;
    }
  }
};
</script>

<style lang="scss" scoped>
.coding {
  &__img {
    height: 155px;
    margin: 0 auto;
    box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
      0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);
    transition: box-shadow 0.3s ease-in-out;
    color: #fff;
    font-weight: bold;
    &.on-hover {
      box-shadow: none;
    }
  }
  //hover時
  &__wrap {
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
  .coding {
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
