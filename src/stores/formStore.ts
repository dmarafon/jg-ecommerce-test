import axios from "axios";
import { AxiosError } from "axios";
import { defineStore, Store } from "pinia";
import { ILogin } from "../types/formTypes";
import jwtDecode from "jwt-decode";
import useUserStore from "./userStore";
import { IUserToken } from "../types/userTypes";
import useUiStore from "./uiStore";
import { IUserInterface } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import router from "../router";
import { loginAPICall } from "../api/loginAPIcall";

const useLoginFormStore = defineStore("loginForm", {
  state: (): ILogin => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: ILogin) {
      await loginAPICall(loginInformation);
    },
  },
});

export default useLoginFormStore;
