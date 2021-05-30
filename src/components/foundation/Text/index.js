import React from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Link from '../../commons/Link'
import propToStyle from '../../../theme/utils/propToStyle'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `
    })}
  `
}

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`
const Text = ({ tag, variant, children, href, ...props }) => {
  if (href) {
    return (
      <TextBase as={Link} href={href} variant={variant} {...props}>
        {children}
      </TextBase>
    )
  }

  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string
}

Text.defaultProps = {
  href: '',
  tag: 'span',
  children: null,
  variant: 'paragraph1'
}

export default Text
