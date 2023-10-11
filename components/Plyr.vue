<template>
  <video
    v-if="type == 'html'"
    :id="id"
    :src="src"
    :data-poster="poster"
    controls
  ></video>
  <div v-else>
    <div :id="id" class="plyr__video-embed">
      <iframe
        :src="src"
        allowfullscreen
        allowtransparency
        allow="autoplay"
        class="rounded-2xl"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const props = defineProps({
  type: {
    type: String as PropType<"html" | "youtube" | "vimeo">,
    default: "html",
  },
  src: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
});

const id = randomId();
const player = ref(null);

onMounted(async () => {
  player.value = new Plyr(`#${id}`);
  player.value.poster = props.poster;
});
</script>

<style lang="scss">
#player {
  @apply relative max-h-[30rem];
}
.plyr--video {
  @apply w-full rounded-xl;
  --plyr-color-main: theme("colors.brand.500");
  --plyr-video-controls-background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(4, 43, 75, 0.75)
  );
  --plyr-control-radius: 0.5rem;
  .plyr__control--overlaid {
    @apply p-6;
    svg {
      --plyr-control-icon-size: 36px;
    }
  }
}
</style>
