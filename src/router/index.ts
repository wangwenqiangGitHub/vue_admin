import { createRouter, createWebHistory } from "vue-router";
import routes from "./routers";
import { App } from "vue";
import layoutRoutes from "./autoload";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes],
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
