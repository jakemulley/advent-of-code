import { promises as fs } from "fs";

const input = (await fs.readFile("./input.txt"))
  .toString()
  .split("\n")
  .filter((row) => row.length);

function range(start, stop) {
  const result = [];
  for (let i = start; i < stop; i += 1) {
    result.push(i);
  }
  return result;
}

const prepare = input.map((row) => {
  const numbers = row.split(":")[1].split("|");
  const winning = [...numbers[0].matchAll(/\d+/g)].map((row) =>
    Number.parseInt(row[0].trim())
  );
  const mine = [...numbers[1].matchAll(/\d+/g)].map((row) =>
    Number.parseInt(row[0].trim())
  );
  return {
    winning,
    mine,
    intersects: mine.filter((number) => winning.includes(number)),
    count: 1,
  };
});

const part1 = prepare
  .map(({ intersects }) =>
    intersects.length ? 2 ** (intersects.length - 1) : 0
  )
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Answer one:", part1);

const part2 = prepare
  .map(({ intersects, count }, index) => {
    for (const i of range(index + 1, index + intersects.length + 1)) {
      prepare[i].count += count;
    }
    return prepare[index];
  })
  .reduce((accumulator, { count }) => accumulator + count, 0);

console.log("Answer two:", part2);
