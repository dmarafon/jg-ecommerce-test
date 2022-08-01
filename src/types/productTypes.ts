import { PiniaCustomStateProperties, Store, _StoreWithGetters } from "pinia";
import { ToRefs } from "vue";

export type IDetailProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  total?: number;
};

export type IProducts = {
  [x: string]: any;
  products: [IDetailProduct] | void[];
  total: number;
  currentPage: number;
  totalPages: number;
  productCategories: void[] | string[];
  allProducts: [IDetailProduct] | void[];
  detailProduct: IDetailProduct;
};

export type IAll = string | string[] | void | null | undefined;

export type Ilimit = string | string[] | void | null | undefined;

export type IPage = string | string[] | void | null | undefined;

export type ISkip = string | void | null | undefined;

export type ICategory = string | string[] | void | null | undefined;

export type IId = string | void | string[] | null | undefined;

export type ICurrentPage = string | string[] | void | null | undefined;

export type IProductStore = Store<
  "productStore",
  IProducts,
  {},
  {
    getProducts(limit: Ilimit, skip: ISkip, page: ICurrentPage): Promise<void>;
    getCategories(
      limit: Ilimit,
      skip: ISkip,
      category: ICategory,
      page: IPage
    ): Promise<void>;
    getAllCategories(): Promise<void>;
    getAllProducts(all: IAll, limit: Ilimit, page: IPage): Promise<void>;
    getDetailProduct(id: IId): Promise<void>;
  }
>;

export type IProductStoreToRef = ToRefs<
  IProducts & _StoreWithGetters<{}> & PiniaCustomStateProperties<IProducts>
>;
