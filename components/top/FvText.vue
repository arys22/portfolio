<template>
  <v-col class="text  text-md-center">
    <transition-group
      tag="div"
      class="text__box"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeEnter"
      v-on:leave="leave"
    >
      <div
        class="text__item text-h4 text-sm-h2 text-md-h1 text-uppercase font-weight-bold"
        v-show="show"
        v-for="datas in textModel"
        :key="datas.id"
      >
        {{ datas.text }}
      </div>
    </transition-group>
    <p class="text-md-h6">Welcome to my portfolio.</p>
    <v-btn @click="gather()">{{ textShow }}</v-btn>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      index: 2,
      text: ["portfolio","ポートフォリオ","ぽーとふぉりお"],
      textArray: [],//convTextで文字列を分解＆キーを生成 配列
      textModel: [],//1文取り出し表示
    };
  },
  created() {
    // this.textModel = this.convText(this.text);
    // textを分解
    this.textArray = this.text.map(el => this.convText(el));
    this.textModel = this.textArray[0];
  },
  computed: {
    textShow() {
      const text = this.show ? "Remove" : "Show";
      return text;
    },

  },
  methods: {
    gather() {
      this.show = !this.show;
      if (this.show) {
        this.index = this.index < this.textArray.length-1 ? this.index + 1 : 0;
        // 0<2 ➡1<2 ➡2<2 ➡0<2 ➡...
        // textArrayのindex 0,1,2
        this.textModel = this.textArray[this.index];
        }
      console.log(this.index)
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
    },
  }
};
</script>

<style lang="scss" scoped>
.text{
  &__box {
    display: flex;
    justify-content: flex-start;
  }
  &__item {
  transition: 0.4s cubic-bezier(0, 0.08, 0.05, 1);
  animation: gapping 2.5s ease-in-out;
  // animation-delay: 1s;
  // animation-fill-mode: forwards;
}
}
@keyframes gapping {
  0% {
    margin-left: -10%;
  }
  100% {
    margin: 0px;
  }
}

.text__box .text__item {
  transition: all 1.5s cubic-bezier(0, 0.08, 0.05, 1);
}

@media screen and(min-width: 960px) {
  .text{
    &__box {
      justify-content: center;
    }
  }
}



</style>
