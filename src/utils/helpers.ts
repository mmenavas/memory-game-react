import Tile from '../models/Tile'

function compareTiles(a: Tile, b: Tile): number {
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