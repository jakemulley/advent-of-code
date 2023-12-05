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

function processInstructions(input, isBrightness) {
  const grid = Array(1000)
    .fill()
    .map((row) => Array(1000).fill(0));

  input.forEach((row) => {
    const [from, to] = row.coords;
    const { action } = row;

    for (let y = from[1]; y <= to[1]; y++) {
      for (let x = from[0]; x <= to[0]; x++) {
        if (action === "toggle") {
          if (isBrightness) {
            grid[y][x] += 2;
          } else {
            grid[y][x] = !grid[y][x];
          }
        }
        if (action.endsWith("on")) {
          if (isBrightness) {
            grid[y][x] += 1;
          } else {
            grid[y][x] = true;
          }
        }
        if (action.endsWith("off")) {
          if (isBrightness) {
            grid[y][x] -= 1;
          } else {
            grid[y][x] = false;
          }
        }

        if (isBrightness && grid[y][x] < 0) {
          grid[y][x] = 0;
        }
      }
    }
  });

  return grid;
}

// Part 1
const part1 = processInstructions(input, false).reduce(
  (accumulator, currentValue) =>
    accumulator +
    Number.parseInt(currentValue.filter((row) => row === true).length),
  0
);

console.log("Answer one:", part1);

// Part 2
const part2 = processInstructions(input, true).reduce(
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
