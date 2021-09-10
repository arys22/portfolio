<template>
  <v-container fluid>
    <v-row class="rowt">
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
    <v-row class="row">
      <v-col>
        <FadeInOut>
          <v-btn dark>click</v-btn>
        </FadeInOut>
      </v-col>
      <v-col>
        <FadeIn>
          <v-btn dark>click</v-btn>
        </FadeIn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // metaタグ設定
  head(){
    return {
      title: "products Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "productsページです。ポートフォリオ一覧ページです。"
        }
      ]
    };
  },
  data() {
    return {
      header: {
        title: "products" //ヘッダータイトル
      }
    };
  },
  mounted() {
    this.updateHeader(); //ヘッダータイトル
  },
  methods: {
    updateHeader() {
      //ヘッダータイトルとして使いたい情報を渡す
      this.$nuxt.$emit("updateHeader", this.header.title);
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  height: 800px;
}
</style>
