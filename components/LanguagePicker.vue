<template>
  <section class="pt-4 bg-white">
    <p class="text-slate-800 text-center uppercase text-sm max-w-sm mx-auto">
      Choose a language to show content:
    </p>
    <nav class="flex p-3 overflow-auto space-x-0.5">
      <nuxt-link
        v-for="language in languages"
        :key="language"
        :to="`/${language}`"
        :class="{
          'hover:bg-brand-50': lang !== language,
          'bg-brand-100': lang === language,
        }"
        class="flex flex-col items-center rounded-xl pt-3 p-2 shrink-0 transition-all text-sm"
      >
        <img
          :src="`img/lang/${language}.svg`"
          :alt="language"
          :class="{
            'ring-4': lang === language,
          }"
          class="w-10 ring-brand-300 transition-all ring-offset-2 ring-offset-brand rounded-full h-10"
        />
        <span class="mt-2 uppercase text-xs">{{ language }}</span>
      </nuxt-link>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { useLanguages } from "~/stores/langs";

const lang = useRoute().params.lang || "english";

const langs = useLanguages();
const { languages } = storeToRefs(langs);
</script>
