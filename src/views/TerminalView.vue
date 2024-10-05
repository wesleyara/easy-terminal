<template>
  <EasyHeader />
  <EasyContainer layout="container" class="flex gap-8 mt-10">
    <aside class="hidden md:flex">
      <EasyTree />
    </aside>
    <main class="flex-one flex flex-col gap-5">
      <EasyTerminal />

      <EasyCommand v-if="content" :content="content" />
    </main>
  </EasyContainer>
</template>

<script setup lang="ts">
import EasyContainer from "../components/EasyContainer.vue";
import EasyHeader from "../components/EasyHeader.vue";
import EasyTree from "../components/EasyTree.vue";
import EasyTerminal from "../components/EasyTerminal.vue";
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { CommandData } from "../lib/command";
import EasyCommand from "../components/EasyCommand.vue";

const route = useRoute();

const content = computed(() => {
  const commandData = new CommandData();
  const id = route.params.id as string;

  const command = route.hash.replace("#", "");
  if (!command) return null;

  const currentCommand = commandData.getCommand(id, command);

  return currentCommand;
});

onMounted(() => {
  console.log(route);
});
</script>
