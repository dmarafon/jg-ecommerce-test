import { describe, expect, test } from "vitest";
import Header from "../Header.vue";
import { render, screen, within } from "@testing-library/vue";
import "@testing-library/jest-dom";
import { mount, shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { IUserToken } from "../../../types/userTypes";
import useUserStore from "../../../stores/userStore";
import router from "../../../router";

describe("Given a Header Component", () => {
  describe("When its called to be rendered with a user logged in", () => {
    test("Then it should create a Header Component with 3 list components and an image", async () => {
      const storeUserInformation = {
        firstName: "test",
        email: "test@gmail.com",
        id: "test",
      };

      const totalListComponents = 3;

      const totalImages = 1;

      shallowMount(Header, {
        stubs: ["router-link", "router-view"],
        global: {
          plugins: [createTestingPinia()],
        },
      });

      // const { login }: { login: (userData: IUserToken) => void } =
      //   useUserStore();

      // await login(storeUserInformation);
      // screen.debug();
      // const link = screen.getByRole("link", {
      //   name: /jgmarket logo welcome jesus!/i,
      // });

      // const displayImage = within(link).getByRole("img", {
      //   name: /jgmarket logo/i,
      // });
      // const displayHeader = screen.getAllByRole("listitem");

      // expect(displayImage).toHaveLength(totalImages);
      // expect(displayHeader).toHaveLength(totalListComponents);
    });
  });

  // describe("When its called to be rendered with a user logged in the local storage and the user clicks in the logout button", () => {
  //   test("Then dispatch the logout action, changing the status of the user login payload to 'false' in the 'logged' property", () => {
  //     const expectedLoggedStatus = false;

  //     render(Header);

  //     const signOutLink = screen.getByRole("link", {
  //       name: /sign out/i,
  //     });

  //     userEvent.click(signOutLink);

  //     const userStatusInStore = store.getState();

  //     expect(userStatusInStore.user.logged).toBe(expectedLoggedStatus);
  //   });
  // });
});
