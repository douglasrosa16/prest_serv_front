import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Importar as tabelas

import Dashboard from '../Pages/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Dashboard}/>
        </Switch>
    )
};