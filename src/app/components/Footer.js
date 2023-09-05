import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-[3em]'>
        <div className='w-[1036px] border-[1px] mb-8 border-black'></div>
        <div className='flex justify-between w-full px-20'>
            <p className=''>ЛОГО</p>
        <ul className='flex self-end  gap-x-6 font-[600]'>
            <li>
                <Link href='#about'>О Нас</Link>
            </li>
            <li>
                <Link href='#menu' >Меню</Link>
            </li>
            <li>
                <Link href='#delivery' >Доставка</Link>
            </li>
            <li>
                <Link href='#reviews' >Отзывы</Link>
            </li>
            <li>
                <Link href='#contact' >Контакты</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Footer