import Tile from '../Tile'

describe('Test Tile class', () => {

  test('constructor', () => {
    const value = 'Spiderman'
    const tile = new Tile(value)
    expect(tile.value).toBe(value)
    expect(tile.isRevealed).toBe(false)
  })

  test('reveal', () => {
    const value = 'Spiderman'
    const tile = new Tile(value)
    tile.reveal()
    expect(tile.isRevealed).toBe(true)
  })

  test('conceal', () => {
    const value = 'Spiderman'
    const tile = new Tile(value)
    tile.reveal()
    tile.conceal()
    expect(tile.isRevealed).toBe(false)
  })

})