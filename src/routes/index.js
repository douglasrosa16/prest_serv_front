import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import { useContext } from 'react';

import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import HomeCadastro from '../Pages/HomeCadastro/index';
import CadastroProvider from '../Pages/CadastroProvider/index';
import CadastroConsumer from '../Pages/CadastroConsumer/index';

import { AuthProvider } from '../Context/AuthContext';
import { isAuthenticated } from '../services/verifyAuth';

function PrivateRoute({component: Component, ...rest}){
    return (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />
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
                <Route path="/pre-cadastro" exact component={HomeCadastro} />                
                <Route path="/cadastrar-consumidor" exact component={CadastroConsumer}/>    
                <Route path="/cadastrar-prestador" exact component={CadastroProvider}/>    
                <Route path="/login" exact component={Login}/>
                <Route path="/signout" exact component={() => <h1>Voce saiu</h1>}/>                
                <PrivateRoute path="/providers" component={() => <h1>Prestadores de Serviços </h1>} />
                <PrivateRoute path="/perfil/consumer" component={() => <h1>Consumidor </h1>} />
                <PrivateRoute path="/perfil/provider" component={() => <h1>Consumidor </h1>} />                
            </Switch>    
            </AuthProvider>
        </BrowserRouter>
    )
};