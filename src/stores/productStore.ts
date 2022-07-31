import { defineStore } from "pinia";
import getAllCategoriesAPICall from "../api/getAllCategoriesAPICall";
import getAllProductsAPICall from "../api/getAllProductsAPICall";
import getCategoriesAPICall from "../api/getCategoriesAPICall";
import getProductsAPICall from "../api/getProductsAPICall";
import { ICategory, Ilimit, IProducts, ISkip } from "../types/productTypes";

const productStore = defineStore("productStore", {
  state: (): IProducts => ({
    products: [],
    total: 0,
    totalPages: 0,
    productCategories: [],
    allProducts: [],
  }),
  actions: {
    async getProducts(limit: Ilimit, skip: ISkip) {
      await getProductsAPICall(limit, skip);
    },
    async getCategories(limit: Ilimit, skip: ISkip, category: ICategory) {
      await getCategoriesAPICall(limit, skip, category);
    },
    async getAllCategories() {
      await getAllCategoriesAPICall();
    },
    async getAllProducts() {
      await getAllProductsAPICall();
    },
  },
});

export default productStore;
