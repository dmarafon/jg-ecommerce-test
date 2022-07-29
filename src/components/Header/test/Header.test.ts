import { describe, expect, test, vi } from "vitest";
import Header from "../Header.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import { createTestingPinia } from "@pinia/testing";
import router from "../../../router";
import useUserStore from "../../../stores/userStore";
import { storeToRefs, _StoreWithGetters } from "pinia";
import { IUser } from "../../../types/userTypes";

describe("Given a Header Component", () => {
  beforeEach(() => {
    const teleportElement: HTMLDivElement = document.createElement("div");
    teleportElement.id = "modal__container";
    document.body.appendChild(teleportElement);
  });

  afterEach(() => {
    document.body.outerHTML = "";
  });

  describe("When its called to be rendered with a user logged in", () => {
    test("Then it should create a Header Component with 3 list components and an image", async () => {
      const storeUserInformation = {
        firstName: "test",
        email: "test@gmail.com",
        id: "test",
      };

      const totalListComponents: number = 3;

      render(Header, {
        global: {
          plugins: [
            createTestingPinia({
              initialState: {
                userData: { firstName: "Test Name" },
              },
            }),
            router,
          ],
        },
      });

      const displayImage = screen.getByRole("img", {
        name: /jgmarket logo/i,
      });
      const displayHeader = screen.getAllByRole("listitem");

      expect(displayImage).toBeInTheDocument();
      expect(displayHeader).toHaveLength(totalListComponents);
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
