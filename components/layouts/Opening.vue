<template>
  <div class="top-op">
    <div class="top-op__bg" v-show="show" >
      <img class="top-op__gif" src="@/assets/img/logo.gif" width="66" height="66" alt="logo" >
    </div>
    <div class="top-op__bg up" v-show="!show" :style="headerSize">
      <svg viewBox="0 0 500 500" width="22" height="22" class="top-op__mark">
        <use xlink:href="#logo" x="0" y="0" fill="#fff"></use>
      </svg>
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
    }, 1000);
  },
  computed: {
    headerSize(){
      return{
        '--header-height': this.$vuetify.application.top + "px",
      }
    }
  }
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
      animation-duration: 1.5s;
      animation-delay: .8s;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-name: top-op;
    }
  }
  &__gif{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__mark{
    position: fixed;
    top: 17.8px;
    left: 16px;
    animation: logo ease-in-out .7s;
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
  height: var(--header-height);
  opacity: 1;
}
100% {
  height: var(--header-height);
  opacity: 0;
  z-index: -1;
  display: none;
}
}
@media screen and (min-width: 960px) {
  .top-op__mark {
    top: 21.8px;
  }
}
</style>
