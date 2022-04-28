import React, { FC, useState, useEffect } from 'react'
import shuffle from 'lodash/fp/shuffle'
import cloneDeep from 'lodash/fp/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import { MemoryGameBoardProps } from './MemoryGameBoardProps.types'
import { StatusMessageProvider } from '../models/StatusMessageProvider'
import Card from './Card'
import { CardProps } from './Card.types'
import statusMessages from '../assets/statusMessages.json'

const defaultEessageProvider = Object.assign(new StatusMessageProvider(), statusMessages)

const MemoryGameBoard: FC<MemoryGameBoardProps> = (props) => {

  const {
    name,
    cards,
    messages = defaultEessageProvider,
    language = 'en'
  } = props

  const [deck, setDeck] = useState<CardProps[]>([])
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(-1)
  const [isDeckLocked, setIsDeckLocked] = useState<boolean>(false)
  const [matchCount, setMatchCount] = useState<number>(0)
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    if (isEmpty(deck)) {
      // Shuffle all the cards.
      const shuffledDeck = shuffle([...cards, ...cloneDeep(cards)])
      setDeck(shuffledDeck)
    }
  })

  function handleCardClick(index: number): void {
    if (isDeckLocked) {
      return
    }

    if (deck[index].isRevealed) {
      return
    }

    const clonedDeck = cloneDeep(deck)
    clonedDeck[index].isRevealed = true
    setDeck(clonedDeck)
    deck.play(index)
  }

  return (
    <div className='MemoryGameBoard'>
      {deck.map((card, index) => {
        return <Card key={index} {...card} reveal={() => handleCardClick(index)}></Card>
      })}
    </div>
  )
}

export default MemoryGameBoard