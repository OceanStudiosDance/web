import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue", // If app.vue is your entry point
    "./app/**/*.vue", // To catch all app-related Vue files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans], // Adding Ubuntu to the default sans stack
      },
    },
  },
  plugins: [],
};
