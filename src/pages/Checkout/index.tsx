import {
  AdressContainer,
  CartContainer,
  CoffessSelectedContainer,
  HeaderAdressContainer,
  HeaderPaymentContainer,
  ItemCartEmpty,
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
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import { formatPrice } from '../../utils/formatPrice'
import { useNavigate } from 'react-router-dom'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = zod.object({
  cep: zod.string().min(1),
  rua: zod.string().min(1).max(20),
  numero: zod.number().min(1),
  complemento: zod.string().max(20),
  bairro: zod.string().min(1).max(25),
  cidade: zod.string().min(1).max(15),
  uf: zod.string().max(2),
  payment: zod.string(),
})

type Schema = zod.infer<typeof schema>

export function Checkout() {
  const { cart, onAddAddress } = useContext(CartContext)

  const { register, handleSubmit, watch } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const navigate = useNavigate()
  function onSubmit(data: Schema) {
    onAddAddress(data)
    navigate('/cart/success')
  }

  const bairroWatch = watch('bairro', '')

  const amountOfCoffeesInCart = cart.reduce(
    (accu, current) => accu + current.amount,
    0,
  )
  const priceSumOfAmountCoffess = 9.9 * amountOfCoffeesInCart
  let total = priceSumOfAmountCoffess
  let deliveryPrice = 0
  if (bairroWatch.length >= 5) {
    deliveryPrice = Math.floor(Math.random() * 20)
    total += deliveryPrice
  }

  const disabledButton = cart.length < 1

  return (
    <CartContainer>
      <section>
        <form onSubmit={handleSubmit(onSubmit)} id="addressForm">
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
              <input
                type="text"
                placeholder="CEP"
                maxLength={8}
                required
                {...register('cep')}
              />
              <input
                type="text"
                placeholder="Rua"
                maxLength={20}
                required
                {...register('rua')}
              />
              <span>
                <input
                  type="number"
                  required
                  placeholder="Número"
                  {...register('numero', { valueAsNumber: true })}
                />
                <input
                  type="text"
                  maxLength={20}
                  placeholder="Complemento"
                  {...register('complemento')}
                />
              </span>
              <span>
                <input
                  type="text"
                  required
                  maxLength={25}
                  placeholder="Bairro"
                  {...register('bairro')}
                />
                <input
                  type="text"
                  required
                  maxLength={15}
                  placeholder="Cidade"
                  {...register('cidade')}
                />
                <input
                  type="text"
                  placeholder="UF"
                  maxLength={2}
                  required
                  {...register('uf')}
                />
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
                value="Cartão de crédito"
                required
                {...register('payment')}
              />
              <label htmlFor="credit">
                <CreditCard />
                <span>CARTÃO DE CRÉDITO</span>
              </label>
              <input
                type="radio"
                id="debit"
                value="Cartão de débito"
                {...register('payment')}
              />
              <label htmlFor="debit">
                <Bank />
                <span>CARTÃO DE DÉBITO</span>
              </label>
              <input
                type="radio"
                id="money"
                value="Dinheiro"
                {...register('payment')}
              />
              <label htmlFor="money">
                <Money />
                <span>DINHEIRO</span>
              </label>
            </PaymentOptions>
          </PaymentContainer>
        </form>
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
            <ItemCartEmpty>
              Poxa, sem doses de felicidade por aqui! 😔 ☕️
            </ItemCartEmpty>
          )}
          <footer>
            <TotalContainer>
              <div>
                <span>Total de itens</span>
                <span>Entrega</span>
                <strong>Total</strong>
              </div>
              <div>
                <span>R${formatPrice(priceSumOfAmountCoffess)}</span>
                <span>R${formatPrice(deliveryPrice)}</span>
                <strong>R${formatPrice(total)}</strong>
              </div>
            </TotalContainer>
            <button form="addressForm" type="submit" disabled={disabledButton}>
              CONFIRMAR PEDIDO
            </button>
          </footer>
        </CoffessSelectedContainer>
      </section>
    </CartContainer>
  )
}
