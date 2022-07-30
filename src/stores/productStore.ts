import { defineStore } from "pinia";
import getProductsAPICall from "../api/getProductsAPICall";

const useProductStore = defineStore("productStore", {
  state: () => ({ products: [] }),
  actions: {
    async getProducts(limit: string, skip: string) {
      await getProductsAPICall(limit, skip);
    },
  },
});

export default useProductStore;
