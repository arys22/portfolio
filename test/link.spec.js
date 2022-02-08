import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import PageLinks from "@/components/top/PageLinks.vue";
import ScrollDown from "@/components/FirstView/ScrollDown.vue";
import backtop from "@/components/layouts/BackTop.vue";
import List from "@/components/top/List.vue";
import Product from "@/components/list/Product.vue";
import modal01 from "@/components/list/modal/ModalCoding1.vue";
import modal02 from "@/components/list/modal/ModalCoding2.vue";
import modal03 from "@/components/list/modal/ModalCoding3.vue";
import modalLP from "@/components/list/modal/ModalLP1.vue";
import modalPortfolio from "@/components/list/modal/ModalPortfolio.vue";
import Vuetify from "vuetify";
const localVue = createLocalVue();
let vuetify;

beforeEach(() => {
  vuetify = new Vuetify();
});

// PageLinks
describe("PageLinksのテスト", () => {
  const wrapper = shallowMount(PageLinks);
  test("リンクテスト", () => {
    // console.log(wrapper.html());
    const link = wrapper.findAllComponents("v-tooltip-stub");
    expect(link.at(0).text()).toBe("message");
    expect(link.at(1).text()).toBe("skill");
    expect(link.at(2).text()).toBe("list");
    expect(link.at(3).text()).toBe("contact");
  });
});

// ScrollDown
describe("ScrollDownのテスト", () => {
  const wrapper = shallowMount(ScrollDown);
  test("ScrollDownボタン", () => {
    // console.log(wrapper.html());
    const btn = wrapper.findComponent("v-btn-stub");
    expect(btn.exists()).toBe(true);
  });
});

// topへ戻る
describe("topへ戻るのテスト", () => {
  const wrapper = shallowMount(backtop, {
    propsData: {
      scrollY: 501
    }
  });
  test("propsテスト", () => {
    // console.log(wrapper.html());
    const btn = wrapper.findComponent("v-tooltip-stub");
    expect(wrapper.vm.$props.scrollY).toBe(501);
    expect(btn.isVisible()).toBe(true);
  });
});

// top List
describe("topページのList", () => {
  localVue.directive("parallax", () => {});
  const wrapper = shallowMount(List, {
    localVue,
    stubs: {
      Fade: true,
      Carousel: true,
      FadeIn: true,
      Btn: true,
      FadeSlide: true
    }
  });
  test("githubリンクのテスト", () => {
    expect(wrapper.findComponent("a").attributes().href).toBe(
      "https://github.com/arys22/portfolio.git"
    );
  });
});

// Product
describe("components/list/Product.vueのテスト", () => {
  const vuetifyVariables = { breakpoint: { xlOnly: true } };
  vuetify = new Vuetify(vuetifyVariables);
  const wrapper = shallowMount(Product, {
    localVue,
    vuetify
  });
  test("リンク先のテスト", () => {
    const link = wrapper.findAll("a");
    expect(link.at(0).attributes().href).toBe(
      "https://github.com/arys22/portfolio.git"
    );
    expect(link.at(1).attributes().href).toBe(
      "https://github.com/arys22/LP.git"
    );
    expect(link.at(2).attributes().href).toBe("https://arys22.github.io/LP/");
    expect(link.at(3).attributes().href).toBe(
      "https://github.com/arys22/pon-design.git"
    );
    expect(link.at(4).attributes().href).toBe(
      "https://arys22.github.io/pon-design/"
    );
    expect(link.at(5).attributes().href).toBe(
      "https://drive.google.com/drive/folders/1g_FEX5jw7VwIIueJfB8Whxe_Kwvvh4z8?usp=sharing"
    );
    expect(link.at(6).attributes().href).toBe(
      "https://32ba4riyvpz35dzawvoszw-on.drv.tw/code/www.DIGSMILE.com/html/"
    );
    expect(link.at(7).attributes().href).toBe(
      "https://drive.google.com/drive/folders/1xoUMEwNm_OI2jcuYdVkhREhmvZAYeAlV?usp=sharing"
    );
    expect(link.at(8).attributes().href).toBe(
      "https://32ba4riyvpz35dzawvoszw-on.drv.tw/code/www.design.com/html/"
    );
  });
});

// modal1
describe("ModalCoding1のテスト", () => {
  const wrapper = shallowMount(modal01);
  test("リンク先のテスト", () => {
    const link = wrapper.findAll("a");
    expect(link.at(0).attributes().href).toBe(
      "https://drive.google.com/drive/folders/1xoUMEwNm_OI2jcuYdVkhREhmvZAYeAlV?usp=sharing"
    );
    expect(link.at(1).attributes().href).toBe(
      "https://32ba4riyvpz35dzawvoszw-on.drv.tw/code/www.design.com/html/"
    );
  });
});

// modal2
describe("ModalCoding2のテスト", () => {
  const wrapper = shallowMount(modal02);
  test("リンク先のテスト", () => {
    const link = wrapper.findAll("a");
    expect(link.at(0).attributes().href).toBe(
      "https://drive.google.com/drive/folders/1g_FEX5jw7VwIIueJfB8Whxe_Kwvvh4z8?usp=sharing"
    );
    expect(link.at(1).attributes().href).toBe(
      "https://32ba4riyvpz35dzawvoszw-on.drv.tw/code/www.DIGSMILE.com/html/"
    );
  });
});

// modal3
describe("ModalCoding3のテスト", () => {
  const wrapper = shallowMount(modal03);
  test("リンク先のテスト", () => {
    const link = wrapper.findAll("a");
    expect(link.at(0).attributes().href).toBe(
      "https://github.com/arys22/pon-design.git"
    );
    expect(link.at(1).attributes().href).toBe(
      "https://arys22.github.io/pon-design/"
    );
  });
});

// modalLP
describe("ModalLPのテスト", () => {
  const wrapper = shallowMount(modalLP);
  test("リンク先のテスト", () => {
    const link = wrapper.findAll("a");
    expect(link.at(0).attributes().href).toBe(
      "https://github.com/arys22/LP.git"
    );
    expect(link.at(1).attributes().href).toBe("https://arys22.github.io/LP/");
  });
});

// modalPortfolio
describe("ModalPortfolioのテスト", () => {
  const wrapper = shallowMount(modalPortfolio);
  test("リンク先のテスト", () => {
    const link = wrapper.findAll("a");
    expect(link.at(0).attributes().href).toBe(
      "https://github.com/arys22/portfolio.git"
    );
  });
});
