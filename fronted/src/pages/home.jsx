import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col bg-[#2532db] justify-between'>
        <div className="upperPart p-5 w-full h-[70%] flex flex-col justify-between aligns-center">
          <h4 className='text-white text-3xl font-[uber2] flex justify-center pt-4'>Uber</h4>
          <img src="https://tb-static.uber.com/prod/vs-unified-marketplace-web/uber-mask.webp" alt="" />
          <h2 className='text-white text-3xl font-bold tracking-wider font-[uber2] flex justify-center pt-4'>Move with Saftey</h2>
        </div>
        <div className="lowerpart p-6 h-[30%] w-full flex items-end justify-center">
          <div className="started flex w-full items-center justify-center">
            <Link to="/userlogin"><button className='font-[uberMoveTextregular] w-full p-3 flex items-center justify-center gap-3 bg-black rounded-xl text-white text-3xl'> Get Started <FaArrowAltCircleRight className='text-3xl pt-[7px]'/></button></Link> 
          </div>
        </div>
    </div>
  )
}

export default Home;
