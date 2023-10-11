import { listLanguages } from "../utils/drive";

export default defineEventHandler(async (event) => {
  let languages = await listLanguages();

  return {
    languages,
  };
});
