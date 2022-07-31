import axios, { AxiosError } from "axios";
import { IUserInterfaceStore } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import useUiStore from "../stores/uiStore";
import {
  categoriesProductsRoute,
  productsRoute,
} from "./APIRoutesAndQueryVariables";
import useProductStore from "../stores/productStore";
import { calculateTotalPages } from "../utils/calculatePageNavigation";
import { ICategory, Ilimit, IProductStore, ISkip } from "../types/productTypes";

const getCategoriesAPICall = async (
  limit: Ilimit,
  skip: ISkip,
  category: ICategory
): Promise<void> => {
  const { loadingModal, finishedLoadingModal }: IUserInterfaceStore =
    useUiStore();

  const productStore: IProductStore = useProductStore();

  loadingModal();

  try {
    const {
      data: { products, total },
    }: { data: { products: never; total: number } } = await axios.get(
      categoriesProductsRoute(limit, skip, category)
    );

    const totalPages: number = await calculateTotalPages(total);

    productStore.$patch((state) => {
      state.products.push(products);
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

export default getCategoriesAPICall;
