import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Footer, Header } from '../../components'
// import data from '../data'
const ProviderRegister = () => {
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phone:"",
    state:"",
    city:"",
    profession:""
  })
  const [error,setError]=useState("")
  const navigate=useNavigate();
  const onChangeHandle=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const url="http://localhost:8080/api/users";
      const{data:res}=await axios.post(url,data);
      navigate('/providerlogin');
      console.log(res.message);
    }
    catch(err){
      if(err.response && err.response.status>=400 && err.response.status<=500){
        setError(err.response.data.message)
      }
    }
  }
  // const [display,setDisplay]=useState(true);
  // const showCustomer=()=>{
  //     setDisplay(true);
  // }
  // const showProvider=()=>{
  //     setDisplay(false)
  // }

  return (
    <>
    <Header/>
    <div className="w-full  min-h-[100vh]  md:pt-0 pb-20 pt-20 md:pb-0 my-10  flex items-center justify-center">
      <div className=" md:w-[900px] md:min-h-[100px] flex shadow-md  drop-shadow-xl  rounded-lg ">
        <div className="hidden md:flex md:flex-2 md:flex-col px-3 md:items-center md:justify-center bg-[#3bb19b] rounded-l-lg ">
          <h1 className='m-6 text-white text-5xl self-center text-center'>Welcome Back</h1>
          <Link to='/provider/login'>
            <button className='border-none outline-none p-2 bg-white rounded-xl w-36  text-black font-bold'>Sign In</button>
          </Link>
        </div>
        <div className="flex-1  flex  flex-col justify-center bg-white rounded-t-lg rounded-b-lg">
          <form action="" onSubmit={handleSubmit} className="flex  flex-col items-center mx-10">
            <h1 className='md:mb-6 my-4 text-black md:text-5xl text-3xl'>Create Account</h1>
            <div>
           
           </div>
           <div className='flex'>
           < input className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]'  type="text" 
            required
            onChange={onChangeHandle}
            name="firstName" value={data.firstName} placeholder='First Name'/>
            < input className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]'type="text"
              required
              onChange={onChangeHandle}
            name="lastName" value={data.lastName} placeholder='Last Name'/>
           </div>
            <div className="flex">
            < input className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]'  type="email" 
              required
              onChange={onChangeHandle}
            name="email" value={data.email} placeholder='Email'/>
            < input className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="password" name="password" 
              required
              onChange={onChangeHandle}
            value={data.password} placeholder='Password'/>
            </div>
            <div className="flex">
            < input className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="number" name="phone" 
              required
              onChange={onChangeHandle}
            value={data.phone} placeholder='Phone number'/>
            < input className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="text" name="state" 
              required
              onChange={onChangeHandle}
            value={data.state} placeholder='State'/>
            </div>
            <div className="flex">
            < input className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="text" name="city" 
              required
              onChange={onChangeHandle}
            value={data.city} placeholder='City'/>

{/* className="leading-5 py-3 px-2 border-none outline-none rounded-md  my-3 border-black" */}
        <select className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' name="category" id="profession" placeholder='Profession' >
                <optgroup label="Automotive">
                  <option value="cab service"> Cab Services </option>
                  <option value="cab caring"> Car  care  and Servicing</option>
                </optgroup>
                <optgroup label="Child Care">
                  <option value="chile care"> Child care</option>
                  <option value="pediatrician">Pediatrician</option>
                </optgroup>
                <optgroup label="Cleaning">
                  <option value="home cleaning">Home cleaning</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="laundry">Laundry</option>
                </optgroup>
                <optgroup label="General labor">
                  <option value="carpainter">Carpainter</option>
                  <option value="electrician">Electrician</option>
                  <option value="plumber">Plumber</option>
                </optgroup>
                <optgroup label="Health and Fitness">
                  <option value="yogs">Yoga</option>
                  <option value="electrician">Electrician</option>
                  <option value="plumber">Plumber</option>
                </optgroup>
              </select>

            {/* < input className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="text" name="profession" 
              required
              onChange={onChangeHandle}
            value={data.profession} placeholder='Profession'/> */}
            </div>
            <input type="file" id="img" name="img" accept="image/*" className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' />

           


            {error && <div className='w-96 p-6 text-sm  text-center  rounded-sm text-white bg-[#f34646] mx-2'>{error}</div>}
            <button type="submit" className=' border-none outline-none md:p-2 p-1.5 bg-[#3bb19b] decoration-white mx-2 md:m-3 my-3 rounded-xl md:w-36 w-28 text-3 font-semibold'>Sign Up</button>
            <Link to='/provider/login'className=' md:hidden outline-none px-10 border-none bg-white rounded-xl w-36  text-blue-400 font-bold mb-4'>Sign in</Link>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProviderRegister