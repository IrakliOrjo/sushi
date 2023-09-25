import React from 'react'

const delivery = [
  {
    id: 1,
    info: 'Доставим ваш заказ в любое время суток'
  },
  {
    id: 2,
    info: 'Самовывоз из нашего ближайшего заведения'
  },
  {
    id: 3,
    info: 'Безналичная оплата через сайт'
  },
  {
    id: 4,
    info: 'Оплата наличными при получении'
  }
]

const Delivery = () => {
  return (
    <div className='flex flex-col my-[8em]'>
        <h2 className='font-[700] text-black mx-auto mb-8 text-[2.5rem]'>Доставка и оплата</h2>
        <div className='flex  p-8 lg:p-20 lg:justify-center  lg:items-center'>
          <div className='flex flex-col md:ml-24
          justify-center items-center  lg:flex-row  xl:ml-20 '>
         {delivery.map((item,index) => {
            return (
                <div key={item.id} className='flex items-center  justify-center'>
                  <div className={`relative  flex flex-col h-[8.2em] lg:w-[11.2em]
                   ${index === 3 ? 'lg:w-[9.2em] ' : 'xl:w-[18.2em]'} `}>
                    <div className='absolute flex items-center justify-center text-white font-[500]
                     top-0 z-10 bg-zinc-800 w-[40px] h-[40px] rounded-full
                     '>{index + 1}</div>
                    {index > 2 ? '' : <div className='absolute top-5 z-0 w-[2px] h-[140px] lg:w-[220px] xl:w-[315px] lg:h-[2px] bg-slate-300 '></div>}
                    <div className='absolute text-black text-[.9rem] xl:text-[1rem]  w-[25em] lg:w-[11em] xl:w-[15em] font-[500] top-0 left-14 lg:left-0 lg:top-14'>{item.info}</div>
                    </div>
                    
                </div>
            )
         })}
         </div>
        </div>
    </div>
  )
}

export default Delivery