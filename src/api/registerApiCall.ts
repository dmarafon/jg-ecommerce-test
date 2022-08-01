import axios, { AxiosError } from "axios";
import useUiStore from "../stores/uiStore";
import { IUserInterfaceStore } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import { registerRoute } from "./APIRoutesAndQueryVariables";

const registerAPICall = async (registerInformation: any): void => {
  const { loadingModal, finishedLoadingModal }: IUserInterfaceStore =
    useUiStore();

  loadingModal();
  console.log(registerInformation);
  try {
    await axios.post(registerRoute, registerInformation);

    finishedLoadingModal();
  } catch (error) {
    const err = error as AxiosError;

    errorLoginValidation(err);

    finishedLoadingModal();
  }
};

export default registerAPICall;
