<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useHead } from "#imports";
import MarkdownIt from "markdown-it";

const route = useRoute();
const router = useRouter();
const content = ref<string>("");
const pageTitle = ref("Docs");
const loading = ref<boolean>(true);

// Check if browser history allows going back
const canGoBack = ref(false);

const loadMarkdown = async () => {
  loading.value = true;
  content.value = ""; // reset to avoid duplicates

  try {
    const slugParts = route.params.slug as string[] | undefined;
    let slugPath =
      slugParts && slugParts.length > 0 ? slugParts.join("/") : "index";

    if (!slugPath || slugPath.endsWith("/")) slugPath += "/index";

    const filePath = `/docs/${slugPath}.md`;
    const res = await fetch(filePath);

    if (!res.ok) {
      content.value = `# 404\nFile \`${filePath}\` not found.`;
      pageTitle.value = "404 – Not Found";
      useHead({ title: pageTitle.value });
      return;
    }

    const text = await res.text();
    const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
    content.value = md.render(text);

    const match = text.match(/^#\s+(.+)/m);
    pageTitle.value = match ? match[1] : "Docs";
    useHead({ title: pageTitle.value });
  } catch (err) {
    content.value = `# Error\n${err}`;
    pageTitle.value = "Error";
    useHead({ title: pageTitle.value });
  } finally {
    loading.value = false;
    window.scrollTo(0, 0);

    // Only show back button if history exists
    canGoBack.value = window.history.length > 1 && route.fullPath !== "/docs";
  }
};

onMounted(loadMarkdown);

watch(
  () => route.fullPath,
  () => loadMarkdown()
);
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-ubuntu"
  >
    <div class="max-w-4xl mx-auto py-12 px-6">
      <!-- Conditional Back button -->
      <button
        v-if="canGoBack"
        @click="router.back()"
        class="mb-6 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg shadow-sm transition"
      >
        ← Back
      </button>

      <!-- Loading state -->
      <div
        v-if="loading"
        class="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400 text-lg font-medium"
      >
        Loading...
      </div>

      <!-- Markdown content -->
      <div v-else class="prose prose-lg dark:prose-invert max-w-none">
        <div v-html="content" />
      </div>
    </div>
  </div>
</template>

<style>
.font-ubuntu {
  font-family: "Ubuntu", sans-serif;
}
</style>
