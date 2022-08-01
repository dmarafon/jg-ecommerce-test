import { defineStore } from "pinia";
import getAllCategoriesAPICall from "../api/getAllCategoriesAPICall";
import getAllProductsAPICall from "../api/getAllProductsAPICall";
import getCategoriesAPICall from "../api/getCategoriesAPICall";
import getDetailProductAPICall from "../api/getDetailProductAPICall";
import getProductsAPICall from "../api/getProductsAPICall";
import {
  IAll,
  ICategory,
  ICurrentPage,
  IId,
  Ilimit,
  IPage,
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
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: "",
      category: "",
      thumbnail: "",
      images: [],
    },
    total: 0,
    totalPages: 0,
    currentPage: 0,
  }),
  actions: {
    async getProducts(limit: Ilimit, skip: ISkip, currentPage: ICurrentPage) {
      await getProductsAPICall(limit, skip, currentPage);
    },
    async getCategories(
      limit: Ilimit,
      skip: ISkip,
      category: ICategory,
      currentPage: ICurrentPage
    ) {
      await getCategoriesAPICall(limit, skip, category, currentPage);
    },
    async getAllCategories() {
      await getAllCategoriesAPICall();
    },
    async getAllProducts(all: IAll, page: IPage, limit: Ilimit) {
      await getAllProductsAPICall(all, page, limit);
    },
    async getDetailProduct(id: IId) {
      await getDetailProductAPICall(id);
    },
  },
});

export default productStore;
