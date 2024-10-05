import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: import("./views/HomeView.vue") },
  {
    path: "/:id",
    name: "Terminal",
    component: import("./views/TerminalView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
