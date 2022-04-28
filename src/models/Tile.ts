export default class Tile {
  value = ''
  isRevealed = false

  constructor(value: string) {
    this.value = value
  }

  reveal() {
    this.isRevealed = true
  }

  conceal() {
    this.isRevealed = false
  }
}