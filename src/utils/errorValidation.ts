import { Store } from "pinia";
import useUiStore from "../stores/uiStore";
import { IUserInterface } from "../types/uiTypes";

const errorLoginValidation = ({ message }: { message: string }) => {
  const storeUI = useUiStore();

  const {
    responseFromApi,
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
  > = storeUI;
  switch (true) {
    case message === "Request failed with status code 400" ||
      "Request failed with status code 403":
      debugger;

      responseFromApi("Email or Password Invalid");
      break;

    case message === "Request failed with status code 500":
      debugger;
      responseFromApi(
        "Oops... We're sorry, something went wrong with our servers, try again later"
      );
      break;
    case message === "Network Error":
      debugger;

      responseFromApi(
        "Oops... We're sorry, something went wrong, try again later"
      );
      break;
  }
};

export default errorLoginValidation;
