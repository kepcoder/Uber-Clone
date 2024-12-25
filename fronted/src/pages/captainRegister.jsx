import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { RiMotorbikeFill } from "react-icons/ri";


function CaptainRegister() {

  const[firstName , setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const[email , setEmail] = useState('')
  const[password , setPassword] = useState('')
  const[userData , setUserData] = useState('')
  
  
  const handleSubmit = (e)=>{
   e.preventDefault()
   setUserData({
    fullName:{
      firstName:firstName,
      lastName:lastName,
    },
    email:email,
    password:password
   })
  
   setFirstName('')
   setLastName('')
   setEmail('')
   setPassword('')
  }


  return (
    <div className='w-full h-screen p-8'>
        <div className='navbar w-full'>
          <h4 className='font-[uberMoveBold] text-3xl flex justify-between'>Uber<RiMotorbikeFill /></h4>
        </div>
        <h2 className="font-[uber1] text-center text-xl font-bold mt-3">Become A Rider On Uber 🫡</h2>
        <div className="w-full main flex flex-col justify-between mt-10">
          <div className="form">
           <form action="" className='flex flex-col gap-3' onSubmit={(e)=>handleSubmit(e)}>
             <label className=" font-bold text-xl font-[uberMoveTextMedium] " htmlFor="email">What's Your Name?</label>
             <div className="name flex gap-2 w-full">
              <input type="text" name='firstname' required placeholder='john'
                 value={firstName}
                 onChange={(e)=>{setFirstName(e.target.value)}}
                 className='w-[60%] border-2 rounded-lg bg-gray-200 p-2 text-lg'
              />
              <input type="text" name='lastname' required placeholder='doe'
                 value={lastName}
                 onChange={(e)=>{setLastName(e.target.value)}}
                 className='w-[40%] border-2 rounded-lg bg-gray-200 p-2 text-lg'
              />
             </div>
              <label className=" font-bold text-xl font-[uberMoveTextMedium] " htmlFor="email">What's Your Email</label>
              <input type="email" name='email' required placeholder='email@example.com'
                 value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}
                 className=' border-2 rounded-lg bg-gray-200 p-2 text-lg'
              />
              <label className=" font-bold text-xl font-[uberMoveTextMedium]" htmlFor="password">Enter password</label>
              <input type="text" name='password' required placeholder='password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className=' border-2 rounded-lg bg-gray-200 p-2 text-lg '
              />
              <input type="submit"
                className='font-[uberMoveBold] mt-4 border-2 rounded-lg bg-black p-3 text-2xl text-white ' />
           </form>
          </div>
           <div className='newAccount pt-3'>
             <h2 className='text-center font-[uberMoveTextregular]'>Already Registered <Link to="/captainlogin" className='text-blue-600'>Login</Link></h2>
           </div>
        </div>
        <div className="captain">
           <p className='text-sm pt-8'>This Site is protected by reCAPTCHA and the <u><a href="">google privacy policy</a></u>and <u><a href="">Terms of Services Apply</a></u></p>
        </div>

    </div>
  )
}

export default CaptainRegister
