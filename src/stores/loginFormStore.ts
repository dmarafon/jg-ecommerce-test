import { defineStore } from "pinia";
import { ILogin, ILoginStoreDef } from "../types/formTypes";
import loginAPICall from "../api/loginAPIcall";

const useLoginFormStore: ILoginStoreDef = defineStore("loginForm", {
  state: (): ILogin => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: ILogin) {
      await loginAPICall(loginInformation);
    },
  },
});

export default useLoginFormStore;
