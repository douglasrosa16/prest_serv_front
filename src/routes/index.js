import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Importar as tabelas

import Dashboard from '../Pages/Dashboard';
import Cadastro from '../Pages/Cadastro';


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>            
            <Route path="/cadastro" component={Cadastro}/>            
        </Switch>
    )
};