import React,{useContext,useState} from 'react'
import UserContext from './UserContext'
function UserContextProvider({children}) {
    const [car,setCar]=useState([{}]);
  return (
    <div>
      <UserContext.Provider value={{car,setCar}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider
