import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='flex gap-4 mb-20 px-11 justify-between'>
        <div className='flex  flex-col max-w-[38em] pt-11 pl-8'>
            <h1 className='font-[700] text-[2.5rem] text-[#2d2b2b] mb-6'>Доставка Японской кухни по Еревану </h1>
            <p className='max-w-[29em] mb-6 tracking-wide'>Суши и роллы из свежих морепродуктов от лучших шеф-поваров Северной столицы</p>
            <p className='max-w-[27em] mb-14 tracking-wide'>Сделайте заказ от 1 000 ₽  и получите набор «Суши Мастер» в подарок</p>
            <button className='bg-red-800 text-white font-[700] flex justify-center items-center 
            w-[260px] h-[71px] rounded-full'>Заказать</button>
        </div>
        <div className=''>
        <Image className='rounded-[3em] min-w-[400px] w-full h-full' src={'/shushi1.png'} width={508} height={411} />
        </div>
    </div>
  )
}

export default Banner