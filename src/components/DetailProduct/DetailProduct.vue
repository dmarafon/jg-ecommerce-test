<script setup lang="ts">
import { storeToRefs } from "pinia";
import { RouteLocationNormalizedLoaded } from "vue-router";
import useUiStore from "../../stores/uiStore";
import { IProductStore, IProductStoreToRef } from "../../types/productTypes";
import { IStoreUIToRefs, IUserInterfaceStore } from "../../types/uiTypes";
import useProductStore from "../../stores/productStore";

const storeUI: IUserInterfaceStore = useUiStore();

const { cleanResponse }: IUserInterfaceStore = storeUI;

const route: RouteLocationNormalizedLoaded = useRoute();

const { getDetailProduct }: IProductStore = useProductStore();

const { detailProduct }: IProductStoreToRef = storeToRefs(useProductStore());

// const { id } = route.params;

watchEffect(() => {
  const { id } = route.params;

  getDetailProduct(id);
});

const { loading, apiResponse }: IStoreUIToRefs = storeToRefs(storeUI);
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
</template>

<style scoped src="./DetailProductStyle.css"></style>
