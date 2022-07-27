<script setup lang="ts">
import useLoginFormStore from "../stores/formStore";

const storeLogin = useLoginFormStore();

const handleSubmit = () => {
  const { email, password, loginPost } = storeLogin;

  loginPost({ email, password });

  storeLogin.$reset();
};
</script>

<template>
  <section class="login__container">
    <h2 class="login__title">SIGN IN</h2>
    <form noValidate autoComplete="off" @submit.prevent="handleSubmit">
      <div class="login__input--container">
        <input
          id="email"
          v-model="storeLogin.email"
          type="text"
          required
          placeholder="EMAIL"
          class="login__input--email"
        />
        <label for="email" class="login__label--email">EMAIL</label>
      </div>
      <div class="login__input--password">
        <input
          id="password"
          v-model="storeLogin.password"
          type="password"
          required
          placeholder="PASSWORD"
        />
        <label for="password">PASSWORD</label>
      </div>
      <div class="login__input--button">
        <button class="" type="submit">Log In</button>
      </div>
      <div class="login__text--container">
        <p class="login__text--register_access_first">Don't have an Account?</p>
        <p class="login__text--register_access_second">
          Click here to
          <span class="login__text--special_color"> sign up</span> right now
        </p>
      </div>
    </form>
  </section>
</template>

<style scoped src="./LoginFormStyle.css"></style>
