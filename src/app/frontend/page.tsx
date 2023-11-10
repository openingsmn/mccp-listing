import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page() {
  const filePath = path.join(process.cwd(), "public", "frontend", "index.html");
  const htmlContent = await readFile(filePath, "utf-8");
  return (
    <main>
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </main>
  );
}
