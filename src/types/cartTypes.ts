export type ICart = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  id: number;
  title: "";
  total: number;
};

export type ICartState = {
  addedToCart: ICart[];
  totalItems: number;
  totalPrice: number;
};
