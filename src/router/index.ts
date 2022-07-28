import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import MarketView from "../views/MarketView/MarketView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/market",
    name: "Market",
    component: MarketView,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
