import { css } from 'styled-components'

import { breakpoints } from '../index'

const breakpointsMedia = (cssByBreakpoint) => {
  const breakpointsNames = Object.keys(cssByBreakpoint)

  return breakpointsNames.filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName])).map(breakpointName => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoint[breakpointName]}
      }
    `
  })
}

export default breakpointsMedia