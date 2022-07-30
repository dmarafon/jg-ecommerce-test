import { defineStore } from "pinia";
import getProductsAPICall from "../api/getProductsAPICall";

const useProductStore = defineStore("productStore", {
  state: () => ({ products: [], total: 0 }),
  actions: {
    async getProducts(
      limit: string | string[] | void | null | undefined,
      skip: string | string[] | void | null | undefined
    ) {
      await getProductsAPICall(limit, skip);
    },
  },
});

export default useProductStore;
