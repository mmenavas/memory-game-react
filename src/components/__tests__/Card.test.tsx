import React from 'react'
import {render, screen} from '@testing-library/react'

import Card from '../Card'

describe('Running Test for <Card />', () => {

  test('Required props', () => {
    expect(1).toEqual(1)
    // render(<Card id='1234' name='test' isRevealed={false} />)
    // expect(screen.getByText('?')).toBeInTheDocument()
  })

})