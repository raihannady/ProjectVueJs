<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Content</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in datas" :key="data.id">
        <td>{{ data.title }}</td>
        <td>{{ data.content }}</td>
        <td>
          <button
            type="button"
            class="btn btn-dark mr-2"
            @click.prevent="$emit('update', data)"
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click.prevent="$emit('delete', data.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(["datas"]);
</script>
