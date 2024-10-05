<template>
  <EasyHeader />
  <EasyContainer
    layout="container"
    class="flex h-screen-header flex-col items-center justify-center gap-8"
  >
    <span class="flex flex-col items-center justify-center gap-2 text-center">
      <h1>Easy Terminal</h1>
      <p>Uma forma fácil e interativa de aprender mais sobre programação!</p>
    </span>

    <span class="flex items-center justify-center gap-2">
      <Button @click="() => handleNavigate('/bash')">
        Bash <VIcon name="si-gnubash" />
      </Button>
    </span>
  </EasyContainer>
</template>

<script setup lang="ts">
import Button from "primevue/button";

import EasyContainer from "../components/EasyContainer.vue";
import { useRouter } from "vue-router";
import EasyHeader from "../components/EasyHeader.vue";

const router = useRouter();

const handleNavigate = (path: string) => {
  router.push(path);
};
</script>
