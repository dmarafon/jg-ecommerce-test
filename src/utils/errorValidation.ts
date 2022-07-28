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
    case message === "Request failed with status code 403" ||
      "Request failed with status code 400":
      responseFromApi("Invalid Email or Password");
      break;

    case message === "Request failed with status code 500":
      responseFromApi(
        "Oops... We're sorry. Something went wrong with our servers. Try again later"
      );
      break;
    case message === "Network Error":
      responseFromApi(
        "Oops... We're sorry, something went wrong. Try again later"
      );
      break;
  }
};

export default errorLoginValidation;
