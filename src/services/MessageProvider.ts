export type LanguageCode = 'en' | 'es'
export type MessageCode = 'startGame' | 'startTurn' | 'firstTileRevealed' | 'match' | 'notAMatch' | 'allTilesRevealed' | 'gameOverError' | 'tileAlreadyRevealedError'
export type MessageType = 'status' | 'warning' | 'error'
export type Message = {
  language: LanguageCode
  message: string
  code: MessageCode
  type: MessageType
}

export class MessageProvider {
  messages: Message[] = []

  constructor(messages: Message[]) {
    this.messages = messages
  }

  findMessage(code: MessageCode, language: LanguageCode): string {
    const msg = this.messages.find(message => (message.code === code) && (message.language === language))

    return (msg === undefined) ? '' : msg.message
  }
}
