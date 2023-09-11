
import Image from 'next/image'

import Header from './components/Header'
import Banner from './components/Banner'
import Doshi from './components/Doshi'
import Menu from './components/Menu'
import Delivery from './components/Delivery'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-white flex flex-col px-[15em] py-4">
      {/*Header */}
      <Header />
      {/*Banner */}
      <Banner />
      {/*Doshi */}
      <Doshi />
      {/*Menu */}
      <Menu />
      {/*Delivery */}
      <Delivery />
      {/*Header */}
      {/*About */}
      <About />
      {/*Reviews */}
      <Reviews />
      {/*Contact Us */}
      <Contact />
      {/*Footer */}
      <Footer />
    </main>
  )
}
