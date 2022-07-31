import { defineStore } from "pinia";
import { toRaw } from "vue";

const useCartStore = defineStore("cartStore", {
  state: (): {
    addedToCart: Object[];
    totalItems: number;
    totalPrice: number;
  } => ({
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
    addToCart(product: Object) {
      let arrayToCheckDuplicates: Object[] = [...toRaw(this.addedToCart)];

      arrayToCheckDuplicates.push(toRaw(product));

      let duplicatedProducts: any = {};

      arrayToCheckDuplicates.forEach((item: any, index: number): void => {
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
        const productInCart: any = this.addedToCart[duplicatedIndexItem[0]];

        const total: number = productInCart.total + 1;

        productInCart.total = total;
      } else {
        const total: never | number = 1;
        const adding: any = { ...toRaw(product), total };

        this.addedToCart.push(adding);
      }
    },
    removeFromCart(id: number) {
      const findCartProduct = this.addedToCart.find(
        (product) => product === id
      );
    },
  },
});

export default useCartStore;
