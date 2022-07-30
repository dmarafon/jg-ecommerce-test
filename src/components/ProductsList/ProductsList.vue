<script setup lang="ts">
import { storeToRefs, _StoreWithGetters } from "pinia";
import { RouteLocationNormalizedLoaded } from "vue-router";
import useProductStore from "../../stores/productStore";
import useUiStore from "../../stores/uiStore";
import { IProductStore, IProductStoreToRef } from "../../types/productTypes";
import { IStoreUIToRefs, IUserInterfaceStore } from "../../types/uiTypes";
import { calculateSkip } from "../../utils/calculatePageNavigation";

const route: RouteLocationNormalizedLoaded = useRoute();

const storeUI: IUserInterfaceStore = useUiStore();

const { cleanResponse }: IUserInterfaceStore = storeUI;

const { getProducts }: IProductStore = useProductStore();

const { products, totalPages }: IProductStoreToRef = storeToRefs(
  useProductStore()
);

const { limit, page } = route.params;

watchEffect(() => {
  const skip: string = calculateSkip(limit, page);

  getProducts(limit, skip);
});

const isActive = () => {
  if (Number(page) <= 1) {
    return false;
  } else {
    return true;
  }
};

const { loading, apiResponse }: IStoreUIToRefs = storeToRefs(storeUI);

const activeNavigateLeftClass: string = "products__navigate--button_first";

const deactivateNavigateClass: string =
  "products__navigate--button_deactivated_left";

const activeNavigateRightClass: string = "products__navigate--button_second";
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
  <section>
    <div className="products__text--container">
      <p className="products__text--intro">
        ALL THE
        <span className="products__text--colored"> DES TERRA</span> ARTISTS
        WORKS
      </p>
    </div>
    <div className="products__filter--container">
      <div className="dropdown__container">
        <div className="dropdown">
          <button className="dropbtn">SORT BY NAME</button>
          <div className="dropdown-content">
            <!-- <NavLink to={`/artwork/1/sortOrderPurchase=-1`}>
                      Biggest to Smallest Price
                    </NavLink>
                    <NavLink to={`/artwork/1/sortOrderPurchase=1`}>
                      Smallest to Biggest Price
                    </NavLink> -->
          </div>
        </div>
      </div>
      <div className="dropdown__container--center">
        <div className="dropdown">
          <button className="dropbtn">SORT BY RENT PRICE</button>
          <div className="dropdown-content">
            <!-- 
                    <NavLink to={`/artwork/1/sortOrderRent=-1`}>
                      Biggest to Smallest Price
                    </NavLink>
                    <NavLink to={`/artwork/1/${filterStyle}/sortOrderRent=1`}>
                      Smallest to Biggest Price
                    </NavLink>
                    <NavLink to={`/artwork/1/sortOrderRent=1`}>
                      Smallest to Biggest Price
                    </NavLink> -->
          </div>
        </div>
      </div>
      <div className="dropdown__container--right">
        <div className="dropdown">
          <button className="dropbtn">SELECT YOUR STYLE</button>
          <div className="dropdown-content"></div>
        </div>
      </div>
    </div>
    <div className="dropdown__container--right_responsive">
      <div className="dropdown">
        <button className="dropbtn">SELECT YOUR STYLE</button>
        <div className="dropdown-content"></div>
      </div>
    </div>
    <ul v-if="products" className="products__list">
      <li v-for="(product, index) in products[0]" :key="index">
        {{ product }}
      </li>
    </ul>
    <div className="products__navigate--container">
      <svg
        data-testid="back-button"
        :class="[
          Number(page) <= 1 ? deactivateNavigateClass : activeNavigateLeftClass,
        ]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fillOpacity="0"
          d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
        />
      </svg>

      <p className="products__navigate--counter">
        {{ page }}/ {{ totalPages }}
      </p>
      <svg
        :class="[
          Number(page) === totalPages
            ? deactivateNavigateClass
            : activeNavigateRightClass,
        ]"
        data-testid="forward-button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fillOpacity="0"
          d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped src="./ProductsListStyle.css"></style>
