import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "samples",
          name: "samples",
          component: () => import("@/views/SamplesView.vue"),
        },
        {
          path: "contact",
          name: "contact",
          component: () => import("@/views/ContactView.vue"),
        },
      ],
    },
  ],
});

export default router;
