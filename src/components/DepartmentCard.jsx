import React from 'react'

const DepartmentCard = ({img,name}) => {
  return (
    <div className='w-[153px] h-[230px] p-[15px] rounded-[10px] bg-white flex flex-col gap-3'>
    <img src={img} className='rounded-full w-[125px] h-[125px] p-[4px] border-[1px] border-[#ededed] '/>
   <p className='text-[16px] font-bold  text-center text-[#194a81] '>{name}</p>  
</div>
  )
}

export default DepartmentCard