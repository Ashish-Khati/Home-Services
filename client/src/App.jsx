import React from 'react'
import {  BookingPage, Home,Login,ProviderLogin,ProviderRegister,Register,SignUp } from './pages'
import {  ConfirmPage, CustomerBookingDetail, ServiceProvider} from './components'
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import SearchPage from './pages/SearchPage/SearchPage'
import Navbar from './components/Dashboard/Navbar/Navbar'
import Menu from './components/Dashboard/Menu/Menu'
import Footer from './components/Dashboard/Footer/Footer'
import HomeDashboard from './pages/ProviderDashboard/Home/Home'
import Product from './pages/ProviderDashboard/Product/Product'
import Customers from './pages/ProviderDashboard/Customers/Customers'
const Layout=()=>{
  return(
    <div className='main bg-[#2a3447] '>
      <Navbar/>
      <div className="container flex h-[83vh]  max-w-[100vw]">
        <div className="menuContainer flex-2  px-[5px]  py-[20px] ">
          <Menu/>
        </div>
        <div className="contentContainer flex-1 px-[5px] py-[20px] ">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
const App = () => {
 return(
  <div className='border border-red-900   h-full max-w-auto relative'>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/user' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/provider/login' element={<ProviderLogin/>}/>
    <Route path='/signup' element={<Register/>}/>
    <Route path='/careers' element={<ProviderRegister/>}/>
    <Route path='/search' element={<SearchPage/>}/>
    <Route path='/service' element={<ServiceProvider/>}/>
    <Route path='/booking' element={<BookingPage/>}/>
    <Route path='/custbookingdetail' element={<CustomerBookingDetail/>}/>
    <Route path='/confirm' element={<ConfirmPage/>}/>
    {/* ######################### */}
    <Route path='/providerdashboard' element={<Layout/>}>
    <Route path='/providerdashboard' element={<HomeDashboard/>}/>
    <Route path='customers' element={<Customers/>}/>
    <Route path='services' element={<Product/>}/>
    </Route>
    {/* ######################## */}
    {/* <Route path='/admindashboard' element={<AdminDashboard/>}/> */}
  </Routes>
  </BrowserRouter>
  {/* <Home/> */}
  </div>
 )
}

export default App


