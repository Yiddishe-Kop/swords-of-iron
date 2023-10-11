import { google } from "googleapis";
import type { drive_v3 } from "googleapis";

export class Language {
  readonly name: string;

  readonly folderId: string;

  constructor(language: string, folderId: string) {
    this.name = language;
    this.folderId = folderId;
  }
}

const drive = google.drive({
  version: "v3",
  auth: useRuntimeConfig().apiKey,
});

export async function listLanguages(): Promise<Language[]> {
  let languages: Language[] = [];

  try {
    const { data } = await drive.files.list({
      q: `'${useRuntimeConfig().mainFolderId}' in parents`,
      fields: "files(id, name)",
      spaces: "drive",
    });

    const languageNameRegex = /[A-Za-z]+/;
    languages = data.files!.map((file) => {
      const match = file.name!.match(languageNameRegex);
      return new Language(match![0].toLowerCase(), file.id!);
    });
  } catch (e) {
    console.log(e);
  }
  return languages;
}

async function listFilesInFolder(
  folderId: string
): Promise<drive_v3.Schema$File[]> {
  const result = [];
  let pageToken: string = "";

  do {
    const response = await drive.files.list({
      pageToken,
      q: `'${folderId}' in parents`,
      fields:
        "nextPageToken, files(id, name, webContentLink, webViewLink, size, createdTime, mimeType, thumbnailLink, hasThumbnail)",
    });
    result.push(...response.data.files!);
    pageToken = response.data.nextPageToken || "";
  } while (pageToken !== "");

  return result;
}

export async function listFilesRecursively(
  folderId: string
): Promise<drive_v3.Schema$File[]> {
  const files = await listFilesInFolder(folderId);
  const result = [];

  for (const file of files) {
    if (file.mimeType === "application/vnd.google-apps.folder") {
      result.push(...(await listFilesRecursively(file.id!)));
    } else {
      result.push(file);
    }
  }

  return result;
}
