import { ICategory, IId, Ilimit, ISkip } from "../types/productTypes";

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

export const categoriesProductsRoute = (
  limit: Ilimit,
  skip: ISkip,
  category: ICategory
): string => {
  if (limit && skip) {
    return `${
      import.meta.env.VITE_API_PRODUCT_URL
    }products/category/${category}/?limit=${limit}&skip=${skip}`;
  } else {
    return `${
      import.meta.env.VITE_API_PRODUCT_URL
    }products/category/${category}/?limit=${limitForGetProducts}&skip=${initialSkipForGetProducts}`;
  }
};

export const allCategoriesRoute: string = `${
  import.meta.env.VITE_API_PRODUCT_URL
}products/categories`;

export const allProductsRoute: string = `${
  import.meta.env.VITE_API_PRODUCT_URL
}products/?limit=100`;

export const productDetailRoute = (id: IId): string =>
  `${import.meta.env.VITE_API_PRODUCT_URL}products/${id}`;
