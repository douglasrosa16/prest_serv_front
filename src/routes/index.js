import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';

import { AuthProvider } from '../Context/AuthContext';

export default function Routes() {   

    return (
        <BrowserRouter>
            <AuthProvider>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/cadastrar" component={Cadastro}/>    
                <Route path="/login" component={Login}/>            
            </Switch>    
            </AuthProvider>
        </BrowserRouter>
    )
};