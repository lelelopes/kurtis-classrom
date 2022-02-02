import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: calc(${theme.spacings.xlarge} + 0.2rem) 0;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1.5rem;

    > span {
      font-size: calc(${theme.font.sizes.medium} + 0.2rem);
      text-align: center;
      color: ${theme.colors.darker};

      > svg {
        color: ${theme.colors.darker};
      }
    }

    > button {
      margin-left: ${theme.spacings.xsmall};
    }

    > svg {
      color: ${theme.colors.primary};
      margin-left: calc(${theme.spacings.xlarge} - 0.3rem);
    }
  `}
`
