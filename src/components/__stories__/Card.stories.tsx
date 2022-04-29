import React from 'react'
import { Story, Meta } from '@storybook/react'

import Card from '../Card'
import { CardProps } from '../Card.types'
import Tile from '../../models/Tile'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
  },
} as Meta<typeof Card>

const Template: Story<CardProps> = (args) => <Card {...args} />
const tile = new Tile('A')

export const Unrevealed = Template.bind({})
Unrevealed.args = {
  tile: tile,
}