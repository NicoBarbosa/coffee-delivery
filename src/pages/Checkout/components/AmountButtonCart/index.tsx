import { Minus, Plus } from '@phosphor-icons/react'
import { AmountButtonContainerCart } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'

interface AmountButtonProps {
  amount: number
  id: string
}

export function AmountButtonCart({ amount, id }: AmountButtonProps) {
  const { addAmount, decrementAmount } = useContext(CartContext)
  return (
    <AmountButtonContainerCart>
      <button onClick={() => decrementAmount(id)}>
        <Minus weight="bold" />
      </button>
      <span>{amount}</span>
      <button onClick={() => addAmount(id)}>
        <Plus weight="bold" />
      </button>
    </AmountButtonContainerCart>
  )
}
