import { promises as fs } from 'fs'

const input = await fs.readFile("./input.txt")
const elves = input.toString().split("\n\n")

const totalCaloriesPerElf = elves.map(calories => {
  return calories.split("\n").filter(string => {
    return string
  }).map(calorie => {
    return Number.parseInt(calorie)
  }).reduce((accumulator, integer) => {
    return Number.parseInt(accumulator + integer);
  }, 0)
})

// Part One
const highest = Math.max(...totalCaloriesPerElf)

console.log(`Part 1 => ${highest}`)

// Part Two
const topThree = totalCaloriesPerElf.sort((a, b) => {
  return b - a;
}).slice(0, 3)

const topThreeSum = topThree.reduce((accumulator, integer) => {
  return Number.parseInt(accumulator + integer)
}, 0)

console.log(`Part 2 => ${topThreeSum}`)
