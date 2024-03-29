import React from 'react'
import user from '@testing-library/user-event'
import FormLogin from './index'
import { render, act, screen, waitFor } from '../../../infra/test/testUtils'

const onSubmit = jest.fn()
onSubmit.mockImplementation((event) => {
  event.preventDefault()
})

describe('<FormLogin />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      await act(async () => render(<FormLogin onSubmit={onSubmit} />))

      expect(screen.getByRole('button')).toBeDisabled()

      const inputUser = screen.getByPlaceholderText('Usuário')
      user.type(inputUser, 'someUserName')
      await waitFor(() => expect(inputUser).toHaveValue('someUserName'))

      const inputPassword = screen.getByPlaceholderText('Senha')
      user.type(inputPassword, 'somePassword')
      await waitFor(() => expect(inputPassword).toHaveValue('somePassword'))

      expect(screen.getByRole('button')).not.toBeDisabled()

      user.click(screen.getByRole('button'))

      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
  })

  describe('when form fields are invalid', () => {
    test('displays the respective errors', async () => {
      render(<FormLogin onSubmit={onSubmit} />)

      const inputUser = screen.getByPlaceholderText('Usuário')
      inputUser.focus()
      inputUser.blur()

      await waitFor(() => screen.getByRole('alert'))

      expect(screen.getByRole('alert')).toHaveTextContent('Preencha ao menos 3 caracteres')
    })
  })
})
