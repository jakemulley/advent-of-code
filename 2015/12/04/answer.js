import { createHash } from "node:crypto";
import { getInput } from "../../../utils/helpers.js";
const input = (await getInput(import.meta.url)).join("");

function hash(string) {
  let hash;
  let i = -1;
  do {
    i++;
    hash = createHash("md5").update(`${input}${i}`).digest("hex");
  } while (!hash.startsWith(string));
  return i;
}

// Part 1
const part1 = hash("00000");
console.log("Answer one:", part1);

// Part 2
const part2 = hash("000000");
console.log("Answer two:", part2);
