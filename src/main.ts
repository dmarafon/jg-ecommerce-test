import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

createApp(App)
  .use(createPinia())
  .use(piniaPluginPersistedstate)
  .use(router)
  .mount("#app");
