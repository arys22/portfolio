<template>
  <transition name="down">
    <client-only>
      <vue-typer
        :text="[
          'Welcome to my portfolio',
          'ようこそポートフォリオへ！',
          'Please click!!',
          'このページはTOPページになります。',
          'ポートフォリオ一覧はLISTページです。',
          'CONTACTからお気軽にお問い合わせください。'
        ]"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="70"
        :type-delay="300"
        :pre-erase-delay="3000"
        :erase-delay="300"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="smooth"
        v-show="show"
      ></vue-typer>
    </client-only>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.vue-typer {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  position: absolute;
  top: 25px;
  left: 5%;
  max-width: 75%;
  pointer-events: none;
  padding: 0 5px;
  border-radius: 5px;
  z-index: 5;
}
.down-enter-active,
.down-leave-active {
  transition: transform 1s ease-out;
}
.down-enter,
.down-leave-to {
  transform: translateX(0) translateY(-80px);
}
// @media screen and(min-width: 600px) {
//   .vue-typer{
//     margin-left: 35%;
//   }
// }
</style>
