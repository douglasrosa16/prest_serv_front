import { api } from '../api';
//Cadastrar o Serviço
function createServices(service_provider_id){
  
  const service = api.post(`/services/${service_provider_id}`, {
    service_provider_id: service_provider_id,  
    photo: "Foto", 
    title: "serviço geral", 
    about: "Serviços", 
    value: 50
  });
  
  return service;
}

export { createServices }