<script setup lang="ts">
import jwtDecode from "jwt-decode";
import useUserStore from "./stores/userStore.js";
import { IUserToken } from "./types/userTypes.js";

watchEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodeToken: IUserToken = jwtDecode(token);

    const { login }: { login: (decodeToken: IUserToken) => void } =
      useUserStore();

    login(decodeToken);
  }
});
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
