<template>
<div class="logo">
<!-- P -->
  <svg viewBox="0 0 500 500" class="logo__mark" v-show="show">
    <use xlink:href="#logo-text" x="0" y="0" class="logo__mark--p">
    </use>
  </svg>
<!-- 円 内 -->
  <svg viewBox="0 0 500 500" class="logo__inner-circle" :class="{stop : logo}">
    <circle  cx="250" cy="250" r="200" class="logo__inner-circle--s" :class="{stop : logo}"/>
  </svg>

<!-- 円 中 -->
  <svg viewBox="0 0 500 500" class="logo__circle" :class="{stop : logo}">
    <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
      <path class="logo__circle--m" :class="{stop : logo}" :style="lineColor" d="M2253 4500 c-174 -18 -488 -102 -541 -145 -1 -1 7 -23 19 -49 15 -36
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
      -669 551 -146 74 -376 146 -570 179 -106 18 -462 27 -582 14z"/>
    </g>
    <circle  cx="250" cy="250" r="196" class="logo__circle--mb" :class="{stop : logo}"/>
  </svg>

  <!-- 円 外 -->
  <svg viewBox="0 0 500 500" class="logo__outer-circle" :class="{stop : logo}">
    <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
    <path class="logo__outer-circle--l" :class="{stop : logo}" :style="lineColor" d="M2865 4919 l-7 -41 -42 6 c-94 14 -416 18 -546 7 -346 -31 -672 -134
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
    1267 979 199 59 259 71 462 95 58 7 554 -1 573 -9z"/>
    </g>
  </svg>
  <svg viewBox="0 0 500 500" class="logo__outer-circle" :class="{stop : logo}">
    <circle  cx="250" cy="250" r="238" class="logo__outer-circle--b" :class="{stop : logo}"/>
  </svg>
</div>
</template>

<script>
export default {
  data() {
    return {
      show:false,
    }
  },
  props:{
    logo: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default:"#eee"
    },
  },
  mounted() {
    setTimeout(() => {
      this.show= true;
    }, 2500);
  },
  computed: {
    lineColor(){
      return{
        '--line-color': this.color,
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  // pointer-events: none;
  &__mark{
    position: absolute;
    width: 40%;
    height: 40%;
    &--p{
      stroke: #666;
      stroke-width: 10px;
      stroke-dasharray: 10000;
      stroke-dashoffset: 10000;
      animation: dash 3s ease-in-out forwards;
      fill: #fff;
    }
  }
  &__inner-circle{//内
      position: absolute;
      width: 50%;
      height: 50%;
      transform: rotate(110deg);
    &--s{
      fill: transparent;
      stroke: #eee;
      stroke-width: 10;
      stroke-opacity: .6;
      animation: circle-s 20s infinite ease-in-out alternate;
    }
  }


  &__circle{//中
    position: absolute;
    width: 63%;
    height: 63%;
    animation: rotate-r 45s infinite ease-in-out alternate 1s;
      &--m{//枠
        fill: #fafafa;
        stroke: var(--line-color);//#666
        stroke-opacity: 0;
        stroke-width: 5;
        animation: circle-m 40s infinite ease-in-out alternate;
      }
    &--mb{//太
      fill: transparent;
      stroke: #eee;
      stroke-width: 22;
      animation: circle-mb 60s infinite ease-in-out alternate;
    }
  }

    &__outer-circle{//外
    position: absolute;
    width: 62%;
    height: 62%;
    // opacity: .9;
    animation: rotate 100s infinite ease-in-out alternate;
    &--l{
      fill: #ececec;
      stroke: var(--line-color);//#666
      stroke-opacity: 0;
      stroke-width: 7;
      animation: circle-l 70s infinite ease-in-out alternate 1s;
      }
    &--b{
      fill: transparent;
      stroke: #aaa;
      stroke-width: 34;
      animation: circle-b 70s infinite ease-in-out alternate;
    }
  }
}
.stop{
  animation-play-state: paused;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

// 回転
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% {transform: rotate(320deg);}
}
// 回転 逆
@keyframes rotate-r {
  0% { transform: rotate(0deg); }
  100% {transform: rotate(-350deg);}
}

//円 s
@keyframes circle-s {
  // stroke-dasharray: 破線の長さ 破線の間隔;200x2x3.14=1256
  0% { stroke-dasharray: 1300 100; }
  25%{ stroke-dasharray: 550 230; }
  50%{ stroke-dasharray: 250 150; }
  75%{ stroke-dasharray:330 70; }
  100% { stroke-dasharray: 830 230; }
}

//円 m 枠
@keyframes circle-m {
  // stroke-dasharray: 破線の長さ 破線の間隔;
  0% {
    stroke-dasharray: 0 6500;
    stroke-opacity: .7;
    }
  100%{stroke-dasharray: 9000 3000;}
}
//円 m 太
@keyframes circle-mb {
  // stroke-dasharray: 破線の長さ 破線の間隔;1231
  0% { stroke-dasharray: 100 680;}
  100%{stroke-dasharray: 300 230;}
}

  // 円 l
  @keyframes circle-l {
    // stroke-dasharray: 破線の長さ 破線の間隔;16000
    0% {
      stroke-dasharray: 0 9000;
      stroke-opacity: .9;
    }
    99.9%,to  { stroke-dasharray: 15800 15000; }
  }

  @keyframes circle-b {
  // stroke-dasharray: 破線の長さ 破線の間隔;1495
  0% { stroke-dasharray: 100 780;}
  100%{ stroke-dasharray: 60 680;}
}
</style>
