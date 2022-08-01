<script setup lang="ts">
import { storeToRefs } from "pinia";

const { removeFromCart, buyFromCart } = cartStore();

const { addedToCart }: ICartRef = storeToRefs(cartStore());

const calculateShippingPriceBuy = (totalToBePaid: number): string => {
  if (totalToBePaid > 200) {
    return "FREE SHIPPING!";
  } else {
    const total: string = (totalToBePaid * 0.05).toString();
    const shippingValue: string = parseFloat(total).toFixed(2).toString();
    return `€ ${shippingValue}`;
  }
};

const calculateTotalPriceWithShipping = (totalToBePaid: number): number => {
  if (totalToBePaid > 200) {
    return totalToBePaid;
  } else {
    const total: string = (totalToBePaid * 5).toString();

    const shippingValue: number = Number(parseFloat(total).toFixed(2));

    return totalToBePaid + shippingValue;
  }
};
</script>

<template>
  <section class="cart__container--cart">
    <div>
      <div class="cart__text--container">
        <p class="cart__text--intro">
          ARE YOU READY TO <span class="cart__text--colored">BUY?</span>
        </p>
      </div>
    </div>
    <div
      v-for="(cartItem, index) in addedToCart"
      :key="index"
      class="cart__list--info"
    >
      <div class="cart__list">
        <div class="cart__container">
          <img class="cart__image" :src="cartItem.images[0]" alt="{}" />
          <div class="cart__text">
            <h2 class="cart__text--brand">
              {{ cartItem.brand }}
            </h2>
            <h3 class="cart__text--title">{{ cartItem.title }}</h3>
            <p class="cart__text--price">Unity Price: € {{ cartItem.price }}</p>
          </div>
        </div>
      </div>
      <div class="cart__purchase--container">
        <p class="cart__text--title">
          TOTAL
          <span class="cart__buy--color">ITEMS </span> = {{ cartItem.total }}
        </p>
        <p class="cartbuy__text">Shipping Costs (5% of Total Price)</p>
        <p class="cartbuy__text">(Free on Purchases Above 200 €)</p>
        <p class="cartbuy__text--important">
          SHIPPING =
          <span class="cart__buy--color">{{
            calculateShippingPriceBuy(cartItem.price * cartItem.total)
          }}</span>
        </p>
        <p class="cartbuy__text--important">*10% OF IVA Included</p>
        <p class="cartbuy__text--important_total">
          <span class="cart__buy--color">
            €
            {{
              calculateTotalPriceWithShipping(cartItem.price * cartItem.total)
            }}
          </span>
        </p>
        <div class="cart__button--container">
          <button @click="buyFromCart(cartItem.id)" class="cart_buy__button">
            BUY
          </button>
          <button @click="removeFromCart(cartItem.id)" class="cart_buy__button">
            DROP ITEM
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="./CartStyle.css"></style>
