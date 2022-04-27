import React from 'react'
import { Story, Meta } from '@storybook/react'

import Card from '../Card'
import MemoryGameBoard from '../MemoryGameBoard'
import { MemoryGameBoardProps } from '../MemoryGameBoardProps.types'

export default {
  title: 'MemoryGameBoard',
  component: MemoryGameBoard,
  argTypes: {},
} as Meta<typeof Card>

const Template: Story<MemoryGameBoardProps> = (args) => <MemoryGameBoard {...args} />

export const defaultBoard = Template.bind({})
defaultBoard.args = {
  cards: [
    {
      name: 'A'
    },
    {
      name: 'B'
    },
    {
      name: 'C'
    },
    {
      name: 'D'
    },
    {
      name: 'E'
    },
    {
      name: 'F'
    },
  ]
}