import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MemoryGameBoard, MemoryGameBoardProps } from '../MemoryGameBoard'
import { Message, MessageProvider } from '../../services/MessageProvider'

export default {
  title: 'MemoryGameBoard',
  component: MemoryGameBoard,
  argTypes: {},
} as Meta<typeof MemoryGameBoard>

const Template: Story<MemoryGameBoardProps> = (args) => <MemoryGameBoard {...args} />
const values = ['A', 'B', 'C', 'D']

export const defaultBoard = Template.bind({})
defaultBoard.args = {
  values: values
}
export const spanishLanguage = Template.bind({})
spanishLanguage.args = {
  values: values,
  language: 'es'
}
const customMessages = [
  {
    'language': 'en',
    'message': 'startGame',
    'type': 'status',
    'code': 'startGame'
  },
  {
    'language': 'en',
    'message': 'startTurn',
    'type': 'status',
    'code': 'startTurn'
  },
  {
    'language': 'en',
    'message': 'firstTileRevealed',
    'type': 'status',
    'code': 'firstTileRevealed'
  },
  {
    'language': 'en',
    'message': 'match',
    'type': 'status',
    'code': 'match'
  },
  {
    'language': 'en',
    'message': 'notAMatch',
    'type': 'status',
    'code': 'notAMatch'
  },
  {
    'language': 'en',
    'message': 'allTilesRevealed',
    'type': 'status',
    'code': 'allTilesRevealed'
  },
  {
    'language': 'en',
    'message': 'gameOverError',
    'type': 'error',
    'code': 'gameOverError'
  },
  {
    'language': 'en',
    'message': 'tileAlreadyRevealedError',
    'type': 'error',
    'code': 'tileAlreadyRevealedError'
  }
]
export const customMessageProvider = Template.bind({})
customMessageProvider.args = {
  values: values,
  messageProvider: new MessageProvider(customMessages as Message[])
}
export const slowConceal = Template.bind({})
slowConceal.args = {
  values: values,
  language: 'en',
  timeoutDuration: 2000
}
export const customTiles = Template.bind({})
const customTileComponent = ({value}) => (<h2>{ value }</h2>)
customTiles.args = {
  values: values,
  TileNode: customTileComponent,
  ConcealedTileNode: () => <div>??</div>,
  language: 'en'
}