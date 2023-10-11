<template>
  <Component :is="component" />
</template>

<script setup>
import TablerMenu from "~icons/tabler/menu";
import TablerDownload from "~icons/tabler/download";
import TablerShare from "~icons/tabler/share";
import TablerShield from "~icons/tabler/shield-chevron";
import TablerVolume from "~icons/tabler/volume";
import TablerWorld from "~icons/tabler/world";
import TablerLogout from "~icons/tabler/logout";
import TablerDashboard from "~icons/tabler/dashboard";
import TablerUserCircle from "~icons/tabler/user-circle";
import TablerChevronLeft from "~icons/tabler/chevron-left";
import TablerChevronRight from "~icons/tabler/chevron-right";
import TablerChevronDown from "~icons/tabler/chevron-down";
import TablerChevronUp from "~icons/tabler/chevron-up";
import TablerCheck from "~icons/tabler/check";
import TablerSearch from "~icons/tabler/search";
import TablerX from "~icons/tabler/x";
import TablerPlus from "~icons/tabler/square-rounded-plus";
import TablerMinus from "~icons/tabler/square-rounded-minus";
// @see https://icones.js.org/ - use any icon from that list

const props = defineProps({
  name: String,
  set: {
    type: String,
    default: "tabler",
  },
});

const icons = {
  "tabler-download": TablerDownload,
  "tabler-share": TablerShare,
  "tabler-menu": TablerMenu,
  "tabler-volume": TablerVolume,
  "tabler-shield": TablerShield,
  "tabler-world": TablerWorld,
  "tabler-logout": TablerLogout,
  "tabler-dashboard": TablerDashboard,
  "tabler-user-circle": TablerUserCircle,
  "tabler-chevron-left": TablerChevronLeft,
  "tabler-chevron-right": TablerChevronRight,
  "tabler-chevron-up": TablerChevronUp,
  "tabler-chevron-down": TablerChevronDown,
  "tabler-search": TablerSearch,
  "tabler-check": TablerCheck,
  "tabler-x": TablerX,
  "tabler-plus": TablerPlus,
  "tabler-minus": TablerMinus,
};

const component = computed(() => icons[`${props.set}-${props.name}`]);
</script>
