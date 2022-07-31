import { defineStore } from "pinia";
import { toRaw } from "vue";

const useCartStore = defineStore("cartStore", {
  state: (): { addedToCart: Object[] } => ({ addedToCart: [] }),
  persist: true,
  actions: {
    addToCart(product: Object) {
      let arrayToCheckDuplicates: Object[] = [...toRaw(this.addedToCart)];

      arrayToCheckDuplicates.push(toRaw(product));

      let duplicatedProducts: any = {};

      arrayToCheckDuplicates.forEach((item: any, index: number) => {
        duplicatedProducts[item.id] = duplicatedProducts[item.id] || [];
        duplicatedProducts[item.id].push(index);
      });

      const getIndexDuplicatedItem = () => {
        for (let id in duplicatedProducts) {
          return [...duplicatedProducts[id]];
        }
      };

      const duplicatedIndexItem: any = getIndexDuplicatedItem();

      if (duplicatedIndexItem.length > 1) {
        const productInCart: any = this.addedToCart[duplicatedIndexItem[0]];

        const total = productInCart.total + 1;

        productInCart.total = total;
      } else {
        const total: never | number = 1;
        const adding: any = { ...toRaw(product), total };

        this.addedToCart.push(adding);
      }
    },
    removeFromCart() {},
  },
});

export default useCartStore;
