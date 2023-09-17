import './globals.css'

export const metadata = {
  title: 'Armando Lara',
  description: 'This is my personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
