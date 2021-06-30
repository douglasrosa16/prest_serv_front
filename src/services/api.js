import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333'
});

const User = () => {
  async function CadastroUser(){
    await api.post();
  }

  function CadastroEnd(id){

  }

}

