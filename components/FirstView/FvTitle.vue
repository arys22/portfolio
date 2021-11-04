<template>
  <transition-group
    tag="div"
    class="text__box text-md-h3 text-lg-h2"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:before-leave="beforeEnter"
    v-on:leave="leave"
  >
    <div
      class="text__item  font-weight-black"
      v-show="show"
      v-for="datas in textModel"
      :key="datas.id"
    >
      {{ datas.text }}
    </div>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      index: 0,
      text: ["PORTFOLIO", "Portfolio", "ポートフォリオ" ],
      textArray: [], //convTextで文字列を分解＆キーを生成 配列
      textModel: [] //1文取り出し表示
    };
  },
  created() {
    // this.textModel = this.convText(this.text);
    // textを分解
    this.textArray = this.text.map(el => this.convText(el));
    this.textModel = this.textArray[0];
  },
  mounted() {
    setTimeout(() => {
    this.show = true;
    },3500);
  },

  methods: {
    gather() {
      this.show = !this.show;
      if (this.show) {
        this.index =
          this.index < this.textArray.length - 1 ? this.index + 1 : 0;
        // 0<2 ➡1<2 ➡2<2 ➡0<2 ➡...
        // textArrayのindex 0,1,2
        this.textModel = this.textArray[this.index];
      }
      // this.$emit('gather');
    },

    // id作成
    convText(text) {
      const alms = {};
      // 文字列を分解
      const result = text.split("").map(el => {
        // キーを生成 {key: "value"}{el:"1"}
        alms[el] = alms[el] ? ++alms[el] : 1;
        // {id: "あ_１", text: "あ"}
        return { id: `${el}_${alms[el]}`, text: el };
      });
      // オブジェクトを凍結 変更不可
      return Object.freeze(result); // 監視しない
    },

    beforeEnter(el) {
      let x = (Math.random() - 0.5) * 3000;
      let y = (Math.random() - 0.5) * 3000;
      let ss = Math.random() + 2;
      let rr = (Math.random() - 0.5) * 200;
      el.style.opacity = 0;
      el.style.transform =
        "translate(" +
        x +
        "px," +
        y +
        "px)rotate(" +
        rr +
        "deg)scale(" +
        ss +
        ")";
    },
    enter(el, done) {
      setTimeout(
        () => {
          el.style.opacity = 1;
          el.style.transform = "translate(0px,0px)";
        },
        0,
        done
      );
    },
    beforeLeave(el) {
      el.style.opacity = 1;
      el.style.transform = "translate(0px,0px)";
    },
    leave(el, done) {
      setTimeout(
        () => {
          let x = (Math.random() - 0.5) * 300;
          let y = (Math.random() - 0.5) * 300;
          let ss = Math.random() + 1;
          let rr = (Math.random() - 0.5) * 200;
          el.style.opacity = 0;
          el.style.transform =
            "translate(" +
            x +
            "px," +
            y +
            "px)rotate(" +
            rr +
            "deg)scale(" +
            ss +
            ")";
        },
        0,
        done
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  &__box {
    font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }
  &__item {
    transition: 0.4s cubic-bezier(0, 0.08, 0.05, 1);
    animation: gapping 2s ease-out;
    // &:hover {
    //   color: rgba(245, 245, 245, 0.5);
    //   text-shadow: 2px 2px 2px #fefefe, 0 0 #ddd;
    // }
  }
}
@keyframes gapping {
  0% {
    margin-left: -12%;
  }
  100% {
    margin: 0px;
  }
}

.text__box .text__item {
  transition: all 2s cubic-bezier(0, 0.08, 0.05, 1);
}

/* トランジション用スタイル */
/* 動いている間 */
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 1s;
}
/* 同じ場所に入ってこれるように */
.v-leave-active {
  position: absolute;
}
/* 入ってくる時消える時 */
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@media screen and(min-width: 600px) {
  .text {
    &__box {
      font-size: 2.5rem;
    }
  }
}
</style>
