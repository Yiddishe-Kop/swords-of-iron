<template>
  <header
    id="top"
    class="sticky border-b border-white/20 top-0 bg-white/20 backdrop-blur-xl z-40"
  >
    <Container max-width="max-w-screen-2xl" padding="py-1">
      <div class="flex items-center">
        <nuxt-link to="/">
          <Logo class="h-12 md:h-16" theme="dark" full />
        </nuxt-link>
        <div class="flex-1 text-brand-900 font-black mx-4 text-xl md:text-2xl">
          Swords Of Iron
        </div>
        <AppButton icon="share" @click="share">Share</AppButton>
        <!-- <div class="flex-1 text-brand">ISRAEL EXPLAINS SWORDS OF IRON</div> -->
      </div>
    </Container>
  </header>
</template>

<script setup>
const share = async () => {
  // // CORS error
  // const blob = await (await fetch(props.file.webContentLink)).blob();
  // const filesArray = [
  //   new File([blob], props.file.name, {
  //     type: blob.type,
  //     lastModified: new Date().getTime(),
  //   }),
  // ];
  // console.log({ filesArray });

  const shareData = {
    title: "Israel Explains Swords Of Iron",
    text: "Share the truth & show the world!",
    url: window.location.href,
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
