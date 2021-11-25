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
        next-icon="mdi-arrow-right-drop-circle-outline"
        prev-icon="mdi-arrow-left-drop-circle-outline"
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
          架空のグランピング施設のLP(オリジナル)
        </v-card-title>
        <v-card-subtitle class="f-f"
          >HTML/CSS(SCSS)/JavaScript 使用</v-card-subtitle
        >
        <v-card-text class="pb-0">
          <p class="mb-1 font-weight-bold">設定・デザイン</p>
          <ol>
            <li>
              5w1h
              <ul>
                <li>何を(目的)・認知、平日の利用増に繋げる</li>
                <li>いつ・隙間時間に観覧</li>
                <li>どこで・スマホメイン</li>
                <li>だれが・子を持つ女性(ペルソナ設定)</li>
                <li>なぜ・サービス内容確認と他との比較</li>
                <li>どのように・ママ友の口コミ→検索</li>
              </ul>
            </li>
            <li>
              ペルソナ設定(ターゲット)<br />
              『35歳、女性、住所(立川市)、今は主婦、車免許なし、子2歳、家事、育児に追われ疲弊、etc...』
            </li>
            <li>デザイン</li>
            <ul>
              <li>あえて女性向けのサイトを制作</li>
              <li>
                見やすさとできるだけ直感的にわかるように文字を簡潔に写真を多様
              </li>
              <li>ロゴ作成</li>
              <li>平日のお得感</li>
            </ul>
          </ol>
          <p class="my-1 font-weight-bold">コード</p>
          <ul>
            <li>レスポンシブ(モバイルファースト)スマホ、pc対応</li>
            <li>CSS設計はBEM記法</li>
            <li>
              主なアクション(js)
              <ul>
                <li>バーガーメニュー</li>
                <li>メニューは、ファーストビュー過ぎると色変化</li>
                <li>ファーストビューのスライダー表示(3画像)</li>
                <li>svg操作(アニメーション)</li>
                <li>topへ戻るボタン(スクロールをjs管理)</li>
                <li>aタグの内部リンクスクロール(スクロールをjs管理)</li>
                <li>hover時アニメーション</li>
                <li>スライダー自動＋ボタン(可変対応)</li>
                <li>アコーディオンメニュー</li>
                <li>予約日初期表示をアクセスした日</li>
              </ul>
            </li>
          </ul>
          <p class="my-1 font-weight-bold">製作期間</p>
          <ul>
            <li>設定・デザイン : 5日</li>
            <li>素材集め : 1日</li>
            <li>コード(文章考えながら) : 4日</li>
            <li>修正・最終確認 : 1日</li>
            <li>製作期間 : 11日</li>
          </ul>
          <v-divider class="my-3" />
          <p class="mb-0">
            コード詳細:
            <a
              href="https://github.com/arys22/LP.git"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none modal__link"
              ><v-icon color="#1976d2" class="text-body-1 modal__code"
                >mdi-github</v-icon
              >
              GitHub
            </a>
            <br />
            webサイト:
            <a
              href="https://arys22.github.io/LP/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none modal__link"
              ><v-icon color="#1976d2" class="text-body-1 modal__sample"
                >mdi-file-outline</v-icon
              >
              sampleページ
            </a>
            <br />
            (GitHub Pagesでの公開ページ)
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
      link: "tab-1",
      tabs: [
        {
          id: 1,
          src_tab: require("@/assets/img/LP1/LP_pc-1-min.png"),
          alt: "LPのpc画面上部",
          src_2: require("@/assets/img/LP1/LP_pc-2-min.png"),
          alt_2: "LPのpc画面下部",
          width: "90",
          type: "sp",
          name: "PC"
        },
        {
          id: 2,
          src_tab: require("@/assets/img/LP1/LP_sp-1-min.png"),
          alt: "LPのスマホ画面上部",
          src_2: require("@/assets/img/LP1/LP_sp-2-min.png"),
          alt_2: "LPのスマホ画面下部",
          width: "50",
          type: "sp",
          name: "SP"
        },
        {
          id: 3,
          src_tab: require("@/assets/img/LP1/LP_menu-min.png"),
          alt: "menu画面",
          width: "50",
          type: "menu",
          name: "menu"
        }
      ]
    };
  }
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
  &__code {
    vertical-align: baseline;
  }
  &__sample {
    margin-left: 2.1px;
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
