import React, { useContext } from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/userLogin'
import Userregister from './pages/userregister'
import CaptainRegister from './pages/captainRegister'
import CaptainLogin from './pages/captainLogin'
import { userDataContext } from './context/userContext'

const App = () => {

     const userData =  useContext(userDataContext)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        <Route path='/userregister' element={<Userregister/>} />
        <Route path='/captainlogin' element={<CaptainLogin/>} />
        <Route path='/captainregister' element={<CaptainRegister/>} />
      </Routes>
    </div>
  )
}

export default App
