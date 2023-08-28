// import { useUser } from 'contexts/User'
import { Footer } from '@/layouts/Footer'
import { Header } from '@/layouts/Header/Header'
import { ReactNode } from 'react'

export function Layout(props: { children: ReactNode }) {
  return (
    <>
        <Header />
        {props.children}
        {/* <WhatsAppIcon /> */}
        <Footer />
        </>
  )
}
