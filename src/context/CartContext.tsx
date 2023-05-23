import { ReactNode, createContext, useState } from 'react'

export interface CoffeeType {
  id: string
  images: string
  attributes: string[]
  coffeeType: string
  description: string
  price: number
  amount: number
}

interface CartContextProps {
  cart: CoffeeType[]
  addCart: (product: CoffeeType) => void
}

interface CartProviderType {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderType) {
  const [cart, setCart] = useState([] as CoffeeType[])

  function addCart(product: CoffeeType) {
    const copyCart = [...cart]

    const productIndex = copyCart.findIndex((item) => item.id === product.id)
    const coffee = copyCart.find((item) => item.id === product.id)

    if (coffee || productIndex > 0) {
      return copyCart
      // copyCart[productIndex].amount += product.amount
    } else {
      copyCart.push(product)
    }

    setCart(copyCart)
  }
  console.log(cart)
  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
