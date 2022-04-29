import React, { FC, useState, useEffect } from 'react'
import cloneDeep from 'lodash/fp/cloneDeep'
import MemoryGameBoardProps from './MemoryGameBoardProps.types'
import FlipATileMemoryGame from '../models/FlipATileMemoryGame'
import Card from './Card'
import Tile from '../models/Tile'

// const defaultEessageProvider = Object.assign(new StatusMessageProvider(), statusMessages)

const MemoryGameBoard: FC<MemoryGameBoardProps> = ({ values }) => {

  const [game, setGame] = useState(new FlipATileMemoryGame([]))

  useEffect(() => {
    const tiles = values.map(value => new Tile(value))
    const newGame = new FlipATileMemoryGame(tiles)
    newGame.shuffle()
    setGame(newGame)
  }, [values])

  function handleCardClick(tile: Tile): void {
    tile.reveal()
    setGame(cloneDeep(game))
    console.log('Clicked on card ' + tile.value)

  }

  return (
    <div className='MemoryGameBoard'>
      {game.tiles.map((tile, index) => {
        return <Card key={index} tile={tile} reveal={() => handleCardClick(tile)}></Card>
      })}
    </div>
  )
}

export default MemoryGameBoard