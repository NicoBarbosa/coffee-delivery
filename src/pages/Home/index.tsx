import {
  AdvertisingContainer,
  CoffeeTitles,
  HomeContainer,
  ListCardContainer,
  ListContainer,
  TitleContainer,
} from './styles'
import coffeeAdvertising from '../../assets/advertising-coffee.svg'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { CoffeCard } from './components/CoffeCard'

export function Home() {
  return (
    <HomeContainer>
      <AdvertisingContainer>
        <section>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </TitleContainer>
          <ListContainer>
            <div>
              <li>
                <i className="cart">
                  <ShoppingCart size={16} weight="fill" />
                </i>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <i className="timer">
                  <Timer size={16} weight="fill" />
                </i>
                <span>Entrega rápida e rastreada</span>
              </li>
            </div>
            <div>
              <li>
                <i className="package">
                  <Package size={16} weight="fill" />
                </i>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <i className="coffee">
                  <Coffee size={16} weight="fill" />
                </i>
                <span>O café chega fresquinho até você</span>
              </li>
            </div>
          </ListContainer>
        </section>
        <img src={coffeeAdvertising} alt="Imagem de propaganda café" />
      </AdvertisingContainer>
      <CoffeeTitles>Nossos cafés</CoffeeTitles>
      <ListCardContainer>
        <CoffeCard />
      </ListCardContainer>
    </HomeContainer>
  )
}
