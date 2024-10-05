import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import TerminalView from "./views/TerminalView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/:id",
    name: "Terminal",
    component: TerminalView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
