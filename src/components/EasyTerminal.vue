<template>
  <Terminal
    :welcomeMessage="terminalProps.welcomeMessage"
    :prompt="terminalProps.prompt"
    :ariaLabel="terminalProps.ariaLabel"
  />
</template>

<script setup lang="ts">
import Terminal from "primevue/terminal";
import TerminalService from "primevue/terminalservice";

import { computed, onBeforeUnmount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { CommandData } from "../lib/command";

onMounted(() => {
  TerminalService.on("command", commandHandler);
});

onBeforeUnmount(() => {
  TerminalService.off("command", commandHandler);
});

const route = useRoute();
const router = useRouter();

const terminalProps = computed(() => {
  return {
    welcomeMessage: `Bem-vindo ao Easy Terminal! Digite um comando para começar.`,
    prompt: route.params.id + " $",
    ariaLabel: "Terminal Service",
  };
});

const commandHandler = (text: string) => {
  let argsIndex = text.indexOf(" ");
  let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

  const commandData = new CommandData();
  const id = route.params.id as string;
  const currentCommand = commandData.getCommand(id, command);

  TerminalService.emit("response", currentCommand.description);

  if (currentCommand.title) {
    router.push(`#${command}`);
  }
};
</script>
