<template>
  <v-row align="center" tag="section" class="message">
    <h2 class="text-capitalize text-center my-4 message__title">
      <v-icon class="mr-1" color="black">mdi-file-document-outline</v-icon
      >ご挨拶<br /><span class="text-subtitle-1">message</span>
    </h2>
    <v-col cols="12"  md="5" class="message__wrap ">
        <FadeSlide>
            <p>
              はじめまして。齋藤と申します。<br>
              この度はポートフォリオサイトに訪問いただきありがとうございます。<br>
              このサイトは、これまでに手がけた制作物、スキルをまとめています。<br>
              私自身、まだまだ至らない点がありますが、常に最適解を求めて研鑽を積み、クライアントに寄り添ったエンジニアリングができるよう心がけていきます。<br>
              今後ともよろしくお願いいたします。
            </p>
        </FadeSlide>
    </v-col>
    <v-col cols="9"  md="4" class="message__img">
      <Fade>
      <v-sheet class="message__bg" ></v-sheet>
      </Fade>
      <Fade>
        <v-sheet
          class="message__bg message__bg--code"
          elevation="8"
        ></v-sheet>
      </Fade>
        <v-sheet
          class="message__bg message__bg--pc"
          elevation="16"
        ></v-sheet>
    </v-col>
        <div class="message__back text-uppercase" v-parallax="-0.17">message</div>
  </v-row>
</template>

<style lang="scss" scoped>
.message {
  z-index: 1;
  padding: 80px 24px 150px;
  justify-content: end;
  position: relative;
  &__title {
    width: 100%;
    line-height: 1;
  }
  &__wrap {
    margin-bottom: 60px;
    align-self: start;
    z-index: 1;
  }
  &__img {
    position: relative;
    padding: 0;
    height: 180px;
  }
  &__bg {
    max-width: 350px;
    position: absolute;
    background-color: #ebebeb;
    width: 80%;
    height: 100%;
    &--code {
      z-index: 1;
      top: -20%;
      left: 15%;
      background-image: url("~@/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg");
      background-size: cover;
      background-position: center center;
    }
    &--pc {
      z-index: 1;
      top: 25%;
      left: -25%;
      background-image: url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash.jpg");
      background-size: cover;
      background-position: center center;
    }
  }
  &__back {
    font-size: 15vw;
    font-weight: bolder;
    font-style: italic;
    color: #d9d9d9;
    opacity: 0.7;
    position: absolute;
    bottom: 0;
    left: 3%;
    white-space: nowrap;
    transition: transform 0.7s ease-in-out;
  }
}
//sd以上
@media screen and (min-width: 600px) {
    .message {
    padding: 80px 8.33% 150px;
    }
  }
// md以上
@media screen and (min-width: 960px) {
  .message {
    justify-content: space-around;
    &__img {
      margin-top: 150px;
    }
    &__bg {
      &--code {
        top: -35%;
        left: 20%;
        width: 100%;
      }
      &--pc {
        top: 30%;
        left: -30%;
        width: 100%;
      }
    }
  }
}
// レスポンシブ Retina
@media screen and (min-width: 1269px),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 2dppx) {
  .message__bg {
    &--code {
      background-image: url("~@/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash (2).jpg");
    }
    &--pc {
      background-image: url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash (2).jpg");
    }
  }
}
</style>
