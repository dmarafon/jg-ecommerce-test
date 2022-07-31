<script setup lang="ts">
import { welcomeText } from "../../utils/stringVariablesForHTML";

welcomeText;
</script>

<template>
  <section class="welcome__text--container">
    <div class="welcome__image--container">
      <img
        class="welcome__image--logo"
        src="/images/jgmarket_logo_314.webp"
        alt="jgmarket logo"
        height="230"
      />
    </div>
    <div class="welcome__paragraph--container">
      <p class="welcome__paragraph--welcome_text">
        {{ welcomeText }}
      </p>
    </div>
  </section>
</template>

<style scoped src="./WelcomeTextStyle.css"></style>
