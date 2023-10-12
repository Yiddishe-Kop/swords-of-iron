<template>
  <Head>
    <Title>Home</Title>
  </Head>

  <!-- <Hero /> -->
  <Timeline />
</template>

<script setup lang="ts">
import { useLanguages } from "~/stores/langs";

const langs = useLanguages();

onBeforeRouteUpdate((to, from) => {
  langs.currentLanguage = to.params.lang || "english";
});
</script>
