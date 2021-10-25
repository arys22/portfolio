<template>
  <div class="logo" >

    <!-- P -->
    <svg viewBox="0 0 500 500" class="logo__mark" v-show="show" >
      <use xlink:href="#logo-text" x="0" y="0" class="logo__mark--p"></use>
    </svg>

    <!-- 円 内 -->
    <svg viewBox="0 0 500 500" class="logo__inner-circle">
      <!-- 細 -->
      <circle
        cx="250"
        cy="250"
        r="200"
        class="logo__inner-circle--ss"
        :style="lineColor"
      />
      <circle
        cx="250"
        cy="250"
        r="200"
        class="logo__inner-circle--s"
        :class="{ stop: logo }"
      />
    </svg>

    <!-- 円 中 -->
    <svg viewBox="0 0 500 500" class="logo__circle" :class="{ stop: logo }">
      <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
        <path
          class="logo__circle--m"
          :class="{ stop: logo }"
          :style="lineColor"
          d="M2253 4500 c-174 -18 -488 -102 -541 -145 -1 -1 7 -23 19 -49 15 -36
      25 -47 37 -43 10 3 58 20 107 37 50 17 137 43 195 58 102 25 113 26 425 26
      l320 0 125 -31 c69 -17 159 -44 200 -58 176 -63 396 -188 527 -299 130 -110
      355 -351 423 -453 196 -292 302 -661 303 -1048 0 -385 -106 -752 -302 -1045
      -85 -128 -107 -154 -241 -284 -174 -170 -211 -201 -313 -270 -171 -114 -364
      -198 -576 -250 -183 -45 -236 -51 -476 -51 -212 1 -240 3 -360 28 -316 68
      -562 182 -796 371 -76 62 -319 300 -319 314 0 4 -8 15 -17 23 -10 9 -25 26
      -33 38 -8 13 -25 35 -37 49 -13 15 -23 30 -23 34 0 5 -16 30 -35 57 -19 26
      -35 52 -35 56 0 5 -24 58 -54 119 -175 360 -223 812 -130 1236 34 153 73 269
      129 381 26 50 45 92 43 94 -9 8 -88 45 -96 45 -17 0 -88 -158 -143 -317 -98
      -285 -124 -664 -69 -988 33 -195 77 -328 171 -522 174 -356 450 -655 809 -874
      148 -90 261 -138 454 -189 460 -123 959 -86 1411 105 41 17 176 93 185 104 3
      3 32 24 65 46 178 119 380 310 507 479 137 183 266 435 323 633 58 199 70 297
      70 578 0 207 -4 279 -18 355 -65 347 -201 645 -413 906 -166 205 -455 443
      -669 551 -146 74 -376 146 -570 179 -106 18 -462 27 -582 14z"
        />
      </g>
      <circle
        cx="250"
        cy="250"
        r="196"
        class="logo__circle--mb"
        :class="{ stop: logo }"
      />
    </svg>

    <!-- 円 外 -->
    <svg viewBox="0 0 500 500" class="logo__outer-circle" :class="{ stop: logo }"
    >
      <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
        <path
          class="logo__outer-circle--l"
          :class="{ stop: logo }"
          :style="lineColor"
          d="M2865 4919 l-7 -41 -42 6 c-94 14 -416 18 -546 7 -346 -31 -672 -134
    -950 -300 -209 -126 -327 -216 -493 -380 -256 -251 -426 -493 -537 -766 -113
    -278 -168 -516 -182 -790 l-3 -50 -49 -3 -49 -3 6 -197 c9 -291 43 -483 132
    -743 46 -132 176 -398 253 -515 268 -408 661 -743 1112 -946 279 -126 537
    -181 915 -195 132 -5 184 -1 520 36 133 15 447 105 512 147 12 8 26 14 31 14
    18 0 264 136 367 204 107 70 238 171 324 249 l42 38 -25 34 c-32 42 -32 46 0
    76 87 79 255 292 346 439 26 41 52 80 57 86 25 29 106 208 146 320 91 255 133
    481 142 759 10 325 -32 617 -132 903 -19 56 -35 104 -35 107 0 3 18 12 40 21
    22 9 40 20 40 25 0 21 -143 291 -197 374 -262 395 -622 715 -1036 919 -167 82
    -360 151 -464 166 -38 5 -103 16 -146 25 -43 8 -80 15 -82 15 -2 0 -6 -19 -10
    -41z m-42 -94 c15 -6 18 -17 15 -53 l-3 -45 120 -24 c308 -61 652 -216 896
    -405 126 -97 304 -272 402 -393 112 -139 187 -256 268 -418 l70 -138 36 21
    c20 11 39 17 44 13 37 -38 124 -408 149 -628 13 -115 13 -404 0 -520 -18 -160
    -60 -367 -101 -495 -60 -186 -185 -435 -269 -538 -16 -20 -54 -69 -83 -109
    -29 -40 -95 -120 -146 -178 l-94 -106 -32 31 -32 31 -94 -81 c-227 -198 -455
    -329 -744 -431 -445 -156 -976 -158 -1440 -5 -154 51 -376 156 -500 237 -375
    243 -707 639 -868 1034 -118 288 -167 534 -167 834 l0 140 -43 3 -42 3 3 70
    c9 203 65 477 139 680 32 85 133 295 153 315 3 3 30 43 61 90 296 450 806 844
    1267 979 199 59 259 71 462 95 58 7 554 -1 573 -9z"
        />
      </g>
      <circle cx="250" cy="250" r="233" class="logo__outer-circle--b" :class="{ stop: logo }"/>
    </svg>
    <!-- 円 外線 -->
    <svg viewBox="0 0 500 500" class="logo__polyline">
      <!-- 左 -->
      <polyline points="178, 168  165, 168 150, 182 120, 182 " stroke="#eee" stroke-width=".5"/>
      <circle cx="120" cy="182" r="1"  fill="#eee" />
      <polyline points="153, 200 130, 200 110, 210 60, 210 "/>
      <circle cx="60" cy="210" r="2"  fill="#ddd" />
      <polyline points="142, 245  130,  238 10, 238 2, 227 " stroke="#ccc"/>
      <circle cx="2" cy="227" r="2"  fill="#ccc" />
      <polyline points="147, 280  120, 280 107, 280 100, 265 35, 265"/>
      <circle cx="35" cy="265" r="2"  fill="#ddd" />
      <polyline points="107, 280 90, 290 " stroke-width=".5"/>
      <circle cx="90" cy="290" r="1"  fill="#ddd" />
      <polyline points="167, 320 140, 295 120,295" stroke-width=".5"/>
      <circle cx="120" cy="295" r="1"  fill="#ddd" />

      <!-- 右 -->
      <polyline points="308, 158  335, 168 380, 168 420, 190" stroke-width=".5"/>
      <circle cx="420" cy="190" r="1"  fill="#ddd" />
      <polyline points="356, 225  430, 225  470, 225 495, 230" stroke="#d1d1d1"/>
      <circle cx="495" cy="230" r="2"  fill="#d1d1d1" />
      <polyline points="347, 200 380, 200 430, 225" stroke-width=".5"/>
      <polyline points="356, 270 364, 260  400, 260 430,250 480,250"/>
      <circle cx="480" cy="250" r="2"  fill="#ddd" />
      <polyline points="360, 300 370,300 390, 280 430, 280 450,270" stroke-width=".5"/>
      <circle cx="450" cy="270" r="1"  fill="#ddd" />
      <polyline points="346, 300  360, 300 390, 350" stroke-width=".5"/>
      <circle cx="390" cy="350" r="1"  fill="#bbb" />
    </svg>
    <!-- 線 -->
    <div class="logo__line" v-for="i in 3" :key="i" :style="lineColor" :class="{ stop: logo }"/>

  <!-- 背景 後-->
  <svg viewBox="0 0 1400 751" class="logo__bg" >
    <g transform="translate(0.000000,751.000000) scale(0.100000,-0.100000)" >
      <path d="M4619 5989 c-16 -16 -20 -29 -16 -54 5 -31 -5 -42 -231 -268 l-237
      -237 -1450 0 -1450 0 -345 -345 -345 -345 -272 0 c-236 0 -273 -2 -273 -15 0
      -13 170 -15 1472 -15 l1473 0 116 -116 c108 -108 117 -119 112 -148 -10 -63
      71 -102 117 -56 45 45 2 129 -60 116 -21 -4 -42 13 -146 115 l-120 120 -1177
      -1 c-647 0 -1177 3 -1177 7 0 5 145 153 323 331 l323 322 1449 0 1449 -1 241
      241 c214 214 244 241 266 235 34 -9 79 27 79 64 0 66 -74 97 -121 50z"/>
      <path d="M10632 5468 l-187 -188 -732 0 c-657 0 -733 2 -741 16 -6 10 -19 14
      -38 12 -26 -3 -29 -7 -29 -38 0 -30 4 -35 26 -38 15 -2 32 5 44 18 18 20 25
      20 749 20 l731 0 185 185 185 185 375 0 375 0 235 -235 235 -235 -540 -540
      -541 -540 -390 0 c-215 0 -466 -3 -557 -7 l-167 -6 -753 -754 -752 -753 -370
      0 -370 0 -173 173 c-152 152 -173 176 -167 198 9 37 -27 79 -69 79 -33 0 -61
      -21 -67 -50 -10 -50 36 -96 84 -85 18 5 53 -25 197 -170 l175 -175 385 0 385
      0 199 199 199 200 376 0 376 1 330 330 330 330 287 0 287 0 25 -25 c48 -48
      116 -19 116 49 0 63 -79 90 -118 41 l-20 -25 -294 0 -293 0 -331 -330 -330
      -330 -267 0 c-231 0 -267 2 -267 15 0 10 -11 15 -35 15 -23 0 -35 -5 -35 -14
      0 -13 -77 -32 -88 -22 -2 3 236 246 529 541 l534 535 555 0 555 0 235 235 235
      235 622 0 621 0 31 -25 c27 -23 37 -26 93 -22 l63 3 -66 2 c-62 2 -100 18 -82
      35 3 4 92 7 197 7 l191 0 170 170 170 170 272 0 c266 0 273 0 273 20 0 18 -7
      20 -57 20 l-57 0 57 58 c38 38 57 66 57 82 0 21 -11 14 -83 -58 l-82 -82 -195
      0 -195 0 -175 -175 -175 -175 -210 0 -209 0 -300 300 -301 299 40 41 39 40
      729 0 729 0 28 -30 c33 -35 57 -38 94 -9 32 25 36 77 8 102 -28 26 -79 22
      -106 -8 l-23 -25 -739 0 -738 0 -43 -42 -43 -43 -238 237 -237 237 -378 3
      -377 3 -188 -187z m1730 -615 c159 -159 288 -291 288 -295 0 -5 -264 -8 -587
      -8 l-588 0 295 295 c162 162 297 295 300 295 3 0 134 -129 292 -287z"/>
      <path d="M2556 4365 l-23 -25 -1267 0 c-1259 0 -1266 0 -1266 -20 0 -20 7 -20
      1266 -20 l1266 0 20 -25 c14 -17 29 -25 52 -25 42 0 64 18 72 57 5 26 1 37
      -19 57 -33 33 -71 33 -101 1z"/>
      <path d="M1462 3845 l-20 -25 -721 0 c-634 0 -721 -2 -721 -15 0 -17 -60 -16
      846 -15 l592 1 30 -31 c17 -16 40 -30 52 -30 31 0 70 44 70 79 0 59 -90 85
      -128 36z"/>
      <path class="logo__bg--1" d="M0 3609 c0 -16 14 -39 38 -62 l39 -38 518 0 518 1 29 -25 c38 -32 72
      -32 104 1 20 19 24 31 20 52 -15 61 -79 80 -122 37 l-25 -25 -517 0 -516 0
      -43 42 c-41 41 -43 41 -43 17z"/>
      <path d="M2234 2825 l-25 -25 -847 0 -847 0 -258 -258 c-198 -198 -257 -263
      -257 -282 0 -20 47 22 263 238 l262 262 220 0 220 0 220 -220 220 -220 1409 0
      1409 0 192 -190 c177 -176 191 -193 187 -221 -9 -63 73 -104 118 -59 46 46 9
      126 -56 118 -32 -4 -43 5 -231 194 l-196 198 -1411 0 -1411 0 -200 200 -200
      200 597 0 597 0 25 -25 c32 -32 75 -33 104 -2 28 29 28 57 1 91 -27 34 -71 35
      -105 1z"/>
    </g>
  </svg>

<!-- 隠しアイコン -->
  <svg viewBox="0 0 500 500" class="logo__icon" >
      <use xlink:href="#logo" x="0" y="0" class="logo__icon--p"></use>
  </svg>
  </div>

</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    logo: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#eee"
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 2500);
  },
  computed: {
    lineColor() {
      return {
        "--line-color": this.color
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: auto;
  pointer-events: none;
  &__mark {
    position: absolute;
    max-width: 170px;
    width: 20%;
    height: auto;
    z-index: 1;
    &--p {
      stroke: #ccc;
      // stroke: var(--line-color);
      stroke-width: 10px;
      stroke-dasharray: 10000;
      stroke-dashoffset: 10000;
      animation: dash 6s ease forwards;
      fill: #fff;
    }
  }
    //内
  &__inner-circle {
    position: absolute;
    max-width: 210px;
    width: 25%;
    height: auto;
    &--ss {
      fill: transparent;
      stroke: var(--line-color);
      stroke-width: 1;
      stroke-opacity: 0.6;
    }
    &--s {
      //太
      fill: transparent;
      stroke: #fafafa;
      stroke-width: 15;
      animation: circle-s 25s infinite ease-in-out alternate;
    }
  }

    //中
  &__circle {
    position: absolute;
    max-width: 300px;
    width: 39%;
    height: auto;
    animation: rotate-r 70s infinite ease-in-out alternate 1s;
    &--m {
      //枠
      fill: #fafafa;
      stroke: var(--line-color); //#666
      stroke-opacity: 0;
      stroke-width: 7;
      animation: circle-m 85s infinite ease-in-out alternate;
    }
    &--mb {
      //太
      fill: transparent;
      stroke: #eee;
      stroke-width: 22;
      animation: circle-mb 70s infinite ease-in-out alternate;
    }
  }

    //外
  &__outer-circle {
    position: absolute;
    max-width: 350px;
    width: 46%;
    height: auto;
    animation: rotate 130s infinite ease-in-out alternate;
    z-index: -1;
    &--l {
      fill: #ececec;
      stroke: var(--line-color); //#666
      stroke-opacity: 0;
      stroke-width: 8;
      animation: circle-l 100s infinite ease-in-out alternate 1s;
    }
    &--b {
      fill: transparent;
      stroke: #aaa;
      stroke-width: 33;
      animation: circle-b 90s infinite ease-in-out alternate;
    }
  }

  // 外線
  &__polyline{
    position: absolute;
    width: 100%;
    height: auto;
    fill: none;
    stroke: #ddd;
    stroke-width: 1px;
    z-index: -2;
  }

  // 線
  &__line {
    position: absolute;
    z-index: -2;
    opacity: .8;
    width: 0;
    height: 0;
    border-width: 1px;
    border-color:  var(--line-color);
      &::after{
        content: "";
        position: absolute;
        background: var(--line-color);
        border-radius: 50%;
        width: 10px;
        height: 10px;
      }
    &:first-of-type {
      bottom: 50%;
      right: 71.5%;;
      // width: 24%;
      // height: calc(50% - 39px);
      border-style: none none solid solid;
      border-bottom-left-radius: 5px;
      animation: line-1 25s ease  forwards;
      &::after{
        top: -4.5px;
        left: -5.7px;
      }
    }
    &:nth-of-type(2) {
      bottom:51%;
      left: 71.5%;
      // width: calc(28.5% - 26px);
      // height: calc(49% - 37px);
      border-style: none solid solid none;
      border-bottom-right-radius: 5px;
      animation: line-2 25s ease 1s forwards;
      &::after{
        top: -5px;
        right: -5.7px;
      }
    }
    &:nth-of-type(3) {
      top: 51%;
      left: 71.5%;
      // width: calc(28.5% - 29px);
      // height: calc(49% - 85px);
      border-style: solid solid none none;
      border-top-right-radius: 5px;
      animation: line-3 25s ease 2s forwards;
      &::after{
        bottom: -5px;
        right: -5.7px;
      }
    }
  }
  & .stop {
    animation-play-state: paused;
  }

  // 背景
  &__bg{
    width: 100%;
    height: auto;
    fill: #f5f5f5;
    z-index: -3;
    &--1{
      fill: #dedede;
    }
  }
  &__icon{
    position: absolute;
    bottom: 5%;
    left: 5%;
    width: 5%;
    height: auto;
    fill: #fff;
    transform: rotate(-40deg);
  }
}
// logo
@keyframes dash {
  0% {
    stroke: #000;
    stroke-width: 40px;
    }
  70%{
    stroke: #000;
    stroke-width: 40px;
    stroke-dashoffset: 0;
    }
  100% {
    stroke-dashoffset: 0;
  }
}
// 線1
@keyframes line-1 {
0%{width: 0; height: 0;}
50%{width: 24%; height: 0;}
100%{width: 24%; height: calc(50% - 39px);}
}
// 線2
@keyframes line-2 {
0%{width: 0; height: 0;}
50%{width: calc(28.5% - 26px); height: 0;}
100%{width: calc(28.5% - 26px); height: calc(49% - 37px);}
}
// 線3
@keyframes line-3 {
0%{width: 0; height: 0;}
50%{width: calc(28.5% - 29px); height: 0;}
100%{width: calc(28.5% - 29px); height: calc(49% - 85px);}
}

// 回転
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(320deg);
  }
}
// 回転 逆
@keyframes rotate-r {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-350deg);
  }
}

//円 s
@keyframes circle-s {
  // stroke-dasharray: 破線の長さ 破線の間隔;200x2x3.14=1256
  0% {
    stroke-dasharray: 80 350;
  }
  33% {
    stroke-dasharray: 390 600;
  }
  66% {
    stroke-dasharray: 130 180;
  }
  100% {
    stroke-dasharray: 550 700;
  }
}

//円 m 枠
@keyframes circle-m {
  // stroke-dasharray: 破線の長さ 破線の間隔;
  0% {
    stroke-dasharray: 500 10000;
    stroke-opacity: 0.8;
  }
  100% {
    stroke-dasharray: 12000 12000;
    stroke-opacity: 0.8;
  }
}
//円 m 太
@keyframes circle-mb {
  // stroke-dasharray: 破線の長さ 破線の間隔;1231
  0% {
    stroke-dasharray: 100 680;
  }
  100% {
    stroke-dasharray: 300 230;
  }
}

// 円 l
@keyframes circle-l {
  // stroke-dasharray: 破線の長さ 破線の間隔;16000
  0% {
    stroke-dasharray: 100 12000;
    stroke-opacity: 1;
  }
  99.9%,
  to {
    stroke-dasharray: 15800 15000;
    stroke-opacity: 1;
  }
}

@keyframes circle-b {
  // stroke-dasharray: 破線の長さ 破線の間隔;1476
  0% {
    stroke-dasharray: 100 780;
  }
  100% {
    stroke-dasharray: 60 680;
  }
}
</style>
