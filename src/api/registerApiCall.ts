import axios, { AxiosError } from "axios";
import useUiStore from "../stores/uiStore";
import { IRegister } from "../types/formTypes";
import { IUserInterfaceStore } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import { registerRoute } from "./APIRoutesAndQueryVariables";

const registerAPICall = async (
  registerInformation: IRegister
): Promise<void> => {
  const { loadingModal, finishedLoadingModal }: IUserInterfaceStore =
    useUiStore();

  loadingModal();
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
