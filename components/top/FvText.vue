<template>
  <client-only>
    <vue-typer
      :text="[
        'Welcome to my portfolio.',
        'ようこそポートフォリオへ！',
        'Click to change',
        'このページはTopページになります。',
        'ポートフォリオ一覧はPRODUCTSです。',
        'お問い合わせはCONTACTです。'
      ]"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="typing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="3000"
      :erase-delay="250"
      erase-style="backspace"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
  </client-only>
</template>

<style lang="scss" scoped>
.vue-typer{
//   transform: translateZ(5px);
  display: flex;
  justify-content: flex-start;
}
@media screen and(min-width: 960px) {
  .vue-typer{
    justify-content: center;
  }
}
</style>
