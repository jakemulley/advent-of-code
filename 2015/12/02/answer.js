import { getInput } from "../../../utils/helpers.js";
const input = await getInput(import.meta.url);

function getMeasurements(row) {
  return row.split("x").map((value) => Number.parseInt(value));
}

// Part 1
const part1 = input.reduce((accumulator, currentValue) => {
  const [length, width, height] = getMeasurements(currentValue);

  const [top, side, end] = [length * width, width * height, height * length];

  return (top + side + end) * 2 + (Math.min(top, side, end) + accumulator);
}, 0);

console.log("Answer one:", part1);

// Part 2
const part2 = input.reduce((accumulator, currentValue) => {
  const [length, width, height] = getMeasurements(currentValue);

  const [top, side, end] = [
    (length + width) * 2,
    (length + height) * 2,
    (width + height) * 2,
  ];

  return length * width * height + (Math.min(top, side, end) + accumulator);
}, 0);

console.log("Answer two:", part2);
