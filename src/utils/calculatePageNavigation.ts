import { limitForGetProducts } from "../api/APIRoutesAndQueryVariables";
import { Ilimit, IPage } from "../types/productTypes";

export const calculateSkip = (limit: Ilimit, page: IPage): string => {
  const pageQuery: number = Number(page) * Number(limit) - Number(limit);

  return pageQuery?.toString();
};

export const calculateTotalPages = (totalItems: number): number => {
  const totalNumberOfPages: number = Math.ceil(
    totalItems / Number(limitForGetProducts)
  );

  return totalNumberOfPages;
};
