import { promises as fs } from "node:fs";
import { fileURLToPath } from "node:url";

export async function getInput(importMetaUrl) {
  const filename = fileURLToPath(new URL("./input.txt", importMetaUrl));
  return (await fs.readFile(filename)).toString().trim().split("\n");
}
