import { defineStore } from "pinia";

const useUiStore = defineStore("uiStore", {
  state: () => ({ loading: false, feedback: false, apiResponse: "" }),
});

export default useUiStore;
