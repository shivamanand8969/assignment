import React from 'react'

const CardForCrawsel = ({img}) => {
  return (
    <div className='ml-1'>
          <img src={img} className='w-[220px] h-[148px] rounded-[10px] border-[1px] border-[#007bff]'/>
         <div className='bg-white px-[16px] py-[8px] rounded-br-[10px] rounded-bl-[10px] w-[220px]'>
         <h3 className='text-[18px] font-semibold text-[#194a81] '>Need Painter in ...</h3>
          <div className='flex gap-2  '>
            <img src="https://overseas.ai/storage/uploads/occupationImage/2/2-sm.png" className='w-[30px] h-[30px] border-[#194a81] border-[1px] rounded-[5px]'/>
            <p className='text-[16px] text-[#007bff] '> Air Condition ...</p>
          </div>
          <p className='text-[16px]  text-black'>No Of Vacancy : 35</p>
          <p className='text-[16px] font-bold font-sans text-[#000] '>Wages : 1200 SAR </p>
        </div>          
        <div>

        </div>
    </div>
  )
}

export default CardForCrawsel