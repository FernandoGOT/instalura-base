import React from 'react'
import user from '@testing-library/user-event'

import TextField from './index'
import { render, screen } from '../../../infra/test/testUtils'

describe('<TextField />', () => {
  test('render component', () => {
    render(<TextField name="nome" value="Fernando" placeholder="Nome" onChange={() => {}} />)

    // screen.debug()

    const textField = screen.getByPlaceholderText(/nome/i)

    expect(textField).toMatchSnapshot()
  })

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const conChangeMock = jest.fn()

        render(<TextField name="name" placeholder="Nome" onChange={conChangeMock} value="" />)

        const inputName = screen.getByPlaceholderText(/nome/i)

        user.type(inputName, 'Fernando GOT')

        expect(conChangeMock).toHaveBeenCalledTimes(12)
      })
    })
  })

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      render(
        <TextField
          isTouched
          name="email"
          placeholder="Email"
          onChange={() => {}}
          value="fernandoteste.com"
          error="O campo email e obrigatório"
        />
      )

      const inputEmail = screen.getByPlaceholderText(/email/i)
      expect(inputEmail).toHaveValue('fernandoteste.com')
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email e obrigatório')
      expect(inputEmail).toMatchSnapshot()
    })
  })
})
