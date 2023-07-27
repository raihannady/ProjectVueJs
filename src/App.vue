<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Raihannady/></a>
      <ul class="nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" :to="{ name: 'home' }"
            >Home</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/post">Post</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link"
            to="/login"
            v-if="Object.keys(storeAuth.user).length === 0"
            >Login</RouterLink
          >
          <RouterLink class="nav-link" to="/" @click="HandleLogout" v-else
            >Logout</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { useAuthStore } from "./stores/authStore";

const storeAuth = useAuthStore();

const HandleLogout = () => {
  storeAuth.LogoutUser();
};

onMounted(() => {
  storeAuth.init();
});
</script>

<style scoped>
.nav-link {
  color: black;
}
</style>
