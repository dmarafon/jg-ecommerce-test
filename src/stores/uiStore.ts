import { defineStore } from "pinia";
import { IUserInterface } from "../types/uiTypes";

const useUiStore = defineStore("uiStore", {
  state: (): IUserInterface => ({
    loading: false,
    feedback: false,
    apiResponse: "",
    emailResponse: "",
    passwordResponse: "",
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
  },
});

export default useUiStore;
