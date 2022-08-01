<script setup lang="ts">
import { Router } from "vue-router";

interface Props {
  product: any;
}
const props = withDefaults(defineProps<Props>(), {
  product: () => [],
});

const categoryToUpperCase: string = props.product.category.toUpperCase();

const router: Router = useRouter();

const goToDetails = (): void => {
  const detailId: string = props.product.id.toString();
  router.push({ path: `/detail/${detailId}` });
};
</script>

<template>
  <li class="product__list">
    <div class="product__container" @click="goToDetails">
      <div class="product__card">
        <img
          class="product__image"
          :src="props?.product?.images[0]"
          alt="marketplace product image"
          width="417.44"
          height="465"
        />
        <div class="product__text">
          <h2 class="product__text--category">
            {{ categoryToUpperCase }}
          </h2>
          <h3 class="product__text--title">{{ props?.product?.title }}</h3>
          <p class="product__text--price">€{{ props?.product?.price }}</p>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped src="./ProductStyle.css"></style>
