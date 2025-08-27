import './globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Assignment 1 – Tabs Generator',
  description: 'Generates HTML+JS with inline CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Use Header component */}
        <Header studentNumber="21910858" studentName="Yuvraj Singh Bassi" />

        <main>{children}</main>

        {/* Use Footer component */}
        <Footer studentNumber="21910858" studentName="Yuvraj Singh Bassi" />
      </body>
    </html>
  )
}
