import fs from "node:fs";
import path from "node:path";

export function getImages(): string[] {
  const dirPath = path.join(process.cwd(), "public", "Tonkori");
  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath)
    .filter(f => /\.(png|jpe?g|gif|webp)$/i.test(f))
    .map(f => `/Tonkori/${f}`);
}