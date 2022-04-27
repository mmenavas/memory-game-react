import React, { FC, useState, useEffect } from 'react'
import shuffle from 'lodash/fp/shuffle'
import cloneDeep from 'lodash/fp/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import { MemoryGameBoardProps, StatusMessages } from './MemoryGameBoardProps.types'
import { getMessage } from '../utils/helperFunctions'
import Card from './Card'
import { CardProps } from './Card.types'
import defaultStatusMessages from '../assets/statusMessages.json'

// const defaultMessages = Object.assign(new StatusMessages(), defaultStatusMessages )

const MemoryGameBoard: FC<MemoryGameBoardProps> = (props) => {

  const {
    name,
    cards,
    statusMessages = defaultStatusMessages,
    language = 'en'
  } = props

  const [deck, setDeck] = useState<CardProps[]>([])
  const [cardTobeMatched, setCardToBeMatched] = useState<number>(-1)
  const [isDeckLocked, setIsDeckLocked] = useState<boolean>(false)
  const [matchCount, setMatchCount] = useState<number>(0)
  const [message, setMessage] = useState<string>()

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
    play(index)
  }


  function play(index: number): void {
    // Check if first card was selected.
    if (cardTobeMatched === -1) {
      setCardToBeMatched(index)
      setMessage(getMessage(defaultStatusMessages, 'nextCard', language))
    }

    // If first card wasn't selected, then it's safe to assume that the second card was.
    // let cards = [...cards];
    // let cardTobeMatched = cardTobeMatched;
    // let matches = matches;

    // // Check if cards don't match.
    // if (cards[cardTobeMatched].id !== cards[index].id) {
    //   // Lock all cards
    //   this.setState({
    //     lock: true
    //   })
    //   setTimeout(() => {
    //     cards[cardTobeMatched].isOn = false;
    //     cards[index].isOn = false;

    //     this.setState({
    //       cardTobeMatched: -1,
    //       cards: cards,
    //       lock: false
    //     })
    //   }, 1000);

    //   return 'not_a_match';
    // }

    // // Selected cards are a match.
    // this.setState({
    //   cardTobeMatched: -1,
    //   matches: matches + 1
    // });

    // // Check if all matching cards have been found.
    // if ((matches + 1) === (cards.length / 2)) {
    //   return 'win';
    // }

    // return 'match';
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