import { Store, StoreDefinition } from "pinia";

export type ILogin = {
  email: string;
  password: string;
};

export type ILoginActions = {
  loginPost(loginInformation: ILogin): Promise<void>;
};

export type ILoginStore = Store<
  "loginForm",
  ILogin,
  {},
  {
    loginPost(loginInformation: ILogin): Promise<void>;
  }
>;

export type ILoginStoreDef = StoreDefinition<
  "loginForm",
  ILogin,
  {},
  ILoginActions
>;

export type IRegister = {
  firstname: string;
  surname: string;
  email: string;
  password: string;
  city: string;
  country: string;
};

export type IRegisterStore = Store<
  "registerForm",
  IRegister,
  {},
  {
    registerPost(registerInformation: any): Promise<void>;
  }
>;

export type IRegisterStoreDef = StoreDefinition<
  "registerForm",
  IRegister,
  {},
  {
    registerPost(registerInformation: any): Promise<void>;
  }
>;

export type IRegisterValidation = {
  firstnameValidation: string;
  surnameValidation: string;
  emailValidation: string;
  passwordValidation: string;
  cityValidation: string;
  countryValidation: string;
};
