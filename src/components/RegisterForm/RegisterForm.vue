<script setup lang="ts">
import { storeToRefs } from "pinia";
import useRegisterFormStore from "../../stores/registerFormStore.js";
import useUiStore from "../../stores/uiStore.js";
import { IStoreUIToRefs, IUserInterfaceStore } from "../../types/uiTypes.js";
import { IRegisterStore, IRegisterValidation } from "../../types/formTypes";
import { registerInputValidation } from "../../utils/registerFormValidation";

defineEmits<{
  (event: "toogle-component"): void;
}>();

const storeUI: IUserInterfaceStore = useUiStore();

const storeRegister: IRegisterStore = useRegisterFormStore();

const {
  loading,
  feedback,
  firstnameResponse,
  surnameResponse,
  emailRegisterResponse,
  passwordRegisterResponse,
  cityResponse,
  countryResponse,
  apiResponse,
}: IStoreUIToRefs = storeToRefs(storeUI);

const { registerFormValidationResponse, cleanResponse }: IUserInterfaceStore =
  storeUI;

const handleSubmit = (): void => {
  cleanResponse();

  const {
    firstname,
    surname,
    email,
    password,
    city,
    country,
    registerPost,
  }: IRegisterStore = storeRegister;

  const {
    firstnameValidation,
    surnameValidation,
    emailValidation,
    passwordValidation,
    cityValidation,
    countryValidation,
  }: IRegisterValidation = registerInputValidation(
    firstname,
    surname,
    email,
    password,
    city,
    country
  );

  if (
    !firstnameValidation &&
    !surnameValidation &&
    !emailValidation &&
    !passwordValidation &&
    !cityValidation &&
    !countryValidation
  ) {
    registerPost({ firstname, surname, email, password, city, country });

    storeRegister.$reset();
  } else {
    registerFormValidationResponse({
      firstnameValidation,
      surnameValidation,
      emailValidation,
      passwordValidation,
      cityValidation,
      countryValidation,
    });
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
  <div class="register__form--container">
    <form noValidate autoComplete="off" @submit.prevent="handleSubmit">
      <h2 class="register__title">Sign Up</h2>
      <div class="register__input--container">
        <div class="register__input--first_column">
          <input
            id="firstname"
            v-model="storeRegister.firstname"
            required
            placeholder="FIRST NAME"
            class="register__input--firstname"
            maxLength="33"
          />
          <label class="register__label--firstname" htmlFor="firstname">
            FIRST NAME
          </label>
          <p class="register__paragraph--warning" v-if="feedback">
            {{ firstnameResponse }}
          </p>
          <input
            id="surname"
            v-model="storeRegister.surname"
            type="text"
            required
            placeholder="SURNAME"
            class="register__input--surname"
          />
          <label class="register__label--surname" htmlFor="surname">
            SURNAME
          </label>
          <p class="register__paragraph--warning" v-if="feedback">
            {{ surnameResponse }}
          </p>
          <input
            id="email"
            v-model="storeRegister.email"
            type="text"
            required
            placeholder="EMAIL"
            class="register__input--email"
          />
          <label class="register__label--email" htmlFor="email"> EMAIL </label>
          <p class="register__paragraph--warning" v-if="feedback">
            {{ emailRegisterResponse }}
          </p>
        </div>
        <div class="register__input--second_column">
          <input
            autoComplete="current-password"
            id="password"
            type="password"
            v-model="storeRegister.password"
            required
            placeholder="PASSWORD"
            class="register__input--password"
            maxLength="15"
          />
          <label class="register__label--password" htmlFor="password">
            PASSWORD
          </label>
          <p class="register__paragraph--warning" v-if="feedback">
            {{ passwordRegisterResponse }}
          </p>
          <input
            id="city"
            type="text"
            v-model="storeRegister.city"
            required
            placeholder="CITY"
            class="register__input--city"
          />
          <label class="register__label--city" htmlFor="city"> CITY </label>
          <p class="register__paragraph--warning" v-if="feedback">
            {{ cityResponse }}
          </p>
          <input
            id="country"
            v-model="storeRegister.country"
            type="text"
            required
            placeholder="COUNTRY"
            class="register__input--country"
          />
          <label class="register__label--country" htmlFor="country">
            COUNTRY
          </label>
          <p class="register__paragraph--warning" v-if="feedback">
            {{ countryResponse }}
          </p>
        </div>
      </div>
      <div class="register__button--container">
        <button class="register__button" type="submit">REGISTER</button>
      </div>
      <div class="register__text--container" @click="$emit('toogle-component')">
        <p class="register__text--login_access_first">
          Already have an Account?
        </p>
        <p class="register__text--login_access_second">
          Click here to
          <span class="register__text--special_color"> sign in</span>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped src="./RegisterFormStyle.css"></style>
