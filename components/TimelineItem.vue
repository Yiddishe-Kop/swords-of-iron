<template>
  <li class="relative rounded-xl overflow-hidden">
    <Plyr
      v-if="file.mimeType.startsWith('video')"
      :src="file.webContentLink"
      :poster="file.thumbnailLink"
      class="w-full"
      type="html"
    />
    <img v-else :src="file.webContentLink" :alt="file.name" class="w-full" />
    <div class="absolute top-0 right-0 flex left-0 p-3">
      <i class="flex-1"></i>
      <nav class="flex space-x-2 items-center">
        <AppButton icon="download" @click="download" />
        <AppButton icon="share" @click="share" />
      </nav>
    </div>
  </li>
</template>

<script setup lang="ts">
type DriveFile = {
  id: string;
  name: string;
  thumbnailLink: string;
  webViewLink: string;
  mimeType: string;
  webContentLink: string;
  size: string;
  hasThumbnail: boolean;
  createdTime: string;
};

const props = defineProps<{
  file: DriveFile;
}>();

const download = () => {
  window.open(props.file.webContentLink, "_blank");
};

const share = async () => {
  const blob = await (await fetch("/img/social.png")).blob();
  const filesArray = [
    new File([blob], "Swords Of Iron", {
      type: blob.type,
      lastModified: new Date().getTime(),
    }),
  ];
  console.log({ filesArray });

  const shareData = {
    title: props.file.name,
    text: props.file.name,
    url: props.file.webContentLink,
    files: filesArray,
  };

  if (navigator.canShare?.(shareData)) {
    navigator.share(shareData);
  } else {
    navigator.clipboard.writeText(shareData.url);
  }
};
</script>
