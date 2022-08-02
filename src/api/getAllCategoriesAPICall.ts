import axios, { AxiosError } from "axios";
import { IUserInterfaceStore } from "../types/uiTypes";
import { errorLoginValidation } from "../utils/errorValidation";
import useUiStore from "../stores/uiStore";
import { allCategoriesRoute } from "./APIRoutesAndQueryVariables";
import useProductStore from "../stores/productStore";
import { IProductStore } from "../types/productTypes";

const getAllCategoriesAPICall = async (): Promise<void> => {
  const { loadingModal, finishedLoadingModal }: IUserInterfaceStore =
    useUiStore();

  const productStore: IProductStore = useProductStore();

  loadingModal();

  try {
    const { data }: { data: string[] | void[] } = await axios.get(
      allCategoriesRoute
    );
    productStore.$patch((state) => {
      state.productCategories = data;
    });

    finishedLoadingModal();
  } catch (error) {
    const err = error as AxiosError;

    errorLoginValidation(err);

    finishedLoadingModal();
  }
};

export default getAllCategoriesAPICall;
