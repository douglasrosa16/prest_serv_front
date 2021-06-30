import React, { createContext } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const signIn = async({email, password}) => {
    const response = await api.post('sessions', {
      email: email,
      password: password
    });

    console.log(response.data)
  } 

  return (
    <AuthContext.Provider value={{ teste: 'Douglas', signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}

