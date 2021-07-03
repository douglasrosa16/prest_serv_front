import { api } from '../api';
//Cadastrar o Prestador de Serviço
async function createServiceProvider(userId){
  
  const provider = await api.post(`/provider/${userId}`, {
    userId: userId
  });
  
  return provider;
}

export { createServiceProvider }