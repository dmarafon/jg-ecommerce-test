import { PiniaCustomStateProperties, Store, _StoreWithGetters } from "pinia";
import { ToRefs } from "vue";

export type IUserInterface = {
  loading: boolean;
  feedback: boolean;
  apiResponse: string;
  emailResponse: string;
  passwordResponse: string;
};

export type IUserInterfaceStore = Store<
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
>;

export type IStoreUIToRefs = ToRefs<
  IUserInterface &
    _StoreWithGetters<{}> &
    PiniaCustomStateProperties<IUserInterface>
>;
