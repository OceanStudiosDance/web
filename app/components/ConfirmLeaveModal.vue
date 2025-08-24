<template>
  <div v-if="mounted">
    <!-- Overlay fade + scale + shadow -->
    <Transition name="overlay">
      <div
        v-show="modelValue"
        class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm shadow-lg"
        @click.self="close"
      />
    </Transition>

    <!-- Modal springy slide + shadow pop -->
    <Transition name="modal">
      <div
        v-show="modelValue"
        ref="modalRef"
        class="fixed inset-0 z-50 flex items-center justify-center p-6"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl max-w-md w-full text-center p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <h2 class="text-xl font-semibold text-gray-900">
            You’re leaving Ocean Studios
          </h2>
          <p class="mt-3 text-gray-600 text-sm">
            You are about to surf to an Ocean Studios partner site:
            <span class="font-medium text-gray-800">{{ site }}</span
            >.<br />
            Do you want to continue?
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
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  href: { type: String, required: true },
  site: { type: String, required: true },
});

const emit = defineEmits(["update:modelValue"]);

const modalRef = ref(null);
const cancelBtn = ref(null);
const mounted = ref(false);

const close = () => emit("update:modelValue", false);

const handleKey = (e) => {
  if (e.key === "Escape" && props.modelValue) close();
};

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
  mounted.value = true;
  document.addEventListener("keydown", handleKey);
  document.addEventListener("focusin", handleFocus);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKey);
  document.removeEventListener("focusin", handleFocus);
});

watch(
  () => props.modelValue,
  async (val) => {
    if (val) (await nextTick(), cancelBtn.value?.focus());
  }
);
</script>

<style scoped>
/* Overlay fade + scale + subtle shadow */
.overlay-enter-active {
  animation: overlay-in 0.35s ease forwards;
}
.overlay-leave-active {
  animation: overlay-out 0.25s ease forwards;
}
@keyframes overlay-in {
  0% {
    opacity: 0;
    transform: scale(0.95);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}
@keyframes overlay-out {
  0% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.95);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
}

/* Modal springy slide + shadow pop */
.modal-enter-active {
  animation: modal-in 0.55s cubic-bezier(0.22, 1.61, 0.36, 1) forwards;
}
.modal-leave-active {
  animation: modal-out 0.25s ease forwards;
}
@keyframes modal-in {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
}
@keyframes modal-out {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  100% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
