export const calculateSkip = (
  page: string | string[] | null | undefined,
  limit: string | string[] | null | undefined
): string => {
  const pageQuery: number = Number(limit) * Number(page);

  return pageQuery.toString();
};
