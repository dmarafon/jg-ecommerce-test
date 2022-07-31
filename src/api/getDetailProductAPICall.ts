import axios, { AxiosError } from "axios";
import { IUserInterfaceStore } from "../types/uiTypes";
import errorLoginValidation from "../utils/errorValidation";
import useUiStore from "../stores/uiStore";
import { productDetailRoute } from "./APIRoutesAndQueryVariables";
import useProductStore from "../stores/productStore";
import { IId, IProductStore } from "../types/productTypes";

const getDetailProductAPICall = async (id: IId): Promise<void> => {
  const { loadingModal, finishedLoadingModal }: IUserInterfaceStore =
    useUiStore();

  const productStore: IProductStore = useProductStore();

  loadingModal();

  try {
    const { data } = await axios.get(productDetailRoute(id));

    productStore.$patch((state) => {
      state.detailProduct = data;
    });

    finishedLoadingModal();
  } catch (error) {
    const err = error as AxiosError;

    errorLoginValidation(err);

    finishedLoadingModal();
  }
};

export default getDetailProductAPICall;
