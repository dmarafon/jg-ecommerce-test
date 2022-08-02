<script setup lang="ts">
import { storeToRefs, _StoreWithGetters } from "pinia";
import { RouteLocationNormalizedLoaded, RouteParams, Router } from "vue-router";
import {
  initialSkipForGetProducts,
  limitForGetProducts,
} from "../../api/APIRoutesAndQueryVariables";
import useProductStore from "../../stores/productStore";
import useUiStore from "../../stores/uiStore";
import { IProductStore, IProductStoreToRef } from "../../types/productTypes";
import { IStoreUIToRefs, IUserInterfaceStore } from "../../types/uiTypes";
import { calculateSkip } from "../../utils/calculatePageNavigation";
import {
  productsTextIntroFirstPart,
  productsTextSpecialColored,
  productsTextIntroSecondPart,
  productsFilterFirstButton,
  productsFilterSecondButton,
  productsFilterSortFirstOption,
  productsFilterSortSecondOption,
} from "../../utils/stringVariablesForHTML";

const router: Router = useRouter();
const route: RouteLocationNormalizedLoaded = useRoute();

const storeUI: IUserInterfaceStore = useUiStore();

const { cleanResponse }: IUserInterfaceStore = storeUI;

const {
  getProducts,
  getCategories,
  getAllCategories,
  getAllProducts,
}: IProductStore = useProductStore();

const {
  products,
  totalPages,
  currentPage,
  productCategories,
}: IProductStoreToRef = storeToRefs(useProductStore());

watchEffect(() => {
  const { limit, page, category, all }: RouteParams = route.params;

  getAllCategories();

  const skip: string = calculateSkip(limit, page);

  switch (true) {
    case !category && all === "no":
      getProducts(limit, skip, page);
      break;

    case category && all === "no":
      getCategories(limit, skip, category, page);
      break;

    case all === "reverse":
      getAllProducts(all, page, limit);
      break;

    case all === "ordered":
      getAllProducts(all, page, limit);
      break;
    default:
      return;
  }
});

const { loading, apiResponse }: IStoreUIToRefs = storeToRefs(storeUI);

const navigateForward = (): void => {
  const { category, page, all }: RouteParams = route.params;

  const nextPage: number = Number(page) + 1;

  if (all === "no") {
    router.push({
      path: `/market/no/${limitForGetProducts}/${nextPage}/${category}`,
    });
    window.scrollTo(0, 0);
  } else {
    router.push({
      path: `/market/${all}/${limitForGetProducts}/${nextPage}/${category}`,
    });
    window.scrollTo(0, 0);
  }
};

const navigateBackwards = (): void => {
  const { category, page, all }: RouteParams = route.params;

  const nextPage: number = Number(page) - 1;

  if (all === "no") {
    router.push({
      path: `/market/no/${limitForGetProducts}/${nextPage}/${category}`,
    });
    window.scrollTo(0, 0);
  } else {
    router.push({
      path: `/market/${all}/${limitForGetProducts}/${nextPage}/${category}`,
    });
    window.scrollTo(0, 0);
  }
};

const goToCategory = (clickedCategory: string | void): void => {
  router.push({
    path: `/market/no/${limitForGetProducts}/${initialSkipForGetProducts}/${clickedCategory}`,
  });
};

const sortAtoZ = (): void => {
  router.push({
    path: `/market/ordered/${limitForGetProducts}/${initialSkipForGetProducts}`,
  });
};

const sortZtoA = (): void => {
  router.push({
    path: `/market/reverse/${limitForGetProducts}/${initialSkipForGetProducts}`,
  });
};

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
    <div class="products__text--container">
      <p class="products__text--intro">
        {{ productsTextIntroFirstPart }}
        <span class="products__text--colored">{{
          productsTextSpecialColored
        }}</span>
        {{ productsTextIntroSecondPart }}
      </p>
    </div>
    <div class="products__filter--container">
      <div class="dropdown__container">
        <div class="dropdown">
          <button class="dropdown__button">
            {{ productsFilterFirstButton }}
          </button>
          <div class="dropdown-content">
            <a @click="sortAtoZ">{{ productsFilterSortFirstOption }}</a>
            <a @click="sortZtoA">{{ productsFilterSortSecondOption }}</a>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropdown__button">
          {{ productsFilterSecondButton }}
        </button>
        <div class="dropdown-content">
          <a
            v-for="(productCategory, index) in productCategories"
            :key="`${productCategory}${index}`"
            @click="goToCategory(productCategory)"
          >
            {{ productCategory }}
          </a>
        </div>
      </div>
    </div>
    <ul v-if="products" class="products__list">
      <Product
        v-for="(product, index) in products[0]"
        :key="index"
        :product="product"
      >
      </Product>
    </ul>
    <div class="products__navigate--container">
      <svg
        data-testid="back-button"
        v-on="currentPage > 1 ? { click: navigateBackwards } : {}"
        :class="[
          currentPage <= 1 ? deactivateNavigateClass : activeNavigateLeftClass,
        ]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          v-if="currentPage > 1"
          fillOpacity="0"
          d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
        />
      </svg>

      <p class="products__navigate--counter">
        {{ currentPage }}/ {{ totalPages }}
      </p>
      <svg
        v-on="currentPage !== totalPages ? { click: navigateForward } : {}"
        :class="[
          currentPage === totalPages
            ? deactivateNavigateClass
            : activeNavigateRightClass,
        ]"
        data-testid="forward-button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          v-if="currentPage !== totalPages"
          fillOpacity="0"
          d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped src="./ProductsListStyle.css"></style>
