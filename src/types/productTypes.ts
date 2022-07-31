import { PiniaCustomStateProperties, Store, _StoreWithGetters } from "pinia";
import { ToRefs } from "vue";

export type IProducts = {
  [x: string]: any;
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
  productCategories: void[] | string[];
  allProducts:
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
    getCategories(
      limit: string | void | string[] | null | undefined,
      skip: string | void | null | undefined,
      category: string | void | string[] | null | undefined
    ): Promise<void>;
    getAllCategories(): Promise<void>;
    getAllProducts(): Promise<void>;
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
    productCategories: void[] | string[];
    allProducts:
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
  } & _StoreWithGetters<{}> &
    PiniaCustomStateProperties<IProducts>
>;

export type Ilimit = string | string[] | void | null | undefined;

export type IPage = string | string[] | void | null | undefined;

export type ISkip = string | void | null | undefined;

export type ICategory = string | string[] | void | null | undefined;
