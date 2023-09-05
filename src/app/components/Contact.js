import React from 'react'

import Image from 'next/image'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-[7em]'>
        <p className='text-[1.5rem] font-bold mb-6'>Контакты</p>
        <Image src={'/image1.png'} width={1036} height={430} 
        className='mb-8' />
        <div className='grid grid-cols-4 gap-8'>
            <div className='flex flex-col'>
                <p className='text-[1.2rem] font-semibold mb-4'>Адрес</p>
                <p>Ереван, ул. Бахрамян</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-[1.2rem] font-semibold mb-4'>Часы работы</p>
                <p>Пн-Вс с 00:00 до 00:00</p>
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