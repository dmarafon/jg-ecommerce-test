<script setup lang="ts"></script>

<template>
  <div class="register__form--container">
    <form onSubmit="{submitForm}" noValidate autoComplete="off">
      <h2 class="register__title">Sign Up</h2>
      <div class="register__input--container">
        <div class="register__input--first_column">
          <input
            id="firstname"
            value=""
            type="text"
            onChange="{changeRegisterData}"
            required
            placeholder="FIRST NAME"
            class="register__input--firstname"
            maxLength="{33}"
          />
          <label class="register__label--firstname" htmlFor="firstname">
            FIRST NAME
          </label>
          <!-- <p class="register__paragraph--warning">Empty Firstname field</p> -->
          <input
            id="surname"
            value=""
            type="text"
            onChange="{changeRegisterData}"
            required
            placeholder="SURNAME"
            class="register__input--surname"
          />
          <label class="register__label--surname" htmlFor="surname">
            SURNAME
          </label>
          <!-- <p class="register__paragraph--warning">Empty Surname field</p> -->
          <input
            id="email"
            value=""
            type="text"
            onChange="{changeRegisterData}"
            required
            placeholder="EMAIL"
            class="register__input--email"
          />
          <label class="register__label--email" htmlFor="email"> EMAIL </label>
          <!-- <p class="register__paragraph--warning">Empty Email field</p> -->

          <!-- <p class="register__paragraph--warning">Invalid Email Address</p> -->
        </div>
        <div class="register__input--second_column">
          <input
            autoComplete="current-password"
            id="password"
            type="password"
            value="{registerFormData.password}"
            onChange="{changeRegisterData}"
            required
            placeholder="PASSWORD"
            class="register__input--password"
            maxLength="{15}"
          />
          <label class="register__label--password" htmlFor="password">
            PASSWORD
          </label>
          <!-- <p class="register__paragraph--warning">Empty Password field</p> -->

          <!-- <p class="register__paragraph--warning">Minimun 5 Char.</p> -->
          ) : ( "" )}
          <input
            id="city"
            value="{registerFormData.city}"
            type="text"
            onChange="{changeRegisterData}"
            required
            placeholder="CITY"
            class="register__input--city"
          />
          <label class="register__label--city" htmlFor="city"> CITY </label>
          <!-- <p class="register__paragraph--warning">Empty City field</p> -->
          <input
            id="country"
            value="{registerFormData.country}"
            type="text"
            onChange="{changeRegisterData}"
            required
            placeholder="COUNTRY"
            class="register__input--country"
          />
          <label class="register__label--country" htmlFor="country">
            COUNTRY
          </label>
          <!-- <p class="register__paragraph--warning">Empty Country field</p> -->
        </div>
      </div>
      <div class="register__button--container">
        <button class="register__button" type="submit" disabled="{false}">
          REGISTER
        </button>
      </div>
      <div class="register__text--container" onClick="{changeForm}">
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
