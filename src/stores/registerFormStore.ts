import { defineStore } from "pinia";
import registerAPICall from "../api/registerApiCall";
import { IRegister, IRegisterStoreDef } from "../types/formTypes";

const useRegisterFormStore: IRegisterStoreDef = defineStore("registerForm", {
  state: (): IRegister => ({
    firstname: "",
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

export default useRegisterFormStore;
