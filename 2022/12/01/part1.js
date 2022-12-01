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

const highest = Math.max(...totalCaloriesPerElf)

console.log(highest)
