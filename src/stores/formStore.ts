import { defineStore } from "pinia";
import { ILogin } from "../types/formTypes";
import loginAPICall from "../api/loginAPIcall";

const useLoginFormStore = defineStore("loginForm", {
  state: (): ILogin => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: ILogin) {
      await loginAPICall(loginInformation);
    },
  },
});

export default useLoginFormStore;
