import { createRouter, createWebHistory } from "vue-router";
import BodyComponent from "../components/BodyComponent.vue";
import LoginScreen from "../components/LoginScreen.vue";

const routes = [
  {
    path: "/",
    name: "BodyComponent",
    component: BodyComponent,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginScreen,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
