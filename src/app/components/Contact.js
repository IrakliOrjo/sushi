import React from 'react'

import Image from 'next/image'

import {FaPhoneVolume,FaClock} from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className='bg-zinc-900 p-11 text-center flex flex-col justify-center items-center '>
        <p className='text-[2rem] lg:text-[2.6rem] text-white font-bold mb-11'>Контакты</p>
        <p className='text-white text-[1.3rem] max-w-[17.5em] font-[500] mb-14'>Доставляем в течение 60 минут! Вы можете оплатить заказ на сайте либо через курьера.
</p>
     
        <div className='flex flex-col lg:flex-row lg:w-full lg:justify-evenly'>
            <div className='flex flex-col justify-center items-center mb-20'>
                <FaPhoneVolume className='text-white text-[3rem]  -rotate-45 mb-11' />
                <p className='text-[1.5rem] text-white font-semibold tracking-tight mb-4'>Контакты</p>
                <p className='text-white'>+374 99 999 999</p>
                <p className='text-white'>hello@company.com</p>
            </div>
            <div className='flex flex-col justify-center items-center mb-20'>
                <IoLocationOutline className='text-white text-[3rem] mb-11' />
                <p className='text-[1.5rem] text-white font-semibold tracking-tight mb-4'>Адрес</p>
                <p className='text-white'>Ереван, улица Баграня</p>
            </div>
            <div className='flex flex-col justify-center items-center mb-20'>
                <FaClock className='text-white text-[3rem] mb-11'/>
                <p className='text-[1.5rem] text-white font-semibold tracking-tight mb-4'>Время работы</p>
                <p className='text-white'>24/7</p>
            </div>
            

        </div>
    </div>
  )
}

export default Contact