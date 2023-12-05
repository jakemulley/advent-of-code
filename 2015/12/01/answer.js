import { getInput } from "../../../utils/helpers.js";
const input = (await getInput(import.meta.url)).join();

// Part 1
const part1 = input.split("(").length - input.split(")").length;

console.log("Answer one:", part1);

// Part 2
const part2 = input.split("").map((character) => (character === "(" ? 1 : -1));

let floor = 0;

for (const index in part2) {
  floor += part2[index];
  if (floor === -1) {
    console.log("Answer two:", Number.parseInt(index) + 1);
    break;
  }
}
