<template>
  <!--Mobile menu-->
  <header
    v-if="menuStore.menuIsOpen"
    class="fixed z-10 flex h-screen w-screen flex-col gap-4 bg-brand-blue-950 md:hidden"
  >
    <span class="window-width mx-auto flex items-center justify-between py-3">
      <span class="flex items-center justify-center gap-2">
        <VIcon name="si-gnubash" class="h-7 w-7" />
        <h5>Easy Terminal</h5>
      </span>

      <VIcon
        name="io-close-sharp"
        class="flex h-7 w-7 cursor-pointer md:!hidden"
        @click="menuStore.toggleMenu"
      />
    </span>

    <ul class="window-width mx-auto flex flex-col gap-2">
      <li
        class="w-full cursor-pointer py-2 hover:text-brand-blue-200"
        @click="handleNavigation('/bash')"
      >
        Bash
      </li>
    </ul>

    <Divider />
    <EasyTree v-if="route.params.id" />
  </header>

  <!--Desktop menu-->
  <header
    class="window-width mx-auto flex items-center justify-between gap-2 py-3"
  >
    <span class="flex items-center justify-center gap-2">
      <VIcon name="si-gnubash" class="h-7 w-7" />
      <h5>Easy Terminal</h5>
    </span>

    <VIcon
      name="px-menu"
      class="flex h-7 w-7 cursor-pointer md:!hidden"
      @click="menuStore.toggleMenu"
    />

    <ul class="hidden items-center justify-center gap-2 md:flex">
      <li
        class="w-full cursor-pointer px-5 py-2 hover:text-brand-blue-200"
        @click="router.push('/bash')"
      >
        Bash
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import EasyTree from "./EasyTree.vue";
import { useMenuStore } from "../store/useMenuStore";
import Divider from "primevue/divider";

const route = useRoute();
const router = useRouter();

const menuStore = useMenuStore();

const handleNavigation = (path: string) => {
  router.push(path);
  menuStore.toggleMenu();
};
</script>
