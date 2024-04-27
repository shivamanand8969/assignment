import React from 'react'

const CountryCard = ({img,name}) => {
  return (
    <div className='w-[153px] h-[183px] p-[15px] rounded-[10px] bg-white flex flex-col gap-3'>
        <img src={img}/>
       <p className='text-[16px] font-bold  text-center text-[#194a81] '>{name}</p>  
    </div>
  )
}

export default CountryCard