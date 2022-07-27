<script setup lang="ts">
const props = defineProps<{
  textMessage?: string;
}>();
</script>

<template>
  <section class="modal-text__container">
    <p class="modal-text__paragraph">{{ textMessage }}</p>
  </section>
</template>

<style src="./TextModalStyle.css"></style>
