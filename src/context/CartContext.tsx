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
  addAmount: (id: string) => void
  decrementAmount: (id: string) => void
  removeItem: (id: string) => void
}

interface CartProviderType {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderType) {
  const [cart, setCart] = useState<CoffeeType[]>(() => {
    const storage = localStorage.getItem('@CoffeeDelivery:cart-1.0.0')

    if (storage) {
      return JSON.parse(storage)
    }

    return []
  })

  function addCart(product: CoffeeType) {
    const copyCart = [...cart]

    const productIndex = copyCart.findIndex((item) => item.id === product.id)
    const coffee = copyCart.find((item) => item.id === product.id)

    if (coffee || productIndex > 0) {
      return copyCart
    } else {
      copyCart.push(product)
    }

    setCart(copyCart)
    localStorage.setItem('@CoffeeDelivery:cart-1.0.0', JSON.stringify(copyCart))
  }

  function addAmount(id: string) {
    const copyCart = [...cart]

    const item = copyCart.findIndex((item) => item.id === id)

    if (item >= 0) {
      const coffee = copyCart[item]
      copyCart[item].amount = coffee.amount + 1
    }

    setCart(copyCart)
    localStorage.setItem('@CoffeeDelivery:cart-1.0.0', JSON.stringify(copyCart))
  }

  function decrementAmount(id: string) {
    const copyCart = [...cart]

    const item = copyCart.findIndex((item) => item.id === id)

    if (item >= 0) {
      const coffee = copyCart[item]
      copyCart[item].amount = coffee.amount - 1
    }

    setCart(copyCart)
    localStorage.setItem('@CoffeeDelivery:cart-1.0.0', JSON.stringify(copyCart))
  }

  function removeItem(id: string) {
    const copyCart = [...cart]

    const item = copyCart.findIndex((item) => item.id === id)

    if (item >= 0) {
      copyCart.splice(item, 1)
    }

    setCart(copyCart)
    localStorage.setItem('@CoffeeDelivery:cart-1.0.0', JSON.stringify(copyCart))
  }
  console.log(cart)
  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        addAmount,
        decrementAmount,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
