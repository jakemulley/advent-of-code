import { getInput } from "../../../utils/helpers.js";
const input = await getInput(import.meta.url);

function quadratic(time, distance) {
  const discriminant = Math.sqrt(time ** 2 - 4 * distance);
  const minDistance = Math.floor((time - discriminant) / 2 + 1);
  const maxDistance = Math.ceil((time + discriminant) / 2 - 1);
  return maxDistance - minDistance + 1;
}

function part1(input) {
  const [times, distances] = input.map((row) => row.match(/\d+/g).map(Number));

  return times.reduce(
    (accumulator, currentValue, index) =>
      accumulator * quadratic(times[index], distances[index]),
    1
  );
}

console.log("Answer one:", part1(input));

function part2(input) {
  const [times, distances] = input.map((row) =>
    row.match(/\d+/g).map(Number).join("")
  );

  return quadratic(Number.parseInt(times), Number.parseInt(distances));
}

console.log("Answer two:", part2(input));
