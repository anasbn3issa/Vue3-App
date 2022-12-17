import { createRouter, createWebHistory } from "vue-router";
import BodyComponent from "../components/BodyComponent.vue";
import LoginScreen from "../components/LoginScreen.vue";
import BooksComponent from "../components/BooksComponent.vue";
import BookComponent from "../components/BookComponent.vue";
import BooksAdmin from "../components/BooksAdmin.vue";
import BookEdit from "../components/BookEdit.vue";
import UsersComponent from "../components/UsersComponent.vue";
import UserEdit from "../components/UserEdit.vue";

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
  },
  {
    path: "/books",
    name: "Books",
    component: BooksComponent,
  },
  {
    path: "/books/:bookName",
    name: "Books",
    component: BookComponent,
  },
  {
    path: "/admin/books",
    name: "BooksAdmin",
    component: BooksAdmin,
  },
  {
    path: "/admin/books/:bookId",
    name: "BookEdit",
    component: BookEdit,
  },
  {
    path: "/admin/users/",
    name: "Users",
    component: UsersComponent,
  },
  {
    path: "/admin/users/:userId",
    name: "User",
    component: UserEdit,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
