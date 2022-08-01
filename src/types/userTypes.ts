import { PiniaCustomStateProperties, Store, _StoreWithGetters } from "pinia";
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
  {
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
  }
>;
