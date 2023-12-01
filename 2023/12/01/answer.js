import { promises as fs } from "fs";

const input = (await fs.readFile("./input.txt"))
  .toString()
  .split("\n")
  .filter((row) => row.length);

const part1 = input
  .map((row) => row.match(/\d/g))
  .reduce(
    (accumulator, currentValue) =>
      accumulator +
      Number.parseInt(
        currentValue.find(Boolean) + currentValue.reverse().find(Boolean)
      ),
    0
  );

console.log("Answer one:", part1);

const mapping = {
  one: "one1one",
  two: "two2two",
  three: "three3three",
  four: "four4four",
  five: "five5five",
  six: "six6six",
  seven: "seven7seven",
  eight: "eight8eight",
  nine: "nine9nine",
};

const part2 = input
  .map((row) => {
    let str = row;

    for (const key of Object.keys(mapping)) {
      str = str.replaceAll(key, mapping[key]);
    }

    return str;
  })
  .map((row) => row.match(/(\d)/g))
  .reduce(
    (accumulator, currentValue) =>
      accumulator +
      Number.parseInt(
        currentValue.find(Boolean) + currentValue.reverse().find(Boolean)
      ),
    0
  );

console.log("Answer two:", part2);
