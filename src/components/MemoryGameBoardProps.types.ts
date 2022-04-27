import { CardProps } from './Card.types'

export type LanguageCode = 'en' | 'es'

export interface LocalizedMessage {
  language: LanguageCode,
  message: string
}

export interface StatusMessages {
  firstCard: LocalizedMessage[],
  nextCard: LocalizedMessage[],
  match: LocalizedMessage[],
  notAMatch: LocalizedMessage[],
  win: LocalizedMessage[],
}

export type StatuMessageType = keyof StatusMessages;

export interface MemoryGameBoardProps {
  name?: string,
  cards: CardProps[],
  statusMessages?: StatusMessages,
  language?: LanguageCode
}
