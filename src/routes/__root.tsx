import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { CartProvider } from '@/context/CartContext'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CartDrawer } from '@/components/CartDrawer'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'GetItMart — Everything You Need, All in One Place' },
      { name: 'description', content: 'GetItMart — your one-stop destination for electronics, clothing, sports, and everyday home essentials.' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  return (
    <DarkModeProvider>
      <CartProvider>
        <Header />
        <CartDrawer />
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </DarkModeProvider>
  )
}