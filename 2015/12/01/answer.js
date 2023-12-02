import { access, promises as fs } from "fs";

const input = (await fs.readFile("./input.txt")).toString().trim();

const part1 = input.split("(").length - input.split(")").length;

console.log("Answer one:", part1);

const part2 = input.split("").map((character) => (character === "(" ? 1 : -1));

let floor = 0;
let answer = 0;
for (const index in part2) {
  floor += part2[index];
  if (floor === -1) {
    answer = Number.parseInt(index) + 1;
    break;
  }
}

console.log("Answer two:", answer);
