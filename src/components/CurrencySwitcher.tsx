
"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { Button } from "@/components/ui/button";
import { DollarSign, IndianRupee, Euro } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const currencyInfo = {
  INR: { icon: <IndianRupee className="h-5 w-5" />, symbol: "₹", name: 'INR' },
  USD: { icon: <DollarSign className="h-5 w-5" />, symbol: "$", name: "USD" },
  EUR: { icon: <Euro className="h-5 w-5" />, symbol: "€", name: "Euro" },
};

export function CurrencySwitcher() {
  const { currency, nextCurrency, toggleCurrency } = useCurrency();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          boxShadow: [
            '0 0 0 0px hsl(var(--primary) / 0.3)',
            '0 0 0 6px hsl(var(--primary) / 0)',
            '0 0 0 0px hsl(var(--primary) / 0)',
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
        className="rounded-full"
      >
        <Button
          onClick={toggleCurrency}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "h-12 rounded-full shadow-lg border-2 border-primary/50 bg-background/80 backdrop-blur-sm transition-all duration-300 ease-in-out pl-2 flex items-center gap-2",
            isHovered ? "pr-3" : "pr-4"
          )}
        >
          <div className={cn("flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-primary", 
            isHovered? 'bg-card/50 hidden' : 'bg-primary/20')}>
            {currencyInfo[currency].icon}
          </div>
          <div className="w-auto ">
            {isHovered ? (<div className="flex flex-row justify-between items-center">
              <span className="whitespace-nowrap font-semibold text-sm mr-3">
                Change to 
              </span>
              <div className={cn("flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-primary mr-0", 
                'bg-card/50')}>
                {currencyInfo[nextCurrency].icon}
              </div>
            </div>) : (
              <span className="font-normal text-lg text-primary">
                {currencyInfo[currency].name}
              </span>
            )}
          </div>
          <span className="sr-only">Switch Currency</span>
        </Button>
      </motion.div>
    </motion.div>
  );
}
