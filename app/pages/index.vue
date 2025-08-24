<template>
  <section
    class="relative w-full bg-white dark:bg-gray-900 flex justify-center"
  >
    <div
      class="relative w-full max-w-[1440px] h-[600px] md:h-[810px] flex items-center justify-center bg-cover bg-center rounded-2xl overflow-hidden"
    >
      <!-- Background -->
      <NuxtImg
        src="/images/wave-bg.png"
        alt="Ocean Wave Background"
        class="absolute inset-0 w-full h-full object-cover"
        format="webp"
        quality="80"
        preload
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-[#324970]/70 dark:bg-black/60 rounded-2xl"
      ></div>

      <!-- Theme Toggle -->
      <div class="absolute top-5 right-5 z-20">
        <ThemeToggle />
      </div>

      <!-- Content -->
      <div
        class="relative z-10 flex flex-col gap-8 px-6 sm:px-10 lg:px-16 w-full max-w-2xl text-center md:text-left"
      >
        <!-- Heading & Subtext -->
        <div>
          <h1
            class="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white leading-tight"
          >
            Let's Ride the Waves
          </h1>
          <p class="mt-4 text-white text-sm sm:text-base">
            Ocean Studios is the best of what Original Roblox ALDC has to offer.
          </p>
        </div>

        <!-- Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <button
            @click="openModal"
            class="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-sky-900/70 text-white text-base font-medium hover:bg-sky-900 transition"
          >
            Join Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>

          <ConfirmLeaveModal
            v-model="showModal"
            href="https://discord.gg/ku8EBkTKAv"
            site="Discord.com"
          />

          <NuxtLink
            to="/learn-more"
            class="px-5 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center"
          >
            Learn more
          </NuxtLink>
        </div>

        <!-- Avatars & Trusted text -->
        <div
          class="flex flex-col sm:flex-row items-center gap-3 mt-4 justify-center md:justify-start"
        >
          <div class="flex -space-x-2">
            <NuxtImg
              v-for="n in 5"
              :key="n"
              :src="`/images/avatars/avatar${n}.webp`"
              :alt="`user${n}`"
              class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900"
            />
          </div>
          <span class="text-white text-sm mt-2 sm:mt-0"
            >Trusted by 450+ users</span
          >
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="absolute bottom-6 w-full flex flex-col items-center text-center font-ubuntu text-gray-700 dark:text-gray-200"
    >
      <h1 class="text-lg text-white sm:text-xl font-medium">
        We're Building Something Amazing.
      </h1>
      <sub class="text-sm text-white">Stay tuned for updates!</sub>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ThemeToggle from "~/components/ThemeToggle.vue";
import ConfirmLeaveModal from "~/components/ConfirmLeaveModal.vue";
const showModal = ref(false);
const openModal = () => {
  showModal.value = true;
};
</script>
