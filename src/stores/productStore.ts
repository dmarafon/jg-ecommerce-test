import { defineStore } from "pinia";
import getProductsAPICall from "../api/getProductsAPICall";
import { IProducts } from "../types/productTypes";

const useProductStore = defineStore("productStore", {
  state: (): IProducts => ({ products: [], total: 0, totalPages: 0 }),
  actions: {
    async getProducts(
      limit: string | string[] | void | null | undefined,
      skip: string | void | null | undefined
    ) {
      await getProductsAPICall(limit, skip);
    },
  },
});

export default useProductStore;
