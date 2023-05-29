export function formatPrice(value: number) {
  const priceWithFixedNumbers = value.toFixed(2)
  const priceToString = String(priceWithFixedNumbers)
  const priceReplaced = priceToString.replace('.', ',')

  return priceReplaced
}
