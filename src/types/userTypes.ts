import {
  PiniaCustomStateProperties,
  Store,
  StoreDefinition,
  _StoreWithGetters,
} from "pinia";
import { ToRefs } from "vue";

export type IUser = {
  id: string;
  firstName: string;
  email: string;
  logged: boolean;
};

export type IUserToken = {
  id: string;
  firstName: string;
  email: string;
};

export type IUserStoreActions = {
  login({
    id,
    firstName,
    email,
  }: {
    id: string;
    firstName: string;
    email: string;
  }): void;
  logout(): void;
};

export type IStoreUserToRefs = ToRefs<
  { userData: IUserToken } & _StoreWithGetters<{}> &
    PiniaCustomStateProperties<{ userData: IUserToken }>
>;

export type IUserStore = Store<
  "userData",
  {
    userData: {
      id: string;
      firstName: string;
      email: string;
      logged: boolean;
    };
  },
  {},
  IUserStoreActions
>;

export type IUserStoreDef = StoreDefinition<
  "userData",
  {
    userData: {
      id: string;
      firstName: string;
      email: string;
      logged: boolean | any;
    };
  },
  {},
  IUserStoreActions
>;
