import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  Router,
  RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import MarketView from "../views/MarketView/MarketView.vue";
import jwtDecode from "jwt-decode";
import { IUserToken } from "../types/userTypes";
import useUserStore from "../stores/userStore";
import {
  initialSkipForGetProducts,
  limitForGetProducts,
} from "../api/APIRoutesAndQueryVariables";

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
    path: "/market/:limit/:page",
    name: "Market",
    component: MarketView,
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    name: "Cart",
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
      try {
        const decodeToken: IUserToken = jwtDecode(token);

        const { login }: { login: (decodeToken: IUserToken) => void } =
          useUserStore();

        login(decodeToken);

        return {
          path: `/market/${limitForGetProducts}/${initialSkipForGetProducts}`,
        };
      } catch (error: any | unknown) {
        localStorage.clear();

        return {
          path: "/",
        };
      }
    }
  }
);

export default router;
