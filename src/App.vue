<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import { onMounted } from 'vue'

const themes = ['red', 'dark', 'green', '']

const setTheme = (theme: string) => {
  const html = document.documentElement;
  if (theme) {
    html.setAttribute('data-theme', theme);
  } else {
    html.removeAttribute('data-theme');
  }
  localStorage.setItem('theme', theme || '');
}

const toggleTheme = (): void => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || '';
  const idx = themes.indexOf(current);
  const next = themes[(idx + 1) % themes.length];
  setTheme(next);
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || '';
  setTheme(savedTheme);
})

</script>

<template>
  <div class="relative min-h-screen bg-primary text-primary">
    <!-- Header -->
    <button
      class="cursor-pointer rounded border border-accent bg-brand px-5 py-3 font-medium text-inverse shadow-sm hover:bg-brand-2"
      @click="toggleTheme"
    >
      toggleTheme
    </button>

    <Banner class=""/>


    <div class="absolute top-20 right-20 w-24 h-24 rounded-full border-8 border-accent border-solid flex items-center justify-center">
      <div class="w-12 h-12 bg-secondary rounded-full"></div>
    </div>

  </div>
</template>

