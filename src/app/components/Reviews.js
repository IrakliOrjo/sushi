import React from 'react'

const reviews = [
    {
        id:1,
        name: 'Александра М.',
        comment: 'Суши на высшем уровне, еще нигде не ела таких! Заказываю только здесь.'
    },
    {
        id:2,
        name: 'Дмитрий С..',
        comment: 'Суши на высшем уровне, еще нигде не ела таких! Заказываю только здесь.'
    },
    {
        id:3,
        name: 'Алёна Н..',
        comment: 'Суши на высшем уровне, еще нигде не ела таких! Заказываю только здесь.'
    }
]

const Reviews = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mb-11'>
        
        {reviews.map(item => {
            return (
                <div className='flex flex-col text-white p-11
                min-h-[378px] min-w-[321px] rounded-2xl bg-slate-500 '>
                    <p className='text-[1.5rem] font-bold mb-6'>{item.name}</p>
                    <p className='text-[.9rem] max-w-[14em]'>{item.comment}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Reviews