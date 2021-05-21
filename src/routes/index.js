import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Importar as tabelas

import Dashboard from '../Pages/Dashboard';
import Cadastro from '../Pages/Cadastro';
<<<<<<< HEAD

=======
import Login from '../Pages/Login';
>>>>>>> 496bcc690ec8e37effa03dfd094e32476da6a901

export default function Routes() {
    return (
        <Switch>
<<<<<<< HEAD
            <Route path="/" exact component={Dashboard}/>            
            <Route path="/cadastro" component={Cadastro}/>            
=======
            <Route path="/" exact component={Dashboard}/>
            <Route path="/cadastrar" component={Cadastro}/>
            <Route path="/login" component={Login}/>
>>>>>>> 496bcc690ec8e37effa03dfd094e32476da6a901
        </Switch>
    )
};