import React from 'react';
import { Link } from 'react-router-dom';

export default function Cadastro() {  
  
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Pronto para começar?</span>
            <span className="block">Escolha uma opção</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">              
              <Link
                data-testid="btn-cadastrar-consumidor"
                to="/cadastrar-consumidor"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Consumidor 
              </Link>
            </div>
            <div className="ml-3 inline-flex">              
              <Link
                data-testid="btn-cadastrar-prestador"
                to="cadastrar-prestador"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                Prestador de Serviço
              </Link>
            </div>            
          </div>
        </div>
      </div>
    </>
  )
};