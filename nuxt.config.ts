// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  modules: [
    "@sentry/nuxt/module",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxtjs/turnstile",
    "@nuxtjs/robots",
    "@teages/nuxt-legacy",
    "nuxt-auth-utils",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
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

  turnstile: {
    siteKey: "0x4AAAAAABuWsLIUcF8VnRUK",
  },
  runtimeConfig: {
    turnstile: {
      secretKey: "",
    },
  },
  robots: {
    blockNonSeoBots: true,
    blockAiBots: true,
  },
  legacy: {
    vite: {},
  },
  googleFonts: {
    families: {
      Ubuntu: true, // Load Ubuntu font from Google Fonts
    },
  },
});
