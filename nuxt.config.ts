// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["@/assets/main.scss"],

  modules: [
    "@nuxtjs/tailwindcss",
    [
      "unplugin-icons/nuxt",
      {
        scale: 1,
        autoInstall: true,
        compiler: "vue3",
        iconCustomizer(collection, icon, props) {
          // we want to use tailwind classes for sizing
          props.width = "100%";
          props.height = "100%";
        },
      },
    ],
  ],

  runtimeConfig: {
    apiKey: "", // can be overridden by NUXT_API_KEY environment variable
    mainFolderId: "", // can be overridden by NUXT_MAIN_FOLDER_ID environment variable
  },
});
