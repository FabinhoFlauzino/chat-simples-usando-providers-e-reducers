import { createContext, ReactNode, useContext, useState } from "react";

type UserContext = {
  user: string
  setUser: (newUser: string) => void
}

export const userContext = createContext<UserContext | null>(null)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("")

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  )
}

export const useUser = () => useContext(userContext)