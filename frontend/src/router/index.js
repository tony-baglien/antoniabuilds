import { createRouter, createWebHistory } from "vue-router";

// Routes
import authRoutes from "./routes/auth";
import dashboardRoutes from "./routes/dashboard";
import publicRoutes from "./routes/public";

// Views
import NotFound from "../views/NotFound.vue";

const routes = [
  ...authRoutes,
  ...dashboardRoutes,
  ...publicRoutes,
  { path: "/:pathMatch(.*)", component: NotFound, name: "notfound" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
