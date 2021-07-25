import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';

import Header from '../components/Header'

import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import HomeCadastro from '../Pages/HomeCadastro';
import CadastroProvider from '../Pages/CadastroProvider';
import CadastroConsumer from '../Pages/CadastroConsumer';
import CadastroService from '../Pages/CadastroService';
import Providers from '../Pages/Providers';
import Perfil from '../Pages/Perfil';
import Services from '../Pages/Services';
import Error from '../Pages/Error'

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
                <Header />
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/pre-cadastro" exact component={HomeCadastro} />                
                    <Route path="/cadastrar-consumidor" exact component={CadastroConsumer}/>    
                    <Route path="/cadastrar-prestador" exact component={CadastroProvider}/>    
                    <Route path="/login" exact component={Login}/>
                    <Route path="/signout" exact component={() => <h1>Voce saiu</h1>}/>                
                    <PrivateRoute path="/providers" exact component={Providers} />
                    <PrivateRoute path="/services/:id" exact component={Services}/>
                    <PrivateRoute path="/perfil" exact component={Perfil} />  
                    <PrivateRoute path="/cadastrar-service" exact component={CadastroService}/>

                    <Route path="*" component={Error} />
                </Switch>    
            </AuthProvider>
        </BrowserRouter>
    )
};