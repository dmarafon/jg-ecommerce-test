<script setup lang="ts">
const toggleLoginAndRegisterForm = ref(false);

const registerAndLoginToggle = () =>
  (toggleLoginAndRegisterForm.value = !toggleLoginAndRegisterForm.value);
</script>

<template>
  <div class="welcome__container">
    <WelcomeText />
    <LoginForm
      @toogle-component="registerAndLoginToggle"
      v-if="!toggleLoginAndRegisterForm"
    />
    <RegisterForm
      @toogle-component="registerAndLoginToggle"
      v-if="toggleLoginAndRegisterForm"
    />
  </div>
  <Footer />
</template>

<style scoped src="./HomeViewStyle.css"></style>
