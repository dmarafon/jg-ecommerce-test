import { defineStore } from "pinia";
import {
  IUserInterface,
  IUserInterfaceRegisterValidation,
} from "../types/uiTypes";
import useLoginFormStore from "./loginFormStore";
import useRegisterFormStore from "./registerFormStore";

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
    registerValidated: false,
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
    cleanResponseAndLogin(): void {
      if (this.registerValidated) {
        const { loginPost } = useLoginFormStore();
        const registerStore = useRegisterFormStore();
        const { email, password } = registerStore;

        loginPost({ email, password });
        this.registerValidated = false;
        registerStore.$reset();
      }

      this.firstnameResponse = "";
      this.surnameResponse = "";
      this.emailRegisterResponse = "";
      this.passwordRegisterResponse = "";
      this.cityResponse = "";
      this.countryResponse = "";
      this.feedback = false;
      this.apiResponse = "";
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
