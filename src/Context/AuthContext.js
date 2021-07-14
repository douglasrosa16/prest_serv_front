import React, { createContext, useState } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  //Dessa forma vai buscar os dados do localStorage e colocar como dados iniciais
  //Para caso reiniciar a página ou fechar
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Dev:token');
    var user = localStorage.getItem('@Dev:user');
    if(!user){
      user = {
        name: "",
        about: "",
        permission: ""
      }
    }    
    if(token && user){
      return { token, user: JSON.parse(user)};
    }
    return {user};    
  });

  async function signIn ({email, password}){    
    const response = await api.post('sessions', {
      email: email,
      password: password
    });

    const { token, user } = response.data;    
    localStorage.setItem('@Dev:token', token);
    localStorage.setItem('@Dev:user', JSON.stringify(user));

    setData({token, user});
  } 

  function signOut(){    
    localStorage.removeItem('@Dev:token');
    localStorage.removeItem('@Dev:user');
    var user = {
      name: "",
      about: "",
      permission: ""
    };    
    setData({user});
  }
  
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}

