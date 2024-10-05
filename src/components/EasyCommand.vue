<template>
  <span class="flex flex-col gap-2">
    <Fieldset :legend="content.title">
      <p class="m-0">
        {{ content.description }}
      </p>

      <br />

    <p class="flex gap-2">
      <p class="font-bold">Uso:</p>
      <p>{{ content.usage }}</p>
    </p>
    </Fieldset>


    <span class="flex flex-col">
      <span class="font-bold">Flags de utilização:</span>
      <span
        v-for="item in content.options"
        :key="item.option"
        class="flex gap-2"
      >
        <span class="font-bold whitespace-nowrap">{{ item.option }}</span>
        <span>{{ item.description }}</span>
      </span>
    </span>
  </span>
</template>

<script setup lang="ts">
import Fieldset from "primevue/fieldset";
import { EasyCommandProps } from "../types";

defineProps<EasyCommandProps>();
</script>
