<script setup lang="ts"></script>

<template>
  <section class="cart__container--cart">
    <div>
      <div class="cart__text--container">
        <p class="cart__text--intro">
          READY TO <span class="cart__text--colored">RENT</span> OR
        </p>
        <p class="cart__text--intro">
          <span class="cart__text--colored">PURCHASE?</span>
        </p>
      </div>
    </div>
    <div class="cart__list--info">
      <div class="cart__list" key="{id}">
        <div class="cart__container">
          <img class="cart__image" src="{imagebackup}" alt="{}" />
          <div class="cart__text">
            <h2 class="cart__text--author">
              {`${firstnameUpperCase} ${surnameUpperCase}`}
            </h2>
            <h3 class="cart__text--title">{titleUpperCase}</h3>
            <p class="cart__text--price">
              {`${monthlyrateprice}€ /month | ${purchaseprice}€ Purchase`}
            </p>
          </div>
        </div>
      </div>
      <div class="cart__rent--container">
        <p class="cart__text--title">
          {" "}
          <span class="cart__buy--color">RENTING</span> TOTAL PRICE
        </p>
        <p class="cartbuy__text">Total Months to Be Rented</p>
        <p class="cartbuy__text">(MAX 48 Months)</p>
        <input
          class="cart__input"
          id="months"
          placeholder="MONTHS"
          value="{inputData}"
          required
          autoComplete="off"
          type="number"
          min="1"
          max="48"
        />{" "}
        <p class="cartbuy__text--important">
          {inputData} Months X {monthlyrateprice} € ={" "}
          <span class="cart__buy--color">
            {" "} {`${calculateMonthlyPriceRent()} €`}
          </span>
        </p>
        <p class="cartbuy__text">Shipping Costs (5% of Total Price)</p>
        <p class="cartbuy__text">(Free on Purchases Above 200 €)</p>
        <p class="cartbuy__text--important">
          <span class="cart__buy--color"
            >{`${ calculateShippingPriceRent() === 0 ? `Free Shipping` :
            `${calculateShippingPriceRent()} €` }`}</span
          >
        </p>
        <p class="cartbuy__text--important">
          IVA 10% ={" "}
          <span class="cart__buy--color">{`${calculateIVARent()} €`}</span>
        </p>
        <p class="cartbuy__text--important_total">
          TOTAL =
          <span class="cart__buy--color">
            {" "} {`${ calculateMonthlyPriceRent() + calculateIVARent() +
            calculateShippingPriceRent() } €`}
          </span>
        </p>
        <button class="cart_buy__button">RENT</button>
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
        <button class="cart_buy__button">BUY</button>
      </div>
    </div>
  </section>
</template>

<style scoped src="./CartStyle.css"></style>
