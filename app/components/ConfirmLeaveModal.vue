<template>
  <Transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      @click.self="close"
    >
      <Transition name="slide-up">
        <div
          v-if="modelValue"
          ref="modalRef"
          class="bg-white rounded-2xl shadow-xl p-6 max-w-md w-[90%] text-center"
          role="dialog"
          aria-modal="true"
        >
          <h2 class="text-xl font-semibold text-gray-900">
            You’re leaving Ocean Studios
          </h2>
          <p class="mt-3 text-gray-600 text-sm">
            You are about to surf to an Ocean Studios partner site:
            <span class="font-medium text-gray-800">{{ site }}</span
            >. <br />Do you want to continue?
          </p>

          <div class="mt-6 flex gap-4 justify-center">
            <button
              ref="cancelBtn"
              @click="close"
              class="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <a
              :href="href"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2 rounded-lg bg-sky-900 text-white font-medium hover:bg-sky-800 transition"
              @click="close"
            >
              Continue
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  href: { type: String, required: true },
  site: { type: String, required: true },
});

const emit = defineEmits(["update:modelValue"]);

const modalRef = ref(null);
const cancelBtn = ref(null);

const close = () => emit("update:modelValue", false);

const handleKey = (e) => {
  if (e.key === "Escape" && props.modelValue) {
    close();
  }
};

// Trap focus inside modal
const handleFocus = (e) => {
  if (
    props.modelValue &&
    modalRef.value &&
    !modalRef.value.contains(e.target)
  ) {
    e.stopPropagation();
    cancelBtn.value?.focus();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKey);
  document.addEventListener("focusin", handleFocus);
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKey);
  document.removeEventListener("focusin", handleFocus);
});

// Autofocus cancel on open
watch(
  () => props.modelValue,
  async (val) => {
    if (val) {
      await nextTick();
      cancelBtn.value?.focus();
    }
  }
);
</script>

<style scoped>
/* Fade bg */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide-up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
