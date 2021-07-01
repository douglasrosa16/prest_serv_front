import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';


function isAuthenticated(){
  const token = localStorage.getItem('@Dev:token');
  const user = localStorage.getItem('@Dev:user');
  
  const validate = validateAuth(token);
  return validate;
}

function validateAuth(token){
  //Validação do Token JWT
  if(!token){
    console.log('Token não existe');
    return false;
  }
  try {
    const tokenDecodificado = verify(token, authConfig.jwt.secret);
    //Aqui retorna: iat  exp  sub

    const { sub } = tokenDecodificado; //Sub = Subject está o ID do usuário que foi passado no Authenticate

    const user = {
      id: sub
    };    
    return true;
  } catch (err){
      console.log('Token JWT Invalido');
      return false;
  }
}

export { isAuthenticated }
