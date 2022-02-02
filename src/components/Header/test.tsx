import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Header from '.'

const { getByText, getByRole, getByLabelText } = screen

describe('<Header />', () => {
  it('should render correctly Header', () => {
    renderWithTheme(<Header />)

    expect(getByText(/en/i)).toBeInTheDocument()
    expect(getByRole('button', { name: /sign up/i })).toBeInTheDocument()
    expect(getByRole('button', { name: /log in/i })).toBeInTheDocument()
    expect(getByLabelText(/abrir menu/i)).toBeInTheDocument()
  })
})
