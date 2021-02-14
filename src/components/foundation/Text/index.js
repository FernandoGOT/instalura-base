import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export const TextStyleVariantsMap = {
  pharagraph1: css`
  font-size: ${({ theme }) => theme.typographyVariants.pharagraph1.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.pharagraph1.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.pharagraph1.lineHeight};
  `,
  smallestException: css`
  font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,

}


const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
`


const Text = ({ tag, variant, children }) => {
  return (
    <TextBase
      as={tag}
      variant={variant}
    >
      {children}
    </TextBase>
  )
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1'
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
  tag: PropTypes.oneOf['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']
}

export default Text