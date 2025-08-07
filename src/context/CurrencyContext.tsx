
"use client";

import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';

type Currency = 'INR' | 'USD' | 'EUR';

interface CurrencyContextType {
  currency: Currency;
  nextCurrency: Currency;
  toggleCurrency: () => void;
  formatPrice: (amount: number, targetCurrency?: Currency) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const INR_TO_USD_RATE = parseFloat(process.env.NEXT_PUBLIC_INR_TO_USD_RATE || '0.012');
const INR_TO_EUR_RATE = parseFloat(process.env.NEXT_PUBLIC_INR_TO_EUR_RATE || '0.011');

const currencyCycle: Currency[] = ['INR', 'USD', 'EUR'];

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>((process.env.NEXT_PUBLIC_DEFAULT_CURRENCY as Currency) || 'INR');

  const toggleCurrency = () => {
    setCurrency((prevCurrency) => {
      const currentIndex = currencyCycle.indexOf(prevCurrency);
      const nextIndex = (currentIndex + 1) % currencyCycle.length;
      return currencyCycle[nextIndex];
    });
  };
  
  const nextCurrency = useMemo(() => {
    const currentIndex = currencyCycle.indexOf(currency);
    const nextIndex = (currentIndex + 1) % currencyCycle.length;
    return currencyCycle[nextIndex];
  }, [currency]);

  const formatPrice = (amount: number, targetCurrency: Currency = currency) => {
    let convertedAmount: number;
    let symbol: string;

    if (targetCurrency === 'USD') {
      convertedAmount = amount * INR_TO_USD_RATE;
      symbol = '$';
    } else if (targetCurrency === 'EUR') {
      convertedAmount = amount * INR_TO_EUR_RATE;
      symbol = '€';
    }
    else {
      convertedAmount = amount;
      symbol = '₹';
    }
    
    return `${symbol}${convertedAmount.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, nextCurrency, toggleCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
