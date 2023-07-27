<template>
  <h1 style="text-align: center">Konten Saya</h1>

  <div class="container text-center">
    <div class="col text-left">
      <div class="row justify-content-center">
        <div
          class="card"
          style="width: 18rem; padding: 1rem; margin: 1rem"
          v-for="data in counter.datas"
          :key="data.id"
        >
          <div class="card-body">
            <div>
              <h3 class="card-title">{{ data.title }}</h3>
            </div>
            <div>
              <p class="card-text">
                {{ data.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useCounterStore } from "../stores/counter";

const counter = useCounterStore();

onMounted(() => {
  counter.readData();
});
</script>
