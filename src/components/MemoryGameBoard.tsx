import React, { FC, useState, useEffect } from 'react'
import cloneDeep from 'lodash/fp/cloneDeep'
import { Tile, Board, FlipATileGame } from '@mmenavas/memory-game-builder'
import { Card } from './Card'
import {MessageProvider, LanguageCode, MessageCode, Message} from '../services/MessageProvider'
import defaultMessages from '../assets/defaultMessages.json'

export interface MemoryGameBoardProps {
  values: string[]
  language: LanguageCode
  messageProvider: MessageProvider
  timeoutDuration: number
}

export const MemoryGameBoard: FC<MemoryGameBoardProps> = ({ 
  values,
  language = 'en',
  messageProvider = new MessageProvider(defaultMessages.messages as Message[]),
  timeoutDuration = 500
}) => {

  const [game, setGame] = useState(new FlipATileGame(new Board([])))
  const [message, setMessage] = useState('')

  useEffect(() => {
    const tiles = values.map(value => new Tile<string>(value))
    const board = new Board<string>(tiles)
    const newGame = new FlipATileGame(board, timeoutDuration)
    newGame.startGame()
    setGame(newGame)
    setMessage(messageProvider.findMessage('startGame', language))
  }, [values])

  function handleCardClick(index: number): void {
    try {
      game.play(index).then(result => {
        setGame(cloneDeep(game))
        setMessage(messageProvider.findMessage(result as MessageCode, language))
      })
      setGame(cloneDeep(game))
    }
    catch (e: unknown) {
      if (e === 'gameOverError' || e === 'tileAlreadyRevealedError') {
        setMessage(messageProvider.findMessage(e, language))
      }
      else {
        console.error(e)
      }
    }
  }

  return (
    <div className='MemoryGameBoard'>
      <div className='MemoryGameBoard__cards'>
        {game.board.tiles.map((tile, index) => {
          return <Card key={index} tile={tile} reveal={() => handleCardClick(index)}><div className='Card__content'>{tile.isRevealed ? tile.value : '?' }</div></Card>
        })}
      </div>
      <div className='MemoryGame__message'>{message}</div>
    </div>
  )
}