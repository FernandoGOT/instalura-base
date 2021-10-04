import React from 'react'
import { render, screen } from '../../../infra/test/testUtils'

import TextField from './index'

describe('<TextField />', () => {
  test('render component', () => {
    render(<TextField name="nome" value="Fernando" placeholder="Nome" onChange={() => {}} />)

    // screen.debug()

    const textField = screen.getByPlaceholderText(/nome/i)

    expect(textField).toMatchSnapshot()
  })
})
