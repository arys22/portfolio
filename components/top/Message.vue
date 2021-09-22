<template>
  <v-row align="center" tag="section" class="message">
    <h2 class="text-capitalize text-center my-4 message__title">
      <v-icon class="mr-1" color="black">mdi-file-document-outline</v-icon
      >ご挨拶<br><span class="text-subtitle-1">message</span>
    </h2>
    <!-- ご挨拶 -->
    <v-col cols="9" sm="5" md="4" class="message__wrap ">
      <v-card color="transparent" flat>
        <FadeIn>
          <v-card-text>
            本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文
          </v-card-text>
        </FadeIn>
      </v-card>
    </v-col>
    <v-col cols="9" sm="5" md="4" class="message__img">
      <v-sheet class="message__bg"></v-sheet>
      <Fade class="message__fade">
        <v-sheet class="message__bg message__bg--code"></v-sheet>
      </Fade>
      <Fade>
        <v-sheet class="message__bg message__bg--pc"></v-sheet>
      </Fade>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.message {
  margin-bottom: 180px;
  padding: 0 28px;
  justify-content: end;
  &__title {
    width: 100%;
    line-height: 1;
  }
  &__wrap {
    margin: 0 auto 0 0;
    align-self: start;
    padding-bottom: 30px;
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
      top: -15%;
      left: 15%;
      background-image: url("~@/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg");
      background-size: cover;
      background-position: center center;
      box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
        0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);

    }
    &--pc {
      z-index: 1;
      top: 30%;
      left: -25%;
      background-image: url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash.jpg");
      background-size: cover;
      background-position: center center;
      box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
        0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
    }
  }
}
// md
@media screen and (min-width: 600px) {
  .message {
    justify-content: center;
    &__wrap {
      margin-right: 0;
    }
    &__img {
      margin-top: 150px;
      margin-right: 30px;
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
