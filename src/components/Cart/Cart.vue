<script setup lang="ts"></script>

<template>
  <section class="artwork__container--cart">
    <div>
      <div class="artwork__text--container">
        <p class="artwork__text--intro">
          READY TO <span class="artwork__text--colored">RENT</span> OR
        </p>
        <p class="artwork__text--intro">
          <span class="artwork__text--colored">PURCHASE?</span>
        </p>
      </div>
    </div>
    <div class="artwork__list--info">
      <div class="artwork__list" key="{id}">
        <div class="artwork__container">
          <img class="artwork__image" src="{imagebackup}" alt="{}" />
          <div class="artwork__text">
            <h2 class="artwork__text--author">
              {`${firstnameUpperCase} ${surnameUpperCase}`}
            </h2>
            <h3 class="artwork__text--title">{titleUpperCase}</h3>
            <p class="artwork__text--price">
              {`${monthlyrateprice}€ /month | ${purchaseprice}€ Purchase`}
            </p>
          </div>
        </div>
      </div>
      <div class="artwork__rent--container">
        <p class="artwork__text--title">
          {" "}
          <span class="artwork__buy--color">RENTING</span> TOTAL PRICE
        </p>
        <p class="artworkbuy__text">Total Months to Be Rented</p>
        <p class="artworkbuy__text">(MAX 48 Months)</p>
        <input
          class="artwork__input"
          id="months"
          placeholder="MONTHS"
          value="{inputData}"
          required
          autoComplete="off"
          type="number"
          min="1"
          max="48"
        />{" "}
        <p class="artworkbuy__text--important">
          {inputData} Months X {monthlyrateprice} € ={" "}
          <span class="artwork__buy--color">
            {" "} {`${calculateMonthlyPriceRent()} €`}
          </span>
        </p>
        <p class="artworkbuy__text">Shipping Costs (5% of Total Price)</p>
        <p class="artworkbuy__text">(Free on Purchases Above 200 €)</p>
        <p class="artworkbuy__text--important">
          <span class="artwork__buy--color"
            >{`${ calculateShippingPriceRent() === 0 ? `Free Shipping` :
            `${calculateShippingPriceRent()} €` }`}</span
          >
        </p>
        <p class="artworkbuy__text--important">
          IVA 10% ={" "}
          <span class="artwork__buy--color">{`${calculateIVARent()} €`}</span>
        </p>
        <p class="artworkbuy__text--important_total">
          TOTAL =
          <span class="artwork__buy--color">
            {" "} {`${ calculateMonthlyPriceRent() + calculateIVARent() +
            calculateShippingPriceRent() } €`}
          </span>
        </p>
        <button onClick="{dispatchRentModal}" class="artwork_buy__button">
          RENT
        </button>
      </div>
      <div class="artwork__purchase--container">
        <p class="artwork__text--title">
          {" "}
          <span class="artwork__buy--color">BUY</span> TOTAL PRICE
        </p>
        <p class="artworkbuy__text--important">
          Purchase Price ={" "}
          <span class="artwork__buy--color"> {purchaseprice} €</span>
        </p>
        <p class="artworkbuy__text">Shipping Costs (5% of Total Price)</p>
        <p class="artworkbuy__text">(Free on Purchases Above 200 €)</p>
        <p class="artworkbuy__text--important">
          <span class="artwork__buy--color"
            >{`${ calculateShippingPriceBuy() === 0 ? `Free Shipping` :
            `${calculateShippingPriceBuy()} €` }`}</span
          >
        </p>
        <p class="artworkbuy__text--important">
          IVA 10% ={" "}
          <span class="artwork__buy--color">{`${calculateIVABuy()} €`}</span>
        </p>
        <p class="artworkbuy__text--important_total">
          TOTAL ={" "}
          <span class="artwork__buy--color">
            {" "} {`${ Number(purchaseprice) + calculateShippingPriceBuy() +
            calculateIVABuy() } €`}
          </span>
        </p>
        <button class="artwork_buy__button">BUY</button>
      </div>
    </div>
  </section>
</template>

<style scoped src="./CartStyle.css"></style>
