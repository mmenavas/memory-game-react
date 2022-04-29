import React, { FC } from 'react'

import { CardProps } from './Card.types'
import './Cards.css'

const Card: FC<CardProps> = ({ tile, reveal }) => {
  return (
    <div className={'card' + (tile.isRevealed ? ' card--revealed' : '')} onClick={reveal}>
      {tile.isRevealed
        ? <span>{tile.value}</span>
        : '?'}
    </div>
  )
}

export default Card
