<template>
  <v-carousel cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :alt="item.alt"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            alt:"リス"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            alt:"鳥"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            alt:"宇宙"
          }
        ]
      }
    }
  }
</script>
