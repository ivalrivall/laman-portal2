import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      name: "landing",
      component: Home,
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/Blog.vue"),
    },
  ],
});

export default router;
