import { api } from '../api';

//Cadastrar Usuario
async function createUser({user}){
  
  const {name, email, lastname, about, password, permission} = user;
  console.log(user);
  const userId = await api.post('users',{
    name: name,
    email: email,
    lastname: lastname,
    about: about,
    password: password,
    permission: permission
  });
 return userId;
}

//Cadastrar Endereco
async function endUser({address}, userId) {
  const {cep, numero, rua, cidade, pais, estado} = {address};
  const addressId = await api.post(`users/${userId}/addresses`,{
      cep: cep,
      numero: numero,
      rua: rua,
      cidade: cidade,
      pais: pais,
      estado: estado
    }
  );
  return addressId;
}

export { createUser, endUser }

