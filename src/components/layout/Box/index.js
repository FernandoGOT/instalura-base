import styled from 'styled-components'

import propToStyle from '../../../theme/utils/propToStyle'

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('padding')}
  ${propToStyle('flexWrap')}
  ${propToStyle('boxShadow')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`

export default Box
