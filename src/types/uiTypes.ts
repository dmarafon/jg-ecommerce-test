import { PiniaCustomStateProperties, Store, _StoreWithGetters } from "pinia";
import { ToRefs } from "vue";

export type IUserInterface = {
  loading: boolean;
  feedback: boolean;
  apiResponse: string;
  firstnameResponse: string;
  surnameResponse: string;
  emailResponse: string;
  passwordResponse: string;
  emailRegisterResponse: string;
  passwordRegisterResponse: string;
  cityResponse: string;
  countryResponse: string;
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
    registerFormValidationResponse(
      registerFormValidations: IUserInterfaceRegisterValidation
    ): void;
  }
>;

export type IStoreUIToRefs = ToRefs<
  IUserInterface &
    _StoreWithGetters<{}> &
    PiniaCustomStateProperties<IUserInterface>
>;

export type IUserInterfaceRegisterValidation = {
  firstnameValidation: string;
  surnameValidation: string;
  emailValidation: string;
  passwordValidation: string;
  cityValidation: string;
  countryValidation: string;
};
