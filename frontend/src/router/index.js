import { createRouter, createWebHistory } from "vue-router";

// Routes
import authRoutes from "./routes/auth";
import dashboardRoutes from "./routes/dashboard";
import publicRoutes from "./routes/public";

const routes = [...authRoutes, ...dashboardRoutes, ...publicRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
