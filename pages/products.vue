<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <!-- <em>&mdash;John Johnson</em> -->
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {


  // metaタグ設定
  head() {
    return {
      title: "inspire Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "これはinspireページです。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.text-center {
  height: 5000px;
}
</style>
