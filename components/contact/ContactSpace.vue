<template>
  <div class="contact__space">
    <div class="contact__back text-uppercase" v-parallax="-0.12">
      contact
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  &__space {
    width: 100vw;
    height: 65px;
    background-color: #f6f6f6;
    position: relative;
  }
  &__back {
    font-size: 15vw;
    font-weight: bolder;
    font-style: italic;
    color: #d9d9d9;
    opacity: 0.7;
    position: absolute;
    top: 60px;
    left: 3%;
    white-space: nowrap;
    transition: transform 0.7s ease-in-out;
  }
}
</style>
