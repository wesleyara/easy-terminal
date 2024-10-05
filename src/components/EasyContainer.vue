<template>
  <div :class="mergedClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

import { ContainerProps } from "../types";
import { useTwMerge } from "../composable/useTwMerge";

const props = defineProps<ContainerProps>();

const containerClass = computed(() => {
  const classList = {
    default: "",
    container: "w-11/12 md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto",
    full: "w-full",
  };

  return classList[props.layout];
});

const mergedClass = useTwMerge(containerClass.value, props.class);
</script>
