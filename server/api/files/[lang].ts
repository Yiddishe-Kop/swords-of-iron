import { listFilesRecursively, listLanguages } from "../../utils/drive";

export default defineEventHandler(async (event) => {
  const routeLang = getRouterParam(event, "lang");

  const languages = await listLanguages();
  if (!languages.length) {
    setResponseStatus(event, 400);
    return { error: "unable to fetch languages" };
  }

  const language = languages.find((lang) => lang.name === routeLang);
  if (language === undefined) {
    setResponseStatus(event, 400);
    return { error: "invalid language" };
  }

  const files = (await listFilesRecursively(language.folderId)).sort(
    (f1, f2) => {
      return f1.createdTime! < f2.createdTime! ? 1 : -1;
    }
  );

  return {
    files,
  };
});
