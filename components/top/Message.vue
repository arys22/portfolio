<template>
  <v-row align="center" tag="section" class="message">
    <Fade>
      <h2 class="text-capitalize text-center my-4 message__title">
        <v-icon class="mr-1" large color="black">{{
          mdiFileDocumentOutline
        }}</v-icon
        >ご挨拶<br /><span class="message__subtitle f-f">message</span>
      </h2>
    </Fade>
    <v-col cols="12" md="5" class="message__wrap">
      <FadeIn>
        <p>
          はじめまして。齋藤と申します。<br />
          この度は、ポートフォリオサイトに訪問いただきありがとうございます。<br />
          このサイトは、これまでに手がけた制作物、スキルをまとめています。<br /><br />
          私自身、まだまだ至らない点がありますが、常に最適解を求めて研鑽を積み、クライアントに寄り添ったエンジニアリングをしていきます。<br />
          今後ともよろしくお願いいたします。
        </p>
      </FadeIn>
    </v-col>
    <v-col cols="9" md="4" class="message__img">
      <v-sheet class="message__bg"></v-sheet>
      <v-sheet class="message__bg message__bg--code" elevation="8"></v-sheet>
      <v-sheet class="message__bg message__bg--pc" elevation="16"></v-sheet>
    </v-col>
    <div class="message__back text-uppercase" v-parallax="0.08">message</div>
    <svg viewBox="0 0 1396 1445" class="message__line">
      <use xlink:href="#line" x="0" y="0"></use>
    </svg>
  </v-row>
</template>

<script>
import { mdiFileDocumentOutline } from "@mdi/js";
export default {
  data() {
    return {
      mdiFileDocumentOutline,
    };
  },
};
</script>

<style lang="scss" scoped>
.message {
  padding: 80px 24px 200px;
  justify-content: end;
  position: relative;
  &__title {
    z-index: 1;
    width: 100%;
    line-height: 1;
  }
  &__subtitle {
    font-size: 1rem;
    font-weight: normal;
  }
  &__wrap {
    margin-bottom: 60px;
    align-self: start;
    z-index: 2;
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
    z-index: 1;
    &--code {
      z-index: 2;
      top: -15%;
      left: 15%;
      background-image: url("~@/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash.webp"),
        url("~@/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg");
      background-size: cover;
      background-position: center center;
    }
    &--pc {
      z-index: 2;
      top: 15%;
      left: -25%;
      background-image: url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash.webp"),
        url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash.jpg");
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
    bottom: 6%;
    left: 3%;
    white-space: nowrap;
    transition: transform 0.7s ease-in-out;
    z-index: 1;
  }
  &__line {
    position: absolute;
    bottom: -25px;
    left: -200px;
    transform: rotate(90deg);
    height: 145%;
    fill: #ccc;
    opacity: 0.4;
    pointer-events: none;
  }
}
//sd以上
@media screen and (min-width: 600px) {
  .message {
    padding: 80px 8.33% 250px;
    &__line {
      left: 20%;
    }
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
        top: -20%;
        left: 20%;
        width: 100%;
      }
      &--pc {
        top: 20%;
        left: -30%;
        width: 100%;
      }
    }
    &__line {
      left: 50%;
      height: 160%;
    }
  }
}
// レスポンシブ Retina
@media screen and (min-width: 1269px),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 2dppx) {
  .message__bg {
    &--code {
      background-image: url("~@/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash (2).webp"),
        url("~@/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash (2).jpg");
    }
    &--pc {
      background-image: url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash (2).webp"),
        url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash (2).jpg");
    }
  }
}
</style>
