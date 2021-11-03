<template>
<!-- シンプル背景 削除可 -->
<!-- P -->
    <svg viewBox="0 0 500 500" class="logo" :style="lineColor"  v-show="!logo">
      <use xlink:href="#logo" x="0" y="0" ></use>
    </svg>
</template>

<script>
export default {
  props: {
    logo: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#eee"
    }
  },
  computed: {
    lineColor() {
      return {
        "--line-color": this.color
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  position: absolute;
  width: 50%;
  height: 50%;
  stroke: var(--line-color);
  stroke-width: 25;
  stroke-dasharray: 20000;
  animation: dash 5s ease-in forwards;
  fill: #fff;
  transition: all .8s ease-out ;
  pointer-events: none;
}
@keyframes dash {
  0%{
    stroke-dashoffset: 20000;
  }
  100%{
    stroke-dashoffset: 0;
  }
}
</style>
