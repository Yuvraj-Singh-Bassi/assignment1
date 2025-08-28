import './globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ThemeProvider } from '../../components/ThemeContext'

export const metadata = {
  title: 'Assignment 1 – Tabs Generator',
  description: 'Generates HTML+JS with inline CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header studentNumber="21910858" studentName="Yuvraj Singh Bassi" />
          <main>{children}</main>
          <Footer studentNumber="21910858" studentName="Yuvraj Singh Bassi" />
        </ThemeProvider>
      </body>
    </html>
  )
}
