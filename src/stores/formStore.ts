import axios from "axios";
import { defineStore } from "pinia";
import { LoginInterface } from "../types/formTypes";
import jwtDecode from "jwt-decode";

const useLoginFormStore = defineStore("loginForm", {
  state: () => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: LoginInterface) {
      try {
        const route = `${import.meta.env.VITE_API_URL}users/login`;
        const {
          data: { token },
        } = await axios.post(route, loginInformation);

        localStorage.setItem("token", token);

        jwtDecode(token);
      } catch (error: any) {}
    },
  },
});

export default useLoginFormStore;
