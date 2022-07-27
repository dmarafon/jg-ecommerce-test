import axios from "axios";
import { AxiosError } from "axios";
import { defineStore } from "pinia";
import { ILogin } from "../types/formTypes";
import jwtDecode from "jwt-decode";
import useUserStore from "./userStore";
import { IUserToken } from "../types/userTypes";
import useUiStore from "./uiStore";

const useLoginFormStore = defineStore("loginForm", {
  state: (): ILogin => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: ILogin) {
      const { loadingModal, finishedLoadingModal } = useUiStore();

      loadingModal();

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

        const { login }: { login: (userData: IUserToken) => void } =
          useUserStore();

        login(userData);

        finishedLoadingModal();
      } catch (error: any | unknown) {
        const err = error as AxiosError;
        console.log(error);
        finishedLoadingModal();
      }
    },
  },
});

export default useLoginFormStore;
