import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { MdFindInPage } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { FaSignInAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
      const [isSideBarTrue,setIsSideBarTrue]=useState(false);

    return (
        <>
            <nav className='h-[70px]  flex items-center justify-between px-5 shadow-lg '>
                <div className='border-2 border-[#194a81] rounded-[20px] w-[200px] h-[50px] flex items-center justify-center'>
                    <img src='https://overseas.ai/frontend/logo/logo_en.gif' className='mx-w-[236px] h-[36px] ' />
                </div>
                <div className='bg-[#194a81] px-2 py-1 lg:hidden text-white rounded-md   text-[35px]' onClick={()=>setIsSideBarTrue(!isSideBarTrue)}>  <GiHamburgerMenu /> </div>
                <div className='lg:block hidden'>
                    <ul className='lg:flex items-baseline gap-2 hidden'>
                        <li className='w-[152px] h-[38px] rounded-[20px] border-[#194a81] border-b-[2px] hover:bg-[#194a81] hover:text-white  '><a href='#' className='flex w-[152px] h-[33px] items-center justify-center gap-1' >
                            <div className='text-[23px] '><FaHome /></div>
                            <p className='text-[21px] font-semibold  white'>Home</p>
                            </a>
                        </li>
                        <li className='w-[152px] h-[38px] rounded-[20px] border-[#194a81] border-b-[2px] hover:bg-[#194a81] hover:text-white '><a href='#' className='flex w-[152px] h-[33px] items-center justify-center gap-1 ' >
                            <div className='text-[23px] '><GrUserWorker /></div>
                            <p className='text-[21px] font-semibold  white'>Work Forse</p>
                            </a>
                        </li>
                        <li className='w-[152px] h-[38px] rounded-[20px] border-[#194a81] border-b-[2px] hover:bg-[#194a81] hover:text-white '><a href='#' className='flex w-[152px] h-[33px] items-center justify-center gap-1' >
                            <div className='text-[23px] '><MdFindInPage /></div>
                            <p className='text-[21px] font-semibold  white'>Find Jobs</p>
                            </a>
                        </li>
                        <li className='w-[152px] h-[38px] rounded-[20px] border-[#194a81] border-b-[2px]  hover:bg-[#194a81] hover:text-white'><a href='#' className='flex w-[152px] h-[33px] items-center justify-center gap-1 ' >
                            <div className='text-[23px] '><GoVideo /></div>
                            <p className='text-[21px] font-semibold  white'>Video Zone</p>
                            </a>
                        </li>
                        <li className='w-[180px] h-[45px] rounded-[20px] border-[#194a81] bg-[#194a81] text-white hover:bg-white hover:text-[#194a81] flex border-b-[2px]  '><a href='#' className='flex w-[170px] h-[45px] items-center justify-center gap-2 ' >
                            <div className='text-[23px] border-[2px] border-green-500  h-[35px] w-[35px] flex items-center justify-center rounded-full'><FaSignInAlt /></div>
                            <p className='text-[21px] font-semibold  white'>Sign Up</p>
                            </a>
                        </li>
                        <li className='flex hover:cursor-pointer self-center w-[152px] h-[38px] items-center justify-center gap-2'>
                                <img className='h-[50px] w-[70px] ' src='https://overseas.ai/newfrontend/image/lang_en.png' />
                                <p className='text-[19px] font-bold text-[#194a81]'>English</p>
                        </li>
                         
                    </ul>
                </div>

            </nav>
            <div className={`w-[70vw] md:w-[60vw] h-[90vh] float-right bg-slate-200 flex items-center justify-center flex-col gap-4 absolute right-0 addanothercss ${!isSideBarTrue ? "anothercss" :""}`}>
            <ul className='flex flex-col gap-5 items-center  '>
                        <li className='w-[152px] h-[38px] rounded-[20px] border-[#194a81] border-b-[2px] hover:bg-[#194a81] hover:text-white  '><a href='#' className='flex w-[152px] h-[33px] items-center justify-center gap-1' >
                            <div className='text-[23px] '><FaHome /></div>
                            <p className='text-[21px] font-semibold  white'>Home</p>
                            </a>
                        </li>
                        <li className='w-[152px] h-[38px] rounded-[20px] border-[#194a81] border-b-[2px] hover:bg-[#194a81] hover:text-white '><a href='#' className='flex w-[152px] h-[33px] items-center justify-center gap-1 ' >
                            <div className='text-[23px] '><GrUserWorker /></div>
                            <p className='text-[21px] font-semibold  white'>Work Forse</p>
                            </a>
                        </li>
                        <li className='w-[152px] h-[38px] rounded-[20px] border-[#194a81] border-b-[2px] hover:bg-[#194a81] hover:text-white '><a href='#' className='flex w-[152px] h-[33px] items-center justify-center gap-1' >
                            <div className='text-[23px] '><MdFindInPage /></div>
                            <p className='text-[21px] font-semibold  white'>Find Jobs</p>
                            </a>
                        </li>
                        <li className='w-[152px] h-[38px] rounded-[20px] border-[#194a81] border-b-[2px]  hover:bg-[#194a81] hover:text-white'><a href='#' className='flex w-[152px] h-[33px] items-center justify-center gap-1 ' >
                            <div className='text-[23px] '><GoVideo /></div>
                            <p className='text-[21px] font-semibold  white'>Video Zone</p>
                            </a>
                        </li>
                        <li className='w-[180px] h-[45px] rounded-[20px] border-[#194a81] bg-[#194a81] text-white hover:bg-white hover:text-[#194a81] flex border-b-[2px]  '><a href='#' className='flex w-[170px] h-[45px] items-center justify-center gap-2 ' >
                            <div className='text-[23px] border-[2px] border-green-500  h-[35px] w-[35px] flex items-center justify-center rounded-full'><FaSignInAlt /></div>
                            <p className='text-[21px] font-semibold  white'>Sign Up</p>
                            </a>
                        </li>
                        <li className='flex hover:cursor-pointer self-center w-[152px] h-[38px] items-center justify-center gap-2'>
                                <img className='h-[50px] w-[70px] ' src='https://overseas.ai/newfrontend/image/lang_en.png' />
                                <p className='text-[19px] font-bold text-[#194a81]'>English</p>
                        </li>
                         
                    </ul>

            </div>
        </>
    )
};

export default Navbar;