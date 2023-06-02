import {
  City,
  SuccessContainer,
  Summary,
  SummaryContainer,
  SummaryPinsInformations,
  TitleContainer,
} from './styles'
import deliveryMan from './assets/deliveryMan.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Success() {
  const { address } = useContext(CartContext)
  return (
    <SuccessContainer>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </TitleContainer>
      <SummaryContainer>
        <Summary>
          <SummaryPinsInformations>
            <i className="mapPin">
              <MapPin weight="fill" />
            </i>
            <span>
              <div>
                Entrega em{' '}
                <strong>
                  {address.rua}, {address.numero}
                </strong>
              </div>
              <City>
                {address.bairro} - {address.cidade}, {address.uf}
              </City>
            </span>
          </SummaryPinsInformations>
          <SummaryPinsInformations>
            <i className="timerPin">
              <Timer weight="fill" />
            </i>
            <span>
              Previsão de entrega<strong> 20 min - 30 min </strong>
            </span>
          </SummaryPinsInformations>
          <SummaryPinsInformations>
            <i className="dollarPin">
              <CurrencyDollar />
            </i>
            <span>
              Pagamento na entrega <strong>{address.payment}</strong>
            </span>
          </SummaryPinsInformations>
        </Summary>
        <img src={deliveryMan} alt="Delivery Man Image" />
      </SummaryContainer>
    </SuccessContainer>
  )
}
