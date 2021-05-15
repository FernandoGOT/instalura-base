// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Link from '../Link'
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

const ButtonWrapper = styled.button`
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
    opacity: 0.5;
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`

const Button = ({ href, children, ...props }) => {
  const hasHref = Boolean(href)
  const tag = hasHref ? Link : 'button'

  return (
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  href: undefined
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Button
