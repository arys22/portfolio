<template>
  <v-row justify="center" tag="section" align="center" class="list">
    <!-- 制作一覧 -->
    <Fade>
      <h2 class="text-center text-capitalize my-4 list__title">
        <v-icon class="mr-1" color="black" large>{{ mdiViewList }}</v-icon
        >制作物<br /><span class="list__subtitle f-f">list</span>
      </h2>
    </Fade>
    <v-col cols="12" sm="10" lg="8" class="list__wrap">
      <Fade>
        <Carousel />
      </Fade>
      <FadeIn>
        <Btn @click.native="transitionPage" class="mt-8 mb-16 list__btn"
          >一覧</Btn
        >
      </FadeIn>

      <!-- lisble -->
      <FadeIn>
        <v-card class="list__card py-8 mb-8" tag="section">
          <v-row class="mx-0">
            <v-col cols="12" md="5">
              <Fade>
                <v-img
                  :src="require('@/assets/img/lisble/lisble-sp.png')"
                  alt="lisble"
                  max-width="250"
                  max-height="350"
                  class="mx-auto list__img"
                  position="center -2px"
                ></v-img>
              </Fade>
            </v-col>

            <v-col
              cols="12"
              md="7"
              class="d-md-flex flex-md-column justify-md-space-between"
            >
              <div>
                <v-card-title>
                  <Fade>
                    <h3 class="f-f">買い物リスト - Lisble</h3>
                  </Fade>
                </v-card-title>
                <Fade>
                  <v-card-subtitle class="f-f">
                    Figma/TailwindCSS/TypeScript/Nuxt3
                  </v-card-subtitle>
                </Fade>
                <v-divider class="list__border" />
              </div>
              <v-card-text>
                <Fade>
                  <p class="mb-1">掲載サイト様一覧</p>
                  <ul class="list--none pb-6">
                    <FadeIn>
                      <li>
                        <LinkList :items="jpSite" />
                      </li>
                    </FadeIn>
                    <FadeIn>
                      <li>
                        海外
                        <LinkList :items="enSite" />
                      </li>
                    </FadeIn>
                  </ul>
                </Fade>
                <FadeSlide>
                  <span class="font-weight-bold">PC, iOS</span>:
                  <a
                    href="https://lisble.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none list__link ml-3"
                    ><v-icon small color="#1976d2" class="list__icon">{{
                      mdiFileOutline
                    }}</v-icon>
                    Lisble
                  </a>
                  <br />
                  <span class="ml-16 text-caption">↳ menuからインストール</span>
                  <br />
                  <span class="d-flex mt-3">
                    <span class="font-weight-bold">Android:</span>
                    <a
                      href="https://play.google.com/store/apps/details?id=net.lisble.twa&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><img
                        loading="lazy"
                        class="ml-3"
                        width="155"
                        height="60"
                        alt="Google Play で手に入れよう"
                        src="https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png"
                    /></a>
                  </span>
                </FadeSlide>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </FadeIn>

      <!-- ポートフォリオ -->
      <FadeIn>
        <v-card class="list__card py-8 mb-16" tag="section">
          <v-row class="mx-0">
            <v-col cols="12" md="5">
              <Fade>
                <v-img
                  :src="require('@/assets/img/portfolio/Portfolio.png')"
                  alt="Portfolioサイト"
                  max-width="250"
                  max-height="350"
                  class="mx-auto list__img"
                  position="center top"
                ></v-img>
              </Fade>
            </v-col>

            <v-col cols="12" md="7">
              <v-card-title>
                <Fade>
                  <h3 class="f-f">Portfolio</h3>
                </Fade>
              </v-card-title>
              <Fade>
                <v-card-subtitle class="f-f">
                  HTML/CSS(SCSS)/Vuetify/Nuxt.js
                </v-card-subtitle>
              </Fade>
              <v-divider class="list__border" />
              <v-card-text>
                <FadeIn>
                  <ul>
                    <li>レスポンシブ(MF)</li>
                    <li>CSS設計はBEM記法</li>
                    <li>ライブラリ(vue-typer, vue-parallax-js, @mdi/js)</li>
                    <li>デザインは引き算</li>
                    <li>OPアニメーション</li>
                    <li>
                      ヘッダー(色変化)・バーガーメニュー・ボトムナビ・ページ内リンク
                    </li>
                    <li>
                      ★FirstView★clickやマウスを動かしてみてください。
                      <ul>
                        <li>★タイトルはランダム(方向、回転)に弾けます。</li>
                        <li>svg操作・波紋・影・マウスストーカーetc...</li>
                      </ul>
                    </li>
                    <li>スクロールfadeアクション 5種類</li>
                    <li>listページのモーダルの見やすさを工夫</li>
                    <li>パンくずリスト</li>
                    <li>
                      ★フォームはgoogleフォームと連携・スプレッドシートで管理・受付時に自動返信メール・入力チェック・確認ページ・完了ページ★
                    </li>
                    <li>ナビゲーションガード</li>
                    <li>sitemap</li>
                    <li>Google Analytics ｱﾅﾘﾃｨｸｽ導入</li>
                    <li>Google Search Console ｻｰﾁｺﾝｿｰﾙ導入</li>
                    <li>SSG（Static Site Generator）</li>
                    <li>Netlifyでの公開</li>
                    <li>PWA化（Progressive Web Apps）</li>
                    <li>Jest ＋ vue-test-utils でのテストコード記述</li>
                  </ul>
                </FadeIn>
                <FadeSlide>
                  <p class="mt-7 mb-0">
                    コードの詳細:
                    <a
                      href="https://github.com/arys22/portfolio.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-decoration-none list__link ml-3"
                    >
                      <svg viewBox="0 0 256 300" class="list__svg">
                        <use xlink:href="#githubAtag" x="0" y="0"></use></svg
                      >GitHub</a
                    >
                  </p>
                </FadeSlide>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </FadeIn>

      <!-- 記事 -->
      <FadeIn>
        <v-card class="list__card py-8" tag="section">
          <v-card-title>
            <Fade>
              <h3 class="f-f">各種リンク</h3>
            </Fade>
          </v-card-title>
          <v-divider class="list__border" />
          <v-card-text>
            <Fade>
              <ul class="list--none pb-6">
                <FadeIn>
                  <li class="mb-4">
                    【Twitter】
                    <LinkList :items="twitter" />
                  </li>
                </FadeIn>
                <FadeIn>
                  <li class="mb-4">
                    【記事】
                    <LinkList :items="article" />
                  </li>
                </FadeIn>
                <FadeIn>
                  <li>
                    【CrowdSourcing】
                    <LinkList :items="crowd" />
                  </li>
                </FadeIn>
              </ul>
            </Fade>
          </v-card-text>
        </v-card>
      </FadeIn>
    </v-col>
    <div class="list__back text-uppercase" v-parallax="0.1">list</div>
  </v-row>
</template>

<script>
import { mdiViewList, mdiFileOutline } from "@mdi/js";
export default {
  data() {
    return {
      mdiViewList,
      mdiFileOutline,
      jpSite: [
        { name: "Appliv", url: "https://app-liv.jp/5347459/" },
        { name: "DevHaunt", url: "https://devhaunt.com/product/111" },
        {
          name: "APPLION",
          url: "https://applion.jp/android/app/net.lisble.twa/",
        },
        {
          name: "放課後ｱﾌﾟﾘ部",
          url: "http://houkago-no.appspot.com/app_detail/6278466848686080",
        },
        {
          name: "Applishow",
          url: "https://applishow.com/detail/DsL3Q4b5hxxm/",
        },
        {
          name: "AppRoom",
          url: "https://www.approom.me/app/01H2J1N7SXF5JSH8ZMMDMGBF2V?platform_id=2",
        },
        {
          name: "AppRoom記事",
          url: "https://www.approom.me/articles/01H2JGWJ3K3J72WVN7EJT5CKYD",
        },
        {
          name: "SeekUps",
          url: "https://seekups.seekgeeks.net/views/detail.html?id=712",
        },
        { name: "ロケットリリース", url: "https://rrws.info/archives/3197" },
        { name: "Appstimes", url: "https://appstimes.jp/posts/2991" },
        {
          name: "AnyMake",
          url: "https://anymake.app/products/kAjQm0f6tswHGaKTd0G5",
        },
        { name: "makepost", url: "https://www.makepost.net/projects/386" },
        { name: "MITSUKARU", url: "https://www.mitsukarusite.jp/2023/06/550/" },
        { name: "個人dev", url: "https://kojin.dev/application/41" },
      ],
      enSite: [
        {
          name: "Product Hunt",
          url: "https://www.producthunt.com/my/products",
        },
        {
          name: "AlternativeTo",
          url: "https://alternativeto.net/software/shopping-list--lisble/about/",
        },
      ],
      twitter: [
        { name: "@arieight_8", url: "https://twitter.com/arieight_8" },
        { name: "@Lisble_en (英語)", url: "https://twitter.com/Lisble_en" },
      ],
      article: [
        {
          name: "Qiita",
          url: "https://qiita.com/arieight",
        },
        {
          name: "Zenn",
          url: "https://zenn.dev/arieight",
        },
        {
          name: "Crieit",
          url: "https://crieit.net/users/arieight",
        },
        {
          name: "note",
          url: "https://note.com/arieight",
        },
        {
          name: "Medium(英語)",
          url: "https://medium.com/@az6665323",
        },
      ],
      crowd: [
        {
          name: "CrowdWorks",
          url: "https://crowdworks.jp/public/employees/4474490",
        },
        {
          name: "Lancers",
          url: "https://www.lancers.jp/profile/az6665323w?ref=header_menu",
        },
        {
          name: "coconala",
          url: "https://coconala.com/users/2890462",
        },
      ],
    };
  },
  methods: {
    transitionPage() {
      this.$router.push({ path: "/list" });
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 80px 0 150px;
  position: relative;
  &__title {
    line-height: 1;
    width: 100%;
    z-index: 1;
  }
  &__subtitle {
    font-size: 1rem;
    font-weight: normal;
  }
  &__wrap {
    z-index: 1;
  }
  &__btn {
    background-color: #fff;
  }
  &__card {
    width: 100%;
  }
  &__img {
    box-shadow: 0px 4px 5px -2px rgb(0 0 0 / 20%),
      0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%);
  }
  &__border {
    border-style: dotted;
    width: 95%;
    margin: 0 auto;
  }
  &--none {
    list-style: none;
  }
  &__icon {
    vertical-align: text-bottom;
  }
  &__svg {
    width: 16px;
    vertical-align: top;
    margin-right: 5px;
  }
  &__link {
    transition: opacity 0.2s ease-in-out;
    position: relative;
    display: inline-block;
    width: 100px;
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
      right: 10px;
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
  &__back {
    font-size: 15vw;
    font-weight: bolder;
    font-style: italic;
    color: #d9d9d9;
    opacity: 0.7;
    position: absolute;
    top: 5%;
    left: 3%;
    white-space: nowrap;
    transition: transform 0.7s ease-in-out;
  }
}
</style>
