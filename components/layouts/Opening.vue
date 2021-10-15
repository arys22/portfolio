<template>
  <div class="top-op">
    <div class="top-op__bg" v-show="show">
      <img class="top-op__gif" src="@/assets/img/logo-p.gif" width="66" height="66" alt="logo" >
    </div>
    <div class="top-op__bg up" v-show="!show">
      <img class="top-op__img" src="@/assets/img/logo-180.png" alt="logo" width="22" height="22" >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:true,
    }
  },
  mounted (){
    setTimeout( () => {
      this.show =false;
    }, 1100);
  },
}
</script>

<style lang="scss" scoped>
.top-op{
  &__bg{
    position: fixed;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background: #222;
    &.up{
      animation-duration: 2s;
      animation-delay: .8s;
      animation-fill-mode: forwards;
      animation-timing-function: ease;
      animation-name: top-op;
    }
  }
  &__gif{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__img{
    position: fixed;
    top: 17.8px;
    left: 16px;
    animation: logo ease .7s;
    animation-delay: 0s;
  }
}
@keyframes logo {
0% {
  transform: translate(-50%, -50%) scale(3);
  top: 50%;
  left: 50%;
}
100% {
transform: translate(0, 0) scale(1);
top: 17.8px;
left: 16px;
}
}
@keyframes top-op{
0% {
  height: 100vh;
  opacity: 1;
}
50% {
  height: 56px;
  opacity: 1;
}
100% {
  height: 56px;
  opacity: 0;
  z-index: -1;
  display: none;
}
}

@media screen and (min-width: 960px) {
  .top-op__bg{
    animation-name:top-op2;
  }
}
@keyframes top-op2{
0% {
  height: 100vh;
  opacity: 1;
}
50% {
  height: 64px;
  opacity: 1;
}
100% {
  height: 64px;
  opacity: 0;
  z-index: -1;
  display: none;
}
}
</style>
