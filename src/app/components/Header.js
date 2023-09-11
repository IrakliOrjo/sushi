import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-between mb-[6em]'>
        <div>LOGO</div>
        <ul className='flex gap-x-6 text-[1.3rem] font-[600]'>
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
  )
}

export default Header