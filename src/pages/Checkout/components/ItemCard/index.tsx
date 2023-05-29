import { ItemActionsContainer, ItemCardContainer, ItemInfos } from './styles'

import { RemoveButton } from '../RemoveButton'
import { AmountButtonCart } from '../AmountButtonCart'
import { formatPrice } from '../../../../utils/formatPrice'

interface ItemCardProps {
  id: string
  images: string
  coffeeType: string
  price: number
  amount: number
}

export function ItemCard({
  id,
  coffeeType,
  amount,
  images,
  price,
}: ItemCardProps) {
  return (
    <ItemCardContainer>
      <img src={images} alt={coffeeType} />
      <ItemActionsContainer>
        <ItemInfos>
          <span>{coffeeType}</span>
          <div>
            <AmountButtonCart id={id} amount={amount} />
            <RemoveButton id={id} />
          </div>
        </ItemInfos>
        <div>
          <strong>{formatPrice(price)}</strong>
        </div>
      </ItemActionsContainer>
    </ItemCardContainer>
  )
}
