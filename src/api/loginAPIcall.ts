import axios, { AxiosError } from "axios";
import jwtDecode from "jwt-decode";
import { IUserToken } from "../types/userTypes";
import { IUserInterfaceStore } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import router from "../router";
import useUiStore from "../stores/uiStore";
import useUserStore from "../stores/userStore";
import { ILogin } from "../types/formTypes";
import {
  initialSkipForGetProducts,
  limitForGetProducts,
  loginRoute,
} from "./APIRoutesAndQueryVariables";

const loginAPICall = async (loginInformation: ILogin): Promise<void> => {
  const { loadingModal, finishedLoadingModal }: IUserInterfaceStore =
    useUiStore();

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

    router.push(
      `/market/no/${limitForGetProducts}/${initialSkipForGetProducts}`
    );

    finishedLoadingModal();
  } catch (error) {
    const err = error as AxiosError;

    errorLoginValidation(err);

    finishedLoadingModal();
  }
};

export default loginAPICall;
