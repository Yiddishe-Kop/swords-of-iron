<template>
  <div :class="[padding, maxWidth, fullWidth ? '' : 'mx-auto px-2 sm:px-6']">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    padding: {
      type: String,
      default: "py-12",
    },
    maxWidth: {
      type: String,
      default: "max-w-screen-xl",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
