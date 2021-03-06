import React from 'react'
import get from 'lodash/get'
import NextLink from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) => (color ? `color: ${get(theme, `colors.${color}.color`)}` : 'color: inherit;')};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

const Link = ({ href, children, ...props }) => (
  <NextLink href={href} passHref>
    <StyledLink {...props}>{children}</StyledLink>
  </NextLink>
)

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
