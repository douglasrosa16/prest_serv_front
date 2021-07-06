import { api } from '../api';
//Cadastrar o Consumidor
function createServiceConsumer(userId){
  
  const consumer = api.post(`/consumer/${userId}`, {
    userId: userId
  });
  
  return consumer;
}

export { createServiceConsumer }