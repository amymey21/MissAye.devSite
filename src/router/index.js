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
          path: "about",
          name: "about",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "samples",
          name: "samples",
          component: () => import("@/views/SamplesView.vue"),
          children: [
            {
              path: "",
              redirect: { name: "project-detail", params: { id: "1" } },
            },
            {
              path: ":id",
              name: "project-detail",
              component: () => import("@/components/ProjectDetail.vue"),
            },
          ],
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
