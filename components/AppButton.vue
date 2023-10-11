<template>
  <component
    :is="component"
    :href="href"
    :class="[
      colorClasses,
      sizeClasses,
      {
        'pointer-events-none opacity-50': disabled,
        'pointer-events-none opacity-75': processing,
        light: color == 'brand',
      },
    ]"
    :disabled="processing || disabled"
    :type="type"
    :method="method"
    class="group relative inline-flex items-center justify-center whitespace-nowrap rounded-full border font-semibold uppercase leading-none shadow-sm transition-colors duration-150 ease-in-out focus:outline-none focus:ring"
    v-bind="$attrs"
    @click="onClick"
  >
    <Loader v-if="processing" />

    <Icon
      v-else-if="icon"
      :name="icon"
      :class="[iconSizeClasses, !isIconButton ? '-my-1' : '']"
      class="shrink-0"
    />

    <span
      v-if="!isIconButton"
      :class="{ 'hidden md:inline': hideTextOnMobile }"
    >
      <slot />
    </span>

    <Icon
      v-if="iconEnd && !processing"
      :name="iconEnd"
      :class="iconSizeClasses"
      class="shrink-0"
    />
    <AnimatedArrow
      v-if="arrow"
      :class="{ dark: ['brand', 'dark', 'gradient'].includes(color) }"
      class="shrink-0"
    />
    <span
      v-if="badge"
      class="absolute text-xs font-bold font-inter bg-brand-500 px-1 rounded-full -top-1 -right-1"
      >{{ badge }}</span
    >
  </component>
</template>

<script lang="ts">
import { NuxtLink } from "#components";

export default {
  name: "AppButton",
  props: {
    tag: String,
    type: {
      type: String,
      default: "button",
    },
    color: {
      type: String as PropType<
        | "brand"
        | "gradient"
        | "secondary"
        | "quiet"
        | "danger"
        | "warning"
        | "success"
        | "dark"
      >,
      default: "brand",
    },
    size: {
      type: String as PropType<"xs" | "sm" | "base" | "lg" | "xl">,
      default: "base",
    },
    badge: [String, Number],
    processing: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    method: {
      type: String as PropType<"get" | "post" | "put" | "patch" | "delete">,
      default: "get",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    href: String,
    icon: {
      type: String,
      required: false,
    },
    iconEnd: {
      type: String,
      required: false,
    },
    hideTextOnMobile: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["click"],

  data() {
    return {
      //
    };
  },

  computed: {
    component() {
      if (this.tag) {
        return this.tag;
      }
      if (this.link && !this.disabled) {
        return NuxtLink;
      }
      return "button";
    },
    isIconButton() {
      return this.icon && !this.$slots.default;
    },
    sizeClasses() {
      return {
        xs: "py-0 px-1 text-xs space-x-1",
        sm: `py-1 text-xs space-x-2 ${this.isIconButton ? "px-1" : "px-3"}`,
        base: `py-2  text-xs space-x-2 ${this.isIconButton ? "px-2" : "px-4"}`,
        lg: `py-3 space-x-4 ${this.isIconButton ? "px-2" : "px-6"}`,
        xl: `py-4 space-x-6 ${this.isIconButton ? "px-2" : "px-8"}`,
      }[this.size];
    },
    iconSizeClasses() {
      return {
        xs: "w-4",
        sm: "w-4",
        base: "w-5",
        lg: "w-5",
        xl: "w-6",
      }[this.size];
    },
    colorClasses() {
      return {
        brand:
          "bg-brand border-transparent text-white hover:bg-brand-600 focus:bg-brand-900 focus:ring-brand-400",
        gradient:
          "bg-brand-gradient border-0 text-white focus:bg-brand-900 focus:ring-brand-400",
        secondary:
          "bg-white dark:bg-slate-800 border-gray-200 dark:border-brand-500 text-gray-500 dark:text-gray-100 dark:hover:text-brand-50 dark:bg-brand-800 hover:bg-gray-50 dark:hover:bg-brand-700 hover:text-gray-700 focus:text-gray-700 focus:ring-brand-400",
        quiet:
          "!shadow-none border-transparent hover:bg-white dark:hover:bg-gray-800 text-gray-500 dark:text-gray-200 hover:text-gray-700 focus:text-gray-700 focus:ring-brand-400",
        danger:
          "bg-white border-red-200 dark:border-red-700 dark:bg-red-800 text-red-500 dark:text-red-200 hover:bg-red-50 dark:hover:bg-red-900 hover:text-red-700 dark:hover:text-red-100 focus:text-red-700 focus:ring-red-400",
        warning:
          "bg-white dark:bg-orange-800 dark:border-orange-700 border-orange-200 text-orange-500 hover:bg-orange-50 dark:text-orange-200 dark:hover:text-orange-100 hover:text-orange-700 focus:text-orange-700 focus:ring-orange-400",
        success:
          "bg-white border-green-300 text-green-500 hover:bg-green-50 hover:text-green-700 focus:text-green-700 focus:ring-green-400",
        dark: "bg-brand-900 border-transparent text-white hover:bg-brand-900/75 focus:bg-brand-900/75 dark:hover:bg-brand-800",
      }[this.color];
    },
  },

  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
