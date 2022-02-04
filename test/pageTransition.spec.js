import { mount, shallowMount, createLocalVue, config } from "@vue/test-utils";
import HeaderPc from "@/components/layouts/HeaderNaviPc.vue";
import HeaderSp from "@/components/layouts/HeaderNaviSp.vue";
import BottomNavi from "@/components/layouts/BottomNavigation.vue";
import List from "@/components/top/List.vue";
import Form from "@/components/contact/ContactForm.vue";
import Confirm from "@/components/contact/Confirm.vue";
import Vuetify from "vuetify";

const $ITEMS = {
  menuItems: [
    {
      name: "home",
      path: "/",
      icon: "mdi-home"
    },
    {
      name: "list",
      path: "/list",
      icon: "mdi-view-list"
    },
    {
      name: "contact",
      path: "/contact",
      icon: "mdi-email-outline"
    }
  ]
};
describe("pcとspのページ遷移テスト", () => {
  // vuetifyタグをスタブ化する場合のテスト
  test("pcのページ遷移ボタンのテスト", () => {
    const wrapper = shallowMount(HeaderPc, {
      mocks: {
        $ITEMS
      },
      stubs: {
        // NuxtLink: RouterLinkStub
        "v-toolbar-items": true,
        "v-btn": true
      }
    });
    const btn = wrapper.findAllComponents("v-btn-stub");
    // ボタン表示確認
    expect(btn.at(0).text()).toBe("home");
    // to属性pathのテスト
    expect(btn.at(0).attributes().to).toBe("/");
    expect(btn.at(1).text()).toBe("list");
    expect(btn.at(1).attributes().to).toBe("/list");
    expect(btn.at(2).text()).toBe("contact");
    expect(btn.at(2).attributes().to).toBe("/contact");
  });
  // vuetifyを読み込むテスト
  const localVue = createLocalVue();
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify(); // 2. テストごとに初期化
  });

  test("spのページ遷移ボタンのテスト", () => {
    const wrapper = shallowMount(HeaderSp, {
      localVue,
      vuetify,
      mocks: {
        $ITEMS
      }
    });
    // console.log(wrapper.html());
    // タイトル
    const title = wrapper.findAllComponents("v-list-item-title-stub");
    // アイコン
    const icon = wrapper.findAllComponents("v-icon-stub");
    // item pathテスト
    const item = wrapper.findAllComponents("v-list-item-stub");
    // 表示確認
    expect(title.at(0).text()).toBe("home");
    // アイコン
    expect(icon.at(0).text()).toBe("mdi-home");
    // to属性pathのテスト
    expect(item.at(0).attributes().to).toBe("/");
    expect(title.at(1).text()).toBe("list");
    expect(icon.at(1).text()).toBe("mdi-view-list");
    expect(item.at(1).attributes().to).toBe("/list");
    expect(title.at(2).text()).toBe("contact");
    expect(icon.at(2).text()).toBe("mdi-email-outline");
    expect(item.at(2).attributes().to).toBe("/contact");
  });

  test("ボトムナビのテスト", () => {
    const wrapper = shallowMount(BottomNavi, {
      localVue,
      vuetify,
      mocks: {
        $ITEMS
      }
    });
    // console.log(wrapper.html());
    // item nameとpathテスト
    const item = wrapper.findAllComponents("v-btn-stub");
    // アイコン
    const icon = wrapper.findAllComponents("v-icon-stub");
    // 表示確認
    expect(item.at(0).text()).toContain("home");
    // アイコン
    expect(icon.at(0).text()).toBe("mdi-home");
    // to属性pathのテスト
    expect(item.at(0).attributes().to).toBe("/");
    expect(item.at(1).text()).toContain("list");
    expect(icon.at(1).text()).toBe("mdi-view-list");
    expect(item.at(1).attributes().to).toBe("/list");
    expect(item.at(2).text()).toContain("contact");
    expect(icon.at(2).text()).toBe("mdi-email-outline");
    expect(item.at(2).attributes().to).toBe("/contact");
  });

  test("制作物一覧ボタンのテスト", () => {
    // カスタムディレクティブをモック
    localVue.directive("parallax", () => {});
    const mockRouterPush = jest.fn();
    const wrapper = shallowMount(List, {
      localVue,
      vuetify,
      stubs: {
        Fade: true,
        Carousel: true,
        FadeIn: true,
        Btn: true,
        FadeSlide: true
      },
      mocks: {
        $router: {
          push: mockRouterPush
        }
      }
    });
    // console.log(wrapper.html());
    expect(mockRouterPush.mock.calls.length).toBe(0);
    // click時に$route.pushが実行されるかどうか
    wrapper.findComponent("btn-stub").trigger("click");
    expect(mockRouterPush.mock.calls.length).toBe(1);
    // $route.pushの引数が正しいかどうか
    expect(mockRouterPush).toHaveBeenCalledWith({
      path: "/list"
    });
  });
});

describe("お問い合わせの3ページ遷移テスト", () => {
  // 注意vue3で廃止の注意無し
  config.showDeprecationWarnings = false;
  // vuetifyを読み込むテスト
  const localVue = createLocalVue();
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify(); // 2. テストごとに初期化
  });

  test("ページ遷移テスト", () => {
    const initialValidation = jest.fn();
    const validate = jest.spyOn(Form.methods, "validate");
    const mockRouterPush = jest.fn();
    const wrapper = shallowMount(Form, {
      localVue,
      vuetify,
      stubs: {
        Btn: true
      },
      // 注意vue3で廃止
      methods: {
        // mounted()のinitialValidation()をモック
        initialValidation
      },
      mocks: {
        $router: {
          push: mockRouterPush
        }
      }
    });
    // console.log(wrapper.html());
    // 値をセット
    const test_name = "山田太郎";
    wrapper.findComponent('[type="text"]').vm.$emit("input", test_name);
    const test_email = "sample@sample.com";
    wrapper.findComponent('[type="email"]').vm.$emit("input", test_email);
    const test_content = "テスト";
    const textArea = wrapper.findComponent("v-textarea-stub");
    textArea.vm.$emit("input", test_content);
    expect(mockRouterPush.mock.calls.length).toBe(0);
    // 成功時
    validate.mockReturnValue(true);
    // click時に$route.pushが実行されるかどうか
    wrapper.findComponent("btn-stub").trigger("click");
    expect(mockRouterPush.mock.calls.length).toBe(1);
    // $route.pushの引数が正しいかどうか
    expect(mockRouterPush).toHaveBeenCalledWith({
      path: "/confirm",
      query: {
        name: "山田太郎",
        email: "sample@sample.com",
        content: "テスト"
      }
    });
  });

  test("バリテーション機能テスト", () => {
    const initialValidation = jest.fn();
    const wrapper = shallowMount(Form, {
      localVue,
      vuetify,
      stubs: {
        Btn: true
      },
      // 注意vue3で廃止
      methods: {
        // mounted()のinitialValidation()をモック
        initialValidation
      }
    });
    let actual;
    // console.log(wrapper.html());
    // required
    // 一文字の場合有効
    actual = wrapper.vm.required("a");
    expect(actual).toBe(true);
    // 空文字の場合、エラー表示が返る
    actual = wrapper.vm.required("");
    expect(typeof actual).toBe("string");
    expect(actual).toBe("必ず入力してください");
    // nullの場合、エラー表示が返る
    actual = wrapper.vm.required(null);
    expect(typeof actual).toBe("string");
    expect(actual).toBe("必ず入力してください");
    // limit_length
    // 15文字以内のとき、有効
    actual = wrapper.vm.limit_length("a".repeat(15));
    expect(actual).toBeTruthy();
    // 16文字だと、エラー表示が返る
    actual = wrapper.vm.limit_length("a".repeat(16));
    expect(typeof actual).toBe("string");
    expect(actual).toBe("15文字以内で入力してください");
    // emailRules
    // アドレス形式、有効
    actual = wrapper.vm.emailRules("sample@sample.com");
    expect(actual).toBeTruthy();
    // アドレス形式ではない文字列エラー表示
    actual = wrapper.vm.emailRules("a".repeat(16));
    expect(typeof actual).toBe("string");
    expect(actual).toBe("有効なアドレスを入力してください");
  });

  test("入力してボタンを押したとき、バリデーションエラーだとエラーを表示する", async () => {
    const initialValidation = jest.fn();
    const validate = jest.spyOn(Form.methods, "validate");
    const reset = jest.fn();
    const wrapper = shallowMount(Form, {
      localVue,
      vuetify,
      stubs: {
        Btn: true
      },
      // 注意vue3で廃止
      methods: {
        // mounted()のinitialValidation()をモック
        initialValidation
      }
    });

    validate.mockReturnValue(false);
    const error_text = wrapper.find(".contact__error");
    // エラー非表示 v-show="error"
    expect(error_text.isVisible()).toBe(false);
    wrapper.find("btn-stub").trigger("click");
    await wrapper.vm.$nextTick();
    await expect(wrapper.vm.error).toBe(true);
    // エラーを表示 v-show="error"
    await expect(error_text.isVisible()).toBe(true);
  });

  test("確認ページのページ遷移とバリテーションのテスト", () => {
    const initialValidation = jest.fn();
    const validate = jest.spyOn(Confirm.methods, "validate");
    const mockRouterPush = jest.fn();
    const mockRouterGo = jest.fn();
    const wrapper = shallowMount(Confirm, {
      localVue,
      vuetify,
      stubs: {
        FadeSlide: true
      },
      // 注意vue3で廃止
      methods: {
        // mounted()のinitialValidation()をモック
        initialValidation
      },
      mocks: {
        $router: {
          push: mockRouterPush,
          go: mockRouterGo
        },
        $route: {
          query: {
            name: "範馬刃牙",
            email: "sample@sample.com",
            content: "テスト"
          }
        }
      }
    });
    // console.log(wrapper.html());

    expect(mockRouterPush.mock.calls.length).toBe(0);
    // queryが表示されているか
    // 名前
    expect(
      wrapper.findComponent("[name='entry.1210533588']").attributes().value
    ).toBe("範馬刃牙");
    // メール
    expect(
      wrapper.findComponent("[name='entry.369018561']").attributes().value
    ).toBe("sample@sample.com");
    // お問い合わせ内容
    expect(
      wrapper.findComponent("[name='entry.1655379305']").attributes().value
    ).toBe("テスト");

    // バリテーションのテスト
    let actual;
    // required
    // 一文字の場合有効
    actual = wrapper.vm.required("a");
    expect(actual).toBe(true);
    // 空文字の場合、エラー表示が返る
    actual = wrapper.vm.required("");
    expect(typeof actual).toBe("string");
    expect(actual).toBe("必ず入力してください");
    // nullの場合、エラー表示が返る
    actual = wrapper.vm.required(null);
    expect(typeof actual).toBe("string");
    expect(actual).toBe("必ず入力してください");
    // limit_length
    // 15文字以内のとき、有効
    actual = wrapper.vm.limit_length("a".repeat(15));
    expect(actual).toBeTruthy();
    // 16文字だと、エラー表示が返る
    actual = wrapper.vm.limit_length("a".repeat(16));
    expect(typeof actual).toBe("string");
    expect(actual).toBe("15文字以内で入力してください");
    // emailRules
    // アドレス形式、有効
    actual = wrapper.vm.emailRules("sample@sample.com");
    expect(actual).toBeTruthy();
    // アドレス形式ではない文字列エラー表示
    actual = wrapper.vm.emailRules("a".repeat(16));
    expect(typeof actual).toBe("string");
    expect(actual).toBe("有効なアドレスを入力してください");
    // バリテーションここまで
    // 成功時
    validate.mockReturnValue(true);
    // click時に$route.pushが実行されるかどうか
    // wrapper.findComponent("[type='submit']").trigger("click");
    wrapper.findComponent("[type='submit']").vm.$emit("click");
    expect(mockRouterPush.mock.calls.length).toBe(1);
    // $route.pushの引数が正しいかどうか
    expect(mockRouterPush).toHaveBeenCalledWith({
      path: "/complete"
    });
    // 失敗時
    validate.mockReturnValue(false);
    // click時に$route.goが実行されるかどうか
    // wrapper.findComponent("[type='submit']").trigger("click");
    wrapper.findComponent("[type='submit']").vm.$emit("click");
    expect(mockRouterGo.mock.calls.length).toBe(1);
    // $route.goの引数が正しいかどうか 1ページ戻る
    expect(mockRouterGo).toHaveBeenCalledWith(-1);

    // 戻るボタン
    wrapper.findComponent("[type='button']").trigger("click");
    expect(mockRouterGo.mock.calls.length).toBe(1);
    // $route.goの引数が正しいかどうか 1ページ戻る
    expect(mockRouterGo).toHaveBeenCalledWith(-1);
    // iframeタグが非表示確認
    expect(wrapper.findComponent("iframe").isVisible()).toBe(false);
  });
});
