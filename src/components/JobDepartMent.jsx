import React from 'react'
import { IoBagRemoveSharp } from "react-icons/io5";
import { country } from '../mocData/countrydata';
import DepartmentCard from './DepartmentCard';
import { departMentdata } from '../mocData/departMentData';

const JobDepartMent = () => {
  return (
    <div className='flex flex-col gap-5 pt-12 lg:w-[80%] lg:mx-auto'>
    <div className='px-[10px] py-[5px] lg:py-[15px]'>
        <div className='bg-white items-center gap-2 max-w-[380px] flex rounded-[10px] text-[20px] font-mono text-[#194a81] px-2 lg:py-3 lg:border-l-[5px] border-[#194a81]'>
            <div className='w-[40px] h-[40px] text-[34px] font-bold'>
                <IoBagRemoveSharp />
            </div>
            <h1 className='text-[25px]  font-semibold '>Jobs by Department</h1>
        </div>
     </div>
    
    <div className='flex flex-wrap  justify-around gap-y-[19px]'>
         {
            departMentdata.map((vlaue)=>{
               return <DepartmentCard img={vlaue.img} name={vlaue.name}/>
            })
         }
    </div>

</div>
  )
}

export default JobDepartMent