import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavMenu from './NavMenu';
import AuthProvider from './Authprovider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <div className="container">
            <NavMenu />
            {children}
          </div>
        </body>
      </html>
    </AuthProvider>
  )

}
