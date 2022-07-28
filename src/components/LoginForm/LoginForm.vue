<script setup lang="ts">
import {
  PiniaCustomStateProperties,
  storeToRefs,
  _StoreWithGetters,
} from "pinia";
import { ILogin } from "../../types/formTypes";
import useLoginFormStore from "../../stores/formStore";
import useUiStore from "../../stores/uiStore";
import {
  emailInputValidation,
  passwordInputValidation,
} from "../../utils/loginFormValidation";
import { ToRefs } from "vue";
import { IUserInterface } from "../../types/uiTypes";

const storeLogin = useLoginFormStore();

const storeUI = useUiStore();

const {
  loading,
  feedback,
  emailResponse,
  passwordResponse,
  apiResponse,
}: ToRefs<
  IUserInterface &
    _StoreWithGetters<{}> &
    PiniaCustomStateProperties<IUserInterface>
> = storeToRefs(storeUI);

const {
  emailValidationResponse,
  passwordValidationResponse,
  cleanResponse,
}: {
  emailValidationResponse: (response: string) => void;
  passwordValidationResponse: (response: string) => void;
  responseFromApi(response: string): void;
  cleanResponse: () => void;
} = storeUI;

const handleSubmit = () => {
  cleanResponse();

  const {
    email,
    password,
    loginPost,
  }: {
    email: string;
    password: string;
    loginPost: (loginInformation: ILogin) => void;
  } = storeLogin;

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
    />
  </Teleport>
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
          maxLength="33"
        />
        <label for="email" class="login__label--email">EMAIL</label>
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
        <label class="login__label--password" for="password">PASSWORD</label>
      </div>
      <p class="login__paragraph--warning" v-if="feedback">
        {{ passwordResponse }}
      </p>
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
