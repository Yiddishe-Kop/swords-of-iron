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
// {
//     "mimeType": "image/jpeg",
//     "thumbnailLink": "https://lh3.googleusercontent.com/drive-storage/AKHj6E6Ii-ZoYVAgoRs1I85VOgxr_XXNmRCW4A8wJAuS4tugJ9b6SOFVjgn8TM1cQzvzFKcBU1ESBNDGRyvqLYSWvzBJX2w6jf-w=s220",
//     "webViewLink": "https://drive.google.com/file/d/1vMDaepVBWtkWNyIEfhrB9I6355pGKOZ1/view?usp=drivesdk",
//     "webContentLink": "https://drive.google.com/uc?id=1vMDaepVBWtkWNyIEfhrB9I6355pGKOZ1&export=download",
//     "size": "861101",
//     "hasThumbnail": true,
//     "id": "1vMDaepVBWtkWNyIEfhrB9I6355pGKOZ1",
//     "name": "רוסית Russain.jpg",
//     "createdTime": "2023-10-10T16:11:38.635Z"
// }

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
    title: props.file.name,
    text: props.file.name,
    url: props.file.webContentLink,
    // files: filesArray,
  };

  if (navigator.canShare?.(shareData)) {
    navigator.share(shareData);
  } else {
    navigator.clipboard.writeText(shareData.url);
  }
};
</script>
