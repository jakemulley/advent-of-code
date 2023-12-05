import { getInput } from "../../../utils/helpers.js";
const input = (await getInput(import.meta.url)).join().split("");

// Part 1
const part1HousesVisited = {};
const part1Prepare = input.reduce(
  (accumulator, currentValue) => {
    if (currentValue === "^") {
      accumulator.y += 1;
    }
    if (currentValue === "v") {
      accumulator.y -= 1;
    }
    if (currentValue === "<") {
      accumulator.x += 1;
    }
    if (currentValue === ">") {
      accumulator.x -= 1;
    }
    if (!part1HousesVisited[`${accumulator.x},${accumulator.y}`]) {
      part1HousesVisited[`${accumulator.x},${accumulator.y}`] = 1;
    }
    part1HousesVisited[`${accumulator.x},${accumulator.y}`] += 1;
    return accumulator;
  },
  {
    x: 0,
    y: 0,
  }
);

const part1 = Object.keys(part1HousesVisited).filter(
  (house) => part1HousesVisited[house] >= 1
).length;

console.log("Answer one:", part1);

// Part 2
const part2HousesVisited = {};
const part2Prepare = input.reduce(
  (accumulator, currentValue, index) => {
    let who = "santa";

    if (index % 2 === 0) {
      who = "robosanta";
    }

    if (currentValue === "^") {
      accumulator[who].y += 1;
    }
    if (currentValue === "v") {
      accumulator[who].y -= 1;
    }
    if (currentValue === "<") {
      accumulator[who].x += 1;
    }
    if (currentValue === ">") {
      accumulator[who].x -= 1;
    }
    if (!part2HousesVisited[`${accumulator[who].x},${accumulator[who].y}`]) {
      part2HousesVisited[`${accumulator[who].x},${accumulator[who].y}`] = 1;
    }
    part2HousesVisited[`${accumulator[who].x},${accumulator[who].y}`] += 1;
    return accumulator;
  },
  {
    santa: {
      x: 0,
      y: 0,
    },
    robosanta: {
      x: 0,
      y: 0,
    },
  }
);

const part2 = Object.keys(part2HousesVisited).filter(
  (house) => part2HousesVisited[house] >= 1
).length;

console.log("Answer two:", part2);
