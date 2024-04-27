import React from 'react'
import Crawsel from './Crawsel'
import { IoBagRemoveSharp } from "react-icons/io5";

const JobsOfweak = () => {
    return (
        <div className='flex flex-col gap-5 pt-12 lg:w-[80%] lg:mx-auto'>
            <div className='px-[10px] py-[5px] lg:py-[15px]'>
                <div className='bg-white items-center gap-2 max-w-[380px] flex rounded-[10px] text-[20px] font-mono text-[#194a81] px-2 lg:py-3 lg:border-l-[5px] border-[#194a81]'>
                    <div className='w-[40px] h-[40px] text-[34px] font-bold'>
                        <IoBagRemoveSharp />
                    </div>
                    <h1 className='text-[25px] font-semibold '>Jobs by Region</h1>
                </div>
            </div>
            
                       
          <Crawsel/>
        </div>
    )
}

export default JobsOfweak