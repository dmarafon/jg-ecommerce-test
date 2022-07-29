import axios from "axios";
import { AxiosError } from "axios";
import { Store } from "pinia";
import jwtDecode from "jwt-decode";
import { IUserToken } from "../types/userTypes";
import { IUserInterface } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import router from "../router";
import useUiStore from "../stores/uiStore";
import useUserStore from "../stores/userStore";
import { ILogin } from "../types/formTypes";
import { loginRoute } from "./APIRoutes";

const loginAPICall = async (loginInformation: ILogin): Promise<void> => {
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
    const {
      data: { token },
    }: { data: { token: string } } = await axios.post(
      loginRoute,
      loginInformation
    );

    localStorage.setItem("token", token);

    const userData: IUserToken = jwtDecode(token);

    const { login }: { login: (userData: IUserToken) => void } = useUserStore();

    login(userData);

    router.push("/market");

    finishedLoadingModal();
  } catch (error) {
    const err = error as AxiosError;

    errorLoginValidation(err);

    finishedLoadingModal();
  }
};

export default loginAPICall;
