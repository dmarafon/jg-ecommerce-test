export const limitForGetProducts: string = "12";

export const initialSkipForGetProducts: string = "1";

export const loginRoute: string = `${
  import.meta.env.VITE_API_USER_URL
}users/login`;

export const productsRoute = (
  limit: string | string[] | void | null | undefined,
  skip: string | string[] | void | null | undefined
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
