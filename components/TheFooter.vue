<template>
  <!-- <AboutSection /> -->
  <footer>
    <Container middle-grid class="py-12 bg-white">
      <div class="relative grid gap-y-14 md:grid-cols-3 md:gap-x-0 -mx-2">
        <div class="px-2 flex flex-col justify-between">
          <nuxt-link to="/">
            <Logo class="h-12" theme="dark" full />
          </nuxt-link>
        </div>
        <div class="px-2 pt-2 flex flex-col space-y-6">
          <!-- <h4 class="uppercase text-slate-200">Product</h4>
          <nuxt-link
            v-for="link in links"
            :key="link.label"
            :to="link.href"
            class="text-slate-400 hover:text-slate-200 text-sm transition-colors"
          >
            {{ link.label }}
          </nuxt-link> -->
        </div>
        <div class="px-4 pt-2 flex flex-col space-y-6">
          <!-- <h4 class="uppercase text-slate-200">Company</h4>
          <div
            class="flex gap-1 text-slate-400 hover:text-slate-200 text-sm transition-colors"
          >
            <icon-tabler-phone class="w-4" />
            <a href="tel:020-7345-6789">020-7345-6789</a>
          </div> -->
        </div>
      </div>
    </Container>
  </footer>
</template>

<script setup>
const links = [
  {
    label: "About Us",
    href: "/#top",
  },
  {
    label: "How It Works",
    href: "/#how-it-works",
  },
];
</script>
