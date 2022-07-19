import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/laman-portal2/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    "process.env": {
      VUE_APP_ENV: "local",
      VUE_APP_BACKEND_URL: "http://cmsbackend.test/api",
      VUE_APP_ASSET_URL: "http://cmsbackend.test",
    },
  },
});
