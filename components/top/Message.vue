<template>
  <v-row align="center" tag="section" class="message">
    <h2 class="text-capitalize text-center my-4 message__title">
      <v-icon class="mr-1" color="black">mdi-file-document-outline</v-icon
      >ご挨拶<br /><span class="text-subtitle-1">message</span>
    </h2>
    <v-col cols="11"  md="5" class="message__wrap ">
      <v-card color="transparent" flat>
        <FadeIn>
          <v-card-text >
            <p>
              はじめまして。齋藤と申します。<br>
              この度はポートフォリオサイトに訪問いただきありがとうございます。<br>
              このサイトは、これまでに手がけた制作物、身につけたスキルをまとめています。<br>
              私自身、まだまだ至らない点はたくさんありますが、常に最適解を求めて研鑽を積み、クライアントに寄り添ったエンジニアリングができるよう心がけていきます。<br>
              今後ともよろしくお願いいたします。
            </p>
          </v-card-text>
        </FadeIn>
      </v-card>
    </v-col>
    <v-col cols="9"  md="4" class="message__img">
      <v-sheet class="message__bg" ></v-sheet>
      <Fade>
        <v-sheet
          class="message__bg message__bg--code"

        ></v-sheet>
      </Fade>
      <Fade>
        <v-sheet
          class="message__bg message__bg--pc"
        ></v-sheet>
      </Fade>
    </v-col>
          <div class="message__back text-uppercase" v-parallax="-0.17">message</div>
  </v-row>
</template>

<style lang="scss" scoped>
.message {
  margin-bottom: 100px;
  padding: 80px 24px 40px;
  justify-content: end;
  position: relative;
  &__title {
    width: 100%;
    line-height: 1;
  }
  &__wrap {
    margin: 0 auto 0 0;
    align-self: start;
    padding-bottom: 30px;
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
    // transition: transform 0.4s ease-in-out;
    &--code {
      z-index: 1;
      top: -20%;
      left: 15%;
      background-image: url("~@/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg");
      background-size: cover;
      background-position: center center;
      box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
        0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);
    }
    &--pc {
      z-index: 1;
      top: 25%;
      left: -25%;
      background-image: url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash.jpg");
      background-size: cover;
      background-position: center center;
      box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
        0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
    }
  }
  &__back {
    font-size: 15vw;
    font-weight: bolder;
    font-style: italic;
    color: #d9d9d9;
    opacity: 0.7;
    position: absolute;
    bottom: -15%;
    left: 3%;
    white-space: nowrap;
    transition: transform 0.7s ease-in-out;
  }
}
//sd以上
@media screen and (min-width: 600px) {
    .message {
    padding: 80px 8.33% 40px;
    }
  }
// md以上
@media screen and (min-width: 960px) {
  .message {
    justify-content: space-around;
    &__wrap {
      margin-right: 0;
    }
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
        left: -45%;
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
