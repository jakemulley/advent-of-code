import { promises as fs } from 'fs'

const input = await fs.readFile("./input.txt")
const stream = input.toString().split('')

function getUniqueMarkerGroupIndex (array, size) {
  let marker = 0

  for (const signal in array) {
    const index = Number.parseInt(signal)
    const uniqueGroup = new Set(array.slice(index, index + size))

    if (uniqueGroup.size === size) {
      marker = index + size
      break
    }
  }

  return marker
}

// Part 1
const part1 = getUniqueMarkerGroupIndex(stream, 4)
console.log('Part 1 =>', part1)

// Part 2
const part2 = getUniqueMarkerGroupIndex(stream, 14)
console.log('Part 2 =>', part2)
