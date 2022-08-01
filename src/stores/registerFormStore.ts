import { defineStore } from "pinia";
import registerAPICall from "../api/registerApiCall";

const useRegisterFormStore = defineStore("registerForm", {
  state: () => ({
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
