
"use client";

import { useCurrency } from '@/context/CurrencyContext';
import { SHOW_PRICES } from '@/lib/siteConfig';

interface PriceDisplayProps {
  price: number;
}

export function PriceDisplay({ price }: PriceDisplayProps) {
  const { formatPrice } = useCurrency();

  if (!SHOW_PRICES) {
    return null;
  }

  const salePrice = price * 2;

  return (
    <div className="flex items-center gap-2">
      <p className="text-sm text-muted-foreground line-through">{formatPrice(salePrice)}</p>
      <p className="text-lg font-semibold text-primary">{formatPrice(price)}</p>
    </div>
  );
}
