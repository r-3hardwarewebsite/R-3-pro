import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"
import { LoadingShutter } from '@/components/LoadingShutter';
import { ThemeProvider } from '@/components/ThemeProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { CurrencyProvider } from '@/context/CurrencyContext';
import { CurrencySwitcher } from '@/components/CurrencySwitcher';
import DisableDevTools from '@/components/DisableDevTools';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';

export const metadata: Metadata = {
  title: {
    default: 'R-3 Hardware',
    template: '%s | R-3 Hardware',
  },
  description: 'R-3 Hardware: Brass door hardware, redefined. Specilized in design, development & deliver Brass Mortise handles, Pull & Cabinet handles and other door hardware fittings ' , 
  metadataBase: new URL('https://r-3.in'), // Replace with your actual domain
  openGraph: {
    title: 'R-3 Hardware',
    description: 'R-3 Hardware: Brass door hardware, redefined. Specilized in design, development & deliver Brass Mortise handles, Pull & Cabinet handles and other door hardware fittings',
    url: 'https://r-3.in', // Replace with your actual domain
    siteName: 'R-3 Hardware',
    images: [
      {
        url: '/og-image.png', // Replace with your OG image path
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// deploy 1
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CurrencyProvider>
            <CustomCursor />
            <LoadingShutter />
            <div className="relative min-h-screen">
                <Header />
                <main>{children}</main>
                <Footer />
                <WhatsAppWidget />
                <CurrencySwitcher />
            </div>
            <Toaster />
          </CurrencyProvider>
        </ThemeProvider>
        {/* <DisableDevTools /> */}
      </body>
    </html>
  );
}
