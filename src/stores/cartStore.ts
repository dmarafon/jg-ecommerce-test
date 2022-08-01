import { defineStore } from "pinia";
import { toRaw } from "vue";
import { ICart, ICartState } from "../types/cartTypes";

const useCartStore = defineStore("cartStore", {
  state: (): ICartState => ({
    addedToCart: [],
    totalItems: 0,
    totalPrice: 0,
  }),
  persist: true,
  getters: {
    countAllCartItems: (state) => {
      state.addedToCart.reduce((previousProduct, currrentProduct) => {
        return (state.totalItems = previousProduct + currrentProduct.total);
      }, 0);
    },
  },
  actions: {
    addToCart(product: ICart) {
      let arrayToCheckDuplicates: ICart[] = [...toRaw(this.addedToCart)];

      arrayToCheckDuplicates.push(toRaw(product));

      let duplicatedProducts: any = {};

      arrayToCheckDuplicates.forEach((item: ICart, index: number): void => {
        duplicatedProducts[item.id] = duplicatedProducts[item.id] || [];
        duplicatedProducts[item.id].push(index);
      });

      const getIndexDuplicatedItem = (): any[] | undefined => {
        for (let id in duplicatedProducts) {
          return [...duplicatedProducts[id]];
        }
      };

      const duplicatedIndexItem: any | undefined = getIndexDuplicatedItem();

      if (duplicatedIndexItem.length > 1) {
        const productInCart: ICart = this.addedToCart[duplicatedIndexItem[0]];

        const total: number = productInCart.total + 1;

        productInCart.total = total;
      } else {
        const total: never | number = 1;
        const adding: ICart = { ...toRaw(product), total };

        this.addedToCart.push(adding);
      }
    },
    removeFromCart(id: number) {
      const findCartProductIndex: number = this.addedToCart.findIndex(
        (product) => product.id === id
      );
      const cartProduct: ICart = this.addedToCart[findCartProductIndex];
      if (cartProduct.total > 1) {
        cartProduct.total = toRaw(cartProduct.total) - 1;
        this.totalItems = toRaw(cartProduct.total) - 1;
      } else {
        this.totalItems = toRaw(cartProduct.total) - 1;
        this.addedToCart.splice(findCartProductIndex, 1);
      }
    },
  },
});

export default useCartStore;
