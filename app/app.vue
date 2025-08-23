<template>
  <NuxtTurnstile ref="turnstile" />
  <button @click="turnstile.reset()">Reset token in template</button>
  <button @click="reset()">Reset token from handler</button>
</template>

<script setup>
// you can call this template ref anything
const turnstile = ref();

function reset() {
  turnstile.value?.reset();
}
</script>
