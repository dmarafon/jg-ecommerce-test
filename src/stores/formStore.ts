import axios from "axios";
import { AxiosError } from "axios";
import { defineStore } from "pinia";
import { LoginInterface } from "../types/formTypes";
import jwtDecode from "jwt-decode";
import useUserStore from "./userStore";
import { IUserToken } from "../types/userTypes";

const useLoginFormStore = defineStore("loginForm", {
  state: (): LoginInterface => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: LoginInterface) {
      try {
        const route: string = `${import.meta.env.VITE_API_URL}users/login`;
        const {
          data: { token },
        }: { data: { token: string } } = await axios.post(
          route,
          loginInformation
        );

        localStorage.setItem("token", token);

        const userData: IUserToken = jwtDecode(token);

        const { login } = useUserStore();

        login(userData);
      } catch (error: any | unknown) {
        const err = error as AxiosError;
      }
    },
  },
});

export default useLoginFormStore;
