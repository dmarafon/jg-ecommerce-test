import { IRegisterValidation } from "../types/formTypes";
import {
  emailInputValidation,
  passwordInputValidation,
} from "./loginFormValidation";

const firstnameInputValidation = (firstname: string): string => {
  switch (true) {
    case firstname === "":
      return "Empty First Name Field";

    case firstname.length >= 33:
      return "This field allows only 33 char.";

    default:
      return "";
  }
};

const surnameInputValidation = (surname: string): string => {
  switch (true) {
    case surname === "":
      return "Empty Surname Field";

    case surname.length >= 33:
      return "This field allows only 33 char.";

    default:
      return "";
  }
};

const cityInputValidation = (city: string): string => {
  switch (true) {
    case city === "":
      return "Empty City Field";

    case city.length >= 33:
      return "This field allows only 33 char.";

    default:
      return "";
  }
};

const countryInputValidation = (country: string): string => {
  switch (true) {
    case country === "":
      return "Empty Country Field";

    case country.length >= 33:
      return "This field allows only 33 char.";

    default:
      return "";
  }
};

export const registerInputValidation = (
  firstname: string,
  surname: string,
  email: string,
  password: string,
  city: string,
  country: string
): IRegisterValidation => {
  const firstnameValidation = firstnameInputValidation(firstname);
  const surnameValidation = surnameInputValidation(surname);
  const emailValidation = emailInputValidation(email);
  const passwordValidation = passwordInputValidation(password);
  const cityValidation = cityInputValidation(city);
  const countryValidation = countryInputValidation(country);

  return {
    firstnameValidation,
    surnameValidation,
    emailValidation,
    passwordValidation,
    cityValidation,
    countryValidation,
  };
};

export default registerInputValidation;
