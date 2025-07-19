import { requiresAuth } from "../guards/auth";
import Dashboard from "../../views/dashboard/Dashboard.vue";
export default [
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    beforeEnter: requiresAuth,
  },
];
