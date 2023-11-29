import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'

type rootprops = {
  children : React.ReactNode
}


export default function RootLayout({
  children,
}: rootprops) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
