import { Minus, Plus } from '@phosphor-icons/react'
import { AmountButtonContainer } from './styles'

interface AmountButtonProps {
  amount: number
  addAmount: () => void
  decrementAmount: () => void
}

export function AmountButton({
  amount,
  addAmount,
  decrementAmount,
}: AmountButtonProps) {
  return (
    <AmountButtonContainer>
      <button onClick={() => decrementAmount()}>
        <Minus weight="bold" />
      </button>
      <span>{amount}</span>
      <button onClick={() => addAmount()}>
        <Plus weight="bold" />
      </button>
    </AmountButtonContainer>
  )
}
