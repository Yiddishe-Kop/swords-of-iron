<template>
  <header
    id="top"
    class="sticky flex md:flex-row flex-col items-start md:items-center border-b border-white/20 top-0 bg-white/50 backdrop-blur-xl z-40"
  >
    <div class="ps-2 md:ps-6 flex shrink-0 items-center">
      <nuxt-link to="/" class="shrink-0">
        <Logo class="w-14 sm:w-16" theme="dark" full />
      </nuxt-link>
      <div class="mx-4">
        <h2 class="text-brand text-sm/none font-bold uppercase">
          Israel Explains
        </h2>
        <h1
          class="text-brand-900 uppercase font-black whitespace-nowrap text-2xl/none"
        >
          Swords Of Iron
        </h1>
        <p class="font-bold uppercase text-brand text-[0.67rem]/none">
          Share the truth <span class="font-thin">&</span> show the world!
        </p>
      </div>
    </div>
    <LanguagePicker />
    <!-- <AppButton icon="share" @click="share">Share</AppButton> -->
  </header>
</template>

<script setup>
const share = async () => {
  const blob = await (await fetch("/img/social.png")).blob();
  const filesArray = [
    new File([blob], "Swords Of Iron", {
      type: blob.type,
      lastModified: new Date().getTime(),
    }),
  ];

  const shareData = {
    title: "Israel Explains Swords Of Iron",
    text: "Share the truth & show the world!",
    url: window.location.href,
    files: filesArray,
  };

  if (navigator.canShare?.(shareData)) {
    navigator.share(shareData);
  } else {
    navigator.clipboard.writeText(shareData.url);
  }
};
</script>

<style scoped>
.slideIn-enter-active,
.slideIn-leave-active {
  transition: all 0.3s ease;
}

.slideIn-enter-from,
.slideIn-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
