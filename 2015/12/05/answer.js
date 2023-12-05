import { getInput } from "../../../utils/helpers.js";
const input = await getInput(import.meta.url);

// Part 1
const part1 = input.filter((row) => {
  // contains at least three vowels
  const vowels = row.match(/[aeiou]/g) || 0;

  // contains a repeated letter
  const repeatedLetter = row.match(/([a-z])\1+/g) || 0;

  // does not contain ab, cd, pq, xy
  const containsStrings = row.match(/ab|cd|pq|xy/g) || 0;

  return (
    vowels.length >= 3 && repeatedLetter.length > 0 && containsStrings === 0
  );
});

console.log("Answer one:", part1.length);

// Part 2
const part2 = input.filter((row) => {
  // contains a pair of repeated letters
  const repeatedLetterPair = row.match(/([a-z]{2})[a-z]*\1/g) || 0;

  // contains a repeated letter with one letter inbetween
  const repeatLetterDivided = row.match(/([a-z])[a-z]\1/g) || 0;

  return repeatedLetterPair.length && repeatLetterDivided.length;
});

console.log("Answer two:", part2.length);
