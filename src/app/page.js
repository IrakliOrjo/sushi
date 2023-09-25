"use client"
import React,{useState, useEffect} from 'react'
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
import Sets from './components/Sets'
import Promotions from './components/Promotions'


export default function Home() {


 


  return (
    <main className="bg-white w-full overflow-hidden flex flex-col">
      {/*Header */}
      <Header />
      {/*Banner */}
      <Banner />
      {/*Doshi */}
      <Doshi />
      <Sets /> 
      {/*Menu */}
      {/* <Menu />*/}
      {/*Delivery */}
      <Delivery />
      <Promotions />
      {/*Header */}
      {/*About */}
     {/* <About />*/}
      {/*Reviews */}
     {/* <Reviews />*/}
      {/*Contact Us */}
      <Contact />
      {/*Footer */}
      <Footer />
    </main>
  )
}
