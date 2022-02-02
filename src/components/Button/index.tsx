import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: JSX.Element
} & ButtonTypes

export const Button = ({
  children,
  variant = 'primary',
  size = 'small',
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper variant={variant} size={size} hasIcon={!!icon} {...props}>
    {!!children && <span>{children}</span>}
    {icon}
  </S.Wrapper>
)

export default Button
