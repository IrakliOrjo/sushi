import React from 'react'
import Image from 'next/image'

const doshiInfo = [
    {
        id: 1,
        photo: '/unagi.png',
        name:'Унаги ролл',
        text: `Угорь, огурец, кунжут, рис, 6 шт.`,
        price: '199',

    },
    {
        id: 2,
        photo: '/hamachi.png',
        name:'Яки хамачи',
        text: `Угорь, огурец, кунжут, рис, 6 шт.`,
        price: '199',
    },
    {
        id: 3,
        photo: '/okinava.png',
        name:'Окинава ролл',
        text: `Угорь, огурец, кунжут, рис, 6 шт.`,
        price: '199',
    },
    {
        id: 4,
        photo: '/ugo.png',
        name:'Чиз угорь',
        text: `Угорь, огурец, кунжут, рис, 6 шт.`,
        price: '199',
    },
    {
        id: 5,
        photo: '/kinu.png',
        name:'Кинкуки',
        text: `Угорь, огурец, кунжут, рис, 6 шт.`,
        price: '199',
    },
    {
        id: 6,
        photo: '/phila.png',
        name:'Филадельфия',
        text: `Угорь, огурец, кунжут, рис, 6 шт.`,
        price: '199',
    },
]

const Doshi = () => {
  return (
    <div className='flex text-center px-2 items-center min-h-screen bg-[#f5f5f5] flex-col'>
        <h2 className='font-[600] text-black mx-auto text-[2rem] md:text-[4rem] mt-[6em] md:mt-[2.5em] mb-11'>Роллы</h2>
        <p className='text-[1.4rem] text-black font-[500] self-center max-w-[25em] mb-11'>Только свежие продукты и оригинальные рецепты от японских поваров</p>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:max-w-[100em]'>
         {doshiInfo.map(item => {
            return (
                <div key={item.id} className='flex mb-14 flex-col h-[23.5em] md:min-w-[25em] lg:min-w-[20em] xl:w-[23em]
                   text-center justify-center items-center'>
                    <Image className='w-full max-w-[360px]  mb-2' src={item.photo} width={200} height={250} />
                    <p className='font-[500]  max-w-[11.4em]'>{item.name}</p>
                    <p className='text-[0.8rem] '>{item.text}</p>
                    <p className='text-[0.8rem] mb-4'>${item.price}</p>
                    <button className='bg-red-500 hover:bg-red-800 duration-300 text-white font-[500] rounded-md h-[50px] md:w-[8em] w-[13em]'>Заказать</button>
                </div>
            )
         })}
        </div>
    </div>
  )
}

export default Doshi