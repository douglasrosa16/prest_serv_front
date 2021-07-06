import { api } from '../api';
//Cadastrar o Prestador de Serviço
function createServiceProvider(userId){
  
  const provider = api.post(`/provider/${userId}`, {
    userId: userId
  });
  
  return provider;
}

export { createServiceProvider }