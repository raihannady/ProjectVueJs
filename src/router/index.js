import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PostView from "../views/PostView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import { useAuthStore } from "../stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/post",
      name: "post",
      component: PostView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});

router.beforeEach((to, from) => {
  const storeAuth = useAuthStore();
  if (to.meta.requiresAuth) {
    if (!storeAuth.login) {
      alert("Hanya bisa diakses oleh pengguna yang telah login");
      return false; // Menambahkan return false untuk menghentikan navigasi
    }
  }
  // return true; // Menambahkan return true jika pengguna telah login
});

export default router;
