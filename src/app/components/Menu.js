"use client"
import React,{useState, useEffect} from 'react'

const menuList = [
    {
        id:1,
        rollType: 'Суши',
        rollInfo: [
            {
                id: 1,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 2,
                rollName: 'Kabayaki ролл',
                rollWeight: '410 грамм',
                rollReceipt: 'Рис, Нори, Авокадо, Огурец, Креветка, Угорь, Спайси соус, Унаги соус',
                rollPrice: '4500 драм'
            },
            {
                id: 3,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 4,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 5,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 6,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            }
        ]
    },
    {
        id:2,
        rollType: 'Классические роллы',
        rollInfo: [
            {
                id: 1,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 2,
                rollName: 'Kabayaki ролл',
                rollWeight: '410 грамм',
                rollReceipt: 'Рис, Нори, Авокадо, Огурец, Креветка, Угорь, Спайси соус, Унаги соус',
                rollPrice: '4500 драм'
            },
            {
                id: 3,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 4,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 5,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 6,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            }
        ]
    },
    {
        id:3,
        rollType: 'Запеченные роллы',
        rollInfo: [
            {
                id: 1,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 2,
                rollName: 'Kabayaki ролл',
                rollWeight: '410 грамм',
                rollReceipt: 'Рис, Нори, Авокадо, Огурец, Креветка, Угорь, Спайси соус, Унаги соус',
                rollPrice: '4500 драм'
            },
            {
                id: 3,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 4,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 5,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 6,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            }
        ]
    },
    {
        id:4,
        rollType: 'Авторское меню',
        rollInfo: [
            {
                id: 1,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 2,
                rollName: 'Kabayaki ролл',
                rollWeight: '410 грамм',
                rollReceipt: 'Рис, Нори, Авокадо, Огурец, Креветка, Угорь, Спайси соус, Унаги соус',
                rollPrice: '4500 драм'
            },
            {
                id: 3,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 4,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 5,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            },
            {
                id: 6,
                rollName: 'Фила - Эби ролл',
                rollWeight: '370 грамм',
                rollReceipt: 'Рис, Нори, Огурец, Тигровая Креветка, Лосось, Сыр Cremetta',
                rollPrice: '3200 драм'
            }
        ]
    }
]


const Menu = () => {
    const [menu, setMenu] = useState(menuList)
    const [selectedMenu, setSelectedMenu] = useState('Классические роллы')
    
    const filteredMenu = menu.filter(item => {
        return item.rollType === selectedMenu
    })
    const innerArray = filteredMenu[0].rollInfo
    console.log(innerArray)

  return (
    <div className='flex flex-col justify-center mb-[5em] items-center'>
        <h3 className='text-[#2d2b2b] text-[2rem] font-[700] mb-11'>Меню</h3>
        <div className='flex w-full mb-11'>
            <ul className='flex w-full justify-between'>
                {menuList.map(item => {
                    return (
                        <li className={`font-[500] cursor-pointer p-2 ${item.rollType === selectedMenu ? 'bg-[#9306061d]' : ''}`}>{item.rollType}</li>
                    )
                })}
            </ul>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-4'>
            {innerArray.map(item => {
                console.log('mapped item', item)
                return (
                    <div className='flex flex-col border-[2px] justify-center items-center border-[black] py-4 px-11 rounded-lg'>
                        <div className='h-[204px] w-[255px] rounded-md border mb-8 border-black'></div>
                        <div className='flex justify-between text-[.8rem] font-[500] mb-3 w-full text-black'>
                            <p>{item.rollName}</p>
                            <p>{item.rollWeight}</p>    
                        </div>
                        <div className='text-[.8rem] mb-6 font-[500]'>
                            {item.rollReceipt}
                        </div>
                        <div className='text-[.95rem] mb-6 self-start font-[600]'>
                            {item.rollPrice}
                        </div>
                        <button className='w-[190px] h-[50px] rounded-3xl text-white bg-red-700'>Заказать</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Menu