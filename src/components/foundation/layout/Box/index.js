import styled from 'styled-components'

import propToStyle from '../../../../theme/utils/propToStyle'

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('width')}
  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${propToStyle('padding')}
  ${propToStyle('flexWrap')}
  ${propToStyle('boxShadow')}
  ${propToStyle('listStyle')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginBottom')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`

export default Box
