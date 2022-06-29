import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TimesView from "../views/TimesView.vue";
import ClassView from "../views/ClassView.vue";
import PerfilView from "../views/PerfilView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/times",
      name: "times",
      component: TimesView,
    },

    {
      path: "/Classificação",
      name: "Classificação",
      component: ClassView,
    },
    {
      path: "/Perfil",
      name: "Perfil",
      component: PerfilView,
    },
  ],
});

export default router;
