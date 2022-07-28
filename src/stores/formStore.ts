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

const useLoginFormStore = defineStore("loginForm", {
  state: (): ILogin => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: ILogin) {
      const {
        loadingModal,
        finishedLoadingModal,
      }: Store<
        "uiStore",
        IUserInterface,
        {},
        {
          loadingModal(): void;
          finishedLoadingModal(): void;
          responseFromApi(response: string): void;
          cleanResponse(): void;
          emailValidationResponse(emailValidationResponse: string): void;
          passwordValidationResponse(passwordValidationResponse: string): void;
        }
      > = useUiStore();

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
      } catch (error) {
        const err = error as AxiosError;

        errorLoginValidation(err);

        finishedLoadingModal();
      }
    },
  },
});

export default useLoginFormStore;
