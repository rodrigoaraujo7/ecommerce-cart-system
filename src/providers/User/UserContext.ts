import { Dispatch, SetStateAction, createContext } from 'react'

import { User } from '../../types/user'

export type UserContextType = {
  user: User | null,
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | null>(null)

export default UserContext