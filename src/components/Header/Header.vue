<script setup lang="ts">
import {
  PiniaCustomStateProperties,
  storeToRefs,
  _StoreWithGetters,
} from "pinia";
import { ToRefs } from "vue";
import router from "../../router";
import useUiStore from "../../stores/uiStore";
import useUserStore from "../../stores/userStore";
import { IUserInterface } from "../../types/uiTypes";
import { IUser } from "../../types/userTypes";

const storeUI = useUiStore();

const storeUser = useUserStore();

const {
  loading,
}: ToRefs<
  IUserInterface &
    _StoreWithGetters<{}> &
    PiniaCustomStateProperties<IUserInterface>
> = storeToRefs(storeUI);

const {
  firstName,
}: ToRefs<IUser & _StoreWithGetters<{}> & PiniaCustomStateProperties<IUser>> =
  storeToRefs(storeUser);

const submitLogOut = (): void => {
  localStorage.removeItem("token");
  router.push("/");
};
</script>

<template>
  <Teleport to="#modal__container">
    <LoadingModal v-if="loading" />
  </Teleport>
  <header class="navigation__header">
    <div class="navigation__container">
      <nav class="navigation">
        <div class="navigation__image--container">
          <router-link to="/"
            ><img
              src="/images/jgmarket_logo_314.webp"
              alt="jgmarket logo"
              width="200"
              height="126.08"
              class="navigation__image--logo"
            />
            <div>
              <p class="menu__text--firstname">
                Welcome
                {{ firstName }}!
              </p>
            </div></router-link
          >
        </div>
        <input id="menu__toggle" type="checkbox" for="menu__toggle" />
        <label class="menu__button--container" for="menu__toggle">
          <div class="menu__button"></div>
        </label>
        <ul class="menu__container">
          <li>
            <router-link to="/market">Our Products</router-link>
          </li>
          <li @click="submitLogOut">
            <router-link to="/">Sign Out</router-link>
          </li>
          <li class="menu__logged">
            <router-link to="/cart">
              <div class="menu__link--cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  class="menu__svg--cart"
                >
                  <path
                    d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
                  />
                </svg>
                <p>0</p>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style src="./HeaderStyle.css"></style>
