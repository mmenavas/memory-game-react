import React from 'react'
import {render, screen} from '@testing-library/react'

import Card from '../Card'

describe('Running Test for <Card />', () => {

  test('Required props', () => {
    render(<Card id='1234' name='test' isRevealed={false} />)
    expect(screen.getByText('?')).toBeInTheDocument()
  })

})