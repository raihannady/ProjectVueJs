<template>
  <main class="container mt-5">
    <div class="row">
      <div class="col">
        <tableComponent
          :datas="counter.datas"
          @update="counter.updateData"
          @delete="counter.deleteData"
        ></tableComponent>
      </div>
      <div class="col">
        <formComponent
          :todo="counter"
          :update="counter.update"
          @clear="counter.clearInput"
          @handlesubmit="counter.handleSubmit"
        ></formComponent>
      </div>
    </div>
  </main>
</template>

<script setup>
import tableComponent from "../components/tableComponent.vue";
import formComponent from "../components/formComponent.vue";

import { onMounted } from "vue";
import { useCounterStore } from "../stores/counter";

const counter = useCounterStore();

onMounted(() => {
  counter.readData();
});
</script>

<style scope></style>
