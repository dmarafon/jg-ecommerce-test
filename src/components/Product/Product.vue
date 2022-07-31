<script setup lang="ts">
interface Props {
  product: any;
}
const props = withDefaults(defineProps<Props>(), {
  product: () => [],
});

const categoryToUpperCase: string = props.product.category.toUpperCase();
</script>

<template>
  <li className="product__list">
    <div className="product__container">
      <img
        className="product__image"
        :src="props.product.images[0]"
        alt="marketplace product image"
        width="417.44"
        height="465"
      />
      <div className="product__text">
        <h2 className="product__text--category">
          {{ categoryToUpperCase }}
        </h2>
        <h3 className="product__text--title">{{ props?.product?.title }}</h3>
        <p className="product__text--price">€{{ props?.product?.price }}</p>
      </div>
    </div>
  </li>
</template>

<style scoped src="./ProductStyle.css"></style>
