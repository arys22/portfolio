<template>
  <v-col cols="12" md="6" class="product">
    <v-card class="product__card">
      <v-row class="mx-0">
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-img
              :class="{ 'on-hover': hover }"
              :src="require('@/assets/img/coding1/TOP2-1.png')"
              alt="コーディング画像1"
              max-width="267"
              max-height="200"
              position="center top"
              class="product__img"
              id="activator"
            >
              <!-- @click.stop="dialog= true" v-show="hover"-->
              <!-- hover時 -->
                <div  class="product__wrap" :class="{ 'delay-hover': hover }">
                  <span
                    class="product__wrap--title"
                    :class="{ 'delay-hover': hover }"
                    >全２ページ</span
                  >
                  <span
                    class="product__wrap--text"
                    :class="{ 'delay-hover': hover }"
                  >
                    top,contact
                  </span>
                </div>

            </v-img>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="8" class="product__text">
          <v-card-title class="pt-0">コーポレートサイト</v-card-title>
          <v-card-subtitle class="py-0"
            >html/css(scss)/javascript</v-card-subtitle
          >
          <v-card-text class="py-1">
            <ul>
              <li>XDデザインカンプからコーディング</li>
              <li>レスポンシブ(スマホ、pc)</li>
            </ul>
            <p class="mb-0 pt-1">
              コード詳細:
              <a
                href="https://drive.google.com/drive/folders/1xoUMEwNm_OI2jcuYdVkhREhmvZAYeAlV?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                class="text-decoration-none product__link"
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
                class="text-decoration-none product__link"
                ><v-icon color="#1976d2" class="text-body-1"
                  >mdi-file-outline</v-icon
                >
                sampleページ
              </a>
            </p>
          </v-card-text>
          <v-card-actions>
            <!-- モーダルウィンドウ -->
            <v-dialog
              v-model="dialog"
              :fullscreen="$vuetify.breakpoint.xsOnly"
              transition="scale-transition"
              activator="#activator"
              max-width="1000"
            >
              <!-- アクティベータースロット -->
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" class="product__btn" plain rounded>
                  詳細表示
                </v-btn>
              </template>
              <!-- ダイアログコンテンツ -->
              <ModalCoding01 @close="dialog = false" />
            </v-dialog>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
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
