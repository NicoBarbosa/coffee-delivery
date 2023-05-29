import { AmountButton } from '../../../../components/AmountButton'
import {
  ActionsBox,
  AddCartButton,
  AttributeContainer,
  AttributeTag,
  BuyContainer,
  CatalogCardContainer,
} from './styles'

import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { CartContext, CoffeeType } from '../../../../context/CartContext'
import { formatPrice } from '../../../../utils/formatPrice'

interface CoffeCardProps {
  product: CoffeeType
}

export function CoffeCard({ product }: CoffeCardProps) {
  const [amount, setAmount] = useState(1)

  const { addCart } = useContext(CartContext)

  function addAmount() {
    setAmount((state) => state + 1)
  }

  function decrementAmount() {
    setAmount((state) => state - 1)
  }

  function handleAddCart(coffeeCart: CoffeeType) {
    const newProduct: CoffeeType = {
      ...coffeeCart,
      amount,
    }
    addCart(newProduct)
  }

  return (
    <>
      <CatalogCardContainer>
        <img src={product.images} alt={product.coffeeType} />
        <AttributeContainer>
          {product.attributes.map((attr) => {
            return <AttributeTag key={attr}>{attr}</AttributeTag>
          })}
        </AttributeContainer>
        <h3>{product.coffeeType}</h3>
        <p>{product.description}</p>
        <BuyContainer>
          <strong>{formatPrice(product.price)}</strong>
          <ActionsBox>
            <AmountButton
              addAmount={addAmount}
              amount={amount}
              decrementAmount={decrementAmount}
            />
            <AddCartButton onClick={() => handleAddCart(product)}>
              <ShoppingCartSimple weight="fill" />
            </AddCartButton>
          </ActionsBox>
        </BuyContainer>
      </CatalogCardContainer>
    </>
  )
}
