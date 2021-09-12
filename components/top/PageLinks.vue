<template>
  <v-sheet elevation="2" class="d-flex" direction="column" rounded tag="nav">
    <v-btn icon v-for="(link, index) in links" :key="index">
      {{ link.icon }}
    </v-btn>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "message", icon: "mdi-email-outline" },
        { name: "skill", icon: "mdi-email-outline" },
        { name: "products", icon: "mdi-email-outline" },
        { name: "contact", icon: "mdi-email-outline" },
        ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
