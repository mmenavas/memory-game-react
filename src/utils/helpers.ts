import { Tile } from '@mmenavas/memory-game-builder'

function compareTiles(a: Tile<string>, b: Tile<string>): number {
  const nameA = a.value.toUpperCase()
  const nameB = b.value.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  // names must be equal
  return 0
}

export { compareTiles }