import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';
import Login from './Pages/Login';
import HomeCadastro from './Pages/HomeCadastro';

describe("validação de botões", () => {
  it('verifica se possui um botao de login', () => {
    render(<Login />);
    const buttonLogin = screen.getByTestId('btn-login');
    expect(buttonLogin).toBeInTheDocument();
  });

  it('deveria ter um botão de consumidor', () => {
    render(<Router><HomeCadastro /></Router>);    
    const buttonLogin = screen.getByTestId("btn-cadastrar-consumidor");
    expect(buttonLogin).toBeInTheDocument();
  });    

  it('deveria ter um botão de prestador de serviço', () => {
    render(<Router><HomeCadastro /></Router>);    
    const buttonLogin = screen.getByTestId("btn-cadastrar-prestador");
    expect(buttonLogin).toBeInTheDocument();
  });    
})
