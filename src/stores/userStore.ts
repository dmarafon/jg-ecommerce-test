import { defineStore } from "pinia";
import { IUser } from "../types/userTypes";

const useUserStore = defineStore("userData", {
  state: (): IUser => ({
    id: "",
    firstName: "",
    email: "",
    logged: false,
  }),
  actions: {
    login({
      id,
      firstName,
      email,
    }: {
      id: string;
      firstName: string;
      email: string;
    }): void {
      (this.id = id),
        (this.firstName = firstName),
        (this.email = email),
        (this.logged = true);
    },
    logout(): void {
      (this.id = ""),
        (this.firstName = ""),
        (this.email = ""),
        (this.logged = false);
    },
  },
});

export default useUserStore;
