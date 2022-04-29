import { MouseEventHandler } from 'react'
import Tile from '../models/Tile'

export interface CardProps {
  tile: Tile,
  reveal?: MouseEventHandler<HTMLElement>
}
