import Image from "next/image"

const Promotions = () => {
  return (
    <div className='min-h-screen  flex flex-col justify-center items-center  bg-[#f5f5f5] '>
        <p className="text-black text-[2rem] mb-8 xl:text-[3.9rem] font-[700]">Акции</p>
        <p className="text-black mb-11 text-[1.4rem] text-center self-center max-w-[600px]  px-6 lg:max-w-[22em]">Постоянные и сезонные акции со скидками от 7 до 50 %. Следите за обновлениями!</p>
      <div className="flex flex-col  lg:flex-row lg:justify-between lg:gap-6 lg:items-start  items-center max-w-[600px] 
      lg:max-w-[1180px] text-center px-6 justify-center">
        <Image 
        className="w-full mb-9"
        src={'/promo.jpeg'} width={540} height={359} alt="promotion"/>
        <div className="flex flex-col">
        <p className="font-bold text-black text-[1.8rem] self-start lg:text-[2.1rem] text-left mb-8">Скидка 10 % при заказе от 5000 драмов!</p>
        <p className="text-black text-left self-start text-[1.1rem] tracking-tight">Скидка распространяется на все меню и действует с 9.00 до 20.00 каждый день.</p>
        </div>
      </div>
    </div>
  )
}

export default Promotions