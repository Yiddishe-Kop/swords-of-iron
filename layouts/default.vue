<template>
  <div class="bg-slate-100 dark flex flex-col min-h-screen text-slate-900">
    <TheHeader />
    <div class="flex-1">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
