
"use client";

import { useCurrency } from '@/context/CurrencyContext';

interface PriceDisplayProps {
  price: number;
}

export function PriceDisplay({ price }: PriceDisplayProps) {
  const { formatPrice } = useCurrency();
  const salePrice = price * 2;

  return (
    <div className="flex items-center gap-2">
      <p className="text-sm text-muted-foreground line-through">{formatPrice(salePrice)}</p>
      <p className="text-lg font-semibold text-primary">{formatPrice(price)}</p>
    </div>
  );
}
