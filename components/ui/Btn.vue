<template>
  <div class="btn">
    <v-btn nuxt exact :to="url" class="my-13 btn__box" x-large rounded plain block>
      <slot></slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.btn {
  text-align: center;
  &__box {
    box-shadow: 0px 6px 14px #b5b6b6, -6px -6px 14px #FFF;
    transition-duration: 0.2s;
    position: relative;
    &::after{
      content: "";
      width: 11px;
      height: 11px;
      border-top: 4px solid #000000de;
      border-right: 4px solid #000000de;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      opacity: .4;
      transition: transform .3s ease-out;
    }
    &:hover {
      box-shadow: 0 0 4px #babbbd, -2px -2px 4px #FFF;
      &::after{
        transform:translateX(-2px) rotate(45deg);
        opacity: .6;
        animation: prompt 1.5s ease-in-out infinite;
      }
    }
  }
}
@keyframes prompt {
  0% {
    transform: translateX(-1px)rotate(45deg);
  }
  50% {
    transform: translateX(4px)rotate(45deg);
  }
  100% {
    transform: translateX(-1px)rotate(45deg);
  }
}
</style>
