<template>
  <client-only>
    <vue-typer
      :text="[
        'Welcome to my portfolio.',
        'Click to animate',
        'ようこそポートフォリオへ！',
        'このページは Topページ になります。',
        'PRODUCTS は ポートフォリオ一覧ページ です。',
        'CONTACT は お問い合わせページ です。'
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

</style>
