import { defineStore } from "pinia";
import { ILogin } from "../types/formTypes";
import loginAPICall from "../api/loginAPIcall";

export const useLoginFormStore = defineStore("loginForm", {
  state: (): ILogin => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: ILogin) {
      await loginAPICall(loginInformation);
    },
  },
});

export const useRegisterFormStore = defineStore("registerForm", {
  state: () => ({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    city: "",
    country: "",
  }),
  actions: {
    async registerPost(registerInformation) {
      await registerAPICall(registerInformation);
    },
  },
});
