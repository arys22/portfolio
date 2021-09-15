<template>
  <div class="bar">
    <div class="bar__item" :class="{'active': $route.path === '/contact' ||  $route.path === '/'}">STEP.1<br />ご入力</div>
    <div class="bar__item" :class="{'active': $route.path === '/confirm'}">STEP.2<br />ご確認</div>
    <div class="bar__item" :class="{'active': $route.path === '/complete'}">STEP.3<br />完了</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  &__item {
    font-size: .7rem;
    position: relative;
    width: 33%;
    text-align: center;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    line-height: 1.4;
    background: #f5f5f5;
    color: #999999;
    &:not(:last-child)::before,
    &:not(:last-child)::after {
      position: absolute;
      z-index: 2;
      top: 0;
      bottom: 0;
      left: 100%;
      content: "";
      border: 25px solid transparent;
      border-left: 12px solid #f5f5f5;
      margin: auto;
    }
    &:not(:last-child)::before {
      margin-left: 1px;
      border-left-color: #fff;
    }
  }
}

@media screen and (min-width: 600px) {
  .bar {
    &__item {
      font-size: 1rem;
      line-height: 1.5;
      padding: 13px 0;
      &:not(:last-child)::before,
      &:not(:last-child)::after {
        border-width: 37px;
        border-left-width: 20px;
      }
    }
  }
}
/* active */
.bar__item.active {
  z-index: 1;
  background: #333;
  color: #fff;
  &:not(:last-child)::after {
    border-left-color: #333;
  }
  &:not(:last-child)::before {
    border-left: none;
  }
}
</style>
