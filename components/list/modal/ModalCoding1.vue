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
        <v-card-title class="pt-sm-3">
          XDデザインカンプからコーディング
          <svg viewBox="0 0 240 234" class="svg">
            <use xlink:href="#xd" x="0" y="0"></use>
          </svg>
        </v-card-title>
        <v-card-subtitle class="f-f">HTML/CSS(SCSS)/JavaScript</v-card-subtitle>
        <v-card-text class="pb-0">
          <ul>
            <li>レスポンシブ<span class="modal__sm">(MF)</span></li>
            <li>ピクセルパーフェクト</li>
            <li>CSS設計はBEM記法</li>
            <li>
              <span class="font-weight-bold">主なアクション</span>
              <ul>
                <li>スマホ時、バーガーメニュー</li>
                <li>ヘッダーは、fv過ぎると色変化</li>
                <li>fvのスライダー表示</li>
              </ul>
            </li>
          </ul>
          <v-divider class="my-3" />
          <p class="mb-0">
            コード詳細:
            <a
              href="https://drive.google.com/drive/folders/1xoUMEwNm_OI2jcuYdVkhREhmvZAYeAlV?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none modal__link"
              ><v-icon small color="#1976d2" class="modal__icon">{{
                mdiGoogle
              }}</v-icon>
              google Drive
            </a>
            <br />
            webサイト:
            <a
              href="https://32ba4riyvpz35dzawvoszw-on.drv.tw/code/www.design.com/html/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none modal__link"
              ><v-icon
                small
                color="#1976d2"
                class="modal__icon modal__sample"
                >{{ mdiFileOutline }}</v-icon
              >
              sampleページ
            </a>
            <br />
            google Driveでの公開ページの為、JSは無効になっています
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
  mdiGoogle,
  mdiFileOutline,
  mdiClose,
} from "@mdi/js";
export default {
  data() {
    return {
      mdiArrowRightDropCircleOutline,
      mdiArrowLeftDropCircleOutline,
      mdiGoogle,
      mdiFileOutline,
      mdiClose,
      link: "tab-1",
      tabs: [
        {
          id: 1,
          src_tab: require("@/assets/img/coding1/TOP2-1.png"),
          src: require("@/assets/img/coding1/TOP2.png"),
          alt: "topページ",
          width: "90",
          type: "pc",
          name: "top",
        },
        {
          id: 2,
          src_tab: require("@/assets/img/coding1/TOP_sp1.png"),
          alt: "スマホのtopページ",
          src_2: require("@/assets/img/coding1/TOP_sp2.png"),
          alt_2: "スマホのtopページ下",
          width: "50",
          type: "sp",
          name: "top",
        },
        {
          id: 3,
          src_tab: require("@/assets/img/coding1/CONTACT.png"),
          src: require("@/assets/img/coding1/CONTACT.png"),
          alt: "contactページ",
          width: "90",
          type: "pc",
          name: "contact",
        },
        {
          id: 4,
          src_tab: require("@/assets/img/coding1/CONTACT_SP1.png"),
          alt: "スマホのcontactページ",
          src_2: require("@/assets/img/coding1/CONTACT_SP2.png"),
          alt_2: "スマホのcontactページ下",
          width: "50",
          type: "sp",
          name: "contact",
        },
        {
          id: 5,
          src_tab: require("@/assets/img/coding1/humberger.png"),
          alt: "スマホのmenuページ",
          width: "50",
          type: "menu",
          name: "",
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
    vertical-align: middle;
  }
  &__sample {
    margin-left: 2px;
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
