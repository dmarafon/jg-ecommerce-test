import axios, { AxiosError } from "axios";
import { Store } from "pinia";
import { IUserToken } from "../types/userTypes";
import { IUserInterface } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import router from "../router";
import useUiStore from "../stores/uiStore";
import useUserStore from "../stores/userStore";
import {
  initialSkipForGetProducts,
  limitForGetProducts,
  loginRoute,
  productsRoute,
} from "./APIRoutesAndQueryVariables";
import useProductStore from "../stores/productStore";

const getProductsAPICall = async (
  limit: string,
  skip: string
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

  const productStore: Store<
    "productStore",
    {
      products: never[];
    },
    {}
  > = useProductStore();

  loadingModal();

  try {
    const {
      data: { products },
    }: { data: { products: never } } = await axios.get(
      productsRoute(limit, skip)
    );

    productStore.$patch((state) => {
      state.products.push(products);
    });

    finishedLoadingModal();
  } catch (error) {
    const err = error as AxiosError;

    errorLoginValidation(err);

    finishedLoadingModal();
  }
};

export default getProductsAPICall;
