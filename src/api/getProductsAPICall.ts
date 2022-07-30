import axios, { AxiosError } from "axios";
import { Store } from "pinia";
import { IUserInterface } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import useUiStore from "../stores/uiStore";
import { productsRoute } from "./APIRoutesAndQueryVariables";
import useProductStore from "../stores/productStore";
import { calculateTotalPages } from "../utils/calculatePageNavigation";

const getProductsAPICall = async (
  limit: string | string[] | void | null | undefined,
  skip: string | void | null | undefined
): Promise<void> => {
  const {
    loadingModal,
    finishedLoadingModal,
  }: Store<
    "uiStore",
    IUserInterface,
    {},
    {
      loadingModal(): void;
      finishedLoadingModal(): void;
      responseFromApi(response: string): void;
      cleanResponse(): void;
      emailValidationResponse(emailValidationResponse: string): void;
      passwordValidationResponse(passwordValidationResponse: string): void;
    }
  > = useUiStore();

  const productStore = useProductStore();

  loadingModal();

  try {
    const {
      data: { products, total },
    }: { data: { products: never; total: number } } = await axios.get(
      productsRoute(limit, skip)
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

export default getProductsAPICall;
