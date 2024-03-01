import React from 'react'
import { MdCopyright } from "react-icons/md";
import { FaFacebook,FaLinkedin,FaInstagram,FaTwitterSquare  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' flex justify-between px-6 h-[100px]'>
    <div className='copyright flex items-center gap-2 '>
      <MdCopyright className='text-xl'/>
      2024-25 Homeservice.com. All rights are reserved.
    </div>
    <div className='socialicon flex gap-3 items-center text-2xl'>
    <FaFacebook className='cursor-pointer hover:text-3xl'/>
    <FaInstagram className='cursor-pointer hover:text-3xl'/>
    <FaLinkedin className='cursor-pointer hover:text-3xl'/>
    <FaTwitterSquare className='cursor-pointer hover:text-3xl'/>
    </div>
    
    </div>
  )
}

export default Footer