import {
  City,
  SuccessContainer,
  Summary,
  SummaryContainer,
  TitleContainer,
} from './styles'
import deliveryMan from './assets/deliveryMan.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
  return (
    <SuccessContainer>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </TitleContainer>
      <SummaryContainer>
        <Summary>
          <p>
            <i className="mapPin">
              <MapPin weight="fill" />
            </i>
            <span>
              <div>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </div>
              <City>Farrapos - Porto Alegre, RS</City>
            </span>
          </p>
          <p>
            <i className="timerPin">
              <Timer weight="fill" />
            </i>
            <span>
              Previsão de entrega<strong> 20 min - 30 min </strong>
            </span>
          </p>
          <p>
            <i className="dollarPin">
              <CurrencyDollar />
            </i>
            <span>
              Pagamento na entrega <strong>Cartão de Crédito</strong>
            </span>
          </p>
        </Summary>
        <img src={deliveryMan} alt="Delivery Man Image" />
      </SummaryContainer>
    </SuccessContainer>
  )
}
