import { useState, createContext } from 'react'



export const UserContext = createContext()



export default function AuthContext({ children }) {

    const [authUser, setAuthUser] = useState(null)

    const value = {authUser, setAuthUser}

   

    return (

        <UserContext.Provider value={value}>{children}</UserContext.Provider>

    )

}