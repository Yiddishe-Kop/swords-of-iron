<template>
  <section class="bg-brand-50">
    <Container class="text-center">
      {{ lang }}
      {{ data }}
    </Container>
  </section>
</template>

<script setup>
const lang = useRoute().params.lang || "english";

const { data } = await useFetch("/api/files");
</script>
