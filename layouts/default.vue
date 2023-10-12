<template>
  <div class="bg-slate-100 dark flex flex-col min-h-screen text-slate-900">
    <TheHeader />
    <div class="flex-1">
      <slot />
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>

<script setup>
useHead({
  title: "Swords Of Iron",
  meta: [
    {
      name: "theme-color",
      content: "#0052B4",
    },
    {
      property: "og:image",
      content: "/img/social.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
});
</script>
