import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tile } from '@mmenavas/memory-game-builder'

import { Card, CardProps } from '../Card'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
  },
} as Meta<typeof Card>

const Template: Story<CardProps> = (args) => <Card {...args}>{args.tile.isRevealed ? args.tile.value : '?' }</Card>
const tile1 = new Tile('A')
export const Unrevealed = Template.bind({})
Unrevealed.args = {
  tile: tile1,
}

const tile2 = new Tile('B')
tile2.reveal()
export const Revealed = Template.bind({})
Revealed.args = {
  tile: tile2,
}

const tile3 = new Tile('C')
tile3.reveal()
export const WithChildren = Template.bind({})
WithChildren.args = {
  tile: tile3,
  children: (<strong>{tile3.value}</strong>)
}