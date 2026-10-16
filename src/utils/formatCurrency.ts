export function formatCurrency(priceCents: number) {
  const price = priceCents / 100;

  return (
    `$${price.toFixed(2)}`
  );
}