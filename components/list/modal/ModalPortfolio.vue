<template>
  <!-- ダイアログコンテンツ -->
  <v-card class="modal">
    <v-row class="ma-0 pa-1 pa-md-4">
      <!-- 小さい画像 -->
      <v-tabs
        v-model="link"
        class="pt-5 pr-5 pl-3"
        color="transparent"
        active-class="modal__active"
        height="82"
        show-arrows
        :next-icon="mdiArrowRightDropCircleOutline"
        :prev-icon="mdiArrowLeftDropCircleOutline"
        center-active
      >
        <v-tab :href="'#' + `tab-${tab.id}`" v-for="tab in tabs" :key="tab.id">
          <v-img
            :src="tab.src_tab"
            :alt="tab.alt"
            position="center top"
            :width="tab.width"
            height="68"
            class="modal__img"
          >
            <span>
              {{ tab.type }}
            </span>
            <br />
            <span class="modal__img-text">
              {{ tab.name }}
            </span>
          </v-img>
        </v-tab>

        <v-tabs-slider color="#333" />
      </v-tabs>

      <v-col cols="12" sm="6" md="7" class="mx-auto pa-0">
        <!-- 画像本体 -->
        <v-tabs-items v-model="link" class="mx-auto pa-4">
          <v-tab-item
            v-for="tab in tabs"
            :key="tab.id"
            :value="`tab-${tab.id}`"
          >
            <template v-if="tab.type == 'pc'">
              <v-img
                :src="tab.src"
                :alt="tab.alt"
                position="center top"
                max-width="600"
                class="modal__item-img"
              >
              </v-img>
              <p class="mt-5">・・・省略</p>
            </template>

            <template v-else-if="tab.type == 'sp'">
              <v-row class="ma-0">
                <v-col cols="6">
                  <v-img
                    :src="tab.src_tab"
                    :alt="tab.alt"
                    position="center top"
                    max-width="300"
                    class="modal__item-img"
                  ></v-img>
                </v-col>
                <v-col cols="6">
                  <v-img
                    :src="tab.src_2"
                    :alt="tab.alt_2"
                    position="center top"
                    max-width="300"
                    class="modal__item-img"
                  ></v-img>
                </v-col>
              </v-row>
            </template>

            <template v-else>
              <v-img
                :src="tab.src_tab"
                :alt="tab.alt"
                position="center top"
                max-width="200"
                class="modal__item-img"
              ></v-img>
            </template>
          </v-tab-item>
        </v-tabs-items>
      </v-col>

      <v-divider class="hidden-xs-only" vertical />

      <v-col cols="12" sm="6" md="4" class="pt-sm-6">
        <v-divider class="hidden-sm-and-up" />
        <v-card-title class="pt-sm-3"> Portfolio </v-card-title>
        <v-card-subtitle class="f-f"
          >HTML/CSS(SCSS)/Vuetify/Nuxt2/Jest</v-card-subtitle
        >
        <v-card-text class="pb-0">
          <ul>
            <li>デザインは引き算</li>
            <li>CSS設計はBEM記法</li>
            <li>レスポンシブ<span class="modal__sm">(MF)</span></li>
            <li>ライブラリ: vue-typer, vue-parallax-js, @mdi/js</li>
            <li>
              <span class="font-weight-bold">主なアクション</span>
              <ul>
                <li>
                  ヘッダーメニュー<span class="modal__sm"
                    >(fv過ぎたら色変化)</span
                  >・sp時バーガーメニュー・ボトムナビ・ページ内リンク・topへボタン
                </li>
                <li>アニメーション → OP・ページ遷移・svg操作</li>
                <li class="font-weight-bold">
                  FirstViewで遊び要素<span class="modal__sm"
                    >(マウスストーカー、テキストの影変化、クリック時波紋、★クリック時に文字がランダムに弾ける、etc...)</span
                  >
                </li>
                <li>fadeアクション5種</li>
                <li>listページのモーダル</li>
                <li>パンくずリスト</li>
                <li class="font-weight-bold">
                  フォームはgoogleフォームと連携・スプレッドシートで管理・受付時に自動返信メール・入力チェック
                  → 確認ページ → 完了ページ
                </li>
              </ul>
            </li>
            <li>一部画像webp</li>
            <li>sitemap</li>
            <li>Google Analytics ｱﾅﾘﾃｨｸｽ導入</li>
            <li>Google Search Console ｻｰﾁｺﾝｿｰﾙ導入</li>
            <li>SSG<span class="modal__sm">（Static Site Generator）</span></li>
            <li>Netlifyでの公開</li>
            <li>PWA化</li>
            <li class="font-weight-bold">
              Jest + vue-test-utils でのテストコード記述
            </li>
          </ul>
          <v-divider class="my-3" />
          <p class="mb-0">
            コード詳細:
            <a
              href="https://github.com/arys22/portfolio.git"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none modal__link"
            >
              <svg viewBox="0 0 256 300" class="modal__icon">
                <use xlink:href="#githubAtag" x="0" y="0"></use>
              </svg>
              GitHub
            </a>
            <br />
            <span class="modal__sm">※新たなタブで開きます</span>
          </p>
        </v-card-text>
      </v-col>
      <v-card-actions class="modal__actions">
        <v-btn @click="$emit('close')" class="modal__btn" plain rounded block>
          閉じる
        </v-btn>
        <v-btn
          @click="$emit('close')"
          class="modal__btn modal__btn--close"
          fab
          plain
          absolute
          x-small
        >
          <v-icon>{{ mdiClose }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-row>
  </v-card>
</template>

<script>
import {
  mdiArrowRightDropCircleOutline,
  mdiArrowLeftDropCircleOutline,
  mdiClose,
} from "@mdi/js";
export default {
  data() {
    return {
      mdiArrowRightDropCircleOutline,
      mdiArrowLeftDropCircleOutline,
      mdiClose,
      link: "tab-1",
      tabs: [
        {
          id: 1,
          src_tab: require("@/assets/img/portfolio/Portfolio.png"),
          alt: "portfolioのpc画面上部",
          src: require("@/assets/img/portfolio/Portfolio.png"),
          width: "90",
          type: "pc",
          name: "home",
        },
        {
          id: 2,
          src_tab: require("@/assets/img/portfolio/Portfolio-sp.png"),
          alt: "portfolioのスマホ画面上部",
          src_2: require("@/assets/img/portfolio/Portfolio-sp-2.png"),
          alt_2: "portfolioのスマホ画面下部",
          width: "50",
          type: "sp",
          name: "home",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: relative;
  &__active {
    background-color: rgb(0 0 0 / 30%);
  }
  &__active .modal__img {
    box-shadow: none;
    text-shadow: none;
  }
  &__img {
    //タブ画像
    box-shadow: 0px 4px 5px -2px rgb(0 0 0 / 20%),
      0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%);
    // box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);// elevatio 8
    margin: 7px 0;
    transition: all 0.25s ease-in-out 0.1s;
    color: #fff;
    font-weight: bold;
    font-size: 0.85rem;
    text-align: left;
    text-shadow: 1px 1px 1px #000;
    line-height: 1.2;
    padding-top: 3px;
    &:hover {
      box-shadow: none;
      text-shadow: none;
    }
    &-text {
      font-size: 0.5rem;
      overflow-wrap: normal;
    }
  }
  &__item-img {
    //大きい画像
    box-shadow: 0px 4px 5px -2px rgb(0 0 0 / 20%),
      0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%);
    margin: 0 auto;
  }
  &__sm {
    font-size: 10px;
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
    width: 16px;
    vertical-align: top;
  }
  &__actions {
    width: 100%;
    padding: 16px;
  }
  &__btn {
    background-color: #fff;
    box-shadow: 0px 1px 5px #b5b6b6, -5px -5px 5px #fff;
    transition-duration: 0.2s;
    &:hover {
      background-color: #fcfcfc;
      box-shadow: 0 0 4px #babbbd, -2px -2px 4px #fff;
    }
    &--close {
      top: 7px;
      right: 5px;
    }
  }
}

.svg {
  width: 25px;
  margin-right: 5px;
}
</style>
