import { screen } from '@testing-library/react'
import { darken } from 'polished'
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'

import { renderWithTheme } from 'utils/test/helpers'

import theme from 'styles/themes/default'

import Button from '.'
import { ThemeProvider } from 'styled-components'

const { getByRole, getByText, getByTestId } = screen

describe('<Button />', () => {
  it('should render by default', () => {
    const { container } = renderWithTheme(<Button>Button</Button>)

    const button = getByRole('button', { name: 'Button' })

    expect(button).toHaveStyle({
      background: theme.colors.primary,
      width: '11rem',
      height: '4.4rem',
      'font-size': theme.font.sizes.medium,
      'border-radius': theme.border.radius.small,
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the correct sizes', () => {
    const { rerender } = renderWithTheme(<Button size="medium">Button</Button>)

    const button = getByRole('button', { name: 'Button' })

    expect(button).toHaveStyle({
      width: '15.9rem',
      height: '5.3rem',
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Button size="large">Button</Button>
      </ThemeProvider>,
    )

    expect(button).toHaveStyle({
      width: '25.5rem',
      height: '5.6rem',
    })
  })

  it('should render the secondary variant', () => {
    renderWithTheme(<Button variant="secondary">Button</Button>)

    const button = getByRole('button', { name: 'Button' })

    expect(button).toHaveStyle({
      background: theme.colors.secondary,
      'box-shadow': 'none',
    })

    expect(button).toHaveStyleRule(
      'background',
      darken(0.1, theme.colors.secondary),
      {
        modifier: ':hover',
      },
    )
  })

  it('should render a icon version', () => {
    renderWithTheme(
      <Button icon={<RightArrowAlt data-testid="icon" />}>Button</Button>,
    )

    const span = getByText('Button')
    const icon = getByTestId('icon')
    const button = getByRole('button', { name: 'Button' })

    expect(span).toBeInTheDocument()
    expect(span).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
      'line-height': theme.font.sizes.xlarge,
      'font-style': 'normal',
      'font-weight': theme.font.bold,
      padding: '2.4rem',
    })

    expect(icon).toBeInTheDocument()

    expect(button).toHaveStyle({
      width: '33rem',
      height: '7.3rem',
      'box-shadow': 'none',
      background: theme.colors.white,
      'border-radius': theme.border.radius.huge,
      color: theme.colors.gray,
      'font-size': theme.font.sizes.xlarge,
    })
  })

  it('should render the outline variant', () => {
    renderWithTheme(<Button variant="outline">Button</Button>)

    const button = getByRole('button', { name: 'Button' })

    expect(button).toHaveStyle({
      'box-shadow': 'none',
      background: 'none',
      border: `1px solid ${theme.colors.gray}`,
      color: theme.colors.gray,
    })
  })
})
