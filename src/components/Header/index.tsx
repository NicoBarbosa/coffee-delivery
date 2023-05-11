import {
  CartButton,
  FixedMenuContainer,
  HeaderContainer,
  LocationInfoAndCart,
} from './styles'
import { NavLink } from 'react-router-dom'

import logoCoffee from '../../assets/coffee-logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <FixedMenuContainer>
      <HeaderContainer>
        <NavLink to={'/'} title="Cardapio">
          <img src={logoCoffee} alt="Coffee Delivery Logo" />
        </NavLink>

        <LocationInfoAndCart>
          <span>
            <MapPin size={22} weight="fill" fill={defaultTheme.purple} />
            Porto Alegre, RS
          </span>
          <NavLink to={'/cart'} title="Carrinho de compras">
            <CartButton>
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </LocationInfoAndCart>
      </HeaderContainer>
    </FixedMenuContainer>
  )
}
