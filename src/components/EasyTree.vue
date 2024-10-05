<template>
  <Tree
    :filter="true"
    filter-placeholder="Busque um comando"
    :value="nodes"
    class="w-full !bg-brand-blue-950 md:w-[300px]"
  >
    <template #default="slotProps">
      <b>{{ slotProps.node.label }}</b>
    </template>
    <template #url="slotProps">
      <span
        @click="handleNavigation(slotProps.node.data)"
        class="cursor-pointer hover:text-brand-blue-200"
      >
        {{ slotProps.node.label }}
      </span>
    </template>
  </Tree>
</template>

<script setup lang="ts">
import Tree from "primevue/tree";
import { TreeNode } from "primevue/treenode";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { TreeNodesData } from "../lib/tree";
import { useMenuStore } from "../store/useMenuStore";

const nodes = ref<TreeNode[]>([]);
const route = useRoute();
const router = useRouter();

const menuStore = useMenuStore();

onMounted(() => {
  const id = route.params.id;

  if (typeof id === "string") {
    const treeNodesData = new TreeNodesData();
    nodes.value = treeNodesData.getTreeNodes(id);
  }
});

const handleNavigation = (path: string) => {
  router.push(path);
  menuStore.toggleMenu();
};
</script>
