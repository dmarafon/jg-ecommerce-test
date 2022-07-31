<script setup lang="ts">
import { storeToRefs } from "pinia";

const { addedToCart } = cartStore();

const test = storeToRefs(cartStore());
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
            <h2 class="cart__text--author">
              {`${firstnameUpperCase} ${surnameUpperCase}`}
            </h2>
            <h3 class="cart__text--title">{{ cartItem.title }}</h3>
            <p class="cart__text--price">
              {`${monthlyrateprice}€ /month | ${purchaseprice}€ Purchase`}
            </p>
          </div>
        </div>
      </div>
      <div class="cart__purchase--container">
        <p class="cart__text--title">
          {" "}
          <span class="cart__buy--color">BUY</span> TOTAL PRICE
        </p>
        <p class="cartbuy__text--important">
          Purchase Price ={" "}
          <span class="cart__buy--color"> {purchaseprice} €</span>
        </p>
        <p class="cartbuy__text">Shipping Costs (5% of Total Price)</p>
        <p class="cartbuy__text">(Free on Purchases Above 200 €)</p>
        <p class="cartbuy__text--important">
          <span class="cart__buy--color"
            >{`${ calculateShippingPriceBuy() === 0 ? `Free Shipping` :
            `${calculateShippingPriceBuy()} €` }`}</span
          >
        </p>
        <p class="cartbuy__text--important">
          IVA 10% ={" "}
          <span class="cart__buy--color">{`${calculateIVABuy()} €`}</span>
        </p>
        <p class="cartbuy__text--important_total">
          TOTAL ={" "}
          <span class="cart__buy--color">
            {" "} {`${ Number(purchaseprice) + calculateShippingPriceBuy() +
            calculateIVABuy() } €`}
          </span>
        </p>
        <div class="cart__button--container">
          <button class="cart_buy__button">BUY</button>
          <button class="cart_buy__button">DROP ITEM</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="./CartStyle.css"></style>
