import Tile from '../Tile'
import FlipATileMemoryGame from '../FlipATileMemoryGame'
import { compareTiles } from '../../utils/helpers'

describe('Test Tile class', () => {

  test('constructor', () => {
    const tile1 = new Tile('A')
    const tile2 = new Tile('B')
    const game = new FlipATileMemoryGame([tile1, tile2])
    expect(game.tiles).toEqual([tile1, tile2, tile1, tile2])
  })

  test('concealAll', () => {
    const tile1 = new Tile('A')
    const tile2 = new Tile('B')
    tile1.reveal()
    const game = new FlipATileMemoryGame([tile1, tile2])
    expect(game.tiles[0].isRevealed).toEqual(true)
    expect(game.tiles[1].isRevealed).toEqual(false)
    expect(game.tiles[2].isRevealed).toEqual(true)
    expect(game.tiles[3].isRevealed).toEqual(false)
    game.concealAll()
    expect(game.tiles[0].isRevealed).toEqual(false)
    expect(game.tiles[1].isRevealed).toEqual(false)
    expect(game.tiles[2].isRevealed).toEqual(false)
    expect(game.tiles[3].isRevealed).toEqual(false)
  })

  test('shuffle', () => {
    const tile1 = new Tile('A')
    const tile2 = new Tile('B')
    const game = new FlipATileMemoryGame([tile1, tile2])
    game.shuffle()
    expect(game.tiles.sort(compareTiles)).toEqual([tile1, tile2, tile1, tile2].sort(compareTiles))
  })

})