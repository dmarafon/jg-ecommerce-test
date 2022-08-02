import axios, { AxiosError } from "axios";
import useUiStore from "../stores/uiStore";
import { IRegister } from "../types/formTypes";
import { IUserInterfaceStore } from "../types/uiTypes";
import { errorRegisterValidation } from "../utils/errorValidation";
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

    const storeUI = useUiStore();

    const useStoreUI: IUserInterfaceStore = storeUI;

    useStoreUI.$patch({ registerValidated: true });

    useStoreUI.responseFromApi(
      "You Registered Successfully! Close this message to sign in"
    );
  } catch (error) {
    const err = error as AxiosError;
    errorRegisterValidation(err);

    finishedLoadingModal();
  }
};

export default registerAPICall;
