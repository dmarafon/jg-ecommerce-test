import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  Router,
  RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import MarketView from "../views/MarketView/MarketView.vue";
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth: boolean;
  }
}

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
    meta: { requiresAuth: true },
  },
];

const router: Router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(
  async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    let token: string | null = localStorage.getItem("token");

    if (to.meta.requiresAuth && !token) {
      return {
        path: "/",
      };
    } else if (!to.meta.requiresAuth && token) {
      return {
        path: "/market",
      };
    }
  }
);

export default router;
