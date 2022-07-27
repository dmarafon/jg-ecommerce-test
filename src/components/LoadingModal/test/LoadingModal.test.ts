import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import LoadingModal from "../../LoadingModal/LoadingModal.vue";

describe("Given a LoadingModal component", () => {
  describe("When its invoked", () => {
    test("Then it should render a div element with the class 'loading__spinner'", () => {
      const wrapper = mount(LoadingModal);

      const divElement = wrapper.find("div");
      expect(divElement.exists()).toBe(true);

      const classElement = wrapper.find(".loading__spinner");
      expect(classElement.element.className).toBe("loading__spinner");
    });
  });
});
