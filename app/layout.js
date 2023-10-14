import './globals.css'
import Image from 'next/image'
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Stream TV and Movies Live and Online | Hulu',
  description: 'Watch NFL Games with Hulu + Live TV',
  
}

export default function RootLayout({ children })  {
  return (
    <html lang="en">
    <head>
      <link href='/metalogo.png' rel='icon' sizes='any'/>
    </head>
      <body className='font-inter'>
     
      {children}
      </body>
    </html>
  )
}
