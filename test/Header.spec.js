import { mount, RouterLinkStub } from "@vue/test-utils";
import Header from "@/components/layouts/Header.vue";

describe("Headerのpcとsp", () => {
  test("pcのルーティング", () => {
    const wrapper = mount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });

    const spyBeforeEach = jest.spyOn(Header, "beforeEach");
    expect(spyBeforeEach).toHaveBeenCalled();

    const links = wrapper.findAll(RouterLinkStub);
    // expect(wrapper.vm).toBeTruthy();
    console.log(links.html());
  });
});
