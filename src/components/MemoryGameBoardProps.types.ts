import { StatusMessageProvider, LanguageCode } from '../models/StatusMessageProvider'
import { CardProps } from './Card.types'

export interface MemoryGameBoardProps {
  name?: string,
  cards: CardProps[],
  messages?: StatusMessageProvider,
  language?: LanguageCode
}
