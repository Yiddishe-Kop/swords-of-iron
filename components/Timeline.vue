<template>
  <section class="bg-brand-50">
    <main class="text-center max-w-lg mx-auto">
      <div v-if="pending" class="flex py-32 justify-center">
        <Loader />
      </div>
      <ul v-if="!pending && data.files" class="flex flex-col">
        <li v-for="file in data.files" :key="file.id">
          <img :src="file.thumbnailLink" :alt="file.name" class="w-full" />
        </li>
      </ul>
    </main>
  </section>
</template>

<script setup>
const lang = useRoute().params.lang || "english";

const { pending, data } = await useLazyAsyncData("files", () =>
  $fetch(`/api/files/${lang}`)
);
</script>
