import { Store, _StoreWithGetters } from "pinia";
import { ToRefs } from "vue";

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

export type IProductStore = Store<
  "productStore",
  IProducts,
  {},
  {
    getProducts(
      limit: string | void | string[] | null | undefined,
      skip: string | void | null | undefined
    ): Promise<void>;
  }
>;

export type IProductStoreToRef = ToRefs<
  {
    products:
      | void[]
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
        ];
    total: number;
    totalPages: number;
  } & _StoreWithGetters<{}> &
    PiniaCustomStateProperties<IProducts>
>;

export type Ilimit = string | string[] | void | null | undefined;

export type ISkip = string | void | null | undefined;
