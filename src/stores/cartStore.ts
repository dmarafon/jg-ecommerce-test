import { defineStore } from "pinia";
import { toRaw } from "vue";
import { ICart, ICartState } from "../types/cartTypes";

const useCartStore = defineStore("cartStore", {
  state: (): ICartState => ({
    addedToCart: [],
    totalItems: 0,
    totalPrice: 0,
  }),
  actions: {
    calculateAllTotalItems() {
      const getAllTotalItems: number = this.addedToCart.reduce(
        (previousProduct, currrentProduct) => {
          return previousProduct + currrentProduct.total;
        },
        0
      );

      this.totalItems = getAllTotalItems;
    },
    addToCart(product: ICart) {
      const rawProductData = toRaw(product);
      const duplicatedIndexItem: number = this.addedToCart.findIndex(
        (productStored) => productStored.id === rawProductData.id
      );

      const productInCart: ICart = this.addedToCart[duplicatedIndexItem];

      if (duplicatedIndexItem !== -1) {
        const total: number = productInCart.total + 1;

        productInCart.total = total;
      } else {
        const total: never | number = 1;
        const adding: ICart = { ...toRaw(product), total };

        this.addedToCart.push(adding);
      }

      this.calculateAllTotalItems();
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
      this.calculateAllTotalItems();
    },
    buyFromCart(id: number) {
      const findToBuyCartProduct: number = this.addedToCart.findIndex(
        (product) => product.id === id
      );

      const cartProductToBeBought: ICart =
        this.addedToCart[findToBuyCartProduct];

      this.totalItems =
        toRaw(this.totalItems) - toRaw(cartProductToBeBought.total);

      this.addedToCart.splice(findToBuyCartProduct, 1);

      this.calculateAllTotalItems();
    },
  },
});

export default useCartStore;
