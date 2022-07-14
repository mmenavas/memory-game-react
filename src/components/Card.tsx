import React, { FC, ReactNode } from 'react'
import { MouseEventHandler } from 'react'
import { Tile } from '@mmenavas/memory-game-builder'
import './Cards.css'

export interface CardProps {
  children?: ReactNode
  tile: Tile<ReactNode>
  reveal?: MouseEventHandler<HTMLElement>
}

export const Card: FC<CardProps> = ({ children, tile, reveal, }) => {
  return (
    <div className={'card' + (tile.isRevealed ? ' card--revealed' : '')} onClick={reveal}>
      { children }
    </div>
  )
}
