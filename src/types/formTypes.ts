import { Store } from "pinia";

export type ILogin = {
  email: string;
  password: string;
};

export type ILoginStore = Store<
  "loginForm",
  ILogin,
  {},
  {
    loginPost(loginInformation: ILogin): Promise<void>;
  }
>;
