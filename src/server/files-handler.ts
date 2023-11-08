import { writeFile } from "fs/promises";
import path from "path";

type SaveFolder = "assessments" | "signatures";

const getFileExt = (filename: string) => {
  return filename.substring(filename.lastIndexOf(".") + 1, filename.length);
};

export async function saveFileToLocal(
  folder: SaveFolder,
  file: File,
  id: string
): Promise<string | null> {
  try {
    const fileExt = getFileExt(file.name);
    const filename = `${new Date().getTime().toString()}-${id}.${fileExt}`;
    const filePath = path.join(folder, filename);
    await writeFile(
      path.join(process.cwd(), "public", filePath),
      Buffer.from(await file.arrayBuffer())
    );
    return filePath;
  } catch (error) {
    return null;
  }
}
