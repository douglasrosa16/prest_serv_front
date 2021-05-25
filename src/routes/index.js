import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Importar as tabelas

import Dashboard from '../Pages/Dashboard';
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/cadastrar" component={Cadastro}/>
            <Route path="/login" component={Login}/>
        </Switch>
    )
};