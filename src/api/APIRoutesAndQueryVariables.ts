import { Ilimit, ISkip } from "../types/productTypes";

export const limitForGetProducts: string = "12";

export const initialSkipForGetProducts: string & "1" = "1";

export const loginRoute: string = `${
  import.meta.env.VITE_API_USER_URL
}users/login`;

export const productsRoute = (limit: Ilimit, skip: ISkip): string => {
  if (limit && skip) {
    return `${
      import.meta.env.VITE_API_PRODUCT_URL
    }products?limit=${limit}&skip=${skip}`;
  } else {
    return `${
      import.meta.env.VITE_API_PRODUCT_URL
    }products?limit=${limitForGetProducts}&skip=${initialSkipForGetProducts}`;
  }
};
