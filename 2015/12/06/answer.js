import { getInput } from "../../../utils/helpers.js";
const input = (await getInput(import.meta.url)).map((row) => {
  const [, action, from_x, from_y, to_x, to_y] =
    /(turn on|turn off|toggle) ([0-9]+),([0-9]+) through ([0-9]+),([0-9]+)/.exec(
      row
    );

  return {
    action,
    coords: [[from_x, from_y].map(Number), [to_x, to_y].map(Number)],
  };
});

// Part 1
const part1Grid = Array(1000)
  .fill()
  .map((row) => Array(1000).fill(0));

const part1Preparation = input.forEach((row) => {
  const [from, to] = row.coords;
  const { action } = row;

  for (let y = from[1]; y <= to[1]; y++) {
    for (let x = from[0]; x <= to[0]; x++) {
      if (action === "toggle") {
        part1Grid[y][x] = !part1Grid[y][x];
      }
      if (action.endsWith("on")) {
        part1Grid[y][x] = true;
      }
      if (action.endsWith("off")) {
        part1Grid[y][x] = false;
      }
    }
  }
});

const part1 = part1Grid.reduce(
  (accumulator, currentValue) =>
    accumulator +
    Number.parseInt(currentValue.filter((row) => row === true).length),
  0
);

console.log("Answer one:", part1);

// Part 2
const part2Grid = Array(1000)
  .fill()
  .map((row) => Array(1000).fill(0));

const part2Preparation = input.forEach((row) => {
  const [from, to] = row.coords;
  const { action } = row;

  for (let y = from[1]; y <= to[1]; y++) {
    for (let x = from[0]; x <= to[0]; x++) {
      if (action === "toggle") {
        part2Grid[y][x] += 2;
      }
      if (action.endsWith("on")) {
        part2Grid[y][x] += 1;
      }
      if (action.endsWith("off")) {
        part2Grid[y][x] -= 1;
      }
      if (part2Grid[y][x] < 0) {
        part2Grid[y][x] = 0;
      }
    }
  }
});

const part2 = part2Grid.reduce(
  (accumulator, currentValue) =>
    accumulator +
    Number.parseInt(
      currentValue.reduce(
        (cellAccumulator, cellCurrentValue) =>
          Number.parseInt(cellAccumulator) + Number.parseInt(cellCurrentValue),
        0
      )
    ),
  0
);

console.log("Answer two:", part2);
