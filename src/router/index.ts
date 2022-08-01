import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  Router,
  RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import DetailView from "../views/DetailView/DetailView.vue";
import MarketView from "../views/MarketView/MarketView.vue";
import CartView from "../views/CartView/CartView.vue";
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
    path: "/market/:all/:limit/:page/:category?",
    name: "Market",
    component: MarketView,
    meta: { requiresAuth: true },
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: DetailView,
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
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
          path: `/market/no/${limitForGetProducts}/${initialSkipForGetProducts}`,
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
