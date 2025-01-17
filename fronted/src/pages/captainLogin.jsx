import React, {useContext, useState } from 'react'
import {Link} from "react-router-dom"
import { RiMotorbikeFill } from "react-icons/ri";
import { captainDataContext } from '../context/captainContext';

const CaptainLogin = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const {captain, setCaptain} =  useContext(captainDataContext)
    console.log(captain)

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(email)
    console.log(password)
    setEmail('')
    setPassword('')
  }
  
  
    return (
      <div className='w-full h-screen p-6'>
          <div className='navbar w-full p-'>
            <h4 className='font-[uberMoveBold] text-3xl flex justify-between'>Uber <RiMotorbikeFill /></h4>
          </div>
          <div className="w-full main flex flex-col justify-between mt-10">
            <div className="form">
             <form action="" className='flex flex-col gap-3' onSubmit={(e)=>{handleSubmit(e)}}>
                <label className=" font-bold text-xl font-[uberMoveTextMedium] " htmlFor="email">What's Your Email</label>
                <input type="email" name='email' required placeholder='email@example.com'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)} 
                   className=' border-2 rounded-lg bg-gray-200 p-2 text-lg'
                   />
                <label className=" font-bold text-xl font-[uberMoveTextMedium]" htmlFor="password">Enter password</label>
                <input type="text" name='password' required placeholder='password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)} 
                  className=' border-2 rounded-lg bg-gray-200 p-2 text-lg '
                />
                <input type="submit"
                  className='font-[uberMoveBold] mt-4 border-2 rounded-lg bg-black p-3 text-2xl text-white ' />
             </form>
            </div>
             <div className='newAccount pt-3'>
               <h2 className='text-center font-[uberMoveTextregular]'>Become a Rider? <Link to="/captainregister" className='text-blue-600'> Create New Account</Link></h2>
             </div>
          </div>
          <div className="captain">
            <h2 className='font-[uberMoveBold] mt-24 text-center rounded-lg text-white bg-orange-500 p-3 text-2xl'><Link to="/userlogin" >Sign in as User</Link></h2>
          </div>
  
      </div>
    )
}

export default CaptainLogin
