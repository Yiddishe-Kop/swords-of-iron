<template>
  <section>
    <nav class="flex p-3 overflow-auto space-x-0.5">
      <nuxt-link
        v-for="language in languages"
        v-tippy="language"
        :key="language"
        :to="`/${language}`"
        :class="{
          'hover:bg-brand-50': langs.currentLanguage !== language,
          'bg-brand-100': langs.currentLanguage === language,
        }"
        class="rounded-xl p-1 shrink-0 transition-all"
      >
        <img
          :src="`img/lang/${language}.svg`"
          :alt="language"
          :class="{
            'ring-4': langs.currentLanguage === language,
          }"
          class="w-8 ring-brand-300 transition-all ring-offset-2 ring-offset-brand rounded-full h-8"
        />
      </nuxt-link>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { useLanguages } from "~/stores/langs";

const langs = useLanguages();
const { languages } = storeToRefs(langs);
</script>
