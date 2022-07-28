import { describe, expect, test, vi } from "vitest";
import useUiStore from "../../stores/uiStore";
import errorLoginValidation from "../errorValidation";
import { setActivePinia, createPinia } from "pinia";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Given a emailInputValidation function", () => {
  describe("When its invoked passing a message that says ", () => {
    test("Then it should return a string with the text 'Request failed with status code 403'", () => {
      const storeUI = useUiStore();

      vi.spyOn(storeUI, "responseFromApi");

      const errorMessage = {
        message: "Request failed with status code 403",
      };

      const errorResponse = "Invalid Email or Password";

      const expectedAction = storeUI.responseFromApi;

      errorLoginValidation(errorMessage);

      expect(expectedAction).toHaveBeenCalledWith(errorResponse);
    });
  });
});
