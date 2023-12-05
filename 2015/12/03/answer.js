import { getInput } from "../../../utils/helpers.js";
const input = (await getInput(import.meta.url)).join().split("");

function processDirections(input, hasRobotSanta) {
  const housesVisited = {};

  input.reduce(
    (accumulator, currentValue, index) => {
      let who = "santa";

      if (hasRobotSanta && index % 2 === 0) {
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

      if (!housesVisited[`${accumulator[who].x},${accumulator[who].y}`]) {
        housesVisited[`${accumulator[who].x},${accumulator[who].y}`] = 1;
      }

      housesVisited[`${accumulator[who].x},${accumulator[who].y}`] += 1;

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

  return housesVisited;
}

// Part 1
const part1Visited = processDirections(input, false);

const part1 = Object.keys(part1Visited).filter(
  (house) => part1Visited[house] >= 1
).length;

console.log("Answer one:", part1);

// Part 2
const part2Visited = processDirections(input, true);

const part2 = Object.keys(part2Visited).filter(
  (house) => part2Visited[house] >= 1
).length;

console.log("Answer two:", part2);
