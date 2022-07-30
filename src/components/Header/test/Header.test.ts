import { describe, expect, test, vi } from "vitest";
import Header from "../Header.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import { createTestingPinia } from "@pinia/testing";
import router from "../../../router";
import { IUser } from "../../../types/userTypes";
import { localStorageMock } from "../../../mocks/localStorageMock";
import { mount } from "@vue/test-utils";

describe("Given a Header Component", () => {
  beforeEach(() => {
    const teleportElement: HTMLDivElement = document.createElement("div");
    teleportElement.id = "modal__container";
    document.body.appendChild(teleportElement);
  });

  afterEach(() => {
    document.body.outerHTML = "";
  });

  const storeUserInformation: IUser = {
    firstName: "test name",
    email: "test@gmail.com",
    id: "1234",
    logged: true,
  };

  const gettinUpLocalStorage = localStorageMock;

  const saveToStorage = (value: string) => {
    window.localStorage.setItem("token", value);
  };

  Object.defineProperty(window, "localStorage", {
    value: gettinUpLocalStorage,
  });

  describe("When its invoked to be rendered with a user logged in", () => {
    test("Then it should create a Header Component with 3 list components and an image", async () => {
      const totalListComponents: number = 3;

      render(Header, {
        global: {
          plugins: [
            createTestingPinia({
              initialState: {
                userData: storeUserInformation,
              },
            }),
            router,
          ],
        },
      });

      const displayImage: HTMLElement = screen.getByRole("img", {
        name: /jgmarket logo/i,
      });

      const displayHeader: HTMLElement[] = screen.getAllByRole("listitem");

      expect(displayImage).toBeInTheDocument();
      expect(displayHeader).toHaveLength(totalListComponents);
    });
  });

  describe("When its called to be rendered with a user logged in the local storage and the user clicks in the logout button", () => {
    saveToStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZSIsImlkIjoiMTIzNCIsImlhdCI6MTY1NDAxODg5Nn0.tYg1N6xwNhOSXGJdOHbHhyJcaU6uSTwYUKElRrh-Tbs"
    );

    test("Then it will dispatch a router action sending the user back to the address '/'", async () => {
      const wrapper = mount(Header, {
        global: {
          plugins: [
            createTestingPinia({
              initialState: {
                userData: storeUserInformation,
              },
            }),
            router,
          ],
        },
      });

      const expectedPushNavigation = vi.spyOn(router, "push");

      const expectedAddres = "/";

      screen.debug();

      const signOut = wrapper.findAll("li");

      // @ts-ignore
      signOut[1].wrapperElement._vei.onClick.value();

      expect(expectedPushNavigation).toHaveBeenCalledWith(expectedAddres);
    });
  });
});
