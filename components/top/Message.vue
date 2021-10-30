<template>
  <v-row align="center" tag="section" class="message">
    <h2 class="text-capitalize text-center my-4 message__title">
    <Fade>
      <v-icon class="mr-1" color="black">mdi-file-document-outline</v-icon
      >ご挨拶<br /><span class="text-subtitle-1">message</span>
    </Fade>
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
        <svg viewBox="0 0 1396 1445" class="message__line">
          <g transform="translate(0.000000,1445.000000) scale(0.100000,-0.100000)">
            <path d="M4913 5495 c-32 -22 -48 -79 -33 -115 20 -48 47 -65 101 -65 l49 0
            188 -188 189 -189 754 1 755 0 324 -324 325 -325 1140 0 1140 0 175 -175 175
            -175 1220 0 1220 0 155 -155 155 -155 482 0 c315 0 483 3 483 10 0 7 -166 10
            -478 10 l-477 0 -155 155 -155 155 -1220 0 -1220 0 -175 175 -175 175 -1140 0
            -1140 0 -320 320 -320 320 -755 1 -755 1 -192 191 c-181 180 -191 192 -177
            211 8 11 14 39 14 62 0 35 -5 47 -31 68 -35 30 -92 35 -126 11z"/>
            <path d="M3597 4692 l-237 -237 22 -25 c18 -19 18 -21 3 -8 -94 77 -264 58
            -344 -38 -127 -154 -32 -387 167 -411 212 -25 355 236 222 405 l-21 26 228
            228 228 228 535 0 535 0 165 -165 165 -165 800 0 800 0 290 -290 290 -290
            1179 0 1180 0 161 -160 161 -160 1245 0 1244 0 145 -145 145 -145 502 0 503 0
            0 30 0 30 -483 0 -482 0 -150 150 -150 150 -1245 0 -1245 0 -155 155 -155 155
            -1180 0 -1180 0 -295 295 -295 295 -800 0 -800 0 -165 165 -165 165 -565 0
            -565 0 -238 -238z m-273 -316 c103 -60 117 -213 27 -289 -41 -34 -102 -50
            -155 -41 -62 10 -132 83 -141 147 -23 151 138 260 269 183z"/>
            <path d="M8262 4914 c-57 -40 -65 -119 -16 -167 55 -56 142 -39 172 33 l17 40
            325 0 325 0 130 -130 130 -130 260 0 260 0 195 -195 195 -194 1182 -3 1183 -3
            163 -162 162 -163 485 2 485 3 -477 5 -478 5 -164 164 -164 163 -1177 -1
            -1178 -2 -201 201 -202 200 -259 0 -260 0 -130 130 -130 130 -332 0 c-320 0
            -332 1 -338 20 -18 58 -113 90 -163 54z m109 -17 c62 -47 43 -146 -30 -162
            -61 -13 -121 48 -105 109 13 54 93 85 135 53z"/>
            <path d="M4035 4618 c-36 -19 -55 -52 -55 -95 0 -80 80 -134 148 -100 l30 14
            123 -123 124 -124 201 0 202 0 12 -30 c28 -67 109 -82 161 -31 49 49 38 125
            -23 157 -53 27 -121 0 -141 -58 -6 -16 -25 -18 -204 -18 l-198 0 -122 123
            c-95 95 -120 125 -113 137 13 20 13 86 0 111 -22 41 -101 62 -145 37z m97 -19
            c28 -15 50 -72 39 -102 -12 -32 -58 -67 -87 -67 -12 0 -36 12 -53 26 -82 69 6
            194 101 143z"/>
            <path d="M5310 4065 l-145 -145 -591 0 -592 0 -6 35 c-4 19 -21 50 -39 69 -85
            90 -232 56 -267 -61 -31 -103 44 -203 150 -203 67 0 130 45 151 107 l11 33
            596 0 597 0 145 145 145 145 650 0 650 0 270 -270 270 -270 1255 0 1255 0 135
            -135 135 -135 1185 0 1185 0 200 -200 200 -200 527 0 c345 0 528 3 528 10 0 7
            -181 10 -523 10 l-522 0 -200 200 -200 200 -1185 0 -1185 0 -135 135 -135 135
            -1255 0 -1255 0 -270 270 -270 270 -660 0 -660 0 -145 -145z m-1436 -19 c60
            -25 97 -99 82 -161 -4 -14 -22 -43 -41 -63 -32 -35 -37 -37 -95 -37 -58 0 -63
            2 -95 37 -19 20 -37 49 -41 63 -15 61 22 135 80 161 40 17 69 17 110 0z"/>
            <path d="M8023 3473 c-35 -7 -73 -59 -73 -100 0 -51 45 -93 100 -93 33 0 48 6
            71 29 16 16 29 37 29 45 0 14 76 16 778 16 l777 0 235 -235 235 -235 777 0
            c702 0 778 -2 778 -16 0 -27 56 -74 89 -74 43 0 80 20 97 51 38 74 -11 149
            -97 149 -33 0 -89 -47 -89 -74 0 -14 -76 -16 -773 -16 l-772 0 -235 235 -235
            235 -782 0 c-750 0 -782 1 -787 18 -14 44 -72 74 -123 65z"/>
            <path d="M7650 2985 l-135 -135 -432 0 -431 0 -12 34 c-13 41 -48 66 -90 66
            -64 0 -99 -34 -100 -98 0 -100 122 -138 175 -54 l20 31 440 1 440 0 135 135
            135 135 925 0 925 0 220 -220 220 -220 805 0 805 0 160 -160 160 -160 970 2
            970 3 -960 2 -960 3 -165 165 -165 165 -805 0 -805 0 -220 220 -220 220 -935
            0 -935 0 -135 -135z"/>
            <path d="M12353 2993 c-35 -7 -73 -59 -73 -100 0 -68 86 -117 149 -84 14 8 40
            -13 147 -120 l129 -129 201 0 202 0 6 -25 c7 -29 59 -65 93 -65 36 0 73 22 89
            51 38 74 -11 149 -97 149 -33 0 -89 -47 -89 -74 0 -14 -24 -16 -198 -16 l-197
            0 -127 128 c-99 99 -125 130 -118 142 19 30 11 79 -17 109 -29 30 -61 41 -100
            34z"/>
            <path style="opacity: 0.4" d="M6419 1325 c-14 -8 -32 -28 -39 -45 l-12 -30 -287 0 -286 0 -126
            -126 c-113 -113 -129 -125 -147 -115 -56 30 -134 -4 -152 -67 -34 -113 108
            -191 184 -101 28 33 34 85 15 121 -10 18 2 33 112 144 l124 124 282 0 c271 0
            282 -1 288 -20 3 -10 20 -31 38 -46 64 -54 157 -8 157 77 0 79 -80 123 -151
            84z m-890 -351 c42 -35 43 -84 2 -125 -45 -44 -107 -35 -136 22 -20 38 -13 72
            20 105 32 32 75 31 114 -2z"/>
            </g>
        </svg>
  </v-row>
</template>

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
      top: -20%;
      left: 15%;
      background-image: url("~@/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg");
      background-size: cover;
      background-position: center center;
    }
    &--pc {
      z-index: 2;
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
    z-index: 1;
  }
  &__line {
    position: absolute;
    bottom: -25px;
    left: -200px;
    transform: rotate(90deg);
    height: 145%;
    fill: #ccc;
    opacity: .4;
    pointer-events: none;
  }
}
//sd以上
@media screen and (min-width: 600px) {
    .message {
    padding: 80px 8.33% 250px;
    &__line{
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
    &__line{
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
      background-image: url("~@/assets/img/ilya-pavlov-OqtafYT5kTw-unsplash (2).jpg");
    }
    &--pc {
      background-image: url("~@/assets/img/christopher-gower-m_HRfLhgABo-unsplash (2).jpg");
    }
  }
}
</style>
