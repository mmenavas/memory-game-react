import { MouseEventHandler } from 'react'

export interface CardProps {
  id?: string,
  name: string,
  image?: string,
  isRevealed?: boolean,
  reveal?: MouseEventHandler<HTMLElement>,
}
