import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import theme from 'styles/themes/default'

import Logo from '.'

describe('<Logo />', () => {
  it('should render by default', () => {
    const { container } = renderWithTheme(<Logo />)

    const icon = container.querySelector('svg > path:nth-child(1)')
    const text = container.querySelector('svg > path:nth-child(2)')

    expect(screen.getByLabelText('Kurtis Classrom').parentElement).toHaveStyle({
      width: '41.3rem',
      height: '5.1rem',
    })

    expect(icon).toHaveStyle({
      color: theme.colors.primary,
    })

    expect(text).toHaveStyle({
      color: theme.colors.dark,
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render on secondary version', () => {
    const { container } = renderWithTheme(<Logo color="secondary" />)

    const icon = container.querySelector('svg > path:nth-child(1)')
    const text = container.querySelector('svg > path:nth-child(2)')

    expect(icon).toHaveStyle({
      color: theme.colors.white,
    })

    expect(text).toHaveStyle({
      color: theme.colors.white,
    })
  })

  it('should render the Logo in small size', () => {
    renderWithTheme(<Logo size="small" />)

    expect(screen.getByLabelText('Kurtis Classrom').parentElement).toHaveStyle({
      width: '21.8rem',
      height: '2.8rem',
    })
  })

  it('should render the Logo in medium size', () => {
    renderWithTheme(<Logo size="medium" />)

    expect(screen.getByLabelText('Kurtis Classrom').parentElement).toHaveStyle({
      width: '37.2rem',
      height: '4.8rem',
    })
  })
})
