import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore("menu", () => {
  const menuIsOpen = ref(false);

  const toggleMenu = () => {
    menuIsOpen.value = !menuIsOpen.value;
  }

  return {
    menuIsOpen,
    toggleMenu,
  }
})
