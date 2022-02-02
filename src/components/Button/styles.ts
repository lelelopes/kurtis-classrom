import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'variant'>

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    transition: background ${theme.transition.default};
    background: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    box-shadow: none;
    transition: background ${theme.transition.default};
    background: ${theme.colors.secondary};

    &:hover {
      background: ${darken(0.1, theme.colors.secondary)};
    }
  `,
  outline: (theme: DefaultTheme) => css`
    box-shadow: none;
    background: none;
    border: 1px solid ${theme.colors.gray};
    color: ${theme.colors.gray};
    transition: filter ${theme.transition.default};

    &:hover {
      filter: brightness(0.8);
    }
  `,
  small: () => css`
    width: 11rem;
    height: 4.4rem;
  `,
  medium: () => css`
    width: 15.9rem;
    height: 5.3rem;
  `,
  large: () => css`
    width: 25.5rem;
    height: 5.6rem;
  `,
  withIcon: (theme: DefaultTheme) => css`
    width: 33rem;
    height: 7.3rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius.huge};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xlarge};
    box-shadow: none;

    &:hover {
      filter: brightness(0.95);
    }

    span {
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xlarge};
      font-style: normal;
      font-weight: ${theme.font.bold};
      padding: 2.4rem;

      & + svg {
        width: 5.2rem;
      }
    }
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, variant, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.extraBold};
    border: 0;
    border-radius: ${theme.border.radius.small};
    cursor: pointer;
    text-decoration: none;
    box-shadow: inset 0px -4px 1px rgba(0, 0, 0, 0.6);
    transition: background ${theme.transition.fast};

    &:hover {
      background: ${`${
        hasIcon || variant === 'outline' ? '' : theme.colors.hover
      }`};
    }

    ${!!size && wrapperModifiers[size]()};
    ${variant === 'primary' && wrapperModifiers.primary(theme)};
    ${variant === 'secondary' && wrapperModifiers.secondary(theme)};
    ${variant === 'outline' && wrapperModifiers.outline(theme)};
    ${hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`
