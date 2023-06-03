<template>
  <v-carousel cycle interval="10000" :height="height" class="carousel mx-auto">
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-row justify="space-around">
        <v-col cols="7">
          <v-img
            :src="item.src"
            :alt="item.alt"
            class="carousel__img"
            position="center -1px"
          >
            <!-- :lazy-src="item.src" -->
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  aria-label="progress-circular"
                  color="black"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col cols="4">
          <v-img
            :src="item.src_sp"
            :alt="item.alt_sp"
            class="carousel__img"
            position="center top"
          >
            <!-- :lazy-src="item.src_sp" -->
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  aria-label="progress-circular"
                  color="black"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/img/portfolio/Portfolio.png"),
          alt: "Portfolioサイトpc画面",
          src_sp: require("@/assets/img/portfolio/Portfolio-sp.png"),
          alt_sp: "Portfolioサイトスマホ画面"
        },
        {
          src: require("@/assets/img/lisble/lisble-sp.png"),
          alt: "lisbleのlistページ",
          src_sp: require("@/assets/img/lisble/lisble_history-sp.png"),
          alt_sp: "lisbleのhistoryページ"
        },
        {
          src: require("@/assets/img/LP1/LP_pc-1-min.png"),
          alt: "LPのpc画面",
          src_sp: require("@/assets/img/LP1/LP_sp-1-min.png"),
          alt_sp: "LPのスマホ画面"
        },
        {
          src: require("@/assets/img/coding3/index1-pc-min.png"),
          alt: "コーディングしたサイトpc画面",
          src_sp: require("@/assets/img/coding3/index1-sp-min.png"),
          alt_sp: "コーディングしたサイトスマホ画面"
        }
      ]
    };
  },
  computed: {
    height() {
      if (this.$vuetify.breakpoint.name == "xs") {
        return 300;
      } else {
        return 400;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  &__img {
    width: 100%;
    height: auto;
    box-shadow: 0px 4px 5px -2px rgb(0 0 0 / 20%),
      0px 7px 10px 1px rgb(0 0 0 / 14%), 0px 2px 16px 1px rgb(0 0 0 / 12%);
  }
}
</style>
