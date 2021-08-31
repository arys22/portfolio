<template>
  <client-only>
    <vue-typer
      :text="[
        'Welcome to my portfolio.',
        'ようこそポートフォリオへ！',
        'Click to change',
        'このページはTopページになります。',
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
    ></vue-typer>
  </client-only>
</template>

<style lang="scss" scoped>
.vue-typer{
  display: flex;
  justify-content: flex-start;
  position: absolute;
  left: 5%;
  top: 60%;
}
@media screen and(min-width: 960px) {
  .vue-typer{
    left: 40%;
  }
}
</style>
