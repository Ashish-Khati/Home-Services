import React from 'react'
import { useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import CategoryTable from '../../../components/Dashboard/Tables/CategoryTable/CategoryTable';
import './Product.css'
const Product = () => {
  const [open, setOpen]=useState(false);
  const [add, setAdd]=useState(false);
  
  return (
    <div className='grid gap-4 grid-cols-1 p-6 '>
    <div className='flex justify-between mb-4'>
    <h1 className='text-4xl'>Category</h1>
    <div className='flex justify-between  gap-8 items-center'>
      <FaFilter onClick={() => setOpen(!open)}  className='cursor-pointer text-4xl p-2 rounded-md bg-[#e60073]'/>
      <MdAdd   className='cursor-pointer text-4xl bg-[#e60073] p-2 rounded-md'/>
    </div>
    </div>
   {
    open && ( <div className=''>
    <div className='flex  justify-evenly border  border-black p-6 mt-6 rounded-md'>
      <input type="text" name="" id="" placeholder='Category' className='bg-red-100 rounded-md text-gray-600 px-2  outline-none border border-black' />
      <input type="text" name="" id="" placeholder='Subcategory' className='bg-red-100 rounded-md text-gray-600 px-2  outline-none border border-black' />
      <input type="text" name="" id="" placeholder='Date' className='bg-red-100 rounded-md text-gray-600 px-2  outline-none border border-black' />
      <button className='border border-black px-6 py-1 rounded-md bg-[#e60073]'>Search</button>
    </div>
  </div>)
   }
      <div className='border border-red-200  rounded-md overflow-auto w-full h-[450px]'>
       <div className='p-4 tablecontainer'>
       <CategoryTable/>
       </div>
      </div>
    </div>
  )
}

export default Product