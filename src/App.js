import React from 'react'
import Home from './components/Home'
import Clients from './components/Clients'
import CreateAndSell from './components/CreateAndSell'
import Choose from './components/Choose'
import Marketplace from './components/Marketplace'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div>
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <Marketplace />
      <Subscribe />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
