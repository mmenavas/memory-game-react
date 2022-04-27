import React, { FC } from 'react'

import { CardProps } from './Card.types'
import './Cards.css'


const Card: FC<CardProps> = (props) => {
  const {
    name,
    image = '',
    isRevealed = false,
    reveal = undefined
  } = props


  return (
    <div className={'card' + (isRevealed
      ? ' card--revealed'
      : '')}
    onClick={reveal}>
      {isRevealed
        ? (image ? <img className="card__image" src={image} alt="" /> : <span>{name}</span>)
        : '?'}
    </div>
  )
}

export default Card
