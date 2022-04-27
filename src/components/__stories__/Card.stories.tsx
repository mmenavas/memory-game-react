import React from 'react'
import { Story, Meta } from '@storybook/react'

import Card from '../Card'
import { CardProps } from '../Card.types'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
  },
} as Meta<typeof Card>

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Unrevealed = Template.bind({})
Unrevealed.args = {
  id: '1234',
  name: 'Default',
  isRevealed: false
}