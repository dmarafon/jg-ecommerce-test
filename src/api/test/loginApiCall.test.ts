import { afterAll, afterEach, vi } from "vitest";
import "@testing-library/jest-dom";
import loginAPICall from "../loginAPIcall";
import { server } from "../../mocks/server";
import { createPinia, setActivePinia } from "pinia";
import { IUserInterfaceStore } from "../../types/uiTypes";
import useUiStore from "../../stores/uiStore";
import useUserStore from "../../stores/userStore";
import { IUserStore } from "../../types/userTypes";

describe("Given an loginAPICall function", () => {
  beforeEach(() => server.listen());
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("When its invoked passing an user login information", () => {
    const userTestLoginInformation = {
      password: "1234",
      email: "test@test.com",
    };
    test("Then it should ", async () => {
      const storeUI: IUserInterfaceStore = useUiStore();

      const userStore: IUserStore = useUserStore();

      vi.spyOn(storeUI, "loadingModal");

      vi.spyOn(userStore, "login");

      const expectedAction: (response: string) => void = storeUI.loadingModal;

      loginAPICall(userTestLoginInformation);

      expect(expectedAction).toHaveBeenCalled();
    });
  });
});
