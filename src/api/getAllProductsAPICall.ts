import axios, { AxiosError } from "axios";
import { IUserInterfaceStore } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import useUiStore from "../stores/uiStore";
import { allProductsRoute } from "./APIRoutesAndQueryVariables";
import useProductStore from "../stores/productStore";
import { calculateTotalPages } from "../utils/calculatePageNavigation";
import { IProducts, IProductStore } from "../types/productTypes";
import { RouteLocationNormalizedLoaded } from "vue-router";

const getAllProductsAPICall = async (): Promise<void> => {
  const { loadingModal, finishedLoadingModal }: IUserInterfaceStore =
    useUiStore();
  const route: RouteLocationNormalizedLoaded = useRoute();

  const productStore: IProductStore = useProductStore();

  loadingModal();

  try {
    const {
      data: { products, total },
    }: { data: { products: IProducts; total: number } } = await axios.get(
      allProductsRoute
    );

    const totalPages: number = calculateTotalPages(total);

    const { all, limit, page } = await route.params;

    let sortedProducts: IProducts | any = [];

    const sortAlphabeticallyByTitle = products.sort(
      (firstArgument: { title: string }, secondArgument: { title: string }) =>
        firstArgument.title.localeCompare(secondArgument.title)
    );

    if (all === "ordered") {
      sortedProducts.push(sortAlphabeticallyByTitle);
    } else if (all === "reverse") {
      sortedProducts.push(sortAlphabeticallyByTitle.reverse());
    }

    productStore.$patch((state) => {
      state.products.push(
        sortedProducts[0].slice(Number(page) + 1, Number(limit))
      );
      state.allProducts.push(sortedProducts);
      state.total = total;
      state.totalPages = totalPages;
    });

    finishedLoadingModal();
  } catch (error) {
    const err = error as AxiosError;

    errorLoginValidation(err);

    finishedLoadingModal();
  }
};

export default getAllProductsAPICall;
