export type ILogin = {
  email: string;
  password: string;
};

export type ILoginStore = {
  email: string;
  password: string;
  loginPost: (loginInformation: ILogin) => void;
};
