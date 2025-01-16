import React, { useContext } from 'react'
import {Routes, Route } from 'react-router-dom'
import Start from "./pages/start"
import Home from './home'
import UserLogin from './pages/userLogin'
import Userregister from './pages/userRegister'
import CaptainRegister from './pages/captainRegister'
import CaptainLogin from './pages/captainLogin'
import UserProtectedWrapper from './pages/userProtectedWrapper'
import UserLogout from './pages/userLogout'



const App = () => {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path="/home" element={<UserProtectedWrapper>
             <Home/> 
          </UserProtectedWrapper>}></Route>
          <Route path='users/logout' element={<UserProtectedWrapper>
              <UserLogout/>
            </UserProtectedWrapper>}></Route>
        <Route path='/userlogin' element={<UserLogin/>} />  
        <Route path='/userregister' element={<Userregister/>} />
        <Route path='/captainlogin' element={<CaptainLogin/>} />
        <Route path='/captainregister' element={<CaptainRegister/>} />
      </Routes>
    </div>
  )
}

export default App
