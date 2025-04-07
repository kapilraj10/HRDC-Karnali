"use client"

import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    setUser({ email })
  }

  const signup = (formData) => {
    setUser({ email: formData.email })
  }

  const logout = () => {
    setUser(null)
  }

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
