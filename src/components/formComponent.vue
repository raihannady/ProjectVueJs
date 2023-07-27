<template>
  <form @submit.prevent="$emit('handlesubmit')">
    <div class="form-group">
      <label>Title</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="todo.title"
      />
    </div>
    <div class="form-group">
      <label>Content</label>
      <textarea
        v-model="todo.content"
        class="form-control"
        cols="30"
        rows="5"
      ></textarea>
    </div>

    <button type="submit" class="btn btn-primary mr-2">
      {{ update ? "Update" : "Tambah" }}
    </button>
    <button
      v-if="update"
      @click="$emit('clear')"
      type="submit"
      class="btn btn-warning"
    >
      Cancel
    </button>
  </form>
</template>

<script setup>
const props = defineProps({
  todo: {
    type: Object,
  },
  update: {
    type: Boolean,
  },
});
</script>
