import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';

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

export default function Routes() {   

    return (
        <BrowserRouter>
            <AuthProvider>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/cadastrar" component={Cadastro}/>    
                <Route path="/login" component={Login}/>         
                <PrivateRoute path="/app" component={() => <h1>Voce esta logado</h1>} />
            </Switch>    
            </AuthProvider>
        </BrowserRouter>
    )
};