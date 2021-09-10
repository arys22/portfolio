<template>
  <v-row justify="center" align="center" tag="section" class="ma-0 message">
    <v-col cols="9" sm="5" md="4" class="message__wrap ">
      <v-card color="transparent" flat >
        <v-card-title class="text-uppercase"><h2>message</h2></v-card-title>
        <v-card-text>
          本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="9" sm="5" lg="4" class="message__img">
      <v-sheet class="message__bg" elevation="10"></v-sheet>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.message {
  &__wrap {
    margin: 0 auto 0 0;
    align-self: start;
  }
  &__img {
    max-width: 600px;
    align-self: flex-end;
    height: 200px;
    position: relative;
    margin: 25px 0 0 auto;
    padding: 0;
    &::before {
      position: absolute;
      content: "";
      top: -25px;
      left: -20px;
      width: 98%;
      height: 98%;
      background-color: #efefef;
    }
  }
  &__bg {
    position: absolute;
    background-image: url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
}
// md
@media screen and (min-width: 600px) {
  .message {
    height: 400px;
    &__wrap {
      margin-right: 0;
    }
    &__img {
      margin-left: 20px;
      height: 60%;
    }
  }
}

// レスポンシブ Retina
@media screen and (min-width: 1269px),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 2dppx) {
  .message__bg {
    background-image: url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash (2).jpg");
  }
}
</style>
