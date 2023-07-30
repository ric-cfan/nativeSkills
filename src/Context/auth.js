import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState } from 'react';
import { api } from '../services/api';
export const AuthContext = createContext(); 


export const AuthProvider = ({children}) => { 
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
 

  const login = (login, senha) => { 
    setIsLoading(true)
    return api.post("/login", {
      login,
      senha
    })
    .then(res => {
      setUser((JSON.stringify(JSON.parse(res.config.data).login)))
      setToken(res.headers.authorization)
      AsyncStorage.setItem("user", user)
      AsyncStorage.setItem("token", token)
      AsyncStorage.setItem("username", user)
      
      api.defaults.headers.Authorization = `Bearer ${token}`;
   
    })
    .catch(e => { 
      console.log(e)

    })
  }

  const logout = () => { 
    setToken(null);
    setUser(null);
    setIsLoading(true);
    AsyncStorage.removeItem("token")
    AsyncStorage.removeItem("userID")
    AsyncStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}