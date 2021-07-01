import React, { createContext, useState } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  //Dessa forma vai buscar os dados do localStorage e colocar como dados iniciais
  //Para caso reiniciar a página ou fechar
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Dev:token');
    const user = localStorage.getItem('@Dev:user');
    
    if(token && user){
      return { token, user: JSON.parse(user)};
    }
    return {};    
  });

  async function signIn ({email, password}){    
    const response = await api.post('sessions', {
      email: email,
      password: password
    });

    const { token, user } = response.data;
    console.log(response.data)
    localStorage.setItem('@Dev:token', token);
    localStorage.setItem('@Dev:user', JSON.stringify(user));

    setData({token, user});
  } 

  function signOut(){    
    localStorage.removeItem('@Dev:token');
    localStorage.removeItem('@Dev:user');

    setData({});
  }
  
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}

