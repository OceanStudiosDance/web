<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap",
    },
  ],
  script: [
    {
      children: `
        if (
          localStorage.theme === 'dark' ||
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      `,
    },
  ],
});
</script>

<template>
  <head>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </head>

  <NuxtPage />
</template>
