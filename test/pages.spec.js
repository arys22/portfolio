import { shallowMount } from "@vue/test-utils";
import index from "@/pages/index.vue";
import list from "@/pages/list.vue";
import contact from "@/pages/contact.vue";
import confirm from "@/pages/confirm.vue";
import complete from "@/pages/complete.vue";

// index
describe("pages/index.vueのテスト", () => {
  const updateHeader = jest
    .spyOn(index.methods, "updateHeader")
    .mockReturnValue();
  const wrapper = shallowMount(index, {
    stubs: {
      TopFv: true,
      Message: true,
      Skill: true,
      List: true,
      ContactSpace: true,
      ContactForm: true,
      PageLinks: true
    }
  });
  // console.log(wrapper.html());
  test("indexページのヘッダータイトル", () => {
    expect(updateHeader).toHaveBeenCalled();
  });
});

// list
describe("pages/list.vueのテスト", () => {
  const updateHeader = jest
    .spyOn(list.methods, "updateHeader")
    .mockReturnValue();
  const wrapper = shallowMount(list, {
    stubs: {
      Breadcrumbs: true,
      Product: true
    }
  });
  // console.log(wrapper.html());
  test("listページのヘッダータイトル", () => {
    expect(updateHeader).toHaveBeenCalled();
  });
});

// contact
describe("pages/contact.vueのテスト", () => {
  const updateHeader = jest
    .spyOn(contact.methods, "updateHeader")
    .mockReturnValue();
  const wrapper = shallowMount(contact, {
    stubs: {
      Breadcrumbs: true,
      StepBar: true,
      ContactForm: true
    }
  });
  // console.log(wrapper.html());
  test("contactページのヘッダータイトル", () => {
    expect(updateHeader).toHaveBeenCalled();
  });
});

// confirm
describe("pages/confirm.vueのテスト", () => {
  const updateHeader = jest
    .spyOn(confirm.methods, "updateHeader")
    .mockReturnValue();
  const wrapper = shallowMount(confirm, {
    stubs: {
      Breadcrumbs: true,
      StepBar: true,
      Confirm: true
    }
  });
  test("確認ページのヘッダータイトル", () => {
    expect(updateHeader).toHaveBeenCalled();
  });

  test("確認ページのナビゲーションガードのテスト", () => {
    // console.log(wrapper.html());
    // middleware/reContact.js が登録されているか
    expect(wrapper.vm.$options.middleware).toContain("reContact");
  });
});

// complete
describe("pages/complete.vueのテスト", () => {
  const updateHeader = jest
    .spyOn(complete.methods, "updateHeader")
    .mockReturnValue();
  const wrapper = shallowMount(complete, {
    stubs: {
      Breadcrumbs: true,
      StepBar: true,
      FadeSlide: true
    }
  });
  // console.log(wrapper.html());
  test("completeページのヘッダータイトル", () => {
    expect(updateHeader).toHaveBeenCalled();
  });
});
