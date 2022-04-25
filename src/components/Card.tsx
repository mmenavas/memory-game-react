import React, { FC } from 'react'

import { CardProps } from './Card.types'


const Card: FC<CardProps> = (props) => (
  <div className={'card' + (props.isRevealed
    ? ' card--on'
    : '')}
  onClick={props.reveal}>
    {props.isRevealed
      ? <img className="card__image" src={props.image} alt="" />
      : '?'}
  </div>
)

export default Card
