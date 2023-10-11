<template>
  <header id="top" class="sticky top-0 bg-white backdrop-blur-md z-40">
    <Container max-width="max-w-screen-2xl" class="py-3">
      <div class="flex items-center">
        <nuxt-link to="/">
          <Logo class="h-12 md:h-16" theme="dark" full />
        </nuxt-link>
        <div class="flex-1 text-brand font-black mx-4 text-xl">
          Swords Of Iron
        </div>
        <!-- <div class="flex-1 text-brand">ISRAEL EXPLAINS SWORDS OF IRON</div> -->

        <AppButton
          :icon="mobileMenuOpen ? 'x' : 'menu'"
          color="secondary"
          class="md:hidden ms-2"
          @click="mobileMenuOpen = !mobileMenuOpen"
        />
      </div>
    </Container>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
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
