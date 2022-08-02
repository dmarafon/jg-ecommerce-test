import useUiStore from "../stores/uiStore";
import { IUserInterfaceStore } from "../types/uiTypes";

export const errorLoginValidation = ({ message }: { message: string }) => {
  const storeUI = useUiStore();

  const { responseFromApi }: IUserInterfaceStore = storeUI;

  switch (true) {
    case message === "Request failed with status code 403":
      responseFromApi("Invalid Email or Password");
      break;

    case message === "Request failed with status code 400":
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

    default:
      return;
  }
};

export const errorRegisterValidation = ({ message }: { message: string }) => {
  const storeUI = useUiStore();

  const { responseFromApi }: IUserInterfaceStore = storeUI;

  switch (true) {
    case message === "Request failed with status code 409":
      responseFromApi("User already Registered with that Email");
      break;

    case message === "Request failed with status code 400":
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

    default:
      return;
  }
};
