// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: { plugins: [tailwindcss()] },
  css: ["~/assets/css/main.css"],

  modules: [
    "@sentry/nuxt/module",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "shadcn-nuxt",
    "@nuxtjs/turnstile",
    "@nuxtjs/robots",
    "@teages/nuxt-legacy",
  ],

  sentry: {
    sourceMapsUploadOptions: {
      org: "ocean-studios",
      project: "javascript-nuxt",
    },

    autoInjectServerSentry: "top-level-import",
  },

  sourcemap: {
    client: "hidden",
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  turnstile: {
    siteKey: "0x4AAAAAABuWsLIUcF8VnRUK",
  },
  runtimeConfig: {
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: "${NUXT_TURNSTILE_SECRET_KEY}",
    },
  },
  robots: {
    blockNonSeoBots: true,
    blockAiBots: true,
  },
  legacy: {
    vite: {},
  },
});
