import { ReactNode, createContext, useState } from 'react'
import { toast } from 'react-toastify'

export interface CoffeeType {
  id: string
  images: string
  attributes: string[]
  coffeeType: string
  description: string
  price: number
  amount: number
}

interface AddressProps {
  cep: string
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
  payment: string
}

interface CartContextProps {
  cart: CoffeeType[]
  address: AddressProps
  addCart: (product: CoffeeType) => void
  addAmount: (id: string) => void
  decrementAmount: (id: string) => void
  removeItem: (id: string) => void
  onAddAddress: (data: AddressProps) => void
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

  const [address, setAddress] = useState<AddressProps>(() => {
    const storageAdress = localStorage.getItem('@AddressInformations-1.0.0')

    if (storageAdress) {
      return JSON.parse(storageAdress)
    }

    return ''
  })

  function onAddAddress(data: AddressProps) {
    setAddress(data)
    localStorage.setItem('@AddressInformations-1.0.0', JSON.stringify(data))
  }

  function addCart(product: CoffeeType) {
    const copyCart = [...cart]

    const productIndex = copyCart.findIndex((item) => item.id === product.id)
    const coffee = copyCart.find((item) => item.id === product.id)

    if (coffee || productIndex > 0) {
      toast.error('O café já está no carrinho!', {
        position: 'bottom-right',
        autoClose: 2000,
      })
      return copyCart
    } else {
      copyCart.push(product)
      toast.success('☕️ Café adicionado!', {
        position: 'bottom-right',
        autoClose: 2000,
      })
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

  return (
    <CartContext.Provider
      value={{
        cart,
        address,
        addCart,
        addAmount,
        decrementAmount,
        removeItem,
        onAddAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
