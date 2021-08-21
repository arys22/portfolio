<template>
  <v-app dark>
    <Header />
    <v-main>
        <Nuxt />
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  // data () {
  //   return {
  //   }
  // }
};
</script>
