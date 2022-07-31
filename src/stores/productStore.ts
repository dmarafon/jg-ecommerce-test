import { defineStore } from "pinia";
import getAllCategoriesAPICall from "../api/getAllCategoriesAPICall";
import getAllProductsAPICall from "../api/getAllProductsAPICall";
import getCategoriesAPICall from "../api/getCategoriesAPICall";
import getDetailProductAPICall from "../api/getDetailProductAPICall";
import getProductsAPICall from "../api/getProductsAPICall";
import {
  ICategory,
  IId,
  Ilimit,
  IProducts,
  ISkip,
} from "../types/productTypes";

const productStore = defineStore("productStore", {
  state: (): IProducts => ({
    products: [],

    productCategories: [],
    allProducts: [],
    detailProduct: {
      id: 0,
      title: "",
      description: "",
      price: "",
      discountPercentage: "",
      rating: 0,
      stock: 0,
      brand: "",
      category: "",
      thumbnail: "",
      images: [],
    },
    total: 0,
    totalPages: 0,
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
    async getDetailProduct(id: IId) {
      await getDetailProductAPICall(id);
    },
  },
});

export default productStore;
