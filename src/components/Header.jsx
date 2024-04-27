import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='bg-white pt-7 lg:flex lg:items-center  justify-center'>
            <div className='lg:flex flex-col lg:w-[50%] mx-auto'>
                <div className='px-[10px] py-[5px] lg:py-[15px]'>
                    <div className='bg-[#f5f5f5] items-center gap-2  flex rounded-[10px] text-[30px] text-[#194a81] px-2 lg:py-3 lg:border-l-[5px] border-[#194a81]'>
                        <div className='w-[40px] h-[40px] text-[34px] font-bold'>
                            <FaSearch />
                        </div>
                        <h1 className='text-[30px] font-semibold '> Search Your Dream Jobs Here!</h1>
                    </div>
                </div>
                <div className='flex flex-col gap-1 lg:gap-4 items-center  mt-[30px] lg:flex-wrap lg:w-[100%]'>
                    <div className='w-[90%] flex flex-col lg:flex-row items-center lg:w-[100%] lg:justify-around'>
                        <input type='text' placeholder='Search Job by Title' className='border-[2px] w-[90%] lg:w-[49%] outline-none h-[36px] pl-3 border-[#194a813b] text-[17px] rounded-[20px] text-[#194a81]' />

                    <select className='border-[2px] mt-3 lg:mt-0 w-[90%] lg:w-[49%] h-[36px] px-3 border-[#194a813b] outline-none text-[17px] rounded-[20px]  text-[#194a81]'>
                        <option className='text-[#194a81]'>Select Something</option>
                    </select>
                    </div>
                    <div className='w-[90%]  flex flex-col lg:flex-row items-center lg:w-[100%] lg:justify-around'>
                    <select className='border-[2px] mt-3 lg:mt-0 w-[90%] lg:w-[49%] h-[36px] px-3 border-[#194a813b] outline-none text-[17px] rounded-[20px]  text-[#194a81]'>
                        <option className='text-[#194a81]'>Select Something</option>
                    </select>
                    <button className="border-[2px] w-[90%] lg:w-[49%] mt-3 lg:mt-0 h-[36px] px-3 outline-none  text-[21px] rounded-[17px] text-white bg-[#194a81]">Search</button>
                
                    </div>
                      
                    </div>
            </div>
            <div className='w-[95%] lg:w-[35%] mx-auto h-[380px] rounded-[20px] my-[30px] flex flex-col items-center justify-center gap-4  singupform'>
                 <div className='bg-white text-[40px] text-[#0e497e] rounded-full flex items-center justify-center w-[60px] h-[60px]'><FaUser /></div>
                 <p className='text-white text-[20px] '>Login</p>
                 <div className='flex w-[90%] '>
                   <select className='w-[20%] font-bold text-[23px] h-[56px] rounded-tl-[12px] rounded-bl-[12px] border-[1px] border-[#ced4da] outline-none'>
                    <option>+91</option>
                    <option>0</option>
                    </select>                        
                    <input type='text' placeholder='Phone No...' className='pl-[13px] w-[80%] text-[23px] h-[56px] rounded-tr-[12px] rounded-br-[12px] border-[1px] border-[#ced4da] outline-none'/>
                </div>
                <div className='flex justify-between w-[90%]'>
                      <button className='text-[23px] text-[#194b80] font-semibold rounded-[16px] py-[2px] px-[10px] bg-white'>OTP</button>
                      <button className='text-[23px] text-[#194b80] font-semibold rounded-[16px] py-[2px] px-[10px] bg-white'>Password</button>   
                </div>      
                <a className="text-[23px] font-semibold text-white " href="https://overseas.ai/loginregister">Sign Up / Create Profile</a>        
            </div>
        </div>
    )
}

export default Header