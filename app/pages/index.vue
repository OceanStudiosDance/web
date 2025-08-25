<template>
  <div class="scroll-container" @scroll="handleScroll" ref="scrollContainer">
    <!-- Hero Section -->
    <section
      class="hero-section relative w-full h-screen bg-gradient-to-b from-cyan-200 via-blue-400 to-blue-900 dark:from-slate-800 dark:via-blue-900 dark:to-slate-900 flex justify-center transition-colors duration-500 overflow-hidden"
      :style="heroStyles"
    >
      <!-- Animated Wave Background -->
      <div class="absolute inset-0 overflow-hidden">
        <svg
          class="absolute bottom-0 w-full h-96"
          viewBox="0 0 1200 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="waveGradient1"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style="stop-color: rgba(59, 130, 246, 0.6); stop-opacity: 1"
              />
              <stop
                offset="100%"
                style="stop-color: rgba(29, 78, 216, 0.8); stop-opacity: 1"
              />
            </linearGradient>
            <linearGradient
              id="waveGradient2"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style="stop-color: rgba(96, 165, 250, 0.4); stop-opacity: 1"
              />
              <stop
                offset="100%"
                style="stop-color: rgba(59, 130, 246, 0.6); stop-opacity: 1"
              />
            </linearGradient>
          </defs>

          <!-- Animated Waves -->
          <path
            class="wave wave-1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1200,224,1248,192,1296,165.3C1344,139,1392,117,1416,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#waveGradient1)"
            :style="{ transform: `translateX(${scrollY * 0.1}px)` }"
          />
          <path
            class="wave wave-2"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,197.3C1200,181,1248,139,1296,133.3C1344,128,1392,160,1416,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#waveGradient2)"
            :style="{ transform: `translateX(${-scrollY * 0.05}px)` }"
          />
        </svg>
      </div>

      <!-- Background Image with Wave Effects -->
      <div
        class="relative w-full h-full flex items-center justify-center bg-cover bg-center overflow-hidden"
        :style="backgroundStyles"
      >
        <NuxtImg
          src="/images/wave-bg.png"
          alt="Ocean Wave Background"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out"
          format="webp"
          quality="80"
          preload
          :style="imageStyles"
        />

        <!-- Dynamic Water Overlay -->
        <div
          class="absolute inset-0 transition-all duration-1000 ease-out"
          :style="overlayStyles"
        ></div>

        <!-- Floating Nautical Elements -->
        <div
          class="absolute inset-0 pointer-events-none"
          :style="floatingStyles"
        >
          <!-- Compass -->
          <div class="nautical-element compass">
            <div class="compass-inner">⚓</div>
          </div>
          <!-- Ship Wheel -->
          <div class="nautical-element ship-wheel">
            <div class="wheel-inner">⚙️</div>
          </div>
          <!-- Anchor -->
          <div class="nautical-element anchor">⚓</div>
          <!-- Bubbles -->
          <div class="bubble bubble-1">○</div>
          <div class="bubble bubble-2">○</div>
          <div class="bubble bubble-3">○</div>
          <div class="bubble bubble-4">○</div>
        </div>

        <!-- Water Splash Effects -->
        <div class="splash-container" :style="splashStyles">
          <div class="splash splash-1">💧</div>
          <div class="splash splash-2">💧</div>
          <div class="splash splash-3">💧</div>
        </div>

        <!-- Content Container -->
        <div
          class="relative z-20 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto transition-all duration-1000 ease-out"
          :style="contentStyles"
        >
          <!-- Main Content -->
          <div
            class="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full max-w-4xl text-center"
          >
            <!-- Heading & Subtext -->
            <div class="space-y-4 sm:space-y-6">
              <h1
                class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-2xl leading-tight transition-all duration-1000 ease-out"
                :style="titleStyles"
              >
                Let's Ride the Waves
              </h1>
              <p
                class="text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-lg transition-all duration-1000 ease-out"
                :style="subtitleStyles"
              >
                Ocean Studios is the best of what Original Roblox ALDC has to
                offer.
              </p>
            </div>

            <!-- Buttons -->
            <div
              class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 ease-out"
              :style="buttonsStyles"
            >
              <button
                @click="openModal"
                class="cursor-pointer flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-blue-600/90 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-2xl border border-white/20 min-w-[180px]"
              >
                Join Today
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 sm:w-6 sm:h-6"
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

              <NuxtLink
                to="/learn-more"
                class="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white/40 bg-white/20 backdrop-blur-md text-white text-base sm:text-lg font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 text-center shadow-lg min-w-[180px]"
              >
                Learn more
              </NuxtLink>
            </div>

            <!-- Avatars & Trusted text -->
            <div
              class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center mt-4 sm:mt-6 transition-all duration-1000 ease-out"
              :style="avatarsStyles"
            >
              <div class="flex -space-x-2 sm:-space-x-3">
                <NuxtImg
                  v-for="n in 5"
                  :key="n"
                  :src="`/images/avatars/avatar${n}.webp`"
                  :alt="`user${n}`"
                  class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-3 border-white/70 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                />
              </div>
              <span
                class="text-white/95 text-sm sm:text-base lg:text-lg font-semibold drop-shadow-lg transition-colors duration-300"
              >
                Trusted by 450+ sailors
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator with Nautical Theme -->
      <div
        class="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-500"
        :style="{ opacity: scrollProgress < 0.1 ? 1 : 0 }"
      >
        <div class="flex flex-col items-center animate-bounce">
          <div class="text-white/80 mb-2 text-sm font-medium">Set Sail</div>
          <div
            class="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center bg-white/10 backdrop-blur-sm"
          >
            <div
              class="w-1 h-4 bg-white/80 rounded-full mt-2 animate-pulse"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Content Sections -->
    <section
      class="relative min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 transition-all duration-1000 ease-out"
      :style="section2Styles"
    >
      <div class="container mx-auto px-4 py-20">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            class="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-8 transition-all duration-1000 ease-out"
            :style="section2TitleStyles"
          >
            Navigate the Depths
          </h2>
          <p
            class="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-12 transition-all duration-1000 ease-out"
            :style="section2TextStyles"
          >
            Chart your course through our maritime classes and discover new
            horizons.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-600/50 transition-all duration-1000 ease-out hover:scale-105 hover:shadow-2xl"
              :style="getFeatureStyles(index)"
            >
              <div class="text-5xl mb-6">{{ feature.icon }}</div>
              <h3 class="text-xl font-bold mb-4 text-slate-800 dark:text-white">
                {{ feature.title }}
              </h3>
              <p class="text-slate-600 dark:text-gray-300 leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Third Section -->
    <section
      class="relative min-h-screen bg-gradient-to-b from-blue-900 via-slate-800 to-slate-900 transition-all duration-1000 ease-out pb-20"
      :style="section3Styles"
    >
      <div
        class="container mx-auto px-4 py-20 flex items-center justify-center min-h-screen"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2
            class="text-4xl md:text-6xl font-bold text-white mb-8 transition-all duration-1000 ease-out drop-shadow-2xl"
            :style="section3TitleStyles"
          >
            Ready to Set Sail?
          </h2>
          <p
            class="text-xl md:text-2xl text-blue-100 mb-12 transition-all duration-1000 ease-out"
            :style="section3TextStyles"
          >
            Join our crew and embark on an epic maritime adventure today.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              @click="openModal"
              class="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl border border-white/20 backdrop-blur-sm"
              :style="section3ButtonStyles"
            >
              🚢 All Aboard!
            </button>
            <button
              @click="scrollToTop"
              class="px-8 py-4 bg-white/20 hover:bg-white/30 text-white text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-md border border-white/30 shadow-lg"
              :style="section3ButtonStyles"
            >
              ⬆️ Back to Surface
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Fixed Modal -->
    <ConfirmLeaveModal
      v-model="showModal"
      href="https://discord.gg/ku8EBkTKAv"
      site="Discord.com"
    />

    <!-- Fixed Footer -->
    <footer
      class="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 shadow-2xl"
    >
      <div class="container mx-auto px-4 py-3">
        <div
          class="flex flex-col sm:flex-row items-center justify-between text-center"
        >
          <div class="text-slate-300 text-sm font-medium mb-2 sm:mb-0">
            🌊 We're Building Something Amazing
          </div>
          <div class="text-slate-500 text-xs">
            <a href="/docs/legal/privacypolicy" class="mr-2">Privacy Policy</a>
            |
            <a href="/docs/legal/termsofservice" class="mr-2"
              >Terms of Service</a
            >
          </div>
          <div class="text-slate-300 text-xs">Stay tuned for updates! ⚓</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import ConfirmLeaveModal from "../components/ConfirmLeaveModal.vue";

useHead({
  htmlAttrs: {
    class: "h-full",
  },
  bodyAttrs: {
    class: "h-full bg-slate-900 transition-colors duration-300",
  },
});

const showModal = ref(false);
const scrollContainer = ref(null);
const scrollY = ref(0);
const windowHeight = ref(0);

const features = [
  {
    icon: "🌊",
    title: "Tidal Sets",
    description:
      "Our instructors are seasoned sailors, ready to guide you through every wave. Their building expertise ensures your total immersion in classes.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Our cutting-edge systems ensure your rank-ups and class info are posted immediately, keeping you ahead of the tide.",
  },
  {
    icon: "🧭",
    title: "Navigate Freely",
    description:
      "We host a wide variety of classes, from beginner to advanced among many styles, so you can chart your own course.",
  },
];

const openModal = () => {
  showModal.value = true;
};

const scrollToTop = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

const handleScroll = (event) => {
  scrollY.value = event.target.scrollTop;
};

const scrollProgress = computed(() => {
  if (!windowHeight.value) return 0;
  return Math.min(scrollY.value / (windowHeight.value * 1.5), 1);
});

// Enhanced nautical-themed animations
const heroStyles = computed(() => ({
  transform: `translateY(${scrollY.value * 0.5}px)`,
}));

const backgroundStyles = computed(() => ({
  transform: `scale(${1 + scrollProgress.value * 0.15}) rotate(${scrollProgress.value * 2}deg)`,
}));

const imageStyles = computed(() => ({
  transform: `translateY(${scrollY.value * 0.3}px) scale(${1 + scrollProgress.value * 0.1})`,
  filter: `blur(${scrollProgress.value * 2}px) brightness(${1 - scrollProgress.value * 0.4}) hue-rotate(${scrollProgress.value * 30}deg)`,
}));

const overlayStyles = computed(() => ({
  background: `linear-gradient(135deg, 
    rgba(59, 130, 246, ${0.3 + scrollProgress.value * 0.4}) 0%, 
    rgba(29, 78, 216, ${0.5 + scrollProgress.value * 0.3}) 50%,
    rgba(30, 41, 59, ${0.7 + scrollProgress.value * 0.3}) 100%)`,
}));

const floatingStyles = computed(() => ({
  transform: `translateY(${scrollY.value * 0.2}px) rotate(${scrollY.value * 0.05}deg)`,
  opacity: Math.max(0.3, 1 - scrollProgress.value * 0.7),
}));

const splashStyles = computed(() => ({
  transform: `translateY(${scrollY.value * 0.4}px) scale(${1 + Math.sin(scrollY.value * 0.01) * 0.1})`,
  opacity: Math.max(0.2, 1 - scrollProgress.value * 0.8),
}));

const contentStyles = computed(() => ({
  transform: `translateY(${scrollY.value * 0.4}px)`,
  opacity: Math.max(1 - scrollProgress.value * 1.5, 0),
}));

const titleStyles = computed(() => ({
  transform: `translateY(${scrollY.value * 0.6}px) scale(${1 - scrollProgress.value * 0.1})`,
  opacity: Math.max(1 - scrollProgress.value * 1.2, 0),
}));

const subtitleStyles = computed(() => ({
  transform: `translateY(${scrollY.value * 0.7}px)`,
  opacity: Math.max(1 - scrollProgress.value * 1.3, 0),
}));

const buttonsStyles = computed(() => ({
  transform: `translateY(${scrollY.value * 0.8}px)`,
  opacity: Math.max(1 - scrollProgress.value * 1.4, 0),
}));

const avatarsStyles = computed(() => ({
  transform: `translateY(${scrollY.value * 0.9}px)`,
  opacity: Math.max(1 - scrollProgress.value * 1.5, 0),
}));

// Section animations
const section2Progress = computed(() => {
  const start = windowHeight.value * 0.5;
  const end = windowHeight.value * 1.5;
  return Math.max(0, Math.min(1, (scrollY.value - start) / (end - start)));
});

const section2Styles = computed(() => ({
  transform: `translateY(${Math.max(0, (scrollY.value - windowHeight.value) * 0.3)}px)`,
}));

const section2TitleStyles = computed(() => ({
  transform: `translateY(${Math.max(0, 50 - section2Progress.value * 50)}px)`,
  opacity: section2Progress.value,
}));

const section2TextStyles = computed(() => ({
  transform: `translateY(${Math.max(0, 30 - section2Progress.value * 30)}px)`,
  opacity: Math.max(0, section2Progress.value - 0.2),
}));

const getFeatureStyles = (index) => {
  const delay = index * 0.1;
  const progress = Math.max(0, section2Progress.value - delay);
  return {
    transform: `translateY(${Math.max(0, 40 - progress * 40)}px) scale(${0.9 + progress * 0.1})`,
    opacity: progress,
  };
};

// Section 3 animations
const section3Progress = computed(() => {
  const start = windowHeight.value * 1.2;
  const end = windowHeight.value * 2.2;
  return Math.max(0, Math.min(1, (scrollY.value - start) / (end - start)));
});

const section3Styles = computed(() => ({
  transform: `translateY(${Math.max(0, (scrollY.value - windowHeight.value * 1.5) * 0.2)}px)`,
}));

const section3TitleStyles = computed(() => ({
  transform: `translateY(${Math.max(0, 50 - section3Progress.value * 50)}px) scale(${0.9 + section3Progress.value * 0.1})`,
  opacity: section3Progress.value,
}));

const section3TextStyles = computed(() => ({
  transform: `translateY(${Math.max(0, 30 - section3Progress.value * 30)}px)`,
  opacity: Math.max(0, section3Progress.value - 0.2),
}));

const section3ButtonStyles = computed(() => ({
  transform: `translateY(${Math.max(0, 20 - section3Progress.value * 20)}px) scale(${0.95 + section3Progress.value * 0.05})`,
  opacity: Math.max(0, section3Progress.value - 0.1),
}));

onMounted(() => {
  windowHeight.value = window.innerHeight;

  const handleResize = () => {
    windowHeight.value = window.innerHeight;
  };

  window.addEventListener("resize", handleResize);

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
});
</script>

<style scoped>
.scroll-container {
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-bottom: 60px; /* Space for fixed footer */
}

.scroll-container::-webkit-scrollbar {
  width: 8px;
}

.scroll-container::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.3);
}

.scroll-container::-webkit-scrollbar-thumb {
  background: linear-gradient(
    to bottom,
    rgba(59, 130, 246, 0.6),
    rgba(29, 78, 216, 0.8)
  );
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    to bottom,
    rgba(59, 130, 246, 0.8),
    rgba(29, 78, 216, 1)
  );
}

/* Wave Animation */
.wave {
  animation: wave-flow 8s ease-in-out infinite;
}

.wave-2 {
  animation-delay: -2s;
  animation-duration: 10s;
}

@keyframes wave-flow {
  0%,
  100% {
    d: path(
      "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1200,224,1248,192,1296,165.3C1344,139,1392,117,1416,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    );
  }
  50% {
    d: path(
      "M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,245.3C672,224,768,160,864,160C960,160,1056,224,1152,240C1200,256,1248,224,1296,197.3C1344,171,1392,149,1416,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    );
  }
}

/* Nautical Elements */
.nautical-element {
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.3);
  pointer-events: none;
}

.compass {
  top: 15%;
  right: 10%;
  animation: compass-spin 20s linear infinite;
}

.ship-wheel {
  top: 70%;
  left: 8%;
  animation: wheel-rotate 15s linear infinite;
}

.anchor {
  top: 40%;
  right: 15%;
  animation: anchor-sway 6s ease-in-out infinite;
}

.bubble {
  position: absolute;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.5rem;
  animation: bubble-rise 8s linear infinite;
}

.bubble-1 {
  top: 80%;
  left: 20%;
  animation-delay: 0s;
}
.bubble-2 {
  top: 85%;
  left: 60%;
  animation-delay: 2s;
}
.bubble-3 {
  top: 75%;
  left: 80%;
  animation-delay: 4s;
}
.bubble-4 {
  top: 90%;
  left: 40%;
  animation-delay: 6s;
}

.splash-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.splash {
  position: absolute;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  animation: splash-effect 4s ease-in-out infinite;
}

.splash-1 {
  top: 30%;
  left: 25%;
  animation-delay: 0s;
}
.splash-2 {
  top: 50%;
  right: 30%;
  animation-delay: 1.5s;
}
.splash-3 {
  top: 70%;
  left: 70%;
  animation-delay: 3s;
}

@keyframes compass-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes wheel-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes anchor-sway {
  0%,
  100% {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(10px) rotate(5deg);
  }
}

@keyframes bubble-rise {
  0% {
    transform: translateY(0px) scale(0.5);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
}

@keyframes splash-effect {
  0%,
  100% {
    transform: scale(0.8) translateY(0px);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) translateY(-10px);
    opacity: 0.7;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nautical-element {
    font-size: 1.5rem;
  }

  .splash {
    font-size: 1rem;
  }
}
</style>
