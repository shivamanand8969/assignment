import React from 'react'
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div className='bg-white pt-7'>
              <div>
              <div className='  px-[10px] py-[5px]'>
                <div className='bg-[#f5f5f5] items-center gap-2  flex rounded-[10px] text-[30px] text-[#194a81] px-2'>
                    <div className='w-[40px] h-[40px] text-[34px] font-bold'>
                        <FaSearch />
                    </div>
                    <h1 className='text-[30px] font-semibold '> Search Your Dream Jobs Here!</h1>
                </div>
            </div>
             <div>
                <input type='text' placeholder='Search Job by Title' className='border-[2px] w-[90%] h-[36px] pl-3 border-[#194a813b] text-[21px] rounded-[20px] text-gray-500'/>

                <select className='border-[2px] w-[90%] h-[36px] px-3 border-[#194a813b] text-[21px] rounded-[20px] text-gray-500'>
                    <option>Select Something</option>
                </select>
                <select className='border-[2px] w-[90%] h-[36px] px-3 border-[#194a813b] text-[21px] rounded-[20px] text-gray-500'>
                    <option>Select Something</option>
                </select>

             </div>
              </div>

            <div>
              
            </div>
        </div>
    )
}

export default Header