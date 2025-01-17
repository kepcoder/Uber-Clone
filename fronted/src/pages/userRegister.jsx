import React, { useContext, useState,} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { FaUser } from "react-icons/fa";
import axios from "axios"
import { userDataContext } from '../context/userContext';

const Userregister = () => {

  
  const[firstName , setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const[email , setEmail] = useState('')
  const[password , setPassword] = useState('')
  const [errorMessage , setErrorMessage] = useState('')
  const[created , setCreated] = useState('')
  const[userData , setUserData] = useState('')
  
  const [user, setUser] = useContext(userDataContext)
  const navigate = useNavigate()


const handleSubmit = async (e)=>{
 e.preventDefault()
   const newUser = {
      fullname:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
   }


try{
   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
   const data = response.data
   setUser(data.user)
   setCreated('Account Created successfully')
   setTimeout(() => {
    navigate('/home');
  }, 1500);
}catch(err){
  console.log(err)
    if(err.response && err.response.data.errors){
      setErrorMessage(err.response.data.errors.map(val => val.msg))
    }else if (err.response && err.response.data.message){
      setErrorMessage(err.response.data.message)
    }
}



 setFirstName('') 
 setLastName('')
 setEmail('')
 setPassword('')
}


  return (
    <div className='w-full h-screen p-6'>
        <div className='navbar w-full p-'>
          <h4 className='font-[uberMoveBold] text-3xl flex justify-between'>Uber <FaUser /></h4>
        </div>
        <p className='text-red-500'>{errorMessage}</p>
        <p className='text-green-600'>{created}</p>
        <h2 className="font-[uber1] text-center text-xl font-bold mt-3">Become A travller On Uber 🫡</h2>
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
                value="Create Account"
                className='font-[uberMoveBold] mt-4 border-2 rounded-lg bg-black p-3 text-2xl text-white ' />
           </form>
          </div>
           <div className='newAccount pt-3'>
             <h2 className='text-center font-[uberMoveTextregular]'>Already Registered <Link to="/userlogin" className='text-blue-600'>Login</Link></h2>
           </div>
        </div>
        <div className="captain">
           <p className='text-sm pt-2'>This Site is protected by reCAPTCHA and the <u><a href="">google privacy policy</a></u>and <u><a href="">Terms of Services Apply</a></u></p>
        </div>

    </div>
  )
  
}

export default Userregister
