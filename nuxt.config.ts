// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import Material from "@primevue/themes/material";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Material,
        options: {
          // prefix: 'p',
          // cssLayer: false,
          darkModeSelector: "",
        },
      },
    },
  },
});
