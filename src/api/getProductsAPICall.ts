import axios, { AxiosError } from "axios";
import { IUserInterfaceStore } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import useUiStore from "../stores/uiStore";
import { productsRoute } from "./APIRoutesAndQueryVariables";
import useProductStore from "../stores/productStore";
import { calculateTotalPages } from "../utils/calculatePageNavigation";
import { Ilimit, IPage, IProductStore, ISkip } from "../types/productTypes";

const getProductsAPICall = async (
  limit: Ilimit,
  skip: ISkip,
  page: string | number | void | string[] | null
): Promise<void> => {
  const { loadingModal, finishedLoadingModal }: IUserInterfaceStore =
    useUiStore();
  const productStore: IProductStore = useProductStore();
  loadingModal();

  try {
    const {
      data: { products, total },
    }: { data: { products: never; total: number } } = await axios.get(
      productsRoute(limit, skip)
    );

    const totalPages: number = calculateTotalPages(total);
    productStore.$patch((state) => {
      state.products.shift();
      state.products.push(products);
      state.total = total;
      state.totalPages = totalPages;
      state.currentPage = Number(page);
    });

    finishedLoadingModal();
  } catch (error) {
    const err = error as AxiosError;

    errorLoginValidation(err);

    finishedLoadingModal();
  }
};

export default getProductsAPICall;
