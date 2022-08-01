<script setup lang="ts">
import { storeToRefs, _StoreWithGetters } from "pinia";
import { ILoginStore } from "../../types/formTypes";
import useLoginFormStore from "../../stores/formStore";
import useUiStore from "../../stores/uiStore";
import {
  emailInputValidation,
  passwordInputValidation,
} from "../../utils/loginFormValidation";
import { IStoreUIToRefs, IUserInterfaceStore } from "../../types/uiTypes";
import {
  loginTitle,
  loginLabelEmail,
  loginLabelPassword,
  loginButton,
  loginTextFirstLine,
  loginTextSecondLine,
  loginTextSecondLineContinuation,
  loginTextSpecial,
} from "../../utils/stringVariablesForHTML";

const storeLogin: ILoginStore = useLoginFormStore();

const storeUI: IUserInterfaceStore = useUiStore();

const {
  loading,
  feedback,
  emailResponse,
  passwordResponse,
  apiResponse,
}: IStoreUIToRefs = storeToRefs(storeUI);

const {
  emailValidationResponse,
  passwordValidationResponse,
  cleanResponse,
}: IUserInterfaceStore = storeUI;

const handleSubmit = (): void => {
  cleanResponse();

  const { email, password, loginPost }: ILoginStore = storeLogin;

  const validateEmailForm: string = emailInputValidation(email);
  const validatePasswordForm: string = passwordInputValidation(password);

  if (!validateEmailForm && !validatePasswordForm) {
    loginPost({ email, password });

    storeLogin.$reset();
  } else {
    emailValidationResponse(validateEmailForm);
    passwordValidationResponse(validatePasswordForm);
  }
};
</script>

<template>
  <Teleport to="#modal__container">
    <LoadingModal v-if="loading" />
  </Teleport>
  <Teleport to="#modal__container">
    <TextModal
      :text-message="apiResponse"
      @button-on-click="cleanResponse"
      v-if="apiResponse"
      :key-event="cleanResponse"
    />
  </Teleport>
  <section class="login__container">
    <h2 class="login__title">{{ loginTitle }}</h2>
    <form noValidate autoComplete="off" @submit.prevent="handleSubmit">
      <div class="login__input--container">
        <input
          class="login__input--email"
          id="email"
          v-model="storeLogin.email"
          type="text"
          required
          placeholder="EMAIL"
          maxLength="33"
        />
        <label for="email" class="login__label--email">{{
          loginLabelEmail
        }}</label>
      </div>
      <p class="login__paragraph--warning" v-if="feedback">
        {{ emailResponse }}
      </p>
      <div class="login__input--container">
        <input
          class="login__input--password"
          id="password"
          v-model="storeLogin.password"
          type="password"
          required
          placeholder="PASSWORD"
          maxlength="15"
        />
        <label class="login__label--password" for="password">{{
          loginLabelPassword
        }}</label>
      </div>
      <p class="login__paragraph--warning" v-if="feedback">
        {{ passwordResponse }}
      </p>
      <div class="login__button--container">
        <button class="login__button" type="submit">{{ loginButton }}</button>
      </div>
      <div class="login__text--container">
        <p class="login__text--register_access_first">
          {{ loginTextFirstLine }}
        </p>
        <p class="login__text--register_access_second">
          {{ loginTextSecondLine }}
          <span class="login__text--special_color">{{ loginTextSpecial }}</span
          >{{ loginTextSecondLineContinuation }}
        </p>
      </div>
    </form>
  </section>
</template>

<style scoped src="./LoginFormStyle.css"></style>
