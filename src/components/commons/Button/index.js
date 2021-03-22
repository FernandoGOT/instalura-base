// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import get from 'lodash/get'
import styled, { css } from 'styled-components'

import propToStyle from '../../../theme/utils/propToStyle'
import { TextStyleVariantsMap } from '../../foundation/Text'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

const ButtonGhost = css`
  background: transparent;
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`

const Button = styled.button`
  border: 0;
  opacity: 1;
  cursor: pointer;
  font-weight: bold;
  padding: 12px 26px;
  border-radius: 8px;
  ${TextStyleVariantsMap.smallestException}
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity ${({ theme }) => theme.transition};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5
  }

  ${breakpointsMedia({
  xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
  md: css`
      ${TextStyleVariantsMap.paragraph1}
    `
})}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`

Button.defaultProps = {
  variant: 'primary.main'
}

export default Button
