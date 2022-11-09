import Home from "./views/Home.vue";
import Film from "./views/Film.vue";
import Char from "./views/Char.vue";
import Test from "./views/Test.vue";
import NotFound from "./views/NotFound.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/film/:id", name: "film", component: Film },
  { path: "/char", name: "char", component: Char },
  { path: "/test", name: "test", component: Test },
  { path: "/:path(.*)", component: NotFound },
];
