import React from 'react'

const About = () => {
  return (
    <div className='flex gap-24 justify-between mb-[5em]'>
        <div className='w-[508px] basis-[50%] h-[428px] bg-slate-500'></div>
        <div className='basis-[50%] px-4'>
            <h3 className='text-[36px] mb-11 font-[700] text-black'>О Нас</h3>
            <p className='max-w-[28em] leading-8 '>Doshi Sushi был основан в январе 2023 года и стал
                самым популярным рестораном японской кухни 
                уже через 3 месяцa. 
                <br />
                <br />
                Наши суши и роллы приготовлены из лучших 
                и свежайших морепродуктов. Концепция Doshi Sushi
                позволяет сохранять приемлемые цены 
                при высочайшем, премиум качестве, в отличие 
                от ресторанов высокой ценовой категории.</p>
        </div>
        
    </div>
  )
}

export default About