import React from 'react'
import axios from 'axios'
import { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const UserLogout = ({Children}) => {
    
    const navigate = useNavigate()
    const userToken = localStorage.getItem('Token')

useEffect(()=>{

     axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
        headers:{
            Authorization: `Bearer ${userToken}`
        }
    }).then((response)=>{
          if(response.status === 200){  
            localStorage.removeItem('Token')
                navigate('/userlogin')
          }
    },[userToken, navigate])

})

  return(<>

  {Children}
  
  </>)
}

export default UserLogout
