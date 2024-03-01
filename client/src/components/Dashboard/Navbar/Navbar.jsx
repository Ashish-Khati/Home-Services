import React from 'react'
// import logo from '../../../assets/servicelogo.png'
import logo from '../../../assets/logo-dark-1.png'
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=' p-5 flex justify-between sticky top-0 z-100 shadow-xl rounded-sm'>
    <div className='logo flex-1 '>
      <img src={logo} alt="" className='  bg-white px-2 py-1 rounded-md cursor-pointer'/>
    </div>
    <div className=' flex justify-evenly w-[20%] items-center cursor-pointer '>
      <IoSearch className='text-2xl'/>
      <RxDashboard className='text-2xl'/>
      <div className='notification flex items-center gap-1 relative'>
      <FaRegBell className='text-2xl'/>
      <span className='absolute bg-red-700 rounded-full w-[20px] h-[20px] left-4 -top-4 text-sm text-center text-white'>1</span>
      </div>
      <div className='user flex items-center  gap-3'>
        <FaUser className='text-2xl'/>
        <span>Admin</span>
      </div>
      <CiSettings className='text-2xl'/>
    </div>
    </div>
  )
}

export default Navbar