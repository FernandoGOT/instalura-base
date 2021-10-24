import { act, renderHook } from '@testing-library/react-hooks'
import { useForm } from './index'

describe('useForm()', () => {
  describe('when user types', () => {
    test('change the value', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues: {
            nome: 'Fernando'
          }
        })
      )

      const initialValues = { nome: 'Fernando' }
      expect(result.current.values).toEqual(initialValues)

      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'Gomes'
        }
      }

      act(() => result.current.handleChange(event))

      const newValues = { nome: 'Gomes' }
      expect(result.current.values).toEqual(newValues)
    })
  })
})
