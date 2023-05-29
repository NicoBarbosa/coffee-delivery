import { useContext } from 'react'
import { RemoveButtonContainer } from './styles'

import { Trash } from '@phosphor-icons/react'
import { CartContext } from '../../../../context/CartContext'

interface RemoveButtonProps {
  id: string
}

export function RemoveButton({ id }: RemoveButtonProps) {
  const { removeItem } = useContext(CartContext)
  return (
    <RemoveButtonContainer onClick={() => removeItem(id)}>
      <Trash />
      <span>REMOVER</span>
    </RemoveButtonContainer>
  )
}
