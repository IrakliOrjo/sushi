import React from 'react'

const doshiInfo = [
    {
        id: 1,
        photo: '',
        text: `Повара с опытом от 10 лет`,
    },
    {
        id: 2,
        photo: '',
        text: `Свежие морепродукты`,
    },
    {
        id: 3,
        photo: '',
        text: `Круглосуточная доставка`,
    },
    {
        id: 4,
        photo: '',
        text: `Бесплатная доставка от 5000 драм`,
    },
]

const Doshi = () => {
  return (
    <div className='flex flex-col mb-14'>
        <h2 className='font-[700] text-[#2d2b2b] mx-auto text-[2rem] mb-14'>Doshi Sushi - это</h2>
        <div className='flex'>
         {doshiInfo.map(item => {
            return (
                <div key={item.id} className='flex flex-col mx-auto text-center justify-center items-center'>
                    <div className='bg-gray-400 w-[50px] h-[50px] rounded-full mb-6'></div>
                    <p className='font-[500] max-w-[11.4em]'>{item.text}</p>
                </div>
            )
         })}
        </div>
    </div>
  )
}

export default Doshi