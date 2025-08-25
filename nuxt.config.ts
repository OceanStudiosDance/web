import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  builder: "vite",
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

    // Codecov plugin and config go here:
    [
      "@codecov/nuxt-plugin",
      {
        enableBundleAnalysis: !!process.env.CODECOV_TOKEN,
        bundleName: "web",
        uploadToken: process.env.CODECOV_TOKEN,
        // optionally add telemetry: false if you want to disable telemetry
      },
    ],
  ],

  sentry: {
    sourceMapsUploadOptions: {
      org: "ocean-studios",
      project: "javascript-nuxt",
    },
    autoInjectServerSentry: "top-level-import",
  },

  sourcemap: { client: "hidden" },
  turnstile: { siteKey: "0x4AAAAAABuWsLIUcF8VnRUK" },
  runtimeConfig: { turnstile: { secretKey: "" } },
  robots: { blockNonSeoBots: true, blockAiBots: true },
  legacy: { vite: {} },
  googleFonts: { families: { Ubuntu: true } },
});
