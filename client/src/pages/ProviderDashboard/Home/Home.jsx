import React from 'react'
import RecentBooking from '../../../components/Dashboard/Tables/RecentBookingTable/RecentBooking'
import { homeData } from '../../data'
import './Home.css'
const Home = () => {
  return (
    <div className='grid gap-4 grid-cols-4 p-6 -z-20'>
      {
        homeData.map((data)=>{
          return(
            <>
            <div className=" border border-red-200 p-4 rounded-lg h-[150px] flex justify-center" key={data.id}>
            <div className="flex justify-between items-center" >
              <div>
                <div className="text-6xl rounded-md bg-pink-600  w-[80px] h-[80px] flex items-center justify-center">{data.icon}</div>
              </div>
              <div>
                <div className="px-10 text-center text-xl font-bold ">{data.count}</div>
                <div className="px-10 text-center text-xl">{data.title}</div>
              </div>
            </div>
      </div>
            </>
          )
        })
      }
      <div className="col-span-2 border border-red-200 p-4 rounded-md h-[400px] ">
        <h1 className='font-black text-2xl pb-2'>Recent Bookings</h1>
       
      <div className="overflow-auto w-full h-[320px] tablecontainer">
      <RecentBooking/>
      </div>
     
        </div>
      <div className="col-span-2 border border-red-200 p-4 rounded-md h-[400px]">
      <h1 className='font-black text-2xl pb-2'>Payments</h1>
      <div className="overflow-auto w-full h-[320px] tablecontainer">
      <RecentBooking/>
      </div>
      </div>
    </div>
  )
}

export default Home