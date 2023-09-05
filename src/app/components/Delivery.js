import React from 'react'

const delivery = [
  {
    id: 1,
    info: 'Доставим ваш заказ в любое время суток'
  },
  {
    id: 2,
    info: 'Доставим ваш заказ в любое время суток'
  },
  {
    id: 3,
    info: 'Доставим ваш заказ в любое время суток'
  },
  {
    id: 4,
    info: 'Доставим ваш заказ в любое время суток'
  }
]

const Delivery = () => {
  return (
    <div className='flex flex-col mb-[10em]'>
        <h2 className='font-[700] text-[#2d2b2b] mx-auto text-[2rem] mb-14'>Доставка и оплата</h2>
        <div className='flex'>
         {delivery.map(item => {
            return (
                <div key={item.id} className='flex flex-col mx-auto text-center justify-center items-center'>
                    <div className='bg-gray-400 w-[50px] h-[50px] rounded-full mb-6'></div>
                    <p className='font-[500] max-w-[11.4em]'>{item.info}</p>
                </div>
            )
         })}
        </div>
    </div>
  )
}

export default Delivery