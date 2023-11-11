import { ReactNode, useContext, useState } from "react"
import UserContext from "./UserContext"

import { User } from '../../types/user'
import { UserContextType } from "./UserContext"

type UserProviderProps = {
  children: ReactNode
}

// creating a hook
export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUserContext deve ser usado dentro de UserContextProvider');
  }

  return context
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const contextValue: UserContextType = { user, setUser };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider