import { createApp } from "vue";
import "./styles/globals.scss";
import "./styles/typography.scss";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { SiGnubash, PxMenu, IoCloseSharp } from "oh-vue-icons/icons";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import router from "./router";

addIcons(SiGnubash, PxMenu, IoCloseSharp);

const app = createApp(App);
const pinia = createPinia();

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("VIcon", OhVueIcon);
app.use(pinia);
app.use(router);
app.mount("#app");
