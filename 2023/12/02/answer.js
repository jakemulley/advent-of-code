import { promises as fs } from "fs";

const input = (await fs.readFile("./input.txt"))
  .toString()
  .split("\n")
  .filter((row) => row.length);

const allowed = {
  red: 12,
  green: 13,
  blue: 14,
};

const part1 = input
  .map((row) => ({
    id: Number.parseInt(row.match(/(\d+)/)[0]),

    games: row.split(";").map((round) => {
      const red = round.match(/(\d+) red/);
      const green = round.match(/(\d+) green/);
      const blue = round.match(/(\d+) blue/);

      return {
        red: red ? Number.parseInt(red[1]) : 0,
        green: green ? Number.parseInt(green[1]) : 0,
        blue: blue ? Number.parseInt(blue[1]) : 0,
      };
    }),
  }))
  .filter((row) => {
    for (const game of row.games) {
      const keys = Object.keys(game);

      for (const key of keys) {
        if (game[key] > allowed[key]) {
          return false;
        }
      }
    }

    return true;
  })
  .reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);

console.log("Answer one:", part1);

const part2 = input
  .map((row) => ({
    id: Number.parseInt(row.match(/(\d+)/)[0]),

    games: row.split(";").map((round) => {
      const red = round.match(/(\d+) red/);
      const green = round.match(/(\d+) green/);
      const blue = round.match(/(\d+) blue/);

      return {
        red: red ? Number.parseInt(red[1]) : 0,
        green: green ? Number.parseInt(green[1]) : 0,
        blue: blue ? Number.parseInt(blue[1]) : 0,
      };
    }),
  }))
  .map(function (row) {
    const groups = {
      red: [],
      green: [],
      blue: [],
    };

    for (const game of row.games) {
      for (const key of Object.keys(game)) {
        groups[key].push(game[key]);
      }
    }

    for (const key of Object.keys(groups)) {
      groups[key] = Math.max(...groups[key]);
    }

    return groups["red"] * groups["green"] * groups["blue"];
  })
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Answer two:", part2);
