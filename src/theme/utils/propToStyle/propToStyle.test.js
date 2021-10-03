import propToStyle from './index'

describe('propToStyle()', () => {
  describe('when receives an simple argument', () => {
    test('and it is a string', () => {
      // <Text textAlign="center" />
      const propToStyleResult = propToStyle('textAlign')

      const componentProps = { textAlign: 'center' } // string
      const styleResult = propToStyleResult(componentProps)

      expect(styleResult).toEqual({ textAlign: 'center' })
    })

    test('and it is a number', () => {
      // <Box flex={1} />
      const propToStyleResult = propToStyle('flex')

      const componentProps = { flex: 1 } // number
      const styleResult = propToStyleResult(componentProps)

      expect(styleResult).toEqual({ flex: 1 })
    })
  })

  describe('when receives an argument with breakpoints', () => {
    test('renders only one breakpoint resolution', () => {
      // <Text textAlign="center" />
      const propToStyleResult = propToStyle('textAlign')

      const componentProps = { textAlign: { xs: 'center' } } // object
      const styleResult = propToStyleResult(componentProps)

      expect(styleResult).toMatchSnapshot()
    })

    test('renders two or more breakpoints resolutions', () => {
      // <Text textAlign="center" />
      const propToStyleResult = propToStyle('textAlign')

      const componentProps = { textAlign: { xs: 'center', md: 'right' } } // object
      const styleResult = propToStyleResult(componentProps)

      expect(styleResult).toMatchSnapshot()
    })
  })
})
