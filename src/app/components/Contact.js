import React from 'react'

import Image from 'next/image'

import {FaPhoneVolume} from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io'

const Contact = () => {
  return (
    <div className='bg-zinc-900 p-11 text-center flex flex-col justify-center items-center mb-[7em]'>
        <p className='text-[2rem] text-white font-bold mb-6'>Контакты</p>
        <p className='text-white text-[1.3rem] max-w-[17.5em] font-[500] mb-9'>Доставляем в течение 60 минут! Вы можете оплатить заказ на сайте либо через курьера.
</p>
     
        <div className='flex flex-col'>
            <div className='flex flex-col justify-center items-center mb-20'>
                <FaPhoneVolume className='text-white text-[3rem]  -rotate-45 mb-11' />
                <p className='text-[1.5rem] text-white font-semibold tracking-tight mb-4'>Контакты</p>
                <p className='text-white'>+374 99 999 999</p>
                <p className='text-white'>hello@company.com</p>
            </div>
            <div className='flex flex-col'>
                <IoLocationOutline />
                <p className='text-[1.2rem] font-semibold mb-4 text-white'>Адрес</p>
                <p className='text-white'>Ереван, улица Баграня</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-[1.2rem] font-semibold mb-4'>Телефон</p>
                <p>+ 7 (812) 999-00-09</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-[1.2rem] font-semibold mb-4'>E-mail</p>
                <p>doshisushi@mail.ru</p>
            </div>

        </div>
    </div>
  )
}

export default Contact