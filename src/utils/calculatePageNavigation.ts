import { limitForGetProducts } from "../api/APIRoutesAndQueryVariables";

export const calculateSkip = (
  page: string | string[] | null | undefined,
  limit: string | string[] | null | undefined
): string => {
  const pageQuery: number = Number(limit) * Number(page);

  return pageQuery?.toString();
};

export const calculateTotalPages = (totalItems: number) => {
  const totalNumberOfPages = Math.ceil(
    totalItems / Number(limitForGetProducts)
  );

  return totalNumberOfPages;
};
