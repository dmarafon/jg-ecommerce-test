export const limitForGetProducts: string = "12";

export const initialSkipForGetProducts: string = "0";

export const loginRoute: string = `${
  import.meta.env.VITE_API_USER_URL
}users/login`;

export const productsRoute = (
  limit: string | undefined | null | void,
  skip: string | undefined | null | void
): string => {
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
