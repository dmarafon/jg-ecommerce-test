import { defineStore, state } from "pinia";
import { IUser } from "../types/userTypes";

const useUserStore = defineStore("userData", {
  state: () => ({
    userData: {
      id: "",
      firstName: "",
      email: "",
      logged: false,
    },
  }),
  persist: { storage: sessionStorage, paths: ["username"] },
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
      const logged = true;
      this.userData = { ...this.$state.userData, id, firstName, email, logged };
    },
    logout(): void {
      (this.userData.id = ""),
        (this.userData.firstName = ""),
        (this.userData.email = ""),
        (this.userData.logged = false);
    },
  },
});

export default useUserStore;
