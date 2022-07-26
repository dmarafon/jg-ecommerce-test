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
    <div>
      <h1>Sign Up</h1>
    </div>
    <form noValidate autoComplete="off" @submit.prevent="handleSubmit">
      <div class="login__input--email">
        <label for="email">Email Address</label>
        <input
          id="email"
          v-model="storeLogin.email"
          type="email"
          placeholder=" "
        />
      </div>
      <div class="login__input--password">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="storeLogin.password"
          type="password"
          placeholder=" "
        />
      </div>
      <div class="login__input--button">
        <button type="submit">Log In</button>
      </div>
    </form>
  </section>
</template>

<style scoped src="./LoginFormStyle.css"></style>
