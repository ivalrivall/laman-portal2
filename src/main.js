import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import BootstrapVue3 from "bootstrap-vue-3";
import Notifications from "@kyvg/vue3-notification";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/css/main.css";

import customAxios from "./utils/http.helper.js";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(BootstrapVue3);
app.use(Notifications);
app.config.globalProperties.$axios = customAxios;
app.mount("#app");
