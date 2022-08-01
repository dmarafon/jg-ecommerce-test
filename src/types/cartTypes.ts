import { PiniaCustomStateProperties, _StoreWithGetters, Store } from "pinia";
import { ToRefs } from "vue";

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
  total: number | never;
};

export type ICartStore = Store<
  "cartStore",
  ICartState,
  {},
  {
    calculateAllTotalItems(): void;
    addToCart(product: ICart): void;
    removeFromCart(id: number): void;
    buyFromCart(id: number): void;
  }
>;

export type ICartState = {
  addedToCart: ICart[];
  totalItems: number;
  totalPrice: number;
};

export type ICartRef = ToRefs<
  ICartState & _StoreWithGetters<{}> & PiniaCustomStateProperties<ICartState>
>;
