import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
// import  TbCategoryFilled  from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
const Menu = () => {
  return (
    <div className='menu '>
      <div className="items pt-6">
        <Link to='/providerdashboard' className='flex items-center gap-2 px-4 py-2 hover:bg-[#384256] rounded-md'>
        <IoIosHome/>
        <span>Dashboard</span>
        </Link>
        <Link to='customers' className='flex items-center gap-2 px-4 py-2 hover:bg-[#384256] rounded-md'>
        <MdCategory/>
     
        <span>Categories</span>
        </Link>
        {/* <Link to='service' className='flex items-center gap-2 px-4 py-2 hover:bg-[#384256] rounded-md'>
        <MdCategory/>
        <span>Subcategories</span>
        </Link> */}
        <Link to='services' className='flex items-center gap-2 px-4 py-2 hover:bg-[#384256] rounded-md'>
        <MdHomeRepairService/>
        <span>Services</span>
        </Link>
        <Link to='bookinglist' className='flex items-center gap-2 px-4 py-2 hover:bg-[#384256] rounded-md'>
        <TbBrandBooking/>
        <span>Booking List</span>
        </Link>
        <Link to='payments' className='flex items-center gap-2 px-4 py-2 hover:bg-[#384256] rounded-md'>
        <MdPayment/>
        <span>Payments</span>
        </Link>
        <Link to='rating' className='flex items-center gap-2 px-4 py-2 hover:bg-[#384256] rounded-md'>
        <FaStar/>
        <span>Rating</span>
        </Link>
        <Link to='serviceproviders' className='flex items-center gap-2 px-4 py-2 hover:bg-[#384256] rounded-md'>
        <FaUserTie/>
        <span>Service Providers</span>
        </Link>
        <Link to='setting' className='flex items-center gap-2 px-4 py-2 hover:bg-[#384256] rounded-md'>
        <IoMdSettings/>
        <span>Settings</span>
        </Link>
      </div>
    </div>
  )
}

export default Menu