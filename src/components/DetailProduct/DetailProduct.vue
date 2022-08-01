<script setup lang="ts">
import { storeToRefs } from "pinia";
import { RouteLocationNormalizedLoaded } from "vue-router";
import useUiStore from "../../stores/uiStore";
import { IProductStore, IProductStoreToRef } from "../../types/productTypes";
import { IStoreUIToRefs, IUserInterfaceStore } from "../../types/uiTypes";
import useProductStore from "../../stores/productStore";
import useCartStore from "../../stores/cartStore";

const storeUI: IUserInterfaceStore = useUiStore();

const { cleanResponse }: IUserInterfaceStore = storeUI;

const route: RouteLocationNormalizedLoaded = useRoute();

const { getDetailProduct }: IProductStore = useProductStore();

const { detailProduct }: IProductStoreToRef = storeToRefs(useProductStore());

watchEffect(() => {
  const { id } = route.params;

  getDetailProduct(id);
});

const { loading, apiResponse }: IStoreUIToRefs = storeToRefs(storeUI);

const { addToCart } = useCartStore();

const addToCartAction = () => {
  const { detailProduct }: IProductStore = useProductStore();

  addToCart(detailProduct);
};
</script>

<template>
  <Teleport to="#modal__container">
    <LoadingModal v-if="loading" />
  </Teleport>
  <Teleport to="#modal__container">
    <TextModal
      :text-message="apiResponse"
      @button-on-click="cleanResponse"
      v-if="apiResponse"
      :key-event="cleanResponse"
    />
  </Teleport>
  <section class="detail__section">
    <div class="detail__container">
      <h2 class="detail__heading--title">{{ detailProduct.title }}</h2>
      <p class="detail__paragraph--brand">
        <span class="detail__paragraph--special">
          {{ detailProduct.brand }}
        </span>
      </p>
      <ul>
        <li class="detail__list">
          Customers Rating:
          <span class="detail__paragraph--special">
            {{ detailProduct.rating }}</span
          >
        </li>
        <li class="detail__list">
          How Many Items in Stock?
          <span class="detail__paragraph--special">{{
            detailProduct.stock
          }}</span>
        </li>
        <li class="detail__list">Brand: {{ detailProduct.brand }}</li>

        <li class="detail__list">
          Price: €
          <span class="detail__paragraph--special_second">{{
            detailProduct.price
          }}</span>
        </li>
        <li class="detail__list">
          What You Save?
          <span class="detail__paragraph--special_second">
            {{ detailProduct.discountPercentage }}%</span
          >
        </li>
      </ul>
      <p class="detail__paragraph--description">
        {{ detailProduct.description }}
      </p>
    </div>
    <div class="detail__image--container">
      <div class="detail__image--container_second">
        <img
          class="detail__image"
          :src="detailProduct.images[0]"
          alt="product available"
        />
      </div>

      <div class="detail__button--container">
        <button @click="addToCartAction" class="detail__button--cart">
          Add To Cart
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped src="./DetailProductStyle.css"></style>
