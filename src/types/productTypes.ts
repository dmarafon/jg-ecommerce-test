export type IProducts = {
  products:
    | [
        {
          id: number;
          title: string;
          description: string;
          price: string;
          discountPercentage: string;
          rating: number;
          stock: number;
          brand: string;
          category: string;
          thumbnail: string;
          images: string[];
        }
      ]
    | void[];
  total: number;
  totalPages: number;
};
