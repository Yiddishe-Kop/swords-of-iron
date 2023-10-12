export const useLanguages = defineStore("langs", () => {
  const languages = ref([]);
  const currentLanguage = ref(useRoute().params.lang);

  const fetchLanguages = async () => {
    const { data } = await useFetch("/api/languages");
    languages.value = data.value?.reduce((acc, item) => {
      acc[item.name] = item.name;
      return acc;
    }, {});
  };

  fetchLanguages();

  return {
    languages,
    currentLanguage,
  };
});
