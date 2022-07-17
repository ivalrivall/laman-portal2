import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/main.css";

import http from "./utils/http.helper";

const app = createApp(App);

app.use(router);
app.use(store);
app.config.globalProperties.$axios = http;
app.mount("#app");
