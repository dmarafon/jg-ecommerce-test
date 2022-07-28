<script setup lang="ts">
const props = defineProps<{
  textMessage?: string;
}>();
</script>

<template>
  <section class="modal-text__container">
    <div className="modal-text__content">
      <div className="modal-text__button--container">
        <button
          @click="$emit('button-on-click')"
          class="modal-text__button--close"
        >
          &times;
        </button>
      </div>
      <p class="modal-text__paragraph">{{ textMessage }}</p>
    </div>
  </section>
</template>

<style src="./TextModalStyle.css"></style>
