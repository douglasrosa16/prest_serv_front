<<<<<<< HEAD
import React from 'react';


export default function Cadastro() {
    return (
        <>
            <h1>Pagina Cadastro</h1>
        </>
    )
=======
import React, { useState } from 'react';

import api from '../../services/api';

import Form from '../../components/Form';

export default function Cadastro(){
  const [teste, setTeste] = useState();

  return (
    <>
      <Form></Form>
    </>
  )
>>>>>>> 496bcc690ec8e37effa03dfd094e32476da6a901
};