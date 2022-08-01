import { PiniaCustomStateProperties, _StoreWithGetters } from "pinia";
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
  IUserToken & _StoreWithGetters<{}> & PiniaCustomStateProperties<IUserToken>
>;
