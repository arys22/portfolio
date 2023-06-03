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
            :src="tab.src"
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
            <v-img
              :src="tab.src"
              :alt="tab.alt"
              position="center -1px"
              max-width="600"
              class="modal__item-img"
            >
            </v-img>
          </v-tab-item>
        </v-tabs-items>
      </v-col>

      <v-divider class="hidden-xs-only" vertical />

      <v-col cols="12" sm="6" md="4" class="pt-sm-6">
        <v-divider class="hidden-sm-and-up" />
        <v-card-title class="pt-sm-3">
          Lisble
        </v-card-title>
        <v-card-subtitle class="f-f"
          >Figma/TailwindCSS/TypeScript/Nuxt3</v-card-subtitle
        >
        <v-card-text class="pb-0">
          <ul>
            <li>
              <span class="font-weight-bold">企画からGoogle Play配信まで</span>
              <br /><span class="modal__sm">
                アイデア→設計→Figma→開発→独自ドメインでデプロイ→PWA→TWA(Bubblewrap)→Google
                Play
              </span>
            </li>
            <li>Figmaでデザイン、プロトタイプ作成</li>
            <li>
              <span class="font-weight-bold">主な機能・設定</span>
              <ul>
                <li>
                  主にtodoアプリがベース
                </li>
                <li class="font-weight-bold">
                  ★drag＆dropによる並び替え(細かい設定ができなかったので0から作成”ライブラリ不使用”)<span
                    class="modal__sm"
                    >上下、グループでの並び替え 2種</span
                  >
                </li>
                <li>
                  ★スマホ時だけ左右スワイプ<span class="modal__sm"
                    >(削除、マーカー)</span
                  >
                </li>
                <li>
                  ★履歴に残した品目を入力時に色の変化<span class="modal__sm"
                    >(重複買いと在庫を思い出すきっかけの為)</span
                  >
                </li>
                <li>
                  時刻と共に記録
                </li>
                <li>
                  Amazon商品検索<br />
                  ★Amazonアソシエイト<span class="modal__sm"
                    >(OneLinkで複数の国に対応)</span
                  >
                </li>
                <li>
                  テーマカラー変更 5種
                </li>
                <li>
                  ★多言語化対応<span class="modal__sm"
                    >(i18n) 28 か国に配信</span
                  >
                </li>
                <li>
                  ★左右レイアウト反転<span class="modal__sm">(左利き用)</span>
                </li>
                <li>終了時の★自動削除・保存</li>
                <li>
                  ENTERキーの改行設定<span class="modal__sm"
                    >(SP時の操作性の為)</span
                  >
                </li>
              </ul>
            </li>
            <li>
              <span class="font-weight-bold">アイデア</span
              >:ベースがありきたりなので他にない機能を付与
            </li>
            <li>
              <span class="font-weight-bold">設計</span
              >:運用コストがかからず、公開方法、マネタイズ化を考慮しての設計
            </li>
            <li>
              <span class="font-weight-bold">デザイン</span
              >:ターゲット層(ペルソナ設定)に合わせて優しい色使い、余白、シンプルを意識
            </li>
            <li><span class="font-weight-bold">UI・UX</span>:引き算</li>
            <li>
              <span class="font-weight-bold"
                >PageSpeed Insightsのスコア改善</span
              >
              <ul class="text-caption">
                <li>googleFonts,GTM(Analytics)使用でスコア 90 前後</li>
                <li>Web Worker,requestAnimationFrame等の対策</li>
              </ul>
            </li>
            <li>0から開発をしてとても勉強になりました。</li>
          </ul>
          <v-divider class="my-3" />
          <p class="">
            <span class="font-weight-bold ">PC, iOS</span>:
            <a
              href="https://lisble.net/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none modal__link"
              ><v-icon color="#1976d2" class="text-body-1 modal__sample"
                >mdi-file-outline</v-icon
              >
              Lisbleページ
            </a>
            <br />
            <span class="ml-14 text-caption">↳ menuからインストール</span>
            <br />
            <span class="d-flex mt-3">
              <span class="font-weight-bold mr-1">Android:</span>
              <a
                href="https://play.google.com/store/apps/details?id=net.lisble.twa&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
                rel="noopener noreferrer"
                ><img
                  width="155"
                  height="60"
                  alt="Google Play で手に入れよう"
                  src="https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png"
              /></a>
            </span>
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
          src: require("@/assets/img/lisble/lisble-sp.png"),
          alt: "lisbleのリストページ",
          width: "50",
          type: "sp",
          name: "list"
        },
        {
          id: 2,
          src: require("@/assets/img/lisble/lisble_history-pc.png"),
          alt: "lisbleのhistoryページ",
          width: "90",
          type: "pc",
          name: "history"
        },
        {
          id: 3,
          src: require("@/assets/img/lisble/lisble_about-pc.png"),
          alt: "lisbleのaboutページ",
          width: "90",
          type: "pc",
          name: "about"
        },
        {
          id: 4,
          src: require("@/assets/img/lisble/lisble_2-sp.png"),
          alt: "lisbleテーマ",
          width: "50",
          type: "機能",
          name: "テーマ"
        },
        {
          id: 5,
          src: require("@/assets/img/lisble/lisble_en-sp.png"),
          alt: "lisble英語",
          width: "50",
          type: "機能",
          name: "英語"
        },
        {
          id: 6,
          src: require("@/assets/img/lisble/lisble_3-sp.png"),
          alt: "lisble並び替え",
          width: "50",
          type: "機能",
          name: "並び替え"
        },
        {
          id: 7,
          src: require("@/assets/img/lisble/lisble_4-sp.png"),
          alt: "lisbleスワイプ",
          width: "50",
          type: "機能",
          name: "スワイプ"
        },
        {
          id: 8,
          src: require("@/assets/img/lisble/lisble_5-sp.png"),
          alt: "Amazon検索",
          width: "50",
          type: "機能",
          name: "Amazon検索"
        },
        {
          id: 9,
          src: require("@/assets/img/lisble/lisble_6-sp.png"),
          alt: "表示反転",
          width: "50",
          type: "機能",
          name: "表示反転"
        },
        {
          id: 10,
          src: require("@/assets/img/lisble/lisble_7-sp.png"),
          alt: "メニュー",
          width: "50",
          type: "機能",
          name: "menu"
        },
        {
          id: 11,
          src: require("@/assets/img/lisble/lisble_8-sp.png"),
          alt: "購入履歴機能",
          width: "90",
          type: "機能",
          name: "購入履歴"
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
  &__code {
    vertical-align: baseline;
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
