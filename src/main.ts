import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import i18n from "./i18n";

import "@/styles/index.scss";
import "@/icons";

createApp(App)
  .use(i18n)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");
