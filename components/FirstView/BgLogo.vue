<template>
  <div class="logo" >

    <!-- P -->
    <transition>
    <svg viewBox="0 0 500 500" class="logo__mark" v-show="!logo" >
      <use xlink:href="#logo" x="0" y="0" class="logo__mark--p" :style="lineColor"></use>
    </svg>
    </transition>
    <!-- 円 内 -->
    <transition>
    <svg viewBox="0 0 512 512" class="logo__inner-circle" v-show="logo">
      <g>
        <rect x="239.75" width="32.517" height="83.95" ></rect>
        <rect x="239.75" y="428.05" width="32.517" height="83.95" ></rect>
        <polygon points="113.934,42.425 155.9,115.134 184.067,98.875 142.084,26.167 	"></polygon>
        <polygon  points="327.95,413.125 369.934,485.833 398.084,469.575 356.116,396.859 	"></polygon>
        <polygon  points="115.134,155.892 42.434,113.916 26.184,142.084 98.884,184.05 	"></polygon>
        <polygon  points="396.867,356.1 469.583,398.084 485.834,369.916 413.134,327.934 	" ></polygon>
        <polygon  points="83.95,239.742 0,239.734 0,272.258 83.95,272.258 	"></polygon>
        <rect x="428.05" y="239.734"  width="83.95" height="32.525" ></rect>
        <polygon  points="98.884,327.95 26.167,369.916 42.434,398.084 115.134,356.1 	"></polygon>
        <polygon  points="413.134,184.05 485.834,142.084 469.583,113.916 396.867,155.892 	"></polygon>
        <polygon  points="113.917,469.575 142.084,485.833 184.05,413.125 155.9,396.866 	"></polygon>
        <polygon  points="398.084,42.425 369.917,26.167 327.934,98.875 356.1,115.134 	"></polygon>
      </g>
    </svg>
    </transition>
    <!-- 円 中 -->
    <svg viewBox="0 0 500 500" class="logo__circle" :class="{ stop: logo }">
      <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
        <path
          class="logo__circle--m"
          :class="{ stop: logo }"
          :style="lineColor"
          v-show="!logo"
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
      <transition>
      <circle
        cx="250"
        cy="250"
        r="196"
        class="logo__circle--mb"
        :class="{ stop: logo }"
        v-show="!logo"
      />
    </transition>
    </svg>
    <!-- 円 外 -->
    <svg viewBox="0 0 500 500" class="logo__outer-circle" :class="{ stop: logo }" :style="lineColor"
    >
      <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
        <path
          class="logo__outer-circle--l"
          :class="{ stop: logo }"
          v-show="!logo"
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
    <transition>
      <circle cx="250" cy="250" r="193" class="logo__outer-circle--b" :class="{ stop: logo }" v-show="!logo"/>
    </transition>
    </svg>
    <!-- 円 外線 -->
    <svg viewBox="0 0 500 500" class="logo__polyline" v-show="!logo" :style="lineColor">
      <!-- 左 -->
      <polyline points="182,210 162, 200 130, 200 115, 210 70, 210 "/>
      <circle cx="69" cy="210" r="2" />
      <polyline points="171, 245  150, 238 20, 238 3, 227 "/>
      <circle cx="3" cy="226" r="2" />
      <polyline points="207, 265 190,280 120, 280 107, 280 100, 265 35, 265"/>
      <circle cx="34" cy="265" r="2"/>
      <polyline points="107, 280 90, 290 " stroke-width=".5"/>
      <circle cx="89" cy="290.5" r="1" />
      <polyline points="182, 290 165, 300 130, 300 " stroke-width=".5"/>
      <circle cx="129" cy="300" r="1" />

      <!-- 右 -->
      <polyline points="317, 210 325.5,205  375, 205 405, 215" stroke-width=".7"/>
      <circle cx="406" cy="215.5" r="1.4" />
      <polyline points="295,240 314, 230 390,230 400,225 430, 225  460, 225 495, 240"/>
      <circle cx="496" cy="240.5" r="2"  />
      <polyline points="327, 265  337, 265  360,255 420,255 440,250"/>
      <circle cx="441" cy="249.5" r="2" />
      <polyline points="318,290  370,290 390, 280 410, 280 475,280 485,270" />
      <circle cx="486" cy="269.5" r="2" />
      <polyline points="330,290 345, 300 390, 300 " stroke-width=".5"/>
      <circle cx="391" cy="300" r="1" />
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
      <polyline points="1400, 303 1275, 303" fill="none" stroke="#f5f5f5" stroke-width="1"/>
      <polyline points="1400, 200 1300, 200 1200, 150 1110, 150 1050 , 150 1000,100 830,100 790,140" fill="none" stroke="#f1f1f1" stroke-width="4"/>
      <circle cx="790" cy="140" r="9" fill="#f5f5f5"/>
      <polyline points="1050 , 150 980,200 920,200 830, 300 780,300 760,320" fill="none" stroke="#f5f5f5" stroke-width="2"/>
      <circle cx="760" cy="320" r="5" fill="#f5f5f5"/>
    </svg>

<!-- 隠しアイコン -->
  <svg viewBox="0 0 500 500" class="logo__icon" >
      <use xlink:href="#logo" x="0" y="0" class="logo__icon--p"></use>
  </svg>
  </div>

</template>

<script>
export default {
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
  height: 100%;
  pointer-events: none;
  &__mark {
    position: absolute;
    max-width: 96px;
    height: auto;
    z-index: 1;
    &--p {
      stroke: var(--line-color);
      stroke-width: 30px;
      stroke-dasharray: 20000;
      stroke-opacity: 0;
      animation: dash 1.3s ease forwards .2s;
      fill: #fff;
      transition: all .2s ease-out;
    }
  }
    //内
  &__inner-circle {
    position: absolute;
    max-width: 105px;
    stroke: #e3e3e3;
    stroke-width: 3;
    fill: none;
    transition: all .3 ease-out;
  }

    //中
  &__circle {
    position: absolute;
    max-width: 210px;
    height: auto;
    transform: rotate(35deg);
    animation: rotate-r 70s infinite ease alternate;
    &--m {
      //枠
      fill: transparent;
      stroke: var(--line-color);
      stroke-opacity: 0;
      stroke-width: 12;
      animation: circle-m 1s ease forwards .8s;
    }
    &--mb {
      //太
      fill: none;
      stroke: #fcfcfc;
      stroke-width: 20;
      animation: circle-mb 70s infinite ease-in-out alternate;
      transition: all .3s ease-out;
    }
  }

    //外
  &__outer-circle {
    position: absolute;
    max-width: 300px;
    height: auto;
    animation: rotate 130s infinite ease alternate;
    z-index: -1;
    &--l {
      fill: transparent;
      stroke: var(--line-color);
      stroke-opacity: 0;
      stroke-width: 12;
      animation: circle-l 1.1s ease forwards 1.2s;
    }
    &--b {
      fill: none;
      stroke:#f6f6f6;
      stroke: var(--line-color);
      stroke-width: 115px;
      stroke-opacity: .08;
      animation: circle-b 90s infinite ease-in-out alternate;
      transition: all .3s ease-out ;
    }
  }

  // 外線
  &__polyline{
    opacity: .7;
    position: absolute;
    width: 100%;
    min-width: 513px;
    max-width: 900px;
    height: auto;
    fill: none;
    stroke: var(--line-color);
    stroke-opacity: .7;
    stroke-width: 1px;
    z-index: -2;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
    animation: dash-2 4s ease forwards 2.7s;
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
    transition: all .3s ease-out .3s;
      &::after{
        content: "";
        position: absolute;
        background: var(--line-color);
        border-radius: 50%;
        width: 10px;
        height: 10px;
        transition: all 1.2s ease-out .6s;
      }
    &:first-of-type {
      bottom: 50%;
      right: calc(50% + 48px);
      // height: calc(50% - 39px);
      border-style: none none solid solid;
      border-bottom-left-radius: 5px;
      animation: line-1 20s ease forwards 2s;
      &::after{
        top: -4.5px;
        left: -6.5px;
      }
    }
    &:nth-of-type(2) {
      bottom:51%;
      left: calc(50% + 48px);
      //  26px
      // height: calc(49% - 37px);
      border-style: none solid solid none;
      border-bottom-right-radius: 5px;
      animation: line-2 20s ease  forwards 2s;
      &::after{
        top: -5px;
        right: -5.7px;
      }
    }
    &:nth-of-type(3) {
      top: 51%;
      left: calc(50% + 48px);
      // 29+48=77
      // height: calc(49% - 87.5px);
      border-style: solid solid none none;
      border-top-right-radius: 5px;
      animation: line-3 20s ease forwards 2s;
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
    position: absolute;
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

// .logo
@keyframes dash {
  0%{
    stroke-dashoffset: 20000;
    stroke-opacity: 1;
  }
  100%{
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }
}
@keyframes dash-2 {
  0%{
    stroke-dashoffset: 800;
  }
  100%{
    stroke-dashoffset: 0;
  }
}
// 線1
@keyframes line-1 {
0%{width: 0; height: 0;}
50%{width: calc(45% - 45px); height: 0;}
100%{width: calc(45% - 45px); height: calc(50% - 38px);}
}
// 線2
@keyframes line-2 {
0%{width: 0; height: 0;}
50%{width: calc(50% - 74px); height: 0;}
100%{width: calc(50% - 74px); height: calc(49% - 37px);}
}
// 線3
@keyframes line-3 {
0%{width: 0; height: 0;}
50%{width: calc(50% - 77px); height: 0;}
100%{width: calc(50% - 77px); height: calc(49% - 87.5px);}
}

// 回転
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(350deg);
  }
}
// 回転 逆
@keyframes rotate-r {
  0% {
    transform: rotate(35deg);
  }
  100% {
    transform: rotate(-310deg);
  }
}

//円 m 枠
@keyframes circle-m {
  // stroke-dasharray: 破線の長さ 破線の間隔;
  0% {
    fill: transparent;
    stroke-dasharray: 100 22500;
    stroke-opacity: 1;
  }
  99.9%,
  to {
    fill: #fcfcfc;
    stroke-dasharray: 22500 22500;
    stroke-opacity: 1;
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
    fill: transparent;
    stroke-dasharray: 100 15000;
    stroke-opacity: 1;
  }
  99.9%,
  to {
    fill: #fcfcfc;
    stroke-dasharray: 15800 15000;
    stroke-opacity: 1;
  }
}

@keyframes circle-b {
  // stroke-dasharray: 破線の長さ 破線の間隔;1476
  0% {
    stroke-dasharray: 50 730;
  }
  100% {
    stroke-dasharray: 35 1080;
  }
}

.v-leave-active,
.v-enter-active {
  transition: opacity 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
