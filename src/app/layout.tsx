import type { Metadata } from "next"
import "@/styles/index.css"
import { Footer, NavBar } from '@/components/global'

export const metadata: Metadata = {
  title: "CleanSiv",
  description: "Pagina de inicio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
