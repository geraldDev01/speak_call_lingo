import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = (props) => {
  return (
    <main>
     <Header />
     {props.children}

     <Footer />
    </main>
  )
}
