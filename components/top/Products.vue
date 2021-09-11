<template>
  <v-row justify="center" tag="section" align="center" class="products">
    <v-col cols="12" sm="10" lg="8">
      <!-- 制作実績一覧 -->
      <h2 class="text-center text-uppercase my-4">products</h2>
      <Carousel />
      <Btn :url="url">詳細</Btn>
      <v-card>
        <v-conteiner fluid>
          <v-row>
            <v-col cols="12" sm="4">
              <v-img></v-img>
            </v-col>
            <v-col cols="12" sm="8">
            <v-card-title>portforio</v-card-title>
            <v-card-subtitle>サブタイトル</v-card-subtitle>
            <v-card-text>本文</v-card-text>
            <!-- <v-card-actions><Btn :url="url">詳細</Btn></v-card-actions> -->
            </v-col>
          </v-row>
        </v-conteiner>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      url: "/products"
    };
  }
};
</script>

<style lang="scss" scoped>
.products {
  margin-bottom: 100px;
}
</style>
