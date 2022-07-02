import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import LivrosView from "../views/LivrosView.vue";
import PerfilView from "../views/PerfilView.vue";
import AutoresView from "../views/AutoresView.vue";
import EditorasView from "../views/EditorasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/Cate",
      name: "Categoria",
      component: CategoriaView,
    },

    {
      path: "/Livros",
      name: "Livros",
      component: LivrosView,
    },
    {
      path: "/Perfil",
      name: "Perfil",
      component: PerfilView,
    },
    {
      path: "/Au",
      name: "Autores",
      component: AutoresView,
    },
    {
      path: "/Ed",
      name: "Editoras",
      component: EditorasView,
    },
  ],
});

export default router;
