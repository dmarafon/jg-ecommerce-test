import { defineStore } from "pinia";
import { IUserInterface } from "../types/uiTypes";

const useUiStore = defineStore("uiStore", {
  state: (): IUserInterface => ({
    loading: false,
    feedback: false,
    apiResponse: "",
  }),
  actions: {
    loadingModal() {
      this.loading = true;
    },
    finishedLoadingModal() {
      this.loading = false;
    },
  },
});

export default useUiStore;
