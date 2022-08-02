import { defineStore } from "pinia";
import { IRegisterValidation } from "../types/formTypes";
import {
  IUserInterface,
  IUserInterfaceRegisterValidation,
} from "../types/uiTypes";

const useUiStore = defineStore("uiStore", {
  state: (): IUserInterface => ({
    loading: false,
    feedback: false,
    apiResponse: "",
    firstnameResponse: "",
    surnameResponse: "",
    emailResponse: "",
    passwordResponse: "",
    emailRegisterResponse: "",
    passwordRegisterResponse: "",
    cityResponse: "",
    countryResponse: "",
  }),
  actions: {
    loadingModal(): void {
      this.loading = true;
    },
    finishedLoadingModal(): void {
      this.loading = false;
    },
    responseFromApi(response: string): void {
      this.feedback = true;
      this.apiResponse = response;
    },
    cleanResponse(): void {
      this.feedback = false;
      this.apiResponse = "";
      this.emailResponse = "";
      this.passwordResponse = "";
    },
    emailValidationResponse(emailValidationResponse: string): void {
      this.feedback = true;
      this.emailResponse = emailValidationResponse;
    },
    passwordValidationResponse(passwordValidationResponse: string): void {
      this.feedback = true;
      this.passwordResponse = passwordValidationResponse;
    },
    registerFormValidationResponse(
      registerFormValidations: IUserInterfaceRegisterValidation
    ): void {
      const {
        firstnameValidation,
        surnameValidation,
        emailValidation,
        passwordValidation,
        cityValidation,
        countryValidation,
      }: IUserInterfaceRegisterValidation = registerFormValidations;
      this.feedback = true;
      this.firstnameResponse = firstnameValidation;
      this.surnameResponse = surnameValidation;
      this.emailRegisterResponse = emailValidation;
      this.passwordRegisterResponse = passwordValidation;
      this.cityResponse = cityValidation;
      this.countryResponse = countryValidation;
    },
  },
});

export default useUiStore;
