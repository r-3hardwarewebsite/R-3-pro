
"use client";

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "What types of materials do you use to produce your products?",
    answer: "We primarily use high-grade solid brass for our core products to ensure durability, longevity, and a premium feel. We also offer pieces in stainless steel and other fine materials for specific collections."
  },
  {
    question: "Do you offer custom designs or finishes?",
    answer: "Yes, we specialize in bespoke creations. Our design team can work with you to create custom hardware tailored to your exact specifications, including unique designs, dimensions, and finishes. Please contact us to discuss your project."
  },
  {
    question: "What is the lead time for orders?",
    answer: "Lead times vary depending on the product and level of customization. In-stock items typically ship within 3-5 business days. For custom orders, the lead time can range from 4 to 8 weeks. We will provide a more accurate estimate when you place your order."
  },
  {
    question: "How do I care for and maintain my hardware?",
    answer: "To maintain the beauty of your hardware, we recommend regular cleaning with a soft, dry cloth. Avoid using harsh chemicals or abrasive cleaners. For polished finishes, a gentle polish can be used periodically to restore shine. Detailed care instructions are provided with each purchase."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship our products worldwide. International shipping rates and delivery times vary by destination. Please proceed to checkout to see the available shipping options and costs for your location."
  }
];

export function Faq() {
  const [openItem, setOpenItem] = useState('item-0');

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
      style={{ 
        backgroundImage: 'url(/img/vector/community.png)', 
        backgroundAttachment: 'scroll', backgroundSize: 'auto', 
        backgroundBlendMode: 'color', 
        backgroundColor: '#00000099',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center bottom'
      }}
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We have answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
          {faqData.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b border-border/50">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <span>{faq.question}</span>
                </div>
                {openItem === `item-${index}` ? <Minus className="h-5 w-5 shrink-0 text-primary" /> : <Plus className="h-5 w-5 shrink-0 text-muted-foreground" />}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}
