import { defineStore } from "pinia";
import getCategoriesAPICall from "../api/getCategoriesAPICall";
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
    async getCategories(
      limit: string | string[] | void | null | undefined,
      skip: string | void | null | undefined,
      category: string | void | null | undefined
    ) {
      await getCategoriesAPICall(limit, skip, category);
    },
  },
});

export default useProductStore;
