import Button from 'components/Button'

import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
import { MenuAltRight } from '@styled-icons/boxicons-regular/MenuAltRight'

import Logo from 'components/Logo'

import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Logo />
    <S.MenuGroup data-testid="menu-group">
      <span>
        EN <ArrowIosDownwardOutline size={32} />
      </span>
      <Button>Sign Up</Button>
      <Button variant="outline">Log in</Button>
      <MenuAltRight aria-label="Abrir Menu" size={34} />
    </S.MenuGroup>
  </S.Wrapper>
)

export default Header
