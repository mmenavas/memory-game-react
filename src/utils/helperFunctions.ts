import { StatuMessageType, StatusMessages, LanguageCode } from '../components/MemoryGameBoardProps.types'

/**
 * Find a message from a StatusMessages object.
 *
 * @param {StatusMessages} messages
 * @param {StatuMessageType} type
 * @param {LanguageCode} language
 * @returns {string}
 */
function getMessage(messages: StatusMessages, type: StatuMessageType, language: LanguageCode = 'en'): string {
  if (type in messages) {
    const localizedMessage = messages[type].find(item => item.language === language)
    return (localizedMessage !== undefined) ? localizedMessage.message : ''
  }
  return ''
}

export { getMessage }