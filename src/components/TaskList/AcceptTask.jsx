import React from 'react'

const AcceptTask = ({data}) => {
    // console.log(data)
  return (
    <div className='flex-shrink-0 h-full w-[280px] p-5 bg-red-400 rounded-xl'>

        <div className='flex justify-between items-center '>
            <h3 className='bg-red-600 text-s px-3 py-1 rounded'>
                {data.category}
            </h3>
            <h4 className='text-sm'>
                {data.date}
            </h4>
        </div>
        <h2 className='mt-3 text-xl font-2xl'>
            {data.title}
        </h2>
        
        <p className='text-sm mt-1'>
           {data.description}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>
                Mark as Completed
            </button>
             <button className='bg-red-500 py-1 px-2 text-sm'>
                Mark as failed
            </button>
        </div>
     </div>
  )
}

export default AcceptTask