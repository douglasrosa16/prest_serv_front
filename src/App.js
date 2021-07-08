import './App.css';
import React from 'react';

import Routes from './routes'

import Header from './components/Header';
import { AuthProvider } from './Context/AuthContext';
function App() {

    return (
        <>    
        <AuthProvider> 
            <Header />            
            <Routes />
        </AuthProvider>
        </>
    )
  
}

export default App;

