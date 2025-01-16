import React, { createContext, useState } from 'react'

export const captainDataContext = createContext()



const CaptainContext = ({Children}) => {

    const [captain , setCaptain] = useState('')

    
  return<>
     <captainDataContext.Provider value={[captain, setCaptain]}>
              {Children}
     </captainDataContext.Provider>
  </>
}

export default CaptainContext;
