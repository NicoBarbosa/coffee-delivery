import {
  AdressContainer,
  CartContainer,
  CoffessSelectedContainer,
  HeaderAdressContainer,
  HeaderPaymentContainer,
  PaymentContainer,
  PaymentOptions,
  TotalContainer,
} from './styles'

import { ItemCard } from './components/ItemCard'

import {
  MapPinLine,
  CurrencyDollarSimple,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import { InputHTMLAttributes, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form'

interface AddressFormProps {
  cep: number
  rua: string
  numero: number
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  payment: InputHTMLAttributes<HTMLInputElement>
}

// A tag Form está por volta do componente inteiro, então toda vez que atualizamos o estado de AMOUNT de cafés, o react-hook-form renderiza, isso pode ser ruim para performance.

export function Checkout() {
  const { cart } = useContext(CartContext)

  const { register, handleSubmit } = useForm<AddressFormProps>()

  function onSubmit(data: AddressFormProps) {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CartContainer>
        <section>
          <h2>Complete seu pedido</h2>
          <AdressContainer>
            <HeaderAdressContainer>
              <i>
                <MapPinLine />
              </i>
              <span>
                <h3>Endereço de Entrega</h3>
                <strong>
                  Informe o endereço onde deseja receber seu pedido
                </strong>
              </span>
            </HeaderAdressContainer>

            <div>
              <input type="number" placeholder="CEP" {...register('cep')} />
              <input type="text" placeholder="Rua" {...register('rua')} />
              <span>
                <input
                  type="number"
                  placeholder="Número"
                  {...register('numero')}
                />
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register('bairro')}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register('cidade')}
                />
                <input type="text" placeholder="UF" {...register('uf')} />
              </span>
            </div>
          </AdressContainer>
          <PaymentContainer>
            <HeaderPaymentContainer>
              <i>
                <CurrencyDollarSimple />
              </i>
              <span>
                <h3>Pagamento</h3>
                <strong>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </strong>
              </span>
            </HeaderPaymentContainer>

            <PaymentOptions>
              <input
                type="radio"
                id="credit"
                value="credit"
                {...register('payment')}
              />
              <label htmlFor="credit">
                <CreditCard />
                <span>CARTÃO DE CRÉDITO</span>
              </label>
              <input
                type="radio"
                id="debit"
                value="debit"
                {...register('payment')}
              />
              <label htmlFor="debit">
                <Bank />
                <span>CARTÃO DE DÉBITO</span>
              </label>
              <input
                type="radio"
                id="money"
                value="money"
                {...register('payment')}
              />
              <label htmlFor="money">
                <Money />
                <span>DINHEIRO</span>
              </label>
            </PaymentOptions>
          </PaymentContainer>
        </section>
        <section>
          <h2>Cafés selecionados</h2>
          <CoffessSelectedContainer>
            {cart.length ? (
              cart.map((item) => {
                return (
                  <ItemCard
                    key={item.id}
                    id={item.id}
                    amount={item.amount}
                    coffeeType={item.coffeeType}
                    images={item.images}
                    price={item.price}
                  />
                )
              })
            ) : (
              <p>nao deu</p>
            )}
            <footer>
              <TotalContainer>
                <div>
                  <span>Total de itens</span>
                  <span>Entrega</span>
                  <strong>Total</strong>
                </div>
                <div>
                  <span>R$ 29,70</span>
                  <span>R$ 3,50</span>
                  <strong>R$ 33,20</strong>
                </div>
              </TotalContainer>
              <button type="submit">CONFIRMAR PEDIDO</button>
            </footer>
          </CoffessSelectedContainer>
        </section>
      </CartContainer>
    </form>
  )
}
