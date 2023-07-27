<template>
  <form
    @submit.prevent="handleSubmit"
    class="border rounded p-4 container w-25"
  >
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="user.email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="user.password"
      />
    </div>
    <div><RouterLink to="/login">Already have account?</RouterLink></div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useAuthStore } from "../stores/authStore";

const storeAuth = useAuthStore();

const user = reactive({
  email: "",
  password: "",
});

const handleSubmit = () => {
  if (!user.email || !user.password) {
    alert("Harus Diisi");
  } else {
    storeAuth.registerUser(user);
  }
};
</script>
