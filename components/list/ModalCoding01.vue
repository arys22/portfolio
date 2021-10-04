<template>
  <!-- ダイアログコンテンツ -->
  <v-card class="modal">
    <v-row class="ma-0 pa-1 pa-md-4">
      <!-- 小さい画像 -->
      <v-tabs
        v-model="tab"
        class="pt-5 pr-5 pl-3"
        color="transparent"
        active-class="modal__active"
        height="82"
        show-arrows
        next-icon="mdi-arrow-right-drop-circle-outline"
        prev-icon="mdi-arrow-left-drop-circle-outline"
      >
        <v-tab href="#tab-1">
          <v-img
            :src="require('@/assets/img/coding1/TOP2-1.png')"
            alt="コーディングtopページ"
            position="center top"
            width="90"
            height="68"
            class="modal__img"
          >
          </v-img>
        </v-tab>
        <v-tab href="#tab-2">
          <v-img
            :src="require('@/assets/img/coding1/TOP_sp1.png')"
            alt="コーディングでスマホのtopページ1"
            position="center top"
            width="50"
            height="68"
            class="modal__img"
          >
          </v-img>
        </v-tab>
        <v-tab href="#tab-3">
          <v-img
            :src="require('@/assets/img/coding1/CONTACT.png')"
            alt="コーディングcontactページ"
            position="center top"
            width="90"
            height="68"
            class="modal__img"
          >
          </v-img>
        </v-tab>
        <v-tab href="#tab-4">
          <v-img
            :src="require('@/assets/img/coding1/CONTACT_sp1.png')"
            alt="コーディングでスマホのcontactページ"
            position="center top"
            width="50"
            height="68"
            class="modal__img"
          >
          </v-img>
        </v-tab>
        <v-tab href="#tab-5">
          <v-img
            :src="require('@/assets/img/coding1/humberger.png')"
            alt="コーディングスマホのmenuページ"
            position="center center"
            width="50"
            height="68"
            class="modal__img"
          >
          </v-img>
        </v-tab>
        <v-tabs-slider color="#333" />
      </v-tabs>

      <v-col cols="12" sm="6" md="7" class="mx-auto pt-sm-7">
        <!-- 画像本体 -->
        <v-tabs-items v-model="tab" class="modal__items">
          <v-tab-item value="tab-1">
            <v-img
              :src="require('@/assets/img/coding1/TOP2.png')"
              alt="コーディングtopページ"
              position="center top"
              max-width="600"
            >
            </v-img>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-row class="ma-0">
              <v-col cols="6">
                <v-img
                  :src="require('@/assets/img/coding1/TOP_sp1.png')"
                  alt="コーディングでスマホのtopページ1"
                  position="center top"
                  max-width="300"
                  class="modal__items-img"
                ></v-img>
              </v-col>
              <v-col cols="6">
                <v-img
                  :src="require('@/assets/img/coding1/TOP_sp2.png')"
                  alt="コーディングでスマホのtopページ2"
                  position="center top"
                  max-width="300"
                  class="modal__items-img"
                ></v-img>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item value="tab-3">
            <v-img
              :src="require('@/assets/img/coding1/CONTACT.png')"
              alt="コーディングcontactページ"
              position="center top"
              max-width="600"
            ></v-img>
          </v-tab-item>
          <v-tab-item value="tab-4">
            <v-row class="ma-0">
              <v-col cols="6">
                <v-img
                  :src="require('@/assets/img/coding1/CONTACT_sp1.png')"
                  alt="コーディングでスマホのcontactページ1"
                  position="center top"
                  max-width="300"
                  class="modal__items-img"
                ></v-img>
              </v-col>
              <v-col cols="6">
                <v-img
                  :src="require('@/assets/img/coding1/CONTACT_sp2.png')"
                  alt="コーディングでスマホのcontactページ2"
                  position="center top"
                  max-width="300"
                  class="modal__items-img"
                ></v-img>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item value="tab-5">
            <v-img
              :src="require('@/assets/img/coding1/humberger.png')"
              alt="コーディングhumbergerページ"
              position="center top"
              max-width="200"
            ></v-img>
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
        <v-card-subtitle>html/css(scss)/javascript 使用</v-card-subtitle>
        <v-card-text class="pb-0">
          <ul>
            <li>レスポンシブ(モバイルファースト)対応</li>
            <li>ピクセルパーフェクト</li>
            <li>
              アクション
              <ul>
                <li>スマホ時、バーガーメニュー</li>
                <li>ヘッダーは、ファーストビュー過ぎると色変化</li>
                <li>ファーストビューのスライダー表示(3画像)</li>
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
              ><v-icon color="#1976d2" class="text-body-1"
                >mdi-google-drive</v-icon
              >
              google Drive
            </a>
            <br />
            webサイト:
            <a
              href="https://32ba4riyvpz35dzawvoszw-on.drv.tw/code/www.design.com/html/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none modal__link"
              ><v-icon color="#1976d2" class="text-body-1"
                >mdi-file-outline</v-icon
              >
              sampleページ
            </a>
            <br />
            (google Driveでの公開ページ)
            <br />
            <span class="text-caption">※新たなタブで開きます</span>
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
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: "tab-1"
    };
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: relative;
  &__active {
    background-color: #e3e3e3;
  }
  &__active .modal__img {
    box-shadow: none;
  }
  &__img {
    box-shadow: 0px 4px 5px -2px rgb(0 0 0 / 20%),
      0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%);
    margin: 7px 0;
    &:hover {
      box-shadow: none;
    }
  }
  &__items {
    width: fit-content;
    margin: 0 auto;
    box-shadow: 0px 4px 5px -2px rgb(0 0 0 / 20%),
      0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%);
    &-img {
      box-shadow: 0px 4px 5px -2px rgb(0 0 0 / 20%),
        0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%);
    }
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
