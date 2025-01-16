import React, { Children, useContext, useEffect } from 'react'
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'


const UserProtectedWrapper = ({children}) => {

    const navigate = useNavigate()
     
    const [user] = useContext(userDataContext)
     const userToken = localStorage.getItem("Token")

     useEffect(() => {
        if (!userToken) {
          navigate('/userlogin')
        }
      }, [userToken, navigate])

  return (<>
   {children}
  </>)
}

export default UserProtectedWrapper
