<template>
  <v-btn nuxt exact :to="url" class="btn__box" x-large rounded plain block>
    <slot></slot>
  </v-btn>
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
.btn__box {
  box-shadow: 0px 6px 14px #b5b6b6, -6px -6px 14px #fff;
  transition-duration: 0.2s;
  position: relative;
  &::after {
    content: "";
    width: 11px;
    height: 11px;
    border-top: 4px solid #000000de;
    border-right: 4px solid #000000de;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    opacity: 0.4;
    transition: transform 0.3s ease-out;
  }
  &:hover {
    box-shadow: 0 0 4px #babbbd, -2px -2px 4px #fff;
    &::after {
      transform: translateX(-2px) rotate(45deg);
      opacity: 0.6;
      animation: prompt 1.5s ease-in-out infinite;
    }
  }
}

@keyframes prompt {
  0% {
    transform: translateX(-1px) rotate(45deg);
  }
  50% {
    transform: translateX(4px) rotate(45deg);
  }
  100% {
    transform: translateX(-1px) rotate(45deg);
  }
}
</style>
