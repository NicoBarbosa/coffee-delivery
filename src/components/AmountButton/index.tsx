import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { AmountButtonContainer } from './styles'

interface AmountButtonProps {
  amountValue: (value: number) => void
}

export function AmountButton({ amountValue }: AmountButtonProps) {
  const [amount, setAmount] = useState(() => 1)

  function addAmount() {
    setAmount((state) => state + 1)
    amountValue(amount)
  }
  function decrementAmount() {
    setAmount((state) => state - 1)
    amountValue(amount)
  }

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
