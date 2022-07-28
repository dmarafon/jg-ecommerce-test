<script setup lang="ts">
import { onKeyStroke } from "@vueuse/core";

const props = defineProps<{
  textMessage?: string;
  keyEvent?: any;
}>();

const emit = defineEmits<{
  (e: "button-on-click"): void;
}>();

onKeyStroke(["Escape", "Enter"], (e: KeyboardEvent) => {
  props.keyEvent();
  e.preventDefault();
});
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
