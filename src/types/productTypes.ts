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
          discountPercentage: number;
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
  currentPage: number;
  totalPages: number;
  productCategories: void[] | string[];
  allProducts:
    | [
        {
          id: number;
          title: string;
          description: string;
          price: string;
          discountPercentage: number;
          rating: number;
          stock: number;
          brand: string;
          category: string;
          thumbnail: string;
          images: string[];
        }
      ]
    | void[];
  detailProduct: {
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
  };
};

export type IProductStore = Store<
  "productStore",
  IProducts,
  {},
  {
    getProducts(
      limit: string | void | string[] | null | undefined,
      skip: string | void | null | undefined,
      page: string | string[] | void | null | undefined
    ): Promise<void>;
    getCategories(
      limit: string | void | string[] | null | undefined,
      skip: string | void | null | undefined,
      category: string | void | string[] | null | undefined,
      page: string | string[] | void | null | undefined
    ): Promise<void>;
    getAllCategories(): Promise<void>;
    getAllProducts(
      all: string | void | string[] | null | undefined,
      limit: string | void | string[] | null | undefined,
      page: string | void | string[] | null | undefined
    ): Promise<void>;
    getDetailProduct(
      id: string | void | string[] | null | undefined
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
    currentPage: number;
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
    detailProduct:
      | {
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
          images: [];
        }
      | any;
  } & _StoreWithGetters<{}> &
    PiniaCustomStateProperties<IProducts>
>;

export type IAll = string | string[] | void | null | undefined;

export type Ilimit = string | string[] | void | null | undefined;

export type IPage = string | string[] | void | null | undefined;

export type ISkip = string | void | null | undefined;

export type ICategory = string | string[] | void | null | undefined;

export type IId = string | void | string[] | null | undefined;

export type ICurrentPage = string | string[] | void | null | undefined;

export type IDetailProduct = {
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
  images: [];
};
