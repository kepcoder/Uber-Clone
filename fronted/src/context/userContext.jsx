import React, { createContext , useState} from 'react'
export const userDataContext = createContext()



const UserContext = ({children}) => {

const [ user , setUser] = useState({
    fullName:{
        firstName:'shubham',
        lastName:'singh'
    },
    email:'shubham@gmail.com',
})

  return (
    <div>
      <userDataContext.Provider value={[ user , setUser]}>
            {children}
      </userDataContext.Provider> 
    </div>
  )
}

export default UserContext
