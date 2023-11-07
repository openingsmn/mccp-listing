import { writeFile } from "fs/promises";

type SaveFolder = "assessments" | "signatures";

export async function saveFile(
  foleder: SaveFolder,
  file: File
): Promise<string | null> {
  try {
    return null;
  } catch (error) {
    return null;
  }
}
