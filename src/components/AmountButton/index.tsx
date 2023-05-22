import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { AmountButtonContainer } from './styles'

export function AmountButton() {
  const [amount, setAmount] = useState(() => 1)

  function addAmount() {
    if (amount > 9) {
      return amount
    } else {
      setAmount(amount + 1)
    }
  }

  function decrementAmount() {
    if (amount < 2) {
      return amount
    } else {
      setAmount((state) => state - 1)
    }
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
