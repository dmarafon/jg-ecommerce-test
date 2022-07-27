<script setup lang="ts">
import useLoginFormStore from "../../stores/formStore";

const storeLogin = useLoginFormStore();

const handleSubmit = () => {
  const {
    email,
    password,
    loginPost,
  }: {
    email: string;
    password: string;
    loginPost: Function;
  } = storeLogin;

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
          class="login__input--email"
          id="email"
          v-model="storeLogin.email"
          type="text"
          required
          placeholder="EMAIL"
        />
        <label for="email" class="login__label--email">EMAIL</label>
      </div>
      <div class="login__input--container">
        <input
          class="login__input--password"
          id="password"
          v-model="storeLogin.password"
          type="password"
          required
          placeholder="PASSWORD"
        />
        <label class="login__label--password" for="password">PASSWORD</label>
      </div>
      <div class="login__button--container">
        <button class="login__button" type="submit">Log In</button>
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
