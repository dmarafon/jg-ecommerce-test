import { describe, expect, test, vi } from "vitest";
import useUiStore from "../../stores/uiStore";
import { errorLoginValidation } from "../errorValidation";
import { setActivePinia, createPinia } from "pinia";
import { IUserInterfaceStore } from "../../types/uiTypes";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Given a emailInputValidation function", () => {
  describe("When its invoked passing a message that says 'Request failed with status code 403' ", () => {
    test("Then it should call the responseFromApi action with the message string 'Invalid Email or Password'", () => {
      const storeUI: IUserInterfaceStore = useUiStore();

      vi.spyOn(storeUI, "responseFromApi");

      const errorMessage: { message: string } = {
        message: "Request failed with status code 403",
      };

      const errorResponse: string = "Invalid Email or Password";

      const expectedAction: (response: string) => void =
        storeUI.responseFromApi;

      errorLoginValidation(errorMessage);

      expect(expectedAction).toHaveBeenCalledWith(errorResponse);
    });
  });

  describe("When its invoked passing a message that says 'Request failed with status code 400' ", () => {
    test("Then it should call the responseFromApi action with the message string 'Invalid Email or Password'", () => {
      const storeUI: IUserInterfaceStore = useUiStore();

      vi.spyOn(storeUI, "responseFromApi");

      const errorMessage: {
        message: string;
      } = {
        message: "Request failed with status code 400",
      };

      const errorResponse: string = "Invalid Email or Password";

      const expectedAction: (response: string) => void =
        storeUI.responseFromApi;

      errorLoginValidation(errorMessage);

      expect(expectedAction).toHaveBeenCalledWith(errorResponse);
    });
  });

  describe("When its invoked passing a message that says 'Request failed with status code 500' ", () => {
    test("Then it should call the responseFromApi action with the message string 'Oops... We're sorry. Something went wrong with our servers. Try again later'", () => {
      const storeUI: IUserInterfaceStore = useUiStore();

      vi.spyOn(storeUI, "responseFromApi");

      const errorMessage: {
        message: string;
      } = {
        message: "Request failed with status code 500",
      };

      const errorResponse: string =
        "Oops... We're sorry. Something went wrong with our servers. Try again later";

      const expectedAction: (response: string) => void =
        storeUI.responseFromApi;

      errorLoginValidation(errorMessage);

      expect(expectedAction).toHaveBeenCalledWith(errorResponse);
    });
  });

  describe("When its invoked passing a message that says 'Network Error' ", () => {
    test("Then it should call the responseFromApi action with the message string 'Oops... We're sorry. Something went wrong with our servers. Try again later'", () => {
      const storeUI: IUserInterfaceStore = useUiStore();

      vi.spyOn(storeUI, "responseFromApi");

      const errorMessage: { message: string } = {
        message: "Network Error",
      };

      const errorResponse: string =
        "Oops... We're sorry, something went wrong. Try again later";

      const expectedAction: (response: string) => void =
        storeUI.responseFromApi;

      errorLoginValidation(errorMessage);

      expect(expectedAction).toHaveBeenCalledWith(errorResponse);
    });
  });

  describe("When its invoked passing an empty message' ", () => {
    test("Then it shouldn't call the responseFromApi action'", () => {
      const storeUI: IUserInterfaceStore = useUiStore();

      vi.spyOn(storeUI, "responseFromApi");

      const errorMessage: { message: string } = { message: "" };

      const errorResponse: string =
        "Oops... We're sorry, something went wrong. Try again later";

      const expectedAction: (response: string) => void =
        storeUI.responseFromApi;

      errorLoginValidation(errorMessage);

      expect(expectedAction).not.toHaveBeenCalledWith(errorResponse);
    });
  });
});
