<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (page) => {
    const siteTitle = "Sword of Iron";
    return page ? `${page} - ${siteTitle}` : siteTitle;
  },
});
</script>
