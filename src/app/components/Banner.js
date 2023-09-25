import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='flex bg-center lg:bg-top
     bg-black/60 bg-blend-darken bg-pattern min-h-screen bg-cover justify-center items-center'>
        <div className='flex text-center justify-center items-center flex-col'>
            <h1 className='font-[700] text-[1.85rem] md:text-[2.4rem] 
            lg:text-[4rem] w-[15em]  md:w-[15.50em] text-white mb-6'
            >Доставка Японской кухни по Еревану </h1>
            <p className='text-[1rem] md:text-[1.4rem]  text-white'
            >Суши и роллы из свежих морепродуктов от лучших шеф-поваров Северной столицы</p>
            
        
        </div>
        <div className=''>
       
        </div>
    </div>
  )
}

export default Banner