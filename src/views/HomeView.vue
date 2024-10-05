<script setup lang="ts">
import { ref } from "vue";
import EasyContainer from "../components/EasyContainer.vue";

const msg = ref("Hello Vite + Vue 3 Template");
</script>

<template>
  <EasyContainer layout="container">
    <h1>{{ msg }}</h1>
  </EasyContainer>
</template>
