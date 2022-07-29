import { createApp } from "vue";
import "./style.css";
import { createPinia, Pinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import PersistedState from "pinia-plugin-persistedstate";

const pinia: Pinia = createPinia().use(PersistedState);

createApp(App).use(pinia).use(router).mount("#app");
