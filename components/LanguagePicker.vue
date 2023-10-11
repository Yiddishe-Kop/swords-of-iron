<template>
  <nav class="flex justify-center py-1 overflow-auto space-x-3">
    <nuxt-link
      v-for="language in languages"
      :key="language"
      :to="`/${language}`"
      :class="{
        'grayscale hover:grayscale-0': lang !== language,
        'ring-4': lang === language,
      }"
      class="text-slate-400 shrink-0 rounded-full transition-all block w-10 h-10 hover:text-slate-200 text-sm transition-colors"
    >
      <img :src="`img/lang/${language}.svg`" :alt="language" />
    </nuxt-link>
  </nav>
</template>

<script setup lang="ts">
const lang = useRoute().params.lang || "english";

const languages: Record<string, string> = {
  english: "english",
  hebrew: "hebrew",
  swedish: "swedish",
  russian: "russian",
  french: "french",
  arabic: "arabic",
  spanish: "spanish",
  chinese: "chinese",
  japanese: "japanese",
  greek: "greek",
  turkish: "turkish",
  dutch: "dutch",
  german: "german",
  portuguese: "portuguese",
};
</script>
