/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({}),

    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/components", "src/stores", "src/views"],
      vueTemplate: true,
    }),

    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ["src/components", "src/stores", "src/views"],
      dts: "src/components.d.ts",
    }),
  ],
  test: {
    globals: true,
    include: ["src/**/*.test.ts"],
    exclude: [
      "src/utils/stringVariablesForHTML.ts",
      "src/mocks/localStorageMock.ts",
    ],
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse", "vue-demi"],
    },
  },
});
