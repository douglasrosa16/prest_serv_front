import { Switch, Route, BrowserRouter, Redirect, Router} from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';

import { AuthProvider } from '../Context/AuthContext';
import { isAuthenticated } from '../services/verifyAuth';

function PrivateRoute({component: Component, ...rest}){
    return (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )}
    />
    )
}

export default function Routes({children}) {   

    return (
        <BrowserRouter>
            <AuthProvider>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/cadastrar" component={Cadastro}/>    
                <Route path="/login" component={Login}/>                         
                <PrivateRoute path="/providers" component={() => <h1>Prestadores de Serviços</h1>} />                
            </Switch>    
            </AuthProvider>
        </BrowserRouter>
    )
};