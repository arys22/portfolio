<template>
  <v-container fluid>
        <Breadcrumbs :items-data="breadData"/>
    <v-row  justify="center" class="list__Wrapper">
      <v-col cols="12" sm="11" lg="9" class="list__wrap" >
            <h2 class="text-capitalize mt-2 mb-10 mx-2 list__title">
            制作物
            <span class="text-subtitle-2 text-capitalize">list</span>
            </h2>
            <Product/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // metaタグ設定
  head() {
    return {
      title: "list Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "listページです。ポートフォリオ一覧ページです。"
        }
      ]
    };
  },
  data() {
    return {
      header: {
        title: "list" //ヘッダータイトル
      },
      breadData:[//パンくず
        {
          text: 'top',
          icon:"mdi-home",
          disabled: false,
          path: '/',
        },
        {
          text: '制作物',
          disabled: true,
          path: '/list',
        },
      ],
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
.list {
  &__title{
    font-size: 1.25rem;
  }
  &__wrap{
    padding-bottom: 60px;
  }
}
</style>
