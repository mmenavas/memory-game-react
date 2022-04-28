export type LanguageCode = 'en' | 'es'
export type StatuMessageType = 'firstMatch' | 'nextCard' | 'match' | 'notAMatch' | 'win'
export type StatusMessage = {
  language: LanguageCode,
  message: string,
  type: StatuMessageType
}

export default class StatusMessageProvider {
  messages: StatusMessage[] = []

  findMessage(type: StatuMessageType, language: LanguageCode): string {
    const msg = this.messages.find(message => (message.type === type) && (message.language === language))

    return (msg === undefined) ? '' : msg.message
  }
}
