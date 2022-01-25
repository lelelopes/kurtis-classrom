import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 21.8rem;
    height: 2.8rem;
  `,
  medium: () => css`
    width: 37.2rem;
    height: 4.8rem;
  `,
  large: () => css`
    width: 41.3rem;
    height: 5.1rem;
  `,
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    .icon {
      color: ${color === 'primary' ? theme.colors[color!] : theme.colors.white};
    }

    .text {
      color: ${color === 'primary' ? theme.colors.dark : theme.colors.white};
    }

    ${!!size && wrapperModifiers[size]}
  `}
`
