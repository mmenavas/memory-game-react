import React, { FC } from 'react'
import { MouseEventHandler } from 'react'
import { Tile } from '@mmenavas/memory-game-builder'
import './Cards.css'

export interface CardProps {
  tile: Tile<string>,
  reveal?: MouseEventHandler<HTMLElement>
}

export const Card: FC<CardProps> = ({ tile, reveal }) => {
  return (
    <div className={'card' + (tile.isRevealed ? ' card--revealed' : '')} onClick={reveal}>
      {tile.isRevealed
        ? <span>{tile.value}</span>
        : '?'}
    </div>
  )
}
