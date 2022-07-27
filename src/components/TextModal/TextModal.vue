<script setup lang="ts">
const props = defineProps<{
  textMessage?: string;
}>();
</script>

<template>
  <section class="modal-text__container">
    <div className="modal-content">
      <div className="modal-button">
        <button @click="$emit('button-on-click')" class="modal-button--closed">
          &times;
        </button>
        <p>{{ textMessage }}</p>
      </div>
    </div>
  </section>
</template>

<style src="./TextModalStyle.css"></style>
